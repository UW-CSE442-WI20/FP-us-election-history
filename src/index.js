var obj = require("./election-data.json");
//console.log(obj);

//console.log(obj.length);

var voteData = new Map();

var map = new Map();
var loserMap = new Map();
var candidateMap = new Map();
for (var i = 0; i < obj.length; i++) {
    var year = obj[i].year;
    var map2;
    var partyMap;
    var loserMap2;
    if (!map.has(year)) {
        // insert year with votes data
        partyMap = new Map();
        loserMap2 = new Map();
        map2 = new Map();
    } else {
        map2 = map.get(year); 
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
    }
    /*else if (!loserMap2.has(state)) {
    	loserMap2.set(state, votes)
    }*/
    map.set(year, map2);
    loserMap.set(year, loserMap2);
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
function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
        "<tr><td>Party</td><td>"+"Vote (Pct.)"+"</td></tr>"+
        "<tr><td>Democrat</td><td>"+(d.low)+"</td></tr>"+
        "<tr><td>Republican</td><td>"+(d.high)+"</td></tr>"+
        "<tr><td>Other</td><td>"+(d.avg)+"</td></tr>"+
        "</table>";
}

const title = document.getElementById('title-container').addEventListener('change', populateMap);

function populateMap() {

    var sampleData ={}; /* Sample random data. */   

    var currentYear = sliderTime.value().getYear() + 1900;
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
    "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
    "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
    "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
    "WI", "MO", "AR", "OK", "KS", "LA", "VA"]
        .forEach(function(d){
            var map2 = map.get(currentYear);
            var loserMap2 = loserMap.get(currentYear);
            //console.log(map2);
            //console.log(map2);
            //console.log(map2.get(d));
            var info = map2.get(d);
            var info2 = loserMap2.get(d);
            //x console.log(d);
            //console.log(info);
            //console.log(d);
            //console.log(d);
            //console.log(info);
            var party = info[2];
            var votes = info[0];
            var totalvotes = info[1];
            var loserVotes = info2[0];
            var winningPercent = (1.0 * votes) / (votes + loserVotes);// fraction only including repub and dem
            winningPercent = Math.min(1, 4*(winningPercent - .42));
            // winning percent is simply a ratio to decide coloring, not actual winning percent
            var otherVotes = totalvotes - votes - loserVotes;
            var winPercent = Math.round((10000.0 * votes) / (totalvotes)) / 100; // this fraction includes other
            var losePercent = Math.round((10000.0 * loserVotes) / (totalvotes)) / 100;
            var otherPercent = Math.round((10000.0 * otherVotes) / (totalvotes)) / 100; 
            // LOW = the democrat votes, HIGH = the republican votes AVG = other votes
            if(party == "democrat") {
                /*var low=Math.round(50 + 50*Math.random()), 
                    mid=Math.round(50 + 50*Math.random()), 
                    high=Math.round(50 + 50*Math.random());
                sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
                        avg:Math.round((low+mid+high)/3), color:d3.interpolate("#FFFFFF", "#0015BC")((low/100))}; 
                */
                sampleData[d] = {low:winPercent, high:losePercent, avg:otherPercent, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
                //sampleData[d] = {low:votes, high:loserVotes, avg:otherVotes, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
            } else {
                /*var low=Math.round(50*Math.random()), 
                    mid=Math.round(50*Math.random()), 
                    high=Math.round(50*Math.random());
                sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
                        avg:Math.round((low+mid+high)/3), color:d3.interpolate("#E9141D", "#FFFFFF")((low/100))}; 
                */
                sampleData[d] = {low:losePercent, high:winPercent, avg:otherPercent, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
            }
        });
    /* draw states on id #statesvg */   
    //console.log(sampleData);
    //setTimeout(function () {
    uStates.draw("#statesvg", sampleData, tooltipHtml);
    //}, 1500);
   // d3.select(self.frameElement).style("height", "600px");
}

function sliderChange(val){
    for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }

    d3.select('#title-container').text("US Election Results in "+d3.timeFormat('%Y')(sliderTime.value()));
    var currentYear = sliderTime.value().getYear() + 1900;
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
	  populateMap();
}

sliderTime.on('onchange', sliderChange);
sliderChange();

// panoramic view logic
function popMapWithYear(currentYear) {
    var sampleData ={};	/* Sample random data. */	
    let titleVar = document.getElementById("title-container");
    titleVar.innerHTML = "US Election Results in " + currentYear;

    //var currentYear = sliderTime.value().getYear() + 1900;
    //console.log(currentYear);
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
    "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
    "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
    "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
    "WI", "MO", "AR", "OK", "KS", "LA", "VA"]
        .forEach(function(d){
            var map2 = map.get(currentYear);
            var loserMap2 = loserMap.get(currentYear);
            //console.log(map2);
            //console.log(map2);
            //console.log(map2.get(d));
            var info = map2.get(d);
            var info2 = loserMap2.get(d);
            //x	console.log(d);
            //console.log(info);
            //console.log(d);
            //console.log(d);
            //console.log(info);
            var party = info[2];
            var votes = info[0];
            var totalvotes = info[1];
            var loserVotes = info2[0];
            var winningPercent = (1.0 * votes) / (votes + loserVotes);
            winningPercent = Math.min(1, 4*(winningPercent - .42));
            // winning percent is simply a ratio to decide coloring, not actual winning percent
            var otherVotes = totalvotes - votes - loserVotes;
            //console.log(party);
            if(party == "democrat") {
                /*var low=Math.round(50 + 50*Math.random()), 
                    mid=Math.round(50 + 50*Math.random()), 
                    high=Math.round(50 + 50*Math.random());
                sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
                        avg:Math.round((low+mid+high)/3), color:d3.interpolate("#FFFFFF", "#0015BC")((low/100))}; 
                */
                sampleData[d] = {low:votes, high:loserVotes, avg:otherVotes, color:d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)};
            } else {
                /*var low=Math.round(50*Math.random()), 
                    mid=Math.round(50*Math.random()), 
                    high=Math.round(50*Math.random());
                sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
                        avg:Math.round((low+mid+high)/3), color:d3.interpolate("#E9141D", "#FFFFFF")((low/100))}; 
                */
                sampleData[d] = {low:loserVotes, high:votes, avg:otherVotes, color:d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)};
            }
        });
    /* draw states on id #statesvg */	
    //console.log(sampleData);
    //setTimeout(function () {
    uStates.draw("#statesvg", sampleData, tooltipHtml);
    //}, 1500);
   // d3.select(self.frameElement).style("height", "600px");
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

