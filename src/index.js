var obj = require("./election-data.json");
//var total_years = 30;//how many years are in our graphic (currently not used)
//console.log(obj);
// Populating the map that saays who won each state in early elections (will update to include electoral vote)

//console.log(obj.length);
// If we are changin
var autoUpdating = false;
var voteData = new Map();
// we are now keeping track of the year as a public variable, so we only update
// The map when the actual year changes
var publicYear = 0;
var map = new Map();
var loserMap = new Map();
var thirdPlaceMap = new Map();
var candidateMap = new Map();
var mapState = 0; // 0 is abbreviations, 1 is electoral vote, 2 is neither
for (var i = 0; i < obj.length; i++) {
    var year = obj[i].year;
    var map2;
    var map3;
    var partyMap;
    var loserMap2;
    if (!map.has(year)) {
        // insert year with votes data
        partyMap = new Map(); //party map is the candidates and their parties
        loserMap2 = new Map();// losermap 2 is a local version of the second place map
        map2 = new Map();// map 2 is a local version of the winner map
        map3 = new Map();// map 3 is a local version of the third place maap
    } else {
        map2 = map.get(year); 
        map3 = thirdPlaceMap.get(year);
        loserMap2 = loserMap.get(year);
        partyMap = candidateMap.get(year);
        partyMap.get(obj[i].party)
    }
    var state = obj[i].state_po;
    // ARE ONLY USING THE STATE_PO, candidate votes, total votes, party, cadidate
    var votes = [obj[i].candidatevotes, obj[i].totalvotes, obj[i].party, obj[i].candidate];
    if (!map2.has(state)) {
        map2.set(state, votes);
    } else if (!loserMap2.has(state)) {
        loserMap2.set(state, votes);
    } else if (!map3.has(state)) {
        map3.set(state, votes);
    }
    map.set(year, map2);
    loserMap.set(year, loserMap2);
    thirdPlaceMap.set(year, map3);
    if(!partyMap.has(obj[i].party)){
        partyMap.set(obj[i].party, {
            name: obj[i].candidate,
            votes: 0
        });
    }
    partyMap.get(obj[i].party).votes += obj[i].candidatevotes;
    candidateMap.set(year, partyMap);
}

// map of json files per year
jsonFiles = new Map();
//jsonFiles.set(1900, require("./json/1900.json"));
jsonFiles.set(1904, require("./json/1904.json"));
jsonFiles.set(1908, require("./json/1908.json"));
jsonFiles.set(1912, require("./json/1912.json"));
jsonFiles.set(1916, require("./json/1916.json"));
jsonFiles.set(1920, require("./json/1920.json"));
jsonFiles.set(1924, require("./json/1924.json"));
jsonFiles.set(1928, require("./json/1928.json"));
jsonFiles.set(1932, require("./json/1932.json"));
jsonFiles.set(1936, require("./json/1936.json"));
jsonFiles.set(1940, require("./json/1940.json"));
jsonFiles.set(1944, require("./json/1944.json"));
jsonFiles.set(1948, require("./json/1948.json"));
jsonFiles.set(1952, require("./json/1952.json"));
jsonFiles.set(1956, require("./json/1956.json"));
jsonFiles.set(1960, require("./json/1960.json"));
jsonFiles.set(1964, require("./json/1964.json"));
jsonFiles.set(1968, require("./json/1968.json"));
jsonFiles.set(1972, require("./json/1972.json"));
jsonFiles.set(1976, require("./json/1976.json"));
jsonFiles.set(1980, require("./json/1980.json"));
jsonFiles.set(1984, require("./json/1984.json"));
jsonFiles.set(1988, require("./json/1988.json"));
jsonFiles.set(1992, require("./json/1992.json"));
jsonFiles.set(1996, require("./json/1996.json"));
jsonFiles.set(2000, require("./json/2000.json"));
jsonFiles.set(2004, require("./json/2004.json"));
jsonFiles.set(2008, require("./json/2008.json"));
jsonFiles.set(2012, require("./json/2012.json"));
// do 2016 map separately
var stateValues = new Map(); // map from year to a map from state to EV value
var stateWinners = new Map();
for (var i = 1904; i < 2016; i += 4) {
    var earlierYear = jsonFiles.get(i);
    var earlyWinners = new Map();
    var earlierMap = new Map();
    var candidates = earlierYear['candidates'];
    Object.keys(candidates).forEach(function (e) {
        earlierMap.set(e, {
        name: candidates[e],
        votes: 0
        });
    });

    // maybe always use electoral too
    

    currYearElectorates = new Map();
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
    "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
    "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
    "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
    "WI", "MO", "AR", "OK", "KS", "LA", "VA"]
        .forEach(function(d){
            var results = earlierYear['votes'][d]['electoral'];
            // currently only recording winner
            var highest = 0;
            var value = 0;
            var winner = 'NULL';// if state doesnt exist yet
            Object.keys(results).forEach(function (e) {
                evotes = results[e];
                value += evotes;
                if (evotes > highest) {
                    highest = evotes;
                    winner = e;
                }
                earlierMap.get(e).votes += evotes;
            })
            earlyWinners[d] = winner;
            currYearElectorates[d] = value;
        });
    //if (i < 1976) {
        candidateMap.set(i, earlierMap);
    //}*/
    stateWinners[i] = earlyWinners;
    stateValues.set(i, currYearElectorates);
}
candidateMap.get(2016).get("republican").name = "Donald J. Trump";
candidateMap.get(2016).get("democrat").name = "Hillary Clinton";
console.log(candidateMap.get(2016));
var timeouts = [];
// 2016 is same as 2012 so don't need to do separately
stateValues.set(2016, stateValues.get(2012));

