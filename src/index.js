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
    candidateMap.set(i, earlierMap);
    stateWinners[i] = earlyWinners;
    stateValues.set(i, currYearElectorates);
}
var timeouts = [];
// 2016 is same as 2012 so don't need to do separately
stateValues.set(2016, stateValues.get(2012));

var textMap = new Map();
var infoDiv = document.getElementById("info");

function populateTextMap() {
    textMap.set(1976, "The 1976 United States presidential election was the 48th quadrennial presidential election. It was held on Tuesday, November 2, 1976. Democrat Jimmy Carter of Georgia defeated incumbent Republican President Gerald Ford from Michigan. Carter's win represented the lone Democratic victory in a presidential election held between 1968 and 1992.");
    textMap.set(1980, "The 1980 United States presidential election was the 49th quadrennial presidential election. It was held on Tuesday, November 4, 1980. Republican nominee Ronald Reagan defeated incumbent Democrat Jimmy Carter. Due to the rise of conservatism following Reagan's victory, some historians consider the election to be a realigning election that marked the start of the Reagan Era.");
    textMap.set(1984, "The 1984 United States presidential election was the 50th quadrennial presidential election. It was held on Tuesday, November 6, 1984. Incumbent Republican President Ronald Reagan defeated former Vice President Walter Mondale, the Democratic candidate.");
    textMap.set(1988, "The 1988 United States presidential election was the 51st quadrennial presidential election. It was held on Tuesday, November 8, 1988. Incumbent Vice President George H. W. Bush, the Republican nominee, defeated Democratic Governor Michael Dukakis of Massachusetts. The 1988 election is the only election since 1948 in which either major party won a third straight presidential election.");
    textMap.set(1992, "The 1992 United States presidential election was the 52nd quadrennial presidential election. It was held on Tuesday, November 3, 1992. Democratic Governor Bill Clinton of Arkansas defeated incumbent Republican President George H. W. Bush, independent businessman Ross Perot of Texas, and a number of minor candidates.");
    textMap.set(1996, "The 1996 United States presidential election was the 53rd quadrennial presidential election. It was held on Tuesday, November 5, 1996. Incumbent Democratic President Bill Clinton defeated former Senate Majority Leader Bob Dole, the Republican nominee, and Ross Perot, the Reform Party nominee.");
    textMap.set(2000, "The 2000 United States presidential election was the 54th quadrennial presidential election. It was held on Tuesday, November 7, 2000. Republican candidate George W. Bush, the governor of Texas and eldest son of the 41st president, George H. W. Bush, won the election, defeating Democratic nominee Al Gore, the incumbent vice president. It was the fourth of five presidential elections in which the winning candidate lost the popular vote, and is considered one of the closest elections in US history.");
    textMap.set(2004, "The 2004 United States presidential election was the 55th quadrennial presidential election, held on Tuesday, November 2, 2004. Incumbent Republican President George W. Bush defeated Democratic nominee John Kerry, a United States Senator from Massachusetts.");
    textMap.set(2008, "The 2008 United States presidential election was the 56th quadrennial presidential election, held on Tuesday, November 4, 2008. The Democratic ticket of Barack Obama, the junior U.S. Senator from Illinois, and Joe Biden, the senior U.S. Senator from Delaware, defeated the Republican ticket of John McCain, the senior Senator from Arizona, and Sarah Palin, the Governor of Alaska. Obama became the first African American ever to be elected to the presidency as well as being only the third sitting United States Senator elected president, joining Warren G. Harding and John F. Kennedy.");
    textMap.set(2012, "The 2012 United States presidential election was the 57th quadrennial presidential election, held on Tuesday, November 6, 2012. The Democratic nominee, President Barack Obama, and his running mate, Vice President Joe Biden, were elected to a second term. They defeated the Republican ticket of businessman and former Governor Mitt Romney of Massachusetts and Representative Paul Ryan of Wisconsin.");
    textMap.set(2016, "The 2016 United States presidential election was the 58th quadrennial presidential election, held on Tuesday, November 8, 2016. The Republican ticket of businessman Donald Trump and Indiana Governor Mike Pence defeated the Democratic ticket of former Secretary of State Hillary Clinton and U.S. Senator from Virginia Tim Kaine, despite losing the popular vote. Trump took office as the 45th president, and Pence as the 48th vice president, on January 20, 2017.");
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
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
      //console.log('made a call to on change, about to populate map');
      // lost popular vote ut won election
      if (currentYear == 2000 || currentYear == 2016) {
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name + "*");
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('* = Lost Popular Vote').style("background-color", "#FFFFFF")
            .style("outline", "0px").style("height", "20px");
      } else if (currentYear == 1924) { // coloring the third paarty for specific years where they got votes
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("progressive").name)
            .style("outline", "2px solid #000000").style("background-color", "#88FF88").style("font-weight", 100)
            .style("height", "50px");
      } else if (currentYear == 1912) {
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("progressive").name)
            .style("outline", "2px solid #000000").style("background-color", "#88FF88").style("font-weight", 100)
            .style("height", "50px");
      } else if (currentYear == 1948 || currentYear == 1960) {
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("other").name)
            .style("outline", "2px solid #000000").style("background-color", "#FFB020").style("font-weight", 100)
            .style("height", "50px");
      } /*else if (currentYear == 1948 || currentYear == 1960) {
            d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("other").name)
            .style("outline", "2px solid #000000").style("background-color", "#FFB020").style("font-weight", 100);
      }*/
      else if(candidateMap.get(currentYear).get("republican").votes > candidateMap.get(currentYear).get("democrat").votes){
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('').style("background-color", "#FFFFFF").style("outline", "0px")
            .style("height", "10px");

      } else {
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('').style("background-color", "#FFFFFF").style("outline", "0px")
            .style("height", "10px");
      }
      //populateMap();
      popMapWithYear(currentYear);
      // no info yet for pre 76
      if (currentYear > 1972) {
        infoDiv.innerHTML = textMap.get(currentYear);
        infoDiv.hidden = false;
    } else {
        infoDiv.innerHTML = "";
        infoDiv.hidden = true;
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


