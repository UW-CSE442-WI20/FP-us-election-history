var obj = require("./election-data.json");
//console.log(obj);

//console.log(obj.length);

var voteData = new Map();
// we are now keeping track of the year as a public variable, so we only update
// The map when the actual year changes
var publicYear = 0;
var map = new Map();
var loserMap = new Map();
var thirdPlaceMap = new Map();
var candidateMap = new Map();
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

var timeouts = [];


//console.log(map);

//console.log(map);
//var title = document.getElementById("title-container");
//console.log(title.textContent);
//console.log(sliderTime.value().getYear() + 1900);
function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    if (d.partyCount === 2) {
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
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
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
            d3.select('#asterisk-container').text('* = Lost Popular Vote');
      }
      else if(candidateMap.get(currentYear).get("republican").votes > candidateMap.get(currentYear).get("democrat").votes){
            d3.select('#republican-container').style("font-weight", 900);
            d3.select('#democrat-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('');

      } else {
            d3.select('#democrat-container').style("font-weight", 900);
            d3.select('#republican-container').style("font-weight", 100);
            d3.select('#asterisk-container').text('');
      }
      //populateMap();
      popMapWithYear(currentYear);
  }
}

sliderTime.on('onchange', sliderChange);
sliderChange();

// panoramic view logic
function popMapWithYear(currentYear) {
    var sampleData ={}; /* Sample random data. */   
    let titleVar = document.getElementById("title-container");
    titleVar.innerHTML = "US Election Results in " + currentYear;
    // idk if this if statement is actually necessary/currently it is not being used
    if (voteData.has(currentYear)) {
        console.log("TRUE");
        uStates.draw("#statesvg", voteData.get(currentYear), tooltipHtml);
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
                var party = info[2]; // party of winner
                var votes = info[0]; // raw votes of winner
                var totalvotes = info[1]; // total overall votes
                var loserVotes = info2[0]; // raw votes of second place
                var winningPercent = (1.0 * votes) / (votes + loserVotes);// fraction only including repub and dem (top 2)
                winningPercent = Math.min(1, 4*(winningPercent - .42));
                // winning percent is simply a ratio to decide coloring, not actual winning percent
                var winPercent = Math.round((1000.0 * votes) / (totalvotes)) / 10; // this fraction includes other
                var losePercent = Math.round((1000.0 * loserVotes) / (totalvotes)) / 10;
                // IF THERE ARE ONLY 2 PARTIES WE ONLY DISPLAY TWO PARTIES    
                var tempName = info[3].split(",");
                var winnerName = tempName[1] + " " + tempName[0];
                tempName = info2[3].split(",");
                var loserName = tempName[1] + " " + tempName[0];
                // Now breaking up strings so we have commas for vote count
                console.log(d);
                strVotes = addCommas(votes);
                strLoserVotes = addCommas(loserVotes);
                if (info3 == null) {
                    if(party == "democrat") {
                        sampleData[d] = {demName:winnerName, repName:loserName, partyCount:2, dem:winPercent, rep:losePercent, demVotes:strVotes, repVotes:strLoserVotes, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                    } else {
                        sampleData[d] = {demName:loserName, repName:winnerName, partyCount:2, dem:losePercent, rep:winPercent, demVotes:strLoserVotes, repVotes:strVotes, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                    }                
                }
                else {
                    var thirdVotes = info3[0];
                    var otherVotes = totalvotes - votes - loserVotes - thirdVotes;
                    var thirdPlacePercent = Math.round((1000.0 * thirdVotes) / (totalvotes)) / 10;
                    var otherPercent = Math.round((1000.0 * otherVotes) / (totalvotes)) / 10; 
                    var thirdParty = info3[2].charAt(0).toUpperCase() + info3[2].substring(1);
                    var otherName;
                    // if there are only 3 things/there is no third person listed (the third person is other)
                    if (info3[3] === 'Other' || info3[3] === '') {
                        otherName = 'Other';
                        thirdVotes += otherVotes;
                        thirdParty = 'N/A';
                        otherVotes = 0;
                    } else {
                        tempName = info3[3].split(",");
                        otherName = tempName[1] + " " + tempName[0];
                        otherVotes = addCommas(otherVotes);
                    }
                    thirdVotes = addCommas(thirdVotes);
                    if (otherVotes === 0) {
                        if(party == "democrat") {
                            sampleData[d] = {otherName:otherName, demName:winnerName, repName:loserName,partyCount:3, dem:winPercent, demVotes:strVotes, repVotes:strLoserVotes, rep:losePercent, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                        } else {
                            sampleData[d] = {otherName:otherName, demName:loserName, repName:winnerName,partyCount:3, dem:losePercent, demVotes:strLoserVotes, repVotes:strVotes, rep:winPercent, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                        }
                    } else {
                        if(party == "democrat") {
                            sampleData[d] = {otherName:otherName, demName:winnerName, repName:loserName,partyCount:4, dem:winPercent, demVotes:strVotes, repVotes:strLoserVotes, rep:losePercent, other:otherPercent, otherVotes:otherVotes, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                        } else {
                            sampleData[d] = {otherName:otherName, demName:loserName, repName:winnerName,partyCount:4, dem:losePercent, demVotes:strLoserVotes, repVotes:strVotes, rep:winPercent, other:otherPercent, otherVotes:otherVotes, thirdPartyOne:thirdParty, thirdPartyVotes:thirdVotes, thirdVotes:thirdPlacePercent, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
                        }
                    }
                }
            });
    /* draw states on id #statesvg */   
    //console.log(sampleData);
    //setTimeout(function () {
        //voteData.set(currentYear, sampleData);
        uStates.draw("#statesvg", sampleData, tooltipHtml);
    }
    //}, 1500);
   // d3.select(self.frameElement).style("height", "600px");
}
// TURNING VOTE COUNT INTO STRING WITH COMMAS
function addCommas(votes) {
    console.log(votes);
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
pan.addEventListener("click", panView);

function panView() {
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts.push(setTimeout(popMapWithYear, 0000, 1976));
    timeouts.push(setTimeout(popMapWithYear, 0000, 1976));
    timeouts.push(setTimeout(popMapWithYear, 1000, 1980));
    timeouts.push(setTimeout(popMapWithYear, 2000, 1984));
    timeouts.push(setTimeout(popMapWithYear, 3000, 1988));
    timeouts.push(setTimeout(popMapWithYear, 4000, 1992));
    timeouts.push(setTimeout(popMapWithYear, 5000, 1996));
    timeouts.push(setTimeout(popMapWithYear, 6000, 2000));
    timeouts.push(setTimeout(popMapWithYear, 7000, 2004));
    timeouts.push(setTimeout(popMapWithYear, 8000, 2008));
    timeouts.push(setTimeout(popMapWithYear, 9000, 2012));
    timeouts.push(setTimeout(popMapWithYear, 10000, 2016));
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