var textMap = new Map();
var infoDiv = document.getElementById("info");

var bigContainer = document.getElementById("big-container");

function populateTextMap() {
    textMap.set(1976, "<b>1976 Election Recap</b><br>The 1976 United States presidential election was the 48th quadrennial presidential election. It was held on Tuesday, November 2, 1976. Democrat Jimmy Carter of Georgia defeated incumbent Republican President Gerald Ford from Michigan. Carter's win represented the lone Democratic victory in a presidential election held between 1968 and 1992.");
    textMap.set(1980, "<b>1980 Election Recap</b><br>The 1980 United States presidential election was the 49th quadrennial presidential election. It was held on Tuesday, November 4, 1980. Republican nominee Ronald Reagan defeated incumbent Democrat Jimmy Carter. Due to the rise of conservatism following Reagan's victory, some historians consider the election to be a realigning election that marked the start of the Reagan Era.");
    textMap.set(1984, "<b>1984 Election Recap</b><br>The 1984 United States presidential election was the 50th quadrennial presidential election. It was held on Tuesday, November 6, 1984. Incumbent Republican President Ronald Reagan defeated former Vice President Walter Mondale, the Democratic candidate.");
    textMap.set(1988, "<b>1988 Election Recap</b><br>The 1988 United States presidential election was the 51st quadrennial presidential election. It was held on Tuesday, November 8, 1988. Incumbent Vice President George H. W. Bush, the Republican nominee, defeated Democratic Governor Michael Dukakis of Massachusetts. The 1988 election is the only election since 1948 in which either major party won a third straight presidential election.");
    textMap.set(1992, "<b>1992 Election Recap</b><br>The 1992 United States presidential election was the 52nd quadrennial presidential election. It was held on Tuesday, November 3, 1992. Democratic Governor Bill Clinton of Arkansas defeated incumbent Republican President George H. W. Bush, independent businessman Ross Perot of Texas, and a number of minor candidates.");
    textMap.set(1996, "<b>1996 Election Recap</b><br>The 1996 United States presidential election was the 53rd quadrennial presidential election. It was held on Tuesday, November 5, 1996. Incumbent Democratic President Bill Clinton defeated former Senate Majority Leader Bob Dole, the Republican nominee, and Ross Perot, the Reform Party nominee.");
    textMap.set(2000, "<b>2000 Election Recap</b><br>The 2000 United States presidential election was the 54th quadrennial presidential election. It was held on Tuesday, November 7, 2000. Republican candidate George W. Bush, the governor of Texas and eldest son of the 41st president, George H. W. Bush, won the election, defeating Democratic nominee Al Gore, the incumbent vice president. It was the fourth of five presidential elections in which the winning candidate lost the popular vote, and is considered one of the closest elections in US history.");
    textMap.set(2004, "<b>2004 Election Recap</b><br>The 2004 United States presidential election was the 55th quadrennial presidential election, held on Tuesday, November 2, 2004. Incumbent Republican President George W. Bush defeated Democratic nominee John Kerry, a United States Senator from Massachusetts.");
    textMap.set(2008, "<b>2008 Election Recap</b><br>The 2008 United States presidential election was the 56th quadrennial presidential election, held on Tuesday, November 4, 2008. The Democratic ticket of Barack Obama, the junior U.S. Senator from Illinois, and Joe Biden, the senior U.S. Senator from Delaware, defeated the Republican ticket of John McCain, the senior Senator from Arizona, and Sarah Palin, the Governor of Alaska. Obama became the first African American ever to be elected to the presidency as well as being only the third sitting United States Senator elected president, joining Warren G. Harding and John F. Kennedy.");
    textMap.set(2012, "<b>2012 Election Recap</b><br>The 2012 United States presidential election was the 57th quadrennial presidential election, held on Tuesday, November 6, 2012. The Democratic nominee, President Barack Obama, and his running mate, Vice President Joe Biden, were elected to a second term. They defeated the Republican ticket of businessman and former Governor Mitt Romney of Massachusetts and Representative Paul Ryan of Wisconsin.");
    textMap.set(2016, "<b>2016 Election Recap</b><br>The 2016 United States presidential election was the 58th quadrennial presidential election, held on Tuesday, November 8, 2016. The Republican ticket of businessman Donald Trump and Indiana Governor Mike Pence defeated the Democratic ticket of former Secretary of State Hillary Clinton and U.S. Senator from Virginia Tim Kaine, despite losing the popular vote. Trump took office as the 45th president, and Pence as the 48th vice president, on January 20, 2017.");
    textMap.set(1904, "<b>1904 Election Recap</b><br>The 1904 United States presidential election was the 30th quadrennial presidential election, held on Tuesday, November 8, 1904. Incumbent Republican President Theodore Roosevelt defeated the Democratic nominee, Alton B. Parker. Roosevelt's victory made him the first president to win a term in his own right after having ascended to the presidency upon the death of his predecessor, William McKinley.");
    textMap.set(1908, "<b>1908 Election Recap</b><br>The 1908 United States presidential election was the 31st quadrennial presidential election, held on Tuesday, November 3, 1908. Secretary of War and Republican Party nominee William Howard Taft defeated three-time Democratic nominee William Jennings Bryan.");
    textMap.set(1912, "<b>1912 Election Recap</b><br>The 1912 United States presidential election was the 32nd quadrennial presidential election, held on Tuesday, November 5, 1912. Democratic Governor Woodrow Wilson of New Jersey unseated incumbent Republican President William Howard Taft and defeated former President Theodore Roosevelt, who ran as the Progressive Party (Bull Moose) nominee. This was the last presidential election in which one of the top-two finishers did not come from either the Democratic or Republican parties, signifying the primacy of these two parties in modern American politics.");
    textMap.set(1916, "<b>1916 Election Recap</b><br>The 1916 United States presidential election was the 33rd quadrennial presidential election, held on Tuesday, November 7, 1916. Incumbent Democratic President Woodrow Wilson defeated Supreme Court Justice Charles Evans Hughes, the Republican candidate. Wilson was the only sitting Democratic president to win re-election between 1832 and 1936.");
    textMap.set(1920, "<b>1920 Election Recap</b><br>The 1920 United States presidential election was the 34th quadrennial presidential election, held on Tuesday, November 2, 1920. In the first election held after the end of World War I and the ratification of the Nineteenth Amendment, Republican Senator Warren G. Harding of Ohio defeated Democratic Governor James M. Cox of Ohio.");
    textMap.set(1924, "<b>1924 Election Recap</b><br>The 1924 United States presidential election was the 35th quadrennial presidential election, held on Tuesday, November 4, 1924. In a three-way contest, incumbent Republican President Calvin Coolidge won election to a full term.");
    textMap.set(1928, "<b>1928 Election Recap</b><br>The 1928 United States presidential election was the 36th quadrennial presidential election, held on Tuesday, November 6, 1928. Republican Secretary of Commerce Herbert Hoover defeated the Democratic nominee, Governor Al Smith of New York. Hoover was the last Republican to win a presidential election until 1952.");
    textMap.set(1932, "<b>1932 Election Recap</b><br>The 1932 United States presidential election was the 37th quadrennial presidential election, held on Tuesday, November 8, 1932. The election took place against the backdrop of the Great Depression. Incumbent Republican President Herbert Hoover was defeated in a landslide by Democrat Franklin D. Roosevelt, the Governor of New York. The election marked the effective end of the Fourth Party System, which had been dominated by Republicans.");
    textMap.set(1936, "<b>1936 Election Recap</b><br>The 1936 United States presidential election was the 38th quadrennial presidential election, held on Tuesday, November 3, 1936. In the midst of the Great Depression, incumbent Democratic President Franklin D. Roosevelt defeated Republican Governor Alf Landon of Kansas. Roosevelt won the highest share of the popular and electoral vote since the largely uncontested 1820 election. The sweeping victory consolidated the New Deal Coalition in control of the Fifth Party System.");
    textMap.set(1940, "<b>1940 Election Recap</b><br>The 1940 United States presidential election was the 39th quadrennial presidential election. It was held on Tuesday, November 5, 1940. The election was contested in the shadow of World War II in Europe, as the United States was emerging from the Great Depression. Incumbent Democratic President Franklin D. Roosevelt defeated Republican businessman Wendell Willkie to be reelected for an unprecedented third term in office.");
    textMap.set(1944, "<b>1944 Election Recap</b><br>The 1944 United States presidential election was the 40th quadrennial presidential election. It was held on Tuesday, November 7, 1944. The election took place during World War II. Incumbent Democratic President Franklin D. Roosevelt defeated Republican Thomas E. Dewey to win an unprecedented fourth term.");
    textMap.set(1948, "<b>1948 Election Recap</b><br>The 1948 United States presidential election was the 41st quadrennial presidential election. It was held on Tuesday, November 2, 1948. Incumbent President Harry S. Truman, the Democratic nominee, defeated Republican Governor Thomas E. Dewey. Truman's victory is considered to be one of the greatest election upsets in American history.");
    textMap.set(1952, "<b>1952 Election Recap</b><br>The 1952 United States presidential election was the 42nd quadrennial presidential election. It was held on Tuesday, November 4, 1952. Republican Dwight D. Eisenhower won a landslide victory over Democrat Adlai Stevenson, ending a string of Democratic Party wins that stretched back to 1932.");
    textMap.set(1956, "<b>1956 Election Recap</b><br>The 1956 United States presidential election was the 43rd quadrennial presidential election. It was held on Tuesday, November 6, 1956. The popular incumbent President, Republican Dwight D. Eisenhower, successfully ran for re-election. The election was a re-match of 1952, for Eisenhower's opponent in 1956 was Adlai Stevenson, a former Illinois governor whom he had defeated four years earlier.");
    textMap.set(1960, "<b>1960 Election Recap</b><br>The 1960 United States presidential election was the 44th quadrennial presidential election. It was held on Tuesday, November 8, 1960. In a closely contested election, Democrat United States Senator John F. Kennedy defeated incumbent Vice President Richard Nixon, the Republican Party nominee. This was the first election in which fifty states participated and the last in which the District of Columbia did not. It was the first election in which an incumbent president was ineligible to run for a third term because of the term limits established by the 22nd Amendment. It is also the last election where the losing candidate won Ohio.");
    textMap.set(1964, "<b>1964 Election Recap</b><br>The 1964 United States presidential election was the 45th quadrennial presidential election. It was held on Tuesday, November 3, 1964. Incumbent Democratic United States President Lyndon B. Johnson defeated Barry Goldwater, the Republican nominee. With 61.1% of the popular vote, Johnson won the largest share of the popular vote of any candidate since the largely uncontested 1820 election.");
    textMap.set(1968, "<b>1968 Election Recap</b><br>The 1968 United States presidential election was the 46th quadrennial presidential election. It was held on Tuesday, November 5, 1968. The Republican nominee, former Vice President Richard Nixon, defeated the Democratic nominee, incumbent Vice President Hubert Humphrey. Analysts have argued the election of 1968 was a major realigning election as it permanently disrupted the New Deal Coalition that had dominated presidential politics for 36 years.");
    textMap.set(1972, "<b>1972 Election Recap</b><br>The 1972 United States presidential election was the 47th quadrennial presidential election. It was held on Tuesday, November 7, 1972. Incumbent Republican President Richard Nixon from California defeated Democratic U.S. Senator George McGovern of South Dakota. Until the 1984 election, this was the largest margin of victory in the Electoral College for a Republican in a U.S. presidential election.");
}
populateTextMap();

//var title = document.getElementById("title-container");
function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    // d.partyCount == 1 means its before 1976
    if (d.partyCount === 1) {
        return "<h4>STATE DATA NOT AVAILABLE</h4><table>"+
       // "<tr><td> Candidate </td><td>Party</td><td> Electoral Votes </td></tr>"+
       // "<tr><td>" + d.demName + "</td><td>Democrat</td><td>"+(d.demVotes)+"</td><</tr>"+
       // "<tr><td>" + d.repName + "</td><td>Republican</td><td>"+(d.repVotes)+"</td></tr>"+
        "</table>";
    }
    else if (d.partyCount === 2) {
        return "<h4>"+n+"</h4><table>"+
        "<tr><td> Candidate </td><td>Party</td><td> Total Votes </td><td> Pct. </td></tr>"+
        "<tr><td>" + d.demName + "</td><td>Democrat</td><td>"+(d.demVotes)+"</td><td>"+(d.dem)+"</td></tr>"+
        "<tr><td>" + d.repName + "</td><td>Republican</td><td>"+(d.repVotes)+"</td><td>"+(d.rep)+"</td></tr>"+
        "</table>";
    } else if (d.partyCount === 3) {
        return "<h4>"+n+"</h4><table>"+
        "<tr><td> Candidate </td><td>Party</td><td> Total Votes </td><td> Pct. </td></tr>"+
        "<tr><td>" + d.demName + "</td><td>Democrat</td><td>"+(d.demVotes)+"</td><td>"+(d.dem)+"</td></tr>"+
        "<tr><td>" + d.repName + "</td><td>Republican</td><td>"+(d.repVotes)+"</td><td>"+(d.rep)+"</td></tr>"+
        "<tr><td>" + d.otherName + "</td><td>"+(d.thirdPartyOne)+"</td><td>"+(d.thirdPartyVotes)+"</td><td>"+(d.thirdVotes)+"</td></tr>"+
        "</table>";
    } else {
        return "<h4>"+n+"</h4><table>"+
        "<tr><td> Candidate </td><td>Party</td><td> Total Votes </td><td> Pct. </td></tr>"+
        "<tr><td>" + d.demName + "</td><td>Democrat</td><td>"+(d.demVotes)+"</td><td>"+(d.dem)+"</td></tr>"+
        "<tr><td>" + d.repName + "</td><td>Republican</td><td>"+(d.repVotes)+"</td><td>"+(d.rep)+"</td></tr>"+
        "<tr><td>" + d.otherName + "</td><td>"+(d.thirdPartyOne)+"</td><td>"+(d.thirdPartyVotes)+"</td><td>"+(d.thirdVotes)+"</td></tr>"+
        "<tr><td>Other</td><td> N/A </td><td>"+(d.otherVotes)+"</td><td>"+(d.other)+"</td></tr>"+
        "</table>";
    }
}

function sliderChange(val){
    if (!autoUpdating) {
        for (var i = 0; i < timeouts.length; i++) {
            clearTimeout(timeouts[i]);
        }
    }
    autoUpdating = false;
    //console.log(publicYear);
    //var beforeChangeYear = 
    var currentYear = sliderTime.value().getYear() + 1900;
    // only do stuff if the year has changed
    if (publicYear != currentYear) {
      //d3.select('#title-container').text("US Election Results in "+d3.timeFormat('%Y')(sliderTime.value()));
      d3.select('#title-container').text("US Election Results in "+ currentYear);
      publicYear = currentYear;
      d3.select('#key-title').text("Major Candidates (Winner in Bold)");
      //console.log('made a call to on change, about to populate map');
      // lost popular vote ut won election
      if (currentYear == 2000 || currentYear == 2016) {
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase() + "*");
            d3.select('#republican-container').style("font-weight", "bold");
            d3.select('#democrat-container').style("font-weight", "lighter");
            d3.select('#asterisk-container').text('* = Lost Popular Vote').style("background-color", "#FFFFFF")
            .style("outline", "0px").style("height", "20px");
      } else if (currentYear == 1924) { // coloring the third paarty for specific years where they got votes
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase());
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("progressive").name)
            .style("outline", "2px solid #000000").style("background-color", "#88FF88").style("font-weight", 100)
            .style("height", "50px");
      } else if (currentYear == 1912) {
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name.toUpperCase());
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("progressive").name)
            .style("outline", "2px solid #000000").style("background-color", "#88FF88").style("font-weight", 100)
            .style("height", "50px");
      } else if (currentYear == 1948 || currentYear == 1960) {    
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name.toUpperCase());
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("other").name)
            .style("outline", "2px solid #000000").style("background-color", "#FFB020").style("font-weight", 100)
            .style("height", "50px");
      } else if (currentYear == 1968) {
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase());
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("other").name)
            .style("outline", "2px solid #000000").style("background-color", "#FFB020").style("font-weight", 100)
            .style("height", "50px");
      }
      else if(candidateMap.get(currentYear).get("republican").votes > candidateMap.get(currentYear).get("democrat").votes){
            //console.log("HI");
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase());
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('').style("background-color", "#FFFFFF").style("outline", "0px")
            .style("height", "10px");

      } else {
            d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name.toUpperCase());
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);   
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('').style("background-color", "#FFFFFF").style("outline", "0px")
            .style("height", "10px");
      }
      //populateMap();
      popMapWithYear(currentYear);
      infoDiv.innerHTML = textMap.get(currentYear);
      bigContainer.style.display = "block";
      if (currentYear < 1976) {
        bigContainer.style.display = "none";
        } else {
        bigContainer.style.display = "block";
    }   
  }
}

sliderTime.on('onchange', sliderChange);
sliderChange();

// panoramic view logic
function popMapWithYear(currentYear) {
    //sliderTime.sliderBottom().max = d3.max(dataTime);
    var sampleData ={}; /* Sample random data. */   
    let titleVar = document.getElementById("title-container");
    titleVar.innerHTML = "US Election Results in " + currentYear;
    // idk if this if statement is actually necessary/currently it is not being used
    var currYearElectorates = stateValues.get(currentYear);
    if (currentYear < 1976) {
        earlyWinners = stateWinners[currentYear];
        ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
        "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
        "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
        "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
        "WI", "MO", "AR", "OK", "KS", "LA", "VA"]
            .forEach(function(d){
                var winner = earlyWinners[d];
                if(winner == "democrat") {
                    sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], partyCount:1, color:d3.interpolate("#FFFFFF", "#8686FF")(1)};
                } else if (winner == 'republican') {
                    sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], partyCount:1, color:d3.interpolate("#FFFFFF", "#FF8686")(1)};
                } else if (winner == 'progressive') {
                    sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], partyCount:1, color:d3.interpolate("#FFFFFF", "#00FF00")(.5)};
                } else if (winner == 'NULL') {
                    sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], partyCount:1, color:d3.interpolate("#FFFFFF", "#000000")(.5)};
                } else {
                    sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], partyCount:1, color:d3.interpolate("#FFFFFF", "#FFB020")(1)};
                }
            });
    } else {
        //var currentYear = sliderTime.value().getYear() + 1900;
        //console.log(currentYear);
        // map 2 = the winners
        var map2 = map.get(currentYear);
        // loser map 2 = the second place
        var loserMap2 = loserMap.get(currentYear);
        // iinfo and info 2 i believe are the results for a specific state
        var thirdPlace2 = thirdPlaceMap.get(currentYear);
        ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
        "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
        "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
        "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
        "WI", "MO", "AR", "OK", "KS", "LA", "VA"]
            .forEach(function(d){
                var info = map2.get(d);
                var info2 = loserMap2.get(d);
                var info3 = thirdPlace2.get(d);
                var votes = info[0]; // raw votes of winner
                var totalvotes = info[1]; // total overall votes
                var loserVotes = info2[0]; // raw votes of second place
                var party;
                var tempName;
                var winnerName;
                var loserName;
                if (votes > loserVotes) {
                    party = info[2]; // party of winner
                    tempName = info[3].split(",");
                    winnerName = tempName[1] + " " + tempName[0];
                    tempName = info2[3].split(",");
                    loserName = tempName[1] + " " + tempName[0];
                } else {
                    var party = info2[2];
                    var temp = loserVotes;
                    loserVotes = votes;
                    votes = temp;
                    tempName = info2[3].split(",");
                    winnerName = tempName[1] + " " + tempName[0];
                    tempName = info[3].split(",");
                    loserName = tempName[1] + " " + tempName[0];
                }

                var winningPercent = (1.0 * votes) / (votes + loserVotes);// fraction only including repub and dem (top 2)
                winningPercent = Math.min(1, 4*(winningPercent - .43));
                // winning percent is simply a ratio to decide coloring, not actual winning percent
                var winPercent = Math.round((1000.0 * votes) / (totalvotes)) / 10; // this fraction includes other
                var losePercent = Math.round((1000.0 * loserVotes) / (totalvotes)) / 10;
                // IF THERE ARE ONLY 2 PARTIES WE ONLY DISPLAY TWO PARTIES    
                // Now breaking up strings so we have commas for vote count
                strVotes = addCommas(votes);
                strLoserVotes = addCommas(loserVotes);
                // If the percent is a whole number, still displays .0 at the end
                if (losePercent * 10 % 10 == 0) {
                    losePercent = losePercent + ".0";
                }
                if (winPercent * 10 % 10 == 0) {
                    winPercent = winPercent + ".0";
                }
                if (info3 == null) {
                    if(party == "democrat") {
                        sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], demName:winnerName, repName:loserName, partyCount:2, dem:winPercent, rep:losePercent, demVotes:strVotes, repVotes:strLoserVotes, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                    } else {
                        sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], demName:loserName, repName:winnerName, partyCount:2, dem:losePercent, rep:winPercent, demVotes:strLoserVotes, repVotes:strVotes, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                    }                
                }
                else {
                    var thirdVotes = info3[0];
                    var otherVotes = totalvotes - votes - loserVotes - thirdVotes;
                    var thirdParty = info3[2].charAt(0).toUpperCase() + info3[2].substring(1);
                    var otherName;
                    var otherPercent;
                    // if there are only 3 things/there is no third person listed (the third person is other)
                    if (info3[2] === 'Other' || info3[2] === '' || info3[3] === 'Other' || info3[3] === '') {
                        otherName = 'Other';
                        thirdVotes += otherVotes;
                        thirdParty = 'N/A';
                        otherVotes = 0;
                    } else {
                        otherPercent = Math.round((1000.0 * otherVotes) / (totalvotes)) / 10; 
                        if (otherPercent * 10 % 10 == 0) {
                            otherPercent = otherPercent + ".0";
                        }
                        tempName = info3[3].split(",");
                        otherName = tempName[1] + " " + tempName[0];
                        otherVotes = addCommas(otherVotes);
                    }
                    var thirdPlacePercent = Math.round((1000.0 * thirdVotes) / (totalvotes)) / 10;
                    if (thirdPlacePercent * 10 % 10 == 0) {
                        thirdPlacePercent = thirdPlacePercent + ".0";
                    }
                    thirdVotes = addCommas(thirdVotes);
                    if (otherVotes === 0) {
                        if(party == "democrat") {
                            sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], otherName:otherName, demName:winnerName, repName:loserName,partyCount:3, dem:winPercent, demVotes:strVotes, repVotes:strLoserVotes, rep:losePercent, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                        } else {
                            sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], otherName:otherName, demName:loserName, repName:winnerName,partyCount:3, dem:losePercent, demVotes:strLoserVotes, repVotes:strVotes, rep:winPercent, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                        }
                    } else {
                    // if second place is independent (ross perot 1992), still properly show stuff
                        if (info2[2] === 'independent') {
                            if(party == "democrat") {
                                sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], otherName:loserName, demName:winnerName, repName:otherName,partyCount:4, dem:winPercent, demVotes:strVotes, repVotes:thirdVotes, rep:thirdPlacePercent, other:otherPercent, otherVotes:otherVotes, thirdPartyOne:'Independent', thirdPartyVotes:strLoserVotes, thirdVotes:losePercent, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                        } else {
                                sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], otherName:loserName, demName:otherName, repName:winnerName,partyCount:4, dem:thirdPlacePercent, demVotes:thirdVotes, repVotes:strVotes, rep:winPercent, other:otherPercent, otherVotes:otherVotes, thirdPartyOne:'Independent', thirdPartyVotes:strLoserVotes, thirdVotes:losePercent, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                            }
                        }
                        else if(party == "democrat") {
                            sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], otherName:otherName, demName:winnerName, repName:loserName,partyCount:4, dem:winPercent, demVotes:strVotes, repVotes:strLoserVotes, rep:losePercent, other:otherPercent, otherVotes:otherVotes, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                        } else {
                            sampleData[d] = {mapStat:mapState, stateWorth:currYearElectorates[d], otherName:otherName, demName:loserName, repName:winnerName,partyCount:4, dem:losePercent, demVotes:strLoserVotes, repVotes:strVotes, rep:winPercent, other:otherPercent, otherVotes:otherVotes, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                        }
                    }
                }
            });
    /* draw states on id #statesvg */   
    //console.log(sampleData);
    //setTimeout(function () {
        //voteData.set(currentYear, sampleData);
    }
    uStates.draw("#statesvg", sampleData, tooltipHtml);
    //}, 1500);
   // d3.select(self.frameElement).style("height", "600px");
}
// TURNING VOTE COUNT INTO STRING WITH COMMAS
function addCommas(votes) {
    if (votes >= 1000000) {
        var millions = votes / 1000000 | 0;
        var thousands = ((votes / 1000) % 1000) | 0;
        var ones = votes % 1000;
        if (thousands < 10) {
            thousands = "00" + thousands;
        } else if (thousands < 100) {
            thousands = "0" + thousands;
        }
        if (ones < 10) {
            ones = "00" + ones;
        } else if (ones < 100) {
            ones = "0" + ones;
        }
        votes = "" + millions + "," + thousands +  "," + ones;
    }
    else if (votes >= 1000) {
        var thousands = ((votes / 1000) % 1000) | 0;
        var ones = votes % 1000;
        if (ones < 10) {
            ones = "00" + ones;
        } else if (ones < 100) {
            ones = "0" + ones;
        }
        votes = "" + thousands +  "," + ones;
    }
    return votes;
}
// PANOMARIC VIEW LOGIC

var pan = document.getElementById("play");
pan.addEventListener("click", panViewFromStart);//start at og year
var pan2 = document.getElementById("play2");
pan2.addEventListener("click", panView);// play from current year

// 3 map states for what to display
var opt1 = document.getElementById("opt1");
opt1.addEventListener("click", function d () {
    mapState = 0;
    popMapWithYear(publicYear);
});

var opt2 = document.getElementById("opt2");
opt2.addEventListener("click", function d () {
    mapState = 1;
    popMapWithYear(publicYear);
});

var opt3 = document.getElementById("opt3");
opt3.addEventListener("click", function d () {
    mapState = 2;
    popMapWithYear(publicYear);
});

var guide = document.getElementById("guide");
guide.addEventListener("click", printHelp);

function printHelp () {
    infoDiv.innerHTML = "<b>Information</b><br>Hover over a state to see election voter information*<br>The gradient scale shows the percentage voting for a specific party out of people voting for the main 2 parties*<br>Click buttons on bottom to select whether to label states with their abbreviations, electoral votes, or nothing<br>Click play from beginning or play from here to see a time lapse of how the election map has changed over time <br>Click on any year on the slider to see a brief synopsis of that years election<br>Click \"Information\" to see this instruction window<br><br><b>*State voter information is only available since 1976</b>"; // THIS IS WHERE WE WILL WRITE THE ENTIRE INFORMATIION)
}

function panViewFromStart() {
   // console.log(year);
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    var yearCount = 29;
    for (var i = 0; i < yearCount; i ++) {
        timeouts.push(setTimeout(changeSlider, i * 1500, i));
    }
    //timeouts.push(setTimeout(popMapWithYear, 0000, 1976));
    /*timeouts.push(setTimeout(popMapWithYear, 0000, 1976));
    timeouts.push(setTimeout(popMapWithYear, 1000, 1980));
    timeouts.push(setTimeout(popMapWithYear, 2000, 1984));
    timeouts.push(setTimeout(popMapWithYear, 3000, 1988));
    timeouts.push(setTimeout(popMapWithYear, 4000, 1992));
    timeouts.push(setTimeout(popMapWithYear, 5000, 1996));
    timeouts.push(setTimeout(popMapWithYear, 6000, 2000));
    timeouts.push(setTimeout(popMapWithYear, 7000, 2004));
    timeouts.push(setTimeout(popMapWithYear, 8000, 2008));
    timeouts.push(setTimeout(popMapWithYear, 9000, 2012));
    timeouts.push(setTimeout(popMapWithYear, 10000, 2016));*/
}

function panView() {
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    //console.log(sliderTime.value());
    //sliderTime.value(dataTime[0]);
    //sliderChange();
    // year count is amount of years we are working with (maybe should make a global constant)
    var year = publicYear;
    var yearCount = 29;
    var startYear = (year - 1904) / 4;//what the starting point is
    for (var i = startYear + 1; i < yearCount; i ++) {
        timeouts.push(setTimeout(changeSlider, (i - startYear - 1) * 1500, i));
    }
}

function changeSlider(index) {
    autoUpdating = true;
    sliderTime.value(dataTime[index]);
}
/*pan.addEventListener("click", function(){
    setInterval(function(){
        popMapWithYear(1980);
    }, 3000);
    setInterval(function(){
        popMapWithYear(1984)
    }, 3000);
});*/


//console.log(map);


