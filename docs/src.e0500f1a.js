// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"N2yf":[function(require,module,exports) {
module.exports = [{
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 659170,
  "totalvotes": 1182850,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 504070,
  "totalvotes": 1182850,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 9198,
  "totalvotes": 1182850,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 6669,
  "totalvotes": 1182850,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 1954,
  "totalvotes": 1182850,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 1481,
  "totalvotes": 1182850,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "AL",
  "candidatevotes": 308,
  "totalvotes": 1182850,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "AK",
  "candidatevotes": 71555,
  "totalvotes": 123574,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "AK",
  "candidatevotes": 44058,
  "totalvotes": 123574,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "AK",
  "candidatevotes": 6785,
  "totalvotes": 123574,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "AK",
  "candidatevotes": 1176,
  "totalvotes": 123574,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 418642,
  "totalvotes": 742719,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 295602,
  "totalvotes": 742719,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 19229,
  "totalvotes": 742719,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 7647,
  "totalvotes": 742719,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 928,
  "totalvotes": 742719,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 564,
  "totalvotes": 742719,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 85,
  "totalvotes": 742719,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "AZ",
  "candidatevotes": 22,
  "totalvotes": 742719,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "AR",
  "candidatevotes": 498604,
  "totalvotes": 767535,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "AR",
  "candidatevotes": 267903,
  "totalvotes": 767535,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "AR",
  "candidatevotes": 639,
  "totalvotes": 767535,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "AR",
  "candidatevotes": 389,
  "totalvotes": 767535,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 3882244,
  "totalvotes": 7803770,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 3742284,
  "totalvotes": 7803770,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 56388,
  "totalvotes": 7803770,
  "party": "independent",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 51098,
  "totalvotes": 7803770,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 41731,
  "totalvotes": 7803770,
  "party": "peace & freedom",
  "candidate": "Wright, Margaret"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 17259,
  "totalvotes": 7803770,
  "party": "independent",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "CA",
  "candidatevotes": 12766,
  "totalvotes": 7803770,
  "party": "independent",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 584278,
  "totalvotes": 1081440,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 460801,
  "totalvotes": 1081440,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 26047,
  "totalvotes": 1081440,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 5338,
  "totalvotes": 1081440,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 2886,
  "totalvotes": 1081440,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 1122,
  "totalvotes": 1081440,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 565,
  "totalvotes": 1081440,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "CO",
  "candidatevotes": 403,
  "totalvotes": 1081440,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "CT",
  "candidatevotes": 719261,
  "totalvotes": 1386355,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "CT",
  "candidatevotes": 647895,
  "totalvotes": 1386355,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "CT",
  "candidatevotes": 10309,
  "totalvotes": 1386355,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1976,
  "state_po": "CT",
  "candidatevotes": 7101,
  "totalvotes": 1386355,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "CT",
  "candidatevotes": 1789,
  "totalvotes": 1386355,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "DE",
  "candidatevotes": 122461,
  "totalvotes": 235642,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "DE",
  "candidatevotes": 109780,
  "totalvotes": 235642,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "DE",
  "candidatevotes": 2518,
  "totalvotes": 235642,
  "party": "no party affiliation",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "DE",
  "candidatevotes": 645,
  "totalvotes": 235642,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "DE",
  "candidatevotes": 135,
  "totalvotes": 235642,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "DE",
  "candidatevotes": 103,
  "totalvotes": 235642,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "DC",
  "candidatevotes": 137818,
  "totalvotes": 168830,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "DC",
  "candidatevotes": 27873,
  "totalvotes": 168830,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "DC",
  "candidatevotes": 1656,
  "totalvotes": 168830,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "DC",
  "candidatevotes": 1483,
  "totalvotes": 168830,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "FL",
  "candidatevotes": 1636000,
  "totalvotes": 3150631,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "FL",
  "candidatevotes": 1469531,
  "totalvotes": 3150631,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "FL",
  "candidatevotes": 23643,
  "totalvotes": 3150631,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "FL",
  "candidatevotes": 21325,
  "totalvotes": 3150631,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "FL",
  "candidatevotes": 132,
  "totalvotes": 3150631,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "GA",
  "candidatevotes": 979409,
  "totalvotes": 1463152,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "GA",
  "candidatevotes": 483743,
  "totalvotes": 1463152,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "HI",
  "candidatevotes": 147375,
  "totalvotes": 291301,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "HI",
  "candidatevotes": 140003,
  "totalvotes": 291301,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "HI",
  "candidatevotes": 3923,
  "totalvotes": 291301,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "ID",
  "candidatevotes": 204151,
  "totalvotes": 340932,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "ID",
  "candidatevotes": 126549,
  "totalvotes": 340932,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "ID",
  "candidatevotes": 5935,
  "totalvotes": 340932,
  "party": "american",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "ID",
  "candidatevotes": 3558,
  "totalvotes": 340932,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "ID",
  "candidatevotes": 739,
  "totalvotes": 340932,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 2364269,
  "totalvotes": 4721282,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 2271295,
  "totalvotes": 4721282,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 55939,
  "totalvotes": 4721282,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 9250,
  "totalvotes": 4721282,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 8057,
  "totalvotes": 4721282,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 4417,
  "totalvotes": 4721282,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 3615,
  "totalvotes": 4721282,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 2422,
  "totalvotes": 4721282,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "IL",
  "candidatevotes": 2018,
  "totalvotes": 4721282,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "IN",
  "candidatevotes": 1183958,
  "totalvotes": 2220362,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "IN",
  "candidatevotes": 1014714,
  "totalvotes": 2220362,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "IN",
  "candidatevotes": 14048,
  "totalvotes": 2220362,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "IN",
  "candidatevotes": 5695,
  "totalvotes": 2220362,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "IN",
  "candidatevotes": 1947,
  "totalvotes": 2220362,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 632864,
  "totalvotes": 1279303,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 619931,
  "totalvotes": 1279303,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 20057,
  "totalvotes": 1279303,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 3041,
  "totalvotes": 1279303,
  "party": "american party of iowa",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 1454,
  "totalvotes": 1279303,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 551,
  "totalvotes": 1279303,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 509,
  "totalvotes": 1279303,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 262,
  "totalvotes": 1279303,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 241,
  "totalvotes": 1279303,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 233,
  "totalvotes": 1279303,
  "party": "socialist u.s.a.",
  "candidate": "Zeidler, Frank"
}, {
  "year": 1976,
  "state_po": "IA",
  "candidatevotes": 160,
  "totalvotes": 1279303,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 502752,
  "totalvotes": 957845,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 430421,
  "totalvotes": 957845,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 13185,
  "totalvotes": 957845,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 4724,
  "totalvotes": 957845,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 3242,
  "totalvotes": 957845,
  "party": "independent",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 2118,
  "totalvotes": 957845,
  "party": "conservative",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "KS",
  "candidatevotes": 1403,
  "totalvotes": 957845,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 615717,
  "totalvotes": 1167142,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 531852,
  "totalvotes": 1167142,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 8308,
  "totalvotes": 1167142,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 6837,
  "totalvotes": 1167142,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 2328,
  "totalvotes": 1167142,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 814,
  "totalvotes": 1167142,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 510,
  "totalvotes": 1167142,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 426,
  "totalvotes": 1167142,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "KY",
  "candidatevotes": 350,
  "totalvotes": 1167142,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 661365,
  "totalvotes": 1277383,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 587446,
  "totalvotes": 1277383,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 10058,
  "totalvotes": 1277383,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 7417,
  "totalvotes": 1277383,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 6490,
  "totalvotes": 1277383,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 3134,
  "totalvotes": 1277383,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "LA",
  "candidatevotes": 1473,
  "totalvotes": 1277383,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "ME",
  "candidatevotes": 236320,
  "totalvotes": 482968,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "ME",
  "candidatevotes": 232279,
  "totalvotes": 482968,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "ME",
  "candidatevotes": 10874,
  "totalvotes": 482968,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "ME",
  "candidatevotes": 3495,
  "totalvotes": 482968,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "MD",
  "candidatevotes": 759612,
  "totalvotes": 1432273,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MD",
  "candidatevotes": 672661,
  "totalvotes": 1432273,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 1429475,
  "totalvotes": 2547558,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 1030276,
  "totalvotes": 2547558,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 65637,
  "totalvotes": 2547558,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 8138,
  "totalvotes": 2547558,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 7555,
  "totalvotes": 2547558,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 4922,
  "totalvotes": 2547558,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 1401,
  "totalvotes": 2547558,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 135,
  "totalvotes": 2547558,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "MA",
  "candidatevotes": 19,
  "totalvotes": 2547558,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 1893742,
  "totalvotes": 3651590,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 1696714,
  "totalvotes": 3651590,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 47905,
  "totalvotes": 3651590,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 5407,
  "totalvotes": 3651590,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 3504,
  "totalvotes": 3651590,
  "party": "human rights",
  "candidate": "Wright, Margaret"
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 1804,
  "totalvotes": 3651590,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 1366,
  "totalvotes": 3651590,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "MI",
  "candidatevotes": 1148,
  "totalvotes": 3651590,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 1070440,
  "totalvotes": 1949931,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 819395,
  "totalvotes": 1949931,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 35490,
  "totalvotes": 1949931,
  "party": "mccarthy '76",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 13592,
  "totalvotes": 1949931,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 4149,
  "totalvotes": 1949931,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 3529,
  "totalvotes": 1949931,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 1092,
  "totalvotes": 1949931,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 635,
  "totalvotes": 1949931,
  "party": "people's",
  "candidate": "Wright, Margaret"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 543,
  "totalvotes": 1949931,
  "party": "international development bank",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 370,
  "totalvotes": 1949931,
  "party": "industrial government party",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 354,
  "totalvotes": 1949931,
  "party": "socialist",
  "candidate": "Zeidler, Frank"
}, {
  "year": 1976,
  "state_po": "MN",
  "candidatevotes": 342,
  "totalvotes": 1949931,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 381329,
  "totalvotes": 768390,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 366846,
  "totalvotes": 768390,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 6678,
  "totalvotes": 768390,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 4074,
  "totalvotes": 768390,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 4049,
  "totalvotes": 768390,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 2805,
  "totalvotes": 768390,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "MS",
  "candidatevotes": 2609,
  "totalvotes": 768390,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "MO",
  "candidatevotes": 998387,
  "totalvotes": 1953600,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MO",
  "candidatevotes": 927443,
  "totalvotes": 1953600,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MO",
  "candidatevotes": 24029,
  "totalvotes": 1953600,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "MO",
  "candidatevotes": 3741,
  "totalvotes": 1953600,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "MT",
  "candidatevotes": 173703,
  "totalvotes": 328734,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "MT",
  "candidatevotes": 149259,
  "totalvotes": 328734,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "MT",
  "candidatevotes": 5772,
  "totalvotes": 328734,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "NE",
  "candidatevotes": 359219,
  "totalvotes": 606749,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NE",
  "candidatevotes": 233293,
  "totalvotes": 606749,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NE",
  "candidatevotes": 9383,
  "totalvotes": 606749,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "NE",
  "candidatevotes": 3378,
  "totalvotes": 606749,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "NE",
  "candidatevotes": 1476,
  "totalvotes": 606749,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NV",
  "candidatevotes": 101273,
  "totalvotes": 201876,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NV",
  "candidatevotes": 92479,
  "totalvotes": 201876,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NV",
  "candidatevotes": 5108,
  "totalvotes": 201876,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "NV",
  "candidatevotes": 1519,
  "totalvotes": 201876,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NV",
  "candidatevotes": 1497,
  "totalvotes": 201876,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 185935,
  "totalvotes": 339627,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 147645,
  "totalvotes": 339627,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 4095,
  "totalvotes": 339627,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 936,
  "totalvotes": 339627,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 603,
  "totalvotes": 339627,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 186,
  "totalvotes": 339627,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 161,
  "totalvotes": 339627,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "NH",
  "candidatevotes": 66,
  "totalvotes": 339627,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 1509688,
  "totalvotes": 3014472,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 1444653,
  "totalvotes": 3014472,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 32717,
  "totalvotes": 3014472,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 9449,
  "totalvotes": 3014472,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 7716,
  "totalvotes": 3014472,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 3686,
  "totalvotes": 3014472,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 1662,
  "totalvotes": 3014472,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 1650,
  "totalvotes": 3014472,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 1184,
  "totalvotes": 3014472,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 1044,
  "totalvotes": 3014472,
  "party": "peace & freedom",
  "candidate": "Wright, Margaret"
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 554,
  "totalvotes": 3014472,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "NJ",
  "candidatevotes": 469,
  "totalvotes": 3014472,
  "party": "socialist",
  "candidate": "Zeidler, Frank"
}, {
  "year": 1976,
  "state_po": "NM",
  "candidatevotes": 211419,
  "totalvotes": 416590,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NM",
  "candidatevotes": 201148,
  "totalvotes": 416590,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NM",
  "candidatevotes": 2462,
  "totalvotes": 416590,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "NM",
  "candidatevotes": 1110,
  "totalvotes": 416590,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NM",
  "candidatevotes": 240,
  "totalvotes": 416590,
  "party": "socialist",
  "candidate": "Zeidler, Frank"
}, {
  "year": 1976,
  "state_po": "NM",
  "candidatevotes": 211,
  "totalvotes": 416590,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 3389558,
  "totalvotes": 6668262,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 3100791,
  "totalvotes": 6668262,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 143037,
  "totalvotes": 6668262,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 12197,
  "totalvotes": 6668262,
  "party": "free libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 10270,
  "totalvotes": 6668262,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 6996,
  "totalvotes": 6668262,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "NY",
  "candidatevotes": 5413,
  "totalvotes": 6668262,
  "party": "labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "NC",
  "candidatevotes": 927365,
  "totalvotes": 1677906,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "NC",
  "candidatevotes": 741960,
  "totalvotes": 1677906,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "NC",
  "candidatevotes": 5607,
  "totalvotes": 1677906,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "NC",
  "candidatevotes": 2219,
  "totalvotes": 1677906,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "NC",
  "candidatevotes": 755,
  "totalvotes": 1677906,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 153684,
  "totalvotes": 297308,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 136078,
  "totalvotes": 297308,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 3698,
  "totalvotes": 297308,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 2952,
  "totalvotes": 297308,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 269,
  "totalvotes": 297308,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 256,
  "totalvotes": 297308,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 142,
  "totalvotes": 297308,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 85,
  "totalvotes": 297308,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 63,
  "totalvotes": 297308,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 43,
  "totalvotes": 297308,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "ND",
  "candidatevotes": 38,
  "totalvotes": 297308,
  "party": "socialist",
  "candidate": "Zeidler, Frank"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 2009959,
  "totalvotes": 4110456,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 2000626,
  "totalvotes": 4110456,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 58267,
  "totalvotes": 4110456,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 15508,
  "totalvotes": 4110456,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 8952,
  "totalvotes": 4110456,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 7817,
  "totalvotes": 4110456,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 4833,
  "totalvotes": 4110456,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 4364,
  "totalvotes": 4110456,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 68,
  "totalvotes": 4110456,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "OH",
  "candidatevotes": 62,
  "totalvotes": 4110456,
  "party": "prohibition",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "OK",
  "candidatevotes": 545708,
  "totalvotes": 1092251,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "OK",
  "candidatevotes": 532442,
  "totalvotes": 1092251,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "OK",
  "candidatevotes": 14101,
  "totalvotes": 1092251,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "OR",
  "candidatevotes": 492120,
  "totalvotes": 1029876,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "OR",
  "candidatevotes": 490407,
  "totalvotes": 1029876,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "OR",
  "candidatevotes": 40207,
  "totalvotes": 1029876,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "OR",
  "candidatevotes": 6107,
  "totalvotes": 1029876,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "OR",
  "candidatevotes": 1035,
  "totalvotes": 1029876,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 2328677,
  "totalvotes": 4620787,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 2205604,
  "totalvotes": 4620787,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 50584,
  "totalvotes": 4620787,
  "party": "mccarthy '76",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 25344,
  "totalvotes": 4620787,
  "party": "constitution party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 3009,
  "totalvotes": 4620787,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 2934,
  "totalvotes": 4620787,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 2744,
  "totalvotes": 4620787,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "PA",
  "candidatevotes": 1891,
  "totalvotes": 4620787,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "RI",
  "candidatevotes": 227636,
  "totalvotes": 410584,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "RI",
  "candidatevotes": 181249,
  "totalvotes": 410584,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "RI",
  "candidatevotes": 715,
  "totalvotes": 410584,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "RI",
  "candidatevotes": 462,
  "totalvotes": 410584,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "RI",
  "candidatevotes": 334,
  "totalvotes": 410584,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "RI",
  "candidatevotes": 188,
  "totalvotes": 410584,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "SC",
  "candidatevotes": 450807,
  "totalvotes": 802583,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "SC",
  "candidatevotes": 346149,
  "totalvotes": 802583,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "SC",
  "candidatevotes": 2996,
  "totalvotes": 802583,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "SC",
  "candidatevotes": 1950,
  "totalvotes": 802583,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "SC",
  "candidatevotes": 681,
  "totalvotes": 802583,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "SD",
  "candidatevotes": 151505,
  "totalvotes": 300678,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "SD",
  "candidatevotes": 147068,
  "totalvotes": 300678,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "SD",
  "candidatevotes": 1619,
  "totalvotes": 300678,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "SD",
  "candidatevotes": 318,
  "totalvotes": 300678,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "SD",
  "candidatevotes": 168,
  "totalvotes": 300678,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 825879,
  "totalvotes": 1476346,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 633969,
  "totalvotes": 1476346,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 5769,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 5004,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 2303,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 1375,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 547,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 512,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 442,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1976,
  "state_po": "TN",
  "candidatevotes": 546,
  "totalvotes": 1476346,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "TX",
  "candidatevotes": 2082319,
  "totalvotes": 4071884,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "TX",
  "candidatevotes": 1953300,
  "totalvotes": 4071884,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "TX",
  "candidatevotes": 20118,
  "totalvotes": 4071884,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "TX",
  "candidatevotes": 11442,
  "totalvotes": 4071884,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "TX",
  "candidatevotes": 2982,
  "totalvotes": 4071884,
  "party": "",
  "candidate": ""
}, {
  "year": 1976,
  "state_po": "TX",
  "candidatevotes": 1723,
  "totalvotes": 4071884,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 337908,
  "totalvotes": 541218,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 182110,
  "totalvotes": 541218,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 13304,
  "totalvotes": 541218,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 3907,
  "totalvotes": 541218,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 2438,
  "totalvotes": 541218,
  "party": "liberal party",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 1162,
  "totalvotes": 541218,
  "party": "concerned citizens",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 268,
  "totalvotes": 541218,
  "party": "independent",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "UT",
  "candidatevotes": 121,
  "totalvotes": 541218,
  "party": "independent",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "VT",
  "candidatevotes": 100387,
  "totalvotes": 183902,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "VT",
  "candidatevotes": 77798,
  "totalvotes": 183902,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "VT",
  "candidatevotes": 4001,
  "totalvotes": 183902,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "VT",
  "candidatevotes": 1090,
  "totalvotes": 183902,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "VT",
  "candidatevotes": 430,
  "totalvotes": 183902,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "VT",
  "candidatevotes": 196,
  "totalvotes": 183902,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "VA",
  "candidatevotes": 836554,
  "totalvotes": 1697094,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "VA",
  "candidatevotes": 813896,
  "totalvotes": 1697094,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "VA",
  "candidatevotes": 17802,
  "totalvotes": 1697094,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "VA",
  "candidatevotes": 16686,
  "totalvotes": 1697094,
  "party": "american",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "VA",
  "candidatevotes": 7508,
  "totalvotes": 1697094,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "VA",
  "candidatevotes": 4648,
  "totalvotes": 1697094,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 777732,
  "totalvotes": 1555534,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 717323,
  "totalvotes": 1555534,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 36986,
  "totalvotes": 1555534,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 8585,
  "totalvotes": 1555534,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 5482,
  "totalvotes": 1555534,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 5042,
  "totalvotes": 1555534,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 1046,
  "totalvotes": 1555534,
  "party": "constitution party",
  "candidate": "Anderson, Thomas J."
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 905,
  "totalvotes": 1555534,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 903,
  "totalvotes": 1555534,
  "party": "u.s. labor",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 817,
  "totalvotes": 1555534,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1976,
  "state_po": "WA",
  "candidatevotes": 713,
  "totalvotes": 1555534,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "WV",
  "candidatevotes": 435864,
  "totalvotes": 750590,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "WV",
  "candidatevotes": 314726,
  "totalvotes": 750590,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 1040232,
  "totalvotes": 2101336,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 1004987,
  "totalvotes": 2101336,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 34943,
  "totalvotes": 2101336,
  "party": "independent",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 8552,
  "totalvotes": 2101336,
  "party": "american independent party",
  "candidate": "Maddox, Lester"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 4298,
  "totalvotes": 2101336,
  "party": "socialist",
  "candidate": "Zeidler, Frank"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 3814,
  "totalvotes": 2101336,
  "party": "libertarian",
  "candidate": "Macbride, Roger"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 2430,
  "totalvotes": 2101336,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 1691,
  "totalvotes": 2101336,
  "party": "socialist workers",
  "candidate": "Camejo, Peter"
}, {
  "year": 1976,
  "state_po": "WI",
  "candidatevotes": 389,
  "totalvotes": 2101336,
  "party": "socialist labor",
  "candidate": "Julius \"\"Jules\"\", Levin"
}, {
  "year": 1976,
  "state_po": "WY",
  "candidatevotes": 92717,
  "totalvotes": 156343,
  "party": "republican",
  "candidate": "Ford, Gerald"
}, {
  "year": 1976,
  "state_po": "WY",
  "candidatevotes": 62239,
  "totalvotes": 156343,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1976,
  "state_po": "WY",
  "candidatevotes": 1387,
  "totalvotes": 156343,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 654192,
  "totalvotes": 1341929,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 636730,
  "totalvotes": 1341929,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 16481,
  "totalvotes": 1341929,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 15010,
  "totalvotes": 1341929,
  "party": "conservative",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 13318,
  "totalvotes": 1341929,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 1743,
  "totalvotes": 1341929,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 1629,
  "totalvotes": 1341929,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 1303,
  "totalvotes": 1341929,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 1006,
  "totalvotes": 1341929,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "AL",
  "candidatevotes": 517,
  "totalvotes": 1341929,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "AK",
  "candidatevotes": 86112,
  "totalvotes": 158445,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "AK",
  "candidatevotes": 41842,
  "totalvotes": 158445,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "AK",
  "candidatevotes": 18479,
  "totalvotes": 158445,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "AK",
  "candidatevotes": 11155,
  "totalvotes": 158445,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "AK",
  "candidatevotes": 857,
  "totalvotes": 158445,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 529688,
  "totalvotes": 873945,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 246843,
  "totalvotes": 873945,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 76952,
  "totalvotes": 873945,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 18784,
  "totalvotes": 873945,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 1100,
  "totalvotes": 873945,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 551,
  "totalvotes": 873945,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 25,
  "totalvotes": 873945,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "AZ",
  "candidatevotes": 2,
  "totalvotes": 873945,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 403164,
  "totalvotes": 837582,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 398041,
  "totalvotes": 837582,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 22468,
  "totalvotes": 837582,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 8970,
  "totalvotes": 837582,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 2345,
  "totalvotes": 837582,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 1350,
  "totalvotes": 837582,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "AR",
  "candidatevotes": 1244,
  "totalvotes": 837582,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 4522994,
  "totalvotes": 8582938,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 3082943,
  "totalvotes": 8582938,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 739618,
  "totalvotes": 8582938,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 148390,
  "totalvotes": 8582938,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 61046,
  "totalvotes": 8582938,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 18106,
  "totalvotes": 8582938,
  "party": "peace & freedom",
  "candidate": "Smith, Maureen"
}, {
  "year": 1980,
  "state_po": "CA",
  "candidatevotes": 9841,
  "totalvotes": 8582938,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 652264,
  "totalvotes": 1184450,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 368009,
  "totalvotes": 1184450,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 130633,
  "totalvotes": 1184450,
  "party": "national unity campaign",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 25744,
  "totalvotes": 1184450,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 5614,
  "totalvotes": 1184450,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 1180,
  "totalvotes": 1184450,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 519,
  "totalvotes": 1184450,
  "party": "socialist workers",
  "candidate": "Pulley, Andrew"
}, {
  "year": 1980,
  "state_po": "CO",
  "candidatevotes": 487,
  "totalvotes": 1184450,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "CT",
  "candidatevotes": 677210,
  "totalvotes": 1406285,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "CT",
  "candidatevotes": 541732,
  "totalvotes": 1406285,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "CT",
  "candidatevotes": 171807,
  "totalvotes": 1406285,
  "party": "anderson coalition",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "CT",
  "candidatevotes": 8570,
  "totalvotes": 1406285,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "CT",
  "candidatevotes": 6130,
  "totalvotes": 1406285,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "CT",
  "candidatevotes": 836,
  "totalvotes": 1406285,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "DE",
  "candidatevotes": 111252,
  "totalvotes": 235668,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "DE",
  "candidatevotes": 105754,
  "totalvotes": 235668,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "DE",
  "candidatevotes": 16288,
  "totalvotes": 235668,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "DE",
  "candidatevotes": 1974,
  "totalvotes": 235668,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "DE",
  "candidatevotes": 400,
  "totalvotes": 235668,
  "party": "american",
  "candidate": "Greaves, Percy L, Jr."
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 130231,
  "totalvotes": 173889,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 23313,
  "totalvotes": 173889,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 16131,
  "totalvotes": 173889,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 1826,
  "totalvotes": 173889,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 1104,
  "totalvotes": 173889,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 690,
  "totalvotes": 173889,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 369,
  "totalvotes": 173889,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 173,
  "totalvotes": 173889,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "DC",
  "candidatevotes": 52,
  "totalvotes": 173889,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "FL",
  "candidatevotes": 2046951,
  "totalvotes": 3686927,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "FL",
  "candidatevotes": 1419475,
  "totalvotes": 3686927,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "FL",
  "candidatevotes": 189692,
  "totalvotes": 3686927,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "FL",
  "candidatevotes": 30524,
  "totalvotes": 3686927,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "FL",
  "candidatevotes": 285,
  "totalvotes": 3686927,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "GA",
  "candidatevotes": 890955,
  "totalvotes": 1596805,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "GA",
  "candidatevotes": 654168,
  "totalvotes": 1596805,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "GA",
  "candidatevotes": 36055,
  "totalvotes": 1596805,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "GA",
  "candidatevotes": 15627,
  "totalvotes": 1596805,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "HI",
  "candidatevotes": 135879,
  "totalvotes": 303287,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "HI",
  "candidatevotes": 130112,
  "totalvotes": 303287,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "HI",
  "candidatevotes": 32021,
  "totalvotes": 303287,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "HI",
  "candidatevotes": 3269,
  "totalvotes": 303287,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "HI",
  "candidatevotes": 1548,
  "totalvotes": 303287,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "HI",
  "candidatevotes": 458,
  "totalvotes": 303287,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "ID",
  "candidatevotes": 290699,
  "totalvotes": 437431,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "ID",
  "candidatevotes": 110192,
  "totalvotes": 437431,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "ID",
  "candidatevotes": 27058,
  "totalvotes": 437431,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "ID",
  "candidatevotes": 8425,
  "totalvotes": 437431,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "ID",
  "candidatevotes": 1057,
  "totalvotes": 437431,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 2358049,
  "totalvotes": 4749721,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 1981413,
  "totalvotes": 4749721,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 346754,
  "totalvotes": 4749721,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 38939,
  "totalvotes": 4749721,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 10692,
  "totalvotes": 4749721,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 9711,
  "totalvotes": 4749721,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 2257,
  "totalvotes": 4749721,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 1302,
  "totalvotes": 4749721,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "IL",
  "candidatevotes": 604,
  "totalvotes": 4749721,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 1255656,
  "totalvotes": 2242033,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 844197,
  "totalvotes": 2242033,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 111639,
  "totalvotes": 2242033,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 19627,
  "totalvotes": 2242033,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 4852,
  "totalvotes": 2242033,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 4750,
  "totalvotes": 2242033,
  "party": "american",
  "candidate": "Greaves, Percy L, Jr."
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 702,
  "totalvotes": 2242033,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "IN",
  "candidatevotes": 610,
  "totalvotes": 2242033,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 676026,
  "totalvotes": 1317661,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 508672,
  "totalvotes": 1317661,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 115633,
  "totalvotes": 1317661,
  "party": "nominated by petition",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 13123,
  "totalvotes": 1317661,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 2273,
  "totalvotes": 1317661,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 534,
  "totalvotes": 1317661,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 519,
  "totalvotes": 1317661,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 298,
  "totalvotes": 1317661,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 244,
  "totalvotes": 1317661,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 189,
  "totalvotes": 1317661,
  "party": "american",
  "candidate": "Greaves, Percy L, Jr."
}, {
  "year": 1980,
  "state_po": "IA",
  "candidatevotes": 150,
  "totalvotes": 1317661,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 566812,
  "totalvotes": 979795,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 326150,
  "totalvotes": 979795,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 68231,
  "totalvotes": 979795,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 14470,
  "totalvotes": 979795,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 1555,
  "totalvotes": 979795,
  "party": "american",
  "candidate": "Shelton, Frank, Jr."
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 967,
  "totalvotes": 979795,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 821,
  "totalvotes": 979795,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "KS",
  "candidatevotes": 789,
  "totalvotes": 979795,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 635274,
  "totalvotes": 1295627,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 617417,
  "totalvotes": 1295627,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 31127,
  "totalvotes": 1295627,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 5531,
  "totalvotes": 1295627,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 4233,
  "totalvotes": 1295627,
  "party": "respect for life",
  "candidate": "McCormack, Ellen"
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 1304,
  "totalvotes": 1295627,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 393,
  "totalvotes": 1295627,
  "party": "socialist workers",
  "candidate": "Pulley, Andrew"
}, {
  "year": 1980,
  "state_po": "KY",
  "candidatevotes": 348,
  "totalvotes": 1295627,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 792853,
  "totalvotes": 1548591,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 708453,
  "totalvotes": 1548591,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 26345,
  "totalvotes": 1548591,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 10333,
  "totalvotes": 1548591,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 8240,
  "totalvotes": 1548591,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 1584,
  "totalvotes": 1548591,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "LA",
  "candidatevotes": 783,
  "totalvotes": 1548591,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 238522,
  "totalvotes": 523011,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 220974,
  "totalvotes": 523011,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 53327,
  "totalvotes": 523011,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 5119,
  "totalvotes": 523011,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 4394,
  "totalvotes": 523011,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 591,
  "totalvotes": 523011,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "ME",
  "candidatevotes": 84,
  "totalvotes": 523011,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "MD",
  "candidatevotes": 726161,
  "totalvotes": 1540496,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MD",
  "candidatevotes": 680606,
  "totalvotes": 1540496,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MD",
  "candidatevotes": 119537,
  "totalvotes": 1540496,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MD",
  "candidatevotes": 14192,
  "totalvotes": 1540496,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 1057631,
  "totalvotes": 2524090,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 1053802,
  "totalvotes": 2524090,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 382539,
  "totalvotes": 2524090,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 22038,
  "totalvotes": 2524090,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 3735,
  "totalvotes": 2524090,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 2289,
  "totalvotes": 2524090,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "MA",
  "candidatevotes": 2056,
  "totalvotes": 2524090,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 1915225,
  "totalvotes": 3909725,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 1661532,
  "totalvotes": 3909725,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 275223,
  "totalvotes": 3909725,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 41597,
  "totalvotes": 3909725,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 11930,
  "totalvotes": 3909725,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 3262,
  "totalvotes": 3909725,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "MI",
  "candidatevotes": 956,
  "totalvotes": 3909725,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 954173,
  "totalvotes": 2051916,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 873268,
  "totalvotes": 2051916,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 174997,
  "totalvotes": 2051916,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 31593,
  "totalvotes": 2051916,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 8406,
  "totalvotes": 2051916,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 6417,
  "totalvotes": 2051916,
  "party": "american",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 1117,
  "totalvotes": 2051916,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 711,
  "totalvotes": 2051916,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 698,
  "totalvotes": 2051916,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "MN",
  "candidatevotes": 536,
  "totalvotes": 2051916,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "MS",
  "candidatevotes": 441089,
  "totalvotes": 891750,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MS",
  "candidatevotes": 429281,
  "totalvotes": 891750,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MS",
  "candidatevotes": 12036,
  "totalvotes": 891750,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MS",
  "candidatevotes": 4702,
  "totalvotes": 891750,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "MS",
  "candidatevotes": 2402,
  "totalvotes": 891750,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "MS",
  "candidatevotes": 2240,
  "totalvotes": 891750,
  "party": "socialist workers",
  "candidate": "Pulley, Andrew"
}, {
  "year": 1980,
  "state_po": "MO",
  "candidatevotes": 1074181,
  "totalvotes": 2099824,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MO",
  "candidatevotes": 931182,
  "totalvotes": 2099824,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MO",
  "candidatevotes": 77920,
  "totalvotes": 2099824,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MO",
  "candidatevotes": 14422,
  "totalvotes": 2099824,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "MO",
  "candidatevotes": 1515,
  "totalvotes": 2099824,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "MO",
  "candidatevotes": 604,
  "totalvotes": 2099824,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "MT",
  "candidatevotes": 206814,
  "totalvotes": 363952,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "MT",
  "candidatevotes": 118032,
  "totalvotes": 363952,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "MT",
  "candidatevotes": 29281,
  "totalvotes": 363952,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "MT",
  "candidatevotes": 9825,
  "totalvotes": 363952,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NE",
  "candidatevotes": 419214,
  "totalvotes": 639533,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NE",
  "candidatevotes": 166424,
  "totalvotes": 639533,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NE",
  "candidatevotes": 44854,
  "totalvotes": 639533,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NE",
  "candidatevotes": 9041,
  "totalvotes": 639533,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NV",
  "candidatevotes": 155017,
  "totalvotes": 243692,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NV",
  "candidatevotes": 66666,
  "totalvotes": 243692,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NV",
  "candidatevotes": 17651,
  "totalvotes": 243692,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NV",
  "candidatevotes": 4358,
  "totalvotes": 243692,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 221705,
  "totalvotes": 383990,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 108864,
  "totalvotes": 383990,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 49693,
  "totalvotes": 383990,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 2064,
  "totalvotes": 383990,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 1320,
  "totalvotes": 383990,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 129,
  "totalvotes": 383990,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 76,
  "totalvotes": 383990,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 71,
  "totalvotes": 383990,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "NH",
  "candidatevotes": 68,
  "totalvotes": 383990,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 1546557,
  "totalvotes": 2975684,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 1147364,
  "totalvotes": 2975684,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 234632,
  "totalvotes": 2975684,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 20652,
  "totalvotes": 2975684,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 8203,
  "totalvotes": 2975684,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 3927,
  "totalvotes": 2975684,
  "party": "right-to-life",
  "candidate": "McCormack, Ellen"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 3694,
  "totalvotes": 2975684,
  "party": "middle class candidate",
  "candidate": "Lynen, Kurt"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 2555,
  "totalvotes": 2975684,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 2198,
  "totalvotes": 2975684,
  "party": "socialist workers",
  "candidate": "Pulley, Andrew"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 1973,
  "totalvotes": 2975684,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 1718,
  "totalvotes": 2975684,
  "party": "down with lawyers",
  "candidate": "Gahres, William \"\"Bill\""
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 1288,
  "totalvotes": 2975684,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "NJ",
  "candidatevotes": 923,
  "totalvotes": 2975684,
  "party": "independent",
  "candidate": "Wendelken, Martin E."
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 250779,
  "totalvotes": 456237,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 167826,
  "totalvotes": 456237,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 29459,
  "totalvotes": 456237,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 4365,
  "totalvotes": 456237,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 2202,
  "totalvotes": 456237,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 1281,
  "totalvotes": 456237,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "NM",
  "candidatevotes": 325,
  "totalvotes": 456237,
  "party": "socialist workers",
  "candidate": "Pulley, Andrew"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 2728372,
  "totalvotes": 6201959,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 2893831,
  "totalvotes": 6201959,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 467801,
  "totalvotes": 6201959,
  "party": "liberal party",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 52648,
  "totalvotes": 6201959,
  "party": "free libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 24159,
  "totalvotes": 6201959,
  "party": "right-to-life",
  "candidate": "McCormack, Ellen"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 23186,
  "totalvotes": 6201959,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 7414,
  "totalvotes": 6201959,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 2068,
  "totalvotes": 6201959,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 1416,
  "totalvotes": 6201959,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "NY",
  "candidatevotes": 1064,
  "totalvotes": 6201959,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "NC",
  "candidatevotes": 915018,
  "totalvotes": 1855833,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "NC",
  "candidatevotes": 875635,
  "totalvotes": 1855833,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "NC",
  "candidatevotes": 52800,
  "totalvotes": 1855833,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "NC",
  "candidatevotes": 9677,
  "totalvotes": 1855833,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "NC",
  "candidatevotes": 2287,
  "totalvotes": 1855833,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "NC",
  "candidatevotes": 416,
  "totalvotes": 1855833,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 193695,
  "totalvotes": 301116,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 79189,
  "totalvotes": 301116,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 23640,
  "totalvotes": 301116,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 3743,
  "totalvotes": 301116,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 296,
  "totalvotes": 301116,
  "party": "natural people's league",
  "candidate": "McLain, Harley"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 235,
  "totalvotes": 301116,
  "party": "american",
  "candidate": "Greaves, Percy L, Jr."
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 93,
  "totalvotes": 301116,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 89,
  "totalvotes": 301116,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 82,
  "totalvotes": 301116,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "ND",
  "candidatevotes": 54,
  "totalvotes": 301116,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 2206545,
  "totalvotes": 4283603,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 1752414,
  "totalvotes": 4283603,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 254472,
  "totalvotes": 4283603,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 49033,
  "totalvotes": 4283603,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 8564,
  "totalvotes": 4283603,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 4729,
  "totalvotes": 4283603,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 4029,
  "totalvotes": 4283603,
  "party": "socialist workers",
  "candidate": "Congress, Richard"
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 3790,
  "totalvotes": 4283603,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "OH",
  "candidatevotes": 27,
  "totalvotes": 4283603,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "OK",
  "candidatevotes": 695570,
  "totalvotes": 1149708,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "OK",
  "candidatevotes": 402026,
  "totalvotes": 1149708,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "OK",
  "candidatevotes": 38284,
  "totalvotes": 1149708,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "OK",
  "candidatevotes": 13828,
  "totalvotes": 1149708,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "OR",
  "candidatevotes": 571044,
  "totalvotes": 1181516,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "OR",
  "candidatevotes": 456890,
  "totalvotes": 1181516,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "OR",
  "candidatevotes": 112389,
  "totalvotes": 1181516,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "OR",
  "candidatevotes": 25838,
  "totalvotes": 1181516,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "OR",
  "candidatevotes": 13642,
  "totalvotes": 1181516,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "OR",
  "candidatevotes": 1713,
  "totalvotes": 1181516,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 2261872,
  "totalvotes": 4561501,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 1937540,
  "totalvotes": 4561501,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 292921,
  "totalvotes": 4561501,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 33263,
  "totalvotes": 4561501,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 20291,
  "totalvotes": 4561501,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 10430,
  "totalvotes": 4561501,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "PA",
  "candidatevotes": 5184,
  "totalvotes": 4561501,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 198342,
  "totalvotes": 415967,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 154793,
  "totalvotes": 415967,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 59819,
  "totalvotes": 415967,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 2458,
  "totalvotes": 415967,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 218,
  "totalvotes": 415967,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 170,
  "totalvotes": 415967,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 90,
  "totalvotes": 415967,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "RI",
  "candidatevotes": 77,
  "totalvotes": 415967,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "SC",
  "candidatevotes": 439277,
  "totalvotes": 888258,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "SC",
  "candidatevotes": 428220,
  "totalvotes": 888258,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "SC",
  "candidatevotes": 13868,
  "totalvotes": 888258,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "SC",
  "candidatevotes": 4807,
  "totalvotes": 888258,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "SC",
  "candidatevotes": 2086,
  "totalvotes": 888258,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "SD",
  "candidatevotes": 198343,
  "totalvotes": 327703,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "SD",
  "candidatevotes": 103855,
  "totalvotes": 327703,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "SD",
  "candidatevotes": 21431,
  "totalvotes": 327703,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "SD",
  "candidatevotes": 3824,
  "totalvotes": 327703,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "SD",
  "candidatevotes": 250,
  "totalvotes": 327703,
  "party": "socialist workers",
  "candidate": "Pulley, Andrew"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 787761,
  "totalvotes": 1617616,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 783051,
  "totalvotes": 1617616,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 35991,
  "totalvotes": 1617616,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 7116,
  "totalvotes": 1617616,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 1112,
  "totalvotes": 1617616,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 521,
  "totalvotes": 1617616,
  "party": "statesman",
  "candidate": "Bubar, Benjamin \"\"Ben\""
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 519,
  "totalvotes": 1617616,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 503,
  "totalvotes": 1617616,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 490,
  "totalvotes": 1617616,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 400,
  "totalvotes": 1617616,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "TN",
  "candidatevotes": 152,
  "totalvotes": 1617616,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "TX",
  "candidatevotes": 2510705,
  "totalvotes": 4541636,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "TX",
  "candidatevotes": 1881147,
  "totalvotes": 4541636,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "TX",
  "candidatevotes": 111613,
  "totalvotes": 4541636,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "TX",
  "candidatevotes": 37643,
  "totalvotes": 4541636,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "TX",
  "candidatevotes": 528,
  "totalvotes": 4541636,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 439687,
  "totalvotes": 604152,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 124266,
  "totalvotes": 604152,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 30284,
  "totalvotes": 604152,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 7156,
  "totalvotes": 604152,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 1009,
  "totalvotes": 604152,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 965,
  "totalvotes": 604152,
  "party": "american",
  "candidate": "Greaves, Percy L, Jr."
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 522,
  "totalvotes": 604152,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 139,
  "totalvotes": 604152,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "UT",
  "candidatevotes": 124,
  "totalvotes": 604152,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 94628,
  "totalvotes": 213299,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 81952,
  "totalvotes": 213299,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 31761,
  "totalvotes": 213299,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 2316,
  "totalvotes": 213299,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 1900,
  "totalvotes": 213299,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 413,
  "totalvotes": 213299,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 136,
  "totalvotes": 213299,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 118,
  "totalvotes": 213299,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "VT",
  "candidatevotes": 75,
  "totalvotes": 213299,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "VA",
  "candidatevotes": 989609,
  "totalvotes": 1866032,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "VA",
  "candidatevotes": 752174,
  "totalvotes": 1866032,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "VA",
  "candidatevotes": 95418,
  "totalvotes": 1866032,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "VA",
  "candidatevotes": 14024,
  "totalvotes": 1866032,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "VA",
  "candidatevotes": 12821,
  "totalvotes": 1866032,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "VA",
  "candidatevotes": 1986,
  "totalvotes": 1866032,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 865244,
  "totalvotes": 1742394,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 650193,
  "totalvotes": 1742394,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 185073,
  "totalvotes": 1742394,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 29213,
  "totalvotes": 1742394,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 9403,
  "totalvotes": 1742394,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 1137,
  "totalvotes": 1742394,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 956,
  "totalvotes": 1742394,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 834,
  "totalvotes": 1742394,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "WA",
  "candidatevotes": 341,
  "totalvotes": 1742394,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "WV",
  "candidatevotes": 367462,
  "totalvotes": 737715,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "WV",
  "candidatevotes": 334206,
  "totalvotes": 737715,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "WV",
  "candidatevotes": 31691,
  "totalvotes": 737715,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "WV",
  "candidatevotes": 4356,
  "totalvotes": 737715,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 1088845,
  "totalvotes": 2273221,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 981584,
  "totalvotes": 2273221,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 160657,
  "totalvotes": 2273221,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 29135,
  "totalvotes": 2273221,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 7767,
  "totalvotes": 2273221,
  "party": "citizens",
  "candidate": "Commoner, Barry"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 1519,
  "totalvotes": 2273221,
  "party": "american independent party",
  "candidate": "Rarick, John"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 1337,
  "totalvotes": 2273221,
  "party": "",
  "candidate": ""
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 808,
  "totalvotes": 2273221,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 772,
  "totalvotes": 2273221,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 414,
  "totalvotes": 2273221,
  "party": "workers world",
  "candidate": "Griswold, Deirdre"
}, {
  "year": 1980,
  "state_po": "WI",
  "candidatevotes": 383,
  "totalvotes": 2273221,
  "party": "socialist workers",
  "candidate": "Deberry, Clifton"
}, {
  "year": 1980,
  "state_po": "WY",
  "candidatevotes": 110700,
  "totalvotes": 176713,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1980,
  "state_po": "WY",
  "candidatevotes": 49427,
  "totalvotes": 176713,
  "party": "democrat",
  "candidate": "Carter, Jimmy"
}, {
  "year": 1980,
  "state_po": "WY",
  "candidatevotes": 12072,
  "totalvotes": 176713,
  "party": "independent",
  "candidate": "Anderson, John B."
}, {
  "year": 1980,
  "state_po": "WY",
  "candidatevotes": 4514,
  "totalvotes": 176713,
  "party": "libertarian",
  "candidate": "Clark, Edward \"\"Ed\""
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 872849,
  "totalvotes": 1441713,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 551899,
  "totalvotes": 1441713,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 9504,
  "totalvotes": 1441713,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 4671,
  "totalvotes": 1441713,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 1401,
  "totalvotes": 1441713,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 730,
  "totalvotes": 1441713,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "AL",
  "candidatevotes": 659,
  "totalvotes": 1441713,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "AK",
  "candidatevotes": 138377,
  "totalvotes": 207605,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "AK",
  "candidatevotes": 62007,
  "totalvotes": 207605,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "AK",
  "candidatevotes": 6378,
  "totalvotes": 207605,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "AK",
  "candidatevotes": 843,
  "totalvotes": 207605,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "AZ",
  "candidatevotes": 681416,
  "totalvotes": 1025897,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "AZ",
  "candidatevotes": 333854,
  "totalvotes": 1025897,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "AZ",
  "candidatevotes": 10585,
  "totalvotes": 1025897,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "AZ",
  "candidatevotes": 42,
  "totalvotes": 1025897,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 534774,
  "totalvotes": 884406,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 338646,
  "totalvotes": 884406,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 2221,
  "totalvotes": 884406,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 1890,
  "totalvotes": 884406,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 1499,
  "totalvotes": 884406,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 1461,
  "totalvotes": 884406,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 1291,
  "totalvotes": 884406,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 960,
  "totalvotes": 884406,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 842,
  "totalvotes": 884406,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1984,
  "state_po": "AR",
  "candidatevotes": 822,
  "totalvotes": 884406,
  "party": "united sovereign citizens",
  "candidate": "Lowery, Arthur"
}, {
  "year": 1984,
  "state_po": "CA",
  "candidatevotes": 5467009,
  "totalvotes": 9505041,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "CA",
  "candidatevotes": 3922519,
  "totalvotes": 9505041,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "CA",
  "candidatevotes": 49951,
  "totalvotes": 9505041,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "CA",
  "candidatevotes": 39265,
  "totalvotes": 9505041,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "CA",
  "candidatevotes": 26297,
  "totalvotes": 9505041,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 821817,
  "totalvotes": 1295380,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 454975,
  "totalvotes": 1295380,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 11257,
  "totalvotes": 1295380,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 4662,
  "totalvotes": 1295380,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 978,
  "totalvotes": 1295380,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 858,
  "totalvotes": 1295380,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 810,
  "totalvotes": 1295380,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "CO",
  "candidatevotes": 23,
  "totalvotes": 1295380,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "CT",
  "candidatevotes": 890877,
  "totalvotes": 1466900,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "CT",
  "candidatevotes": 569597,
  "totalvotes": 1466900,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "CT",
  "candidatevotes": 4826,
  "totalvotes": 1466900,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "CT",
  "candidatevotes": 1374,
  "totalvotes": 1466900,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "CT",
  "candidatevotes": 226,
  "totalvotes": 1466900,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "DE",
  "candidatevotes": 152190,
  "totalvotes": 254572,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "DE",
  "candidatevotes": 101656,
  "totalvotes": 254572,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "DE",
  "candidatevotes": 269,
  "totalvotes": 254572,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1984,
  "state_po": "DE",
  "candidatevotes": 268,
  "totalvotes": 254572,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "DE",
  "candidatevotes": 121,
  "totalvotes": 254572,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "DE",
  "candidatevotes": 68,
  "totalvotes": 254572,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 180408,
  "totalvotes": 211288,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 29009,
  "totalvotes": 211288,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 809,
  "totalvotes": 211288,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 279,
  "totalvotes": 211288,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 257,
  "totalvotes": 211288,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 165,
  "totalvotes": 211288,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 127,
  "totalvotes": 211288,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 127,
  "totalvotes": 211288,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "DC",
  "candidatevotes": 107,
  "totalvotes": 211288,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "FL",
  "candidatevotes": 2730350,
  "totalvotes": 4180051,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "FL",
  "candidatevotes": 1448816,
  "totalvotes": 4180051,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "FL",
  "candidatevotes": 885,
  "totalvotes": 4180051,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "GA",
  "candidatevotes": 1068722,
  "totalvotes": 1776103,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "GA",
  "candidatevotes": 706628,
  "totalvotes": 1776103,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "GA",
  "candidatevotes": 753,
  "totalvotes": 1776103,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "HI",
  "candidatevotes": 185050,
  "totalvotes": 335846,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "HI",
  "candidatevotes": 147154,
  "totalvotes": 335846,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "HI",
  "candidatevotes": 2167,
  "totalvotes": 335846,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "HI",
  "candidatevotes": 821,
  "totalvotes": 335846,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "HI",
  "candidatevotes": 654,
  "totalvotes": 335846,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "ID",
  "candidatevotes": 297523,
  "totalvotes": 411144,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "ID",
  "candidatevotes": 108510,
  "totalvotes": 411144,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "ID",
  "candidatevotes": 2823,
  "totalvotes": 411144,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "ID",
  "candidatevotes": 2288,
  "totalvotes": 411144,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 2707103,
  "totalvotes": 4819088,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 2086499,
  "totalvotes": 4819088,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 10086,
  "totalvotes": 4819088,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 4672,
  "totalvotes": 4819088,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 2716,
  "totalvotes": 4819088,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 2632,
  "totalvotes": 4819088,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 2386,
  "totalvotes": 4819088,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 2132,
  "totalvotes": 4819088,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "IL",
  "candidatevotes": 862,
  "totalvotes": 4819088,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "IN",
  "candidatevotes": 1377230,
  "totalvotes": 2233069,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "IN",
  "candidatevotes": 841481,
  "totalvotes": 2233069,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "IN",
  "candidatevotes": 7617,
  "totalvotes": 2233069,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1984,
  "state_po": "IN",
  "candidatevotes": 6741,
  "totalvotes": 2233069,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 703088,
  "totalvotes": 1319805,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 605620,
  "totalvotes": 1319805,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 6248,
  "totalvotes": 1319805,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 1844,
  "totalvotes": 1319805,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 1051,
  "totalvotes": 1319805,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 892,
  "totalvotes": 1319805,
  "party": "big deal party",
  "candidate": "Baker, Gerald"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 463,
  "totalvotes": 1319805,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 313,
  "totalvotes": 1319805,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "IA",
  "candidatevotes": 286,
  "totalvotes": 1319805,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "KS",
  "candidatevotes": 677296,
  "totalvotes": 1021991,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "KS",
  "candidatevotes": 333149,
  "totalvotes": 1021991,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "KS",
  "candidatevotes": 3564,
  "totalvotes": 1021991,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "KS",
  "candidatevotes": 3329,
  "totalvotes": 1021991,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "KS",
  "candidatevotes": 2544,
  "totalvotes": 1021991,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "KS",
  "candidatevotes": 2109,
  "totalvotes": 1021991,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 821702,
  "totalvotes": 1369345,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 539539,
  "totalvotes": 1369345,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 3129,
  "totalvotes": 1369345,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 1776,
  "totalvotes": 1369345,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 1479,
  "totalvotes": 1369345,
  "party": "national unity",
  "candidate": "Anderson, John B."
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 599,
  "totalvotes": 1369345,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 428,
  "totalvotes": 1369345,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 365,
  "totalvotes": 1369345,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "KY",
  "candidatevotes": 328,
  "totalvotes": 1369345,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 1037299,
  "totalvotes": 1706822,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 651586,
  "totalvotes": 1706822,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 9502,
  "totalvotes": 1706822,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 3552,
  "totalvotes": 1706822,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 1876,
  "totalvotes": 1706822,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 1310,
  "totalvotes": 1706822,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 1164,
  "totalvotes": 1706822,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "LA",
  "candidatevotes": 533,
  "totalvotes": 1706822,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "ME",
  "candidatevotes": 336500,
  "totalvotes": 553144,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "ME",
  "candidatevotes": 214515,
  "totalvotes": 553144,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "ME",
  "candidatevotes": 1292,
  "totalvotes": 553144,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "ME",
  "candidatevotes": 755,
  "totalvotes": 553144,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "ME",
  "candidatevotes": 82,
  "totalvotes": 553144,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "MD",
  "candidatevotes": 879918,
  "totalvotes": 1675873,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MD",
  "candidatevotes": 787935,
  "totalvotes": 1675873,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MD",
  "candidatevotes": 5721,
  "totalvotes": 1675873,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "MD",
  "candidatevotes": 898,
  "totalvotes": 1675873,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "MD",
  "candidatevotes": 745,
  "totalvotes": 1675873,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "MD",
  "candidatevotes": 656,
  "totalvotes": 1675873,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "MA",
  "candidatevotes": 1310936,
  "totalvotes": 2559383,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MA",
  "candidatevotes": 1239606,
  "totalvotes": 2559383,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MA",
  "candidatevotes": 7998,
  "totalvotes": 2559383,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "MA",
  "candidatevotes": 843,
  "totalvotes": 2559383,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 2251571,
  "totalvotes": 3801658,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 1529638,
  "totalvotes": 3801658,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 10055,
  "totalvotes": 3801658,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 3862,
  "totalvotes": 3801658,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 1416,
  "totalvotes": 3801658,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 1191,
  "totalvotes": 3801658,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 1049,
  "totalvotes": 3801658,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 1048,
  "totalvotes": 3801658,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 665,
  "totalvotes": 3801658,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 602,
  "totalvotes": 3801658,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "MI",
  "candidatevotes": 561,
  "totalvotes": 3801658,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 1036364,
  "totalvotes": 2084449,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 1032603,
  "totalvotes": 2084449,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 3865,
  "totalvotes": 2084449,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 3180,
  "totalvotes": 2084449,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 2996,
  "totalvotes": 2084449,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 2377,
  "totalvotes": 2084449,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 1219,
  "totalvotes": 2084449,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 723,
  "totalvotes": 2084449,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 630,
  "totalvotes": 2084449,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 260,
  "totalvotes": 2084449,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1984,
  "state_po": "MN",
  "candidatevotes": 232,
  "totalvotes": 2084449,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 582377,
  "totalvotes": 941104,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 352192,
  "totalvotes": 941104,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 2336,
  "totalvotes": 941104,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 1169,
  "totalvotes": 941104,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 1032,
  "totalvotes": 941104,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 1001,
  "totalvotes": 941104,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 641,
  "totalvotes": 941104,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "MS",
  "candidatevotes": 356,
  "totalvotes": 941104,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "MO",
  "candidatevotes": 1274188,
  "totalvotes": 2122771,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MO",
  "candidatevotes": 848583,
  "totalvotes": 2122771,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MT",
  "candidatevotes": 232450,
  "totalvotes": 384377,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "MT",
  "candidatevotes": 146742,
  "totalvotes": 384377,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "MT",
  "candidatevotes": 5185,
  "totalvotes": 384377,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NE",
  "candidatevotes": 460054,
  "totalvotes": 652090,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NE",
  "candidatevotes": 187866,
  "totalvotes": 652090,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NE",
  "candidatevotes": 2079,
  "totalvotes": 652090,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NE",
  "candidatevotes": 1066,
  "totalvotes": 652090,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "NE",
  "candidatevotes": 1025,
  "totalvotes": 652090,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "NV",
  "candidatevotes": 188770,
  "totalvotes": 282717,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NV",
  "candidatevotes": 91655,
  "totalvotes": 282717,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NV",
  "candidatevotes": 2292,
  "totalvotes": 282717,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NH",
  "candidatevotes": 267050,
  "totalvotes": 388904,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NH",
  "candidatevotes": 120347,
  "totalvotes": 388904,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NH",
  "candidatevotes": 735,
  "totalvotes": 388904,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NH",
  "candidatevotes": 467,
  "totalvotes": 388904,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "NH",
  "candidatevotes": 305,
  "totalvotes": 388904,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 1933630,
  "totalvotes": 3217862,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 1261323,
  "totalvotes": 3217862,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 8404,
  "totalvotes": 3217862,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 6416,
  "totalvotes": 3217862,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 2293,
  "totalvotes": 3217862,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 1721,
  "totalvotes": 3217862,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 1564,
  "totalvotes": 3217862,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 1264,
  "totalvotes": 3217862,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "NJ",
  "candidatevotes": 1247,
  "totalvotes": 3217862,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 307101,
  "totalvotes": 514370,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 201769,
  "totalvotes": 514370,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 4459,
  "totalvotes": 514370,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 455,
  "totalvotes": 514370,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 224,
  "totalvotes": 514370,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 206,
  "totalvotes": 514370,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 155,
  "totalvotes": 514370,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "NM",
  "candidatevotes": 1,
  "totalvotes": 514370,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 3664763,
  "totalvotes": 6806810,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 3119609,
  "totalvotes": 6806810,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 11949,
  "totalvotes": 6806810,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 4226,
  "totalvotes": 6806810,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 3200,
  "totalvotes": 6806810,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 2226,
  "totalvotes": 6806810,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "NY",
  "candidatevotes": 837,
  "totalvotes": 6806810,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "NC",
  "candidatevotes": 1346481,
  "totalvotes": 2175361,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "NC",
  "candidatevotes": 824287,
  "totalvotes": 2175361,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "NC",
  "candidatevotes": 3794,
  "totalvotes": 2175361,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "NC",
  "candidatevotes": 799,
  "totalvotes": 2175361,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 200336,
  "totalvotes": 308971,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 104429,
  "totalvotes": 308971,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 1278,
  "totalvotes": 308971,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 1077,
  "totalvotes": 308971,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 703,
  "totalvotes": 308971,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 368,
  "totalvotes": 308971,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 239,
  "totalvotes": 308971,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 220,
  "totalvotes": 308971,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 169,
  "totalvotes": 308971,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "ND",
  "candidatevotes": 152,
  "totalvotes": 308971,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 2678559,
  "totalvotes": 4563235,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 1825440,
  "totalvotes": 4563235,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 24180,
  "totalvotes": 4563235,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 10693,
  "totalvotes": 4563235,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 7130,
  "totalvotes": 4563235,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 5886,
  "totalvotes": 4563235,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 4438,
  "totalvotes": 4563235,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 4344,
  "totalvotes": 4563235,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "OH",
  "candidatevotes": 2565,
  "totalvotes": 4563235,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "OK",
  "candidatevotes": 861530,
  "totalvotes": 1255676,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "OK",
  "candidatevotes": 385080,
  "totalvotes": 1255676,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "OK",
  "candidatevotes": 9066,
  "totalvotes": 1255676,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "OR",
  "candidatevotes": 685700,
  "totalvotes": 1226527,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "OR",
  "candidatevotes": 536479,
  "totalvotes": 1226527,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "OR",
  "candidatevotes": 4348,
  "totalvotes": 1226527,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "PA",
  "candidatevotes": 2584323,
  "totalvotes": 4844903,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "PA",
  "candidatevotes": 2228131,
  "totalvotes": 4844903,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "PA",
  "candidatevotes": 21628,
  "totalvotes": 4844903,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "PA",
  "candidatevotes": 6982,
  "totalvotes": 4844903,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "PA",
  "candidatevotes": 2059,
  "totalvotes": 4844903,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1984,
  "state_po": "PA",
  "candidatevotes": 1780,
  "totalvotes": 4844903,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 212080,
  "totalvotes": 410489,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 197106,
  "totalvotes": 410489,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 510,
  "totalvotes": 410489,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 277,
  "totalvotes": 410489,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 240,
  "totalvotes": 410489,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 91,
  "totalvotes": 410489,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 75,
  "totalvotes": 410489,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 61,
  "totalvotes": 410489,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "RI",
  "candidatevotes": 49,
  "totalvotes": 410489,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "SC",
  "candidatevotes": 615539,
  "totalvotes": 968529,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "SC",
  "candidatevotes": 344459,
  "totalvotes": 968529,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "SC",
  "candidatevotes": 4359,
  "totalvotes": 968529,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "SC",
  "candidatevotes": 3490,
  "totalvotes": 968529,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1984,
  "state_po": "SC",
  "candidatevotes": 682,
  "totalvotes": 968529,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "SD",
  "candidatevotes": 200267,
  "totalvotes": 317867,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "SD",
  "candidatevotes": 116113,
  "totalvotes": 317867,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "SD",
  "candidatevotes": 1150,
  "totalvotes": 317867,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "SD",
  "candidatevotes": 337,
  "totalvotes": 317867,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 990212,
  "totalvotes": 1711993,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 711714,
  "totalvotes": 1711993,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 3072,
  "totalvotes": 1711993,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 1852,
  "totalvotes": 1711993,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 1763,
  "totalvotes": 1711993,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 1036,
  "totalvotes": 1711993,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 978,
  "totalvotes": 1711993,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 715,
  "totalvotes": 1711993,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 524,
  "totalvotes": 1711993,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "TN",
  "candidatevotes": 127,
  "totalvotes": 1711993,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "TX",
  "candidatevotes": 3433428,
  "totalvotes": 5397571,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "TX",
  "candidatevotes": 1949276,
  "totalvotes": 5397571,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "TX",
  "candidatevotes": 14613,
  "totalvotes": 5397571,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "TX",
  "candidatevotes": 254,
  "totalvotes": 5397571,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 469105,
  "totalvotes": 629656,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 155369,
  "totalvotes": 629656,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 2447,
  "totalvotes": 629656,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 1345,
  "totalvotes": 629656,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 844,
  "totalvotes": 629656,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 220,
  "totalvotes": 629656,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 184,
  "totalvotes": 629656,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "UT",
  "candidatevotes": 142,
  "totalvotes": 629656,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 135865,
  "totalvotes": 234561,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 95730,
  "totalvotes": 234561,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 1002,
  "totalvotes": 234561,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 712,
  "totalvotes": 234561,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 423,
  "totalvotes": 234561,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 323,
  "totalvotes": 234561,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 264,
  "totalvotes": 234561,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 127,
  "totalvotes": 234561,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "VT",
  "candidatevotes": 115,
  "totalvotes": 234561,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "VA",
  "candidatevotes": 1337078,
  "totalvotes": 2146635,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "VA",
  "candidatevotes": 796250,
  "totalvotes": 2146635,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "VA",
  "candidatevotes": 13307,
  "totalvotes": 2146635,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 1051670,
  "totalvotes": 1874910,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 798352,
  "totalvotes": 1874910,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 8844,
  "totalvotes": 1874910,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 5724,
  "totalvotes": 1874910,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 4712,
  "totalvotes": 1874910,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 1891,
  "totalvotes": 1874910,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 1654,
  "totalvotes": 1874910,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 814,
  "totalvotes": 1874910,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 641,
  "totalvotes": 1874910,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "WA",
  "candidatevotes": 608,
  "totalvotes": 1874910,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "WV",
  "candidatevotes": 405483,
  "totalvotes": 735742,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "WV",
  "candidatevotes": 328125,
  "totalvotes": 735742,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "WV",
  "candidatevotes": 996,
  "totalvotes": 735742,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "WV",
  "candidatevotes": 645,
  "totalvotes": 735742,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "WV",
  "candidatevotes": 493,
  "totalvotes": 735742,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 1198584,
  "totalvotes": 2211689,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 995740,
  "totalvotes": 2211689,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 4883,
  "totalvotes": 2211689,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 3864,
  "totalvotes": 2211689,
  "party": "populist",
  "candidate": "Richards, Bob"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 3791,
  "totalvotes": 2211689,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 1456,
  "totalvotes": 2211689,
  "party": "citizens",
  "candidate": "Johnson, Sonia"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 1006,
  "totalvotes": 2211689,
  "party": "alliance",
  "candidate": "Serrette, Dennis"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 706,
  "totalvotes": 2211689,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 619,
  "totalvotes": 2211689,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 596,
  "totalvotes": 2211689,
  "party": "communist party use",
  "candidate": "Hall, Gus"
}, {
  "year": 1984,
  "state_po": "WI",
  "candidatevotes": 444,
  "totalvotes": 2211689,
  "party": "socialist workers",
  "candidate": "Mason, Melvin"
}, {
  "year": 1984,
  "state_po": "WY",
  "candidatevotes": 133241,
  "totalvotes": 188968,
  "party": "republican",
  "candidate": "Reagan, Ronald"
}, {
  "year": 1984,
  "state_po": "WY",
  "candidatevotes": 53370,
  "totalvotes": 188968,
  "party": "democrat",
  "candidate": "Mondale, Walter"
}, {
  "year": 1984,
  "state_po": "WY",
  "candidatevotes": 2357,
  "totalvotes": 188968,
  "party": "libertarian",
  "candidate": "Bergland, David"
}, {
  "year": 1988,
  "state_po": "AL",
  "candidatevotes": 815576,
  "totalvotes": 1378476,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "AL",
  "candidatevotes": 549506,
  "totalvotes": 1378476,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "AL",
  "candidatevotes": 8460,
  "totalvotes": 1378476,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "AL",
  "candidatevotes": 4428,
  "totalvotes": 1378476,
  "party": "independent",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "AL",
  "candidatevotes": 506,
  "totalvotes": 1378476,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "AK",
  "candidatevotes": 119251,
  "totalvotes": 200116,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "AK",
  "candidatevotes": 72584,
  "totalvotes": 200116,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "AK",
  "candidatevotes": 5484,
  "totalvotes": 200116,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "AK",
  "candidatevotes": 1024,
  "totalvotes": 200116,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "AK",
  "candidatevotes": 957,
  "totalvotes": 200116,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "AK",
  "candidatevotes": 816,
  "totalvotes": 200116,
  "party": "national economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "AZ",
  "candidatevotes": 702541,
  "totalvotes": 1171873,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "AZ",
  "candidatevotes": 454029,
  "totalvotes": 1171873,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "AZ",
  "candidatevotes": 13351,
  "totalvotes": 1171873,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "AZ",
  "candidatevotes": 1662,
  "totalvotes": 1171873,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "AZ",
  "candidatevotes": 290,
  "totalvotes": 1171873,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "AR",
  "candidatevotes": 466578,
  "totalvotes": 827738,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "AR",
  "candidatevotes": 349237,
  "totalvotes": 827738,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "AR",
  "candidatevotes": 6465,
  "totalvotes": 827738,
  "party": "populist",
  "candidate": "Dodge, Earl"
}, {
  "year": 1988,
  "state_po": "AR",
  "candidatevotes": 3297,
  "totalvotes": 827738,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "AR",
  "candidatevotes": 2161,
  "totalvotes": 827738,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "CA",
  "candidatevotes": 5054917,
  "totalvotes": 9887065,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "CA",
  "candidatevotes": 4702233,
  "totalvotes": 9887065,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "CA",
  "candidatevotes": 70105,
  "totalvotes": 9887065,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "CA",
  "candidatevotes": 58999,
  "totalvotes": 9887065,
  "party": "independent",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "CA",
  "candidatevotes": 811,
  "totalvotes": 9887065,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "CO",
  "candidatevotes": 728177,
  "totalvotes": 1372394,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "CO",
  "candidatevotes": 621453,
  "totalvotes": 1372394,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "CO",
  "candidatevotes": 15482,
  "totalvotes": 1372394,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "CO",
  "candidatevotes": 4604,
  "totalvotes": 1372394,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1988,
  "state_po": "CO",
  "candidatevotes": 2539,
  "totalvotes": 1372394,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "CO",
  "candidatevotes": 139,
  "totalvotes": 1372394,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "CT",
  "candidatevotes": 750241,
  "totalvotes": 1443394,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "CT",
  "candidatevotes": 676584,
  "totalvotes": 1443394,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "CT",
  "candidatevotes": 14071,
  "totalvotes": 1443394,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "CT",
  "candidatevotes": 2491,
  "totalvotes": 1443394,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "CT",
  "candidatevotes": 7,
  "totalvotes": 1443394,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "DE",
  "candidatevotes": 139639,
  "totalvotes": 249891,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "DE",
  "candidatevotes": 108647,
  "totalvotes": 249891,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "DE",
  "candidatevotes": 1162,
  "totalvotes": 249891,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "DE",
  "candidatevotes": 443,
  "totalvotes": 249891,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 159407,
  "totalvotes": 192877,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 27590,
  "totalvotes": 192877,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 4853,
  "totalvotes": 192877,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 554,
  "totalvotes": 192877,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 208,
  "totalvotes": 192877,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 142,
  "totalvotes": 192877,
  "party": "socialist",
  "candidate": "Kenoyer, Willa"
}, {
  "year": 1988,
  "state_po": "DC",
  "candidatevotes": 123,
  "totalvotes": 192877,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "FL",
  "candidatevotes": 2618885,
  "totalvotes": 4302313,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "FL",
  "candidatevotes": 1656701,
  "totalvotes": 4302313,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "FL",
  "candidatevotes": 19796,
  "totalvotes": 4302313,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "FL",
  "candidatevotes": 6655,
  "totalvotes": 4302313,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "FL",
  "candidatevotes": 276,
  "totalvotes": 4302313,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "GA",
  "candidatevotes": 1081331,
  "totalvotes": 1809672,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "GA",
  "candidatevotes": 714792,
  "totalvotes": 1809672,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "GA",
  "candidatevotes": 8435,
  "totalvotes": 1809672,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "GA",
  "candidatevotes": 5099,
  "totalvotes": 1809672,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "GA",
  "candidatevotes": 15,
  "totalvotes": 1809672,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "HI",
  "candidatevotes": 192364,
  "totalvotes": 354461,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "HI",
  "candidatevotes": 158625,
  "totalvotes": 354461,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "HI",
  "candidatevotes": 1999,
  "totalvotes": 354461,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "HI",
  "candidatevotes": 1003,
  "totalvotes": 354461,
  "party": "no party affiliation",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "HI",
  "candidatevotes": 470,
  "totalvotes": 354461,
  "party": "national economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "ID",
  "candidatevotes": 253881,
  "totalvotes": 408968,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "ID",
  "candidatevotes": 147272,
  "totalvotes": 408968,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "ID",
  "candidatevotes": 5313,
  "totalvotes": 408968,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "ID",
  "candidatevotes": 2502,
  "totalvotes": 408968,
  "party": "independent",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "IL",
  "candidatevotes": 2310939,
  "totalvotes": 4559120,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "IL",
  "candidatevotes": 2215940,
  "totalvotes": 4559120,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "IL",
  "candidatevotes": 14944,
  "totalvotes": 4559120,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "IL",
  "candidatevotes": 10276,
  "totalvotes": 4559120,
  "party": "solidarity",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "IL",
  "candidatevotes": 7021,
  "totalvotes": 4559120,
  "party": "independent",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "IN",
  "candidatevotes": 1297763,
  "totalvotes": 2168621,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "IN",
  "candidatevotes": 860643,
  "totalvotes": 2168621,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "IN",
  "candidatevotes": 10215,
  "totalvotes": 2168621,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 670557,
  "totalvotes": 1225614,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 545355,
  "totalvotes": 1225614,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 3526,
  "totalvotes": 1225614,
  "party": "nominated by petition",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 2494,
  "totalvotes": 1225614,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 1613,
  "totalvotes": 1225614,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 755,
  "totalvotes": 1225614,
  "party": "patriotic party",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 540,
  "totalvotes": 1225614,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 334,
  "totalvotes": 1225614,
  "party": "socialist",
  "candidate": "Kenoyer, Willa"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 235,
  "totalvotes": 1225614,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "IA",
  "candidatevotes": 205,
  "totalvotes": 1225614,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "KS",
  "candidatevotes": 554049,
  "totalvotes": 993044,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "KS",
  "candidatevotes": 422636,
  "totalvotes": 993044,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "KS",
  "candidatevotes": 16359,
  "totalvotes": 993044,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "KY",
  "candidatevotes": 734281,
  "totalvotes": 1322517,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "KY",
  "candidatevotes": 580368,
  "totalvotes": 1322517,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "KY",
  "candidatevotes": 4494,
  "totalvotes": 1322517,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "KY",
  "candidatevotes": 2118,
  "totalvotes": 1322517,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "KY",
  "candidatevotes": 1256,
  "totalvotes": 1322517,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "LA",
  "candidatevotes": 883702,
  "totalvotes": 1628202,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "LA",
  "candidatevotes": 717460,
  "totalvotes": 1628202,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "LA",
  "candidatevotes": 18612,
  "totalvotes": 1628202,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "LA",
  "candidatevotes": 4115,
  "totalvotes": 1628202,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "LA",
  "candidatevotes": 2355,
  "totalvotes": 1628202,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "LA",
  "candidatevotes": 1958,
  "totalvotes": 1628202,
  "party": "national economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "ME",
  "candidatevotes": 307131,
  "totalvotes": 555035,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "ME",
  "candidatevotes": 243569,
  "totalvotes": 555035,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "ME",
  "candidatevotes": 2700,
  "totalvotes": 555035,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "ME",
  "candidatevotes": 1405,
  "totalvotes": 555035,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "ME",
  "candidatevotes": 230,
  "totalvotes": 555035,
  "party": "other",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "MD",
  "candidatevotes": 876167,
  "totalvotes": 1714358,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MD",
  "candidatevotes": 826304,
  "totalvotes": 1714358,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MD",
  "candidatevotes": 6748,
  "totalvotes": 1714358,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "MD",
  "candidatevotes": 5115,
  "totalvotes": 1714358,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "MD",
  "candidatevotes": 24,
  "totalvotes": 1714358,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "MA",
  "candidatevotes": 1401415,
  "totalvotes": 2632801,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MA",
  "candidatevotes": 1194635,
  "totalvotes": 2632801,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MA",
  "candidatevotes": 24251,
  "totalvotes": 2632801,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "MA",
  "candidatevotes": 9561,
  "totalvotes": 2632801,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "MA",
  "candidatevotes": 2939,
  "totalvotes": 2632801,
  "party": "other",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "MI",
  "candidatevotes": 1965486,
  "totalvotes": 3669163,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MI",
  "candidatevotes": 1675783,
  "totalvotes": 3669163,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MI",
  "candidatevotes": 18336,
  "totalvotes": 3669163,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "MI",
  "candidatevotes": 7600,
  "totalvotes": 3669163,
  "party": "other",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "MI",
  "candidatevotes": 1958,
  "totalvotes": 3669163,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 1109471,
  "totalvotes": 2096790,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 962337,
  "totalvotes": 2096790,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 5403,
  "totalvotes": 2096790,
  "party": "progressive",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 5109,
  "totalvotes": 2096790,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 3614,
  "totalvotes": 2096790,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 2155,
  "totalvotes": 2096790,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 1949,
  "totalvotes": 2096790,
  "party": "grassroots",
  "candidate": "Herer, Jack"
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 1734,
  "totalvotes": 2096790,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 1702,
  "totalvotes": 2096790,
  "party": "national economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 1529,
  "totalvotes": 2096790,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 1298,
  "totalvotes": 2096790,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1988,
  "state_po": "MN",
  "candidatevotes": 489,
  "totalvotes": 2096790,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "MS",
  "candidatevotes": 557890,
  "totalvotes": 931527,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MS",
  "candidatevotes": 363921,
  "totalvotes": 931527,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MS",
  "candidatevotes": 6387,
  "totalvotes": 931527,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "MS",
  "candidatevotes": 3329,
  "totalvotes": 931527,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "MO",
  "candidatevotes": 1084953,
  "totalvotes": 2093228,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MO",
  "candidatevotes": 1001619,
  "totalvotes": 2093228,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MO",
  "candidatevotes": 6656,
  "totalvotes": 2093228,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "MT",
  "candidatevotes": 190412,
  "totalvotes": 365674,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "MT",
  "candidatevotes": 168936,
  "totalvotes": 365674,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "MT",
  "candidatevotes": 5047,
  "totalvotes": 365674,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "MT",
  "candidatevotes": 1279,
  "totalvotes": 365674,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NE",
  "candidatevotes": 397956,
  "totalvotes": 661465,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NE",
  "candidatevotes": 259235,
  "totalvotes": 661465,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NE",
  "candidatevotes": 2534,
  "totalvotes": 661465,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "NE",
  "candidatevotes": 1740,
  "totalvotes": 661465,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NV",
  "candidatevotes": 206040,
  "totalvotes": 343133,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NV",
  "candidatevotes": 132738,
  "totalvotes": 343133,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NV",
  "candidatevotes": 3520,
  "totalvotes": 343133,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "NV",
  "candidatevotes": 835,
  "totalvotes": 343133,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NH",
  "candidatevotes": 281537,
  "totalvotes": 450525,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NH",
  "candidatevotes": 163696,
  "totalvotes": 450525,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NH",
  "candidatevotes": 4502,
  "totalvotes": 450525,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "NH",
  "candidatevotes": 790,
  "totalvotes": 450525,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 1743192,
  "totalvotes": 3099553,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 1320352,
  "totalvotes": 3099553,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 9953,
  "totalvotes": 3099553,
  "party": "peace & freedom",
  "candidate": "Herberg G., Lewin"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 8421,
  "totalvotes": 3099553,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 5139,
  "totalvotes": 3099553,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 3454,
  "totalvotes": 3099553,
  "party": "consumer",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 2587,
  "totalvotes": 3099553,
  "party": "socialist",
  "candidate": "Kenoyer, Willa"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 2446,
  "totalvotes": 3099553,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 2298,
  "totalvotes": 3099553,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 1020,
  "totalvotes": 3099553,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1988,
  "state_po": "NJ",
  "candidatevotes": 691,
  "totalvotes": 3099553,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 270341,
  "totalvotes": 521387,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 244497,
  "totalvotes": 521387,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 3368,
  "totalvotes": 521387,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 2237,
  "totalvotes": 521387,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 344,
  "totalvotes": 521387,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 258,
  "totalvotes": 521387,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 249,
  "totalvotes": 521387,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1988,
  "state_po": "NM",
  "candidatevotes": 93,
  "totalvotes": 521387,
  "party": "write-in",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 3347882,
  "totalvotes": 6485683,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 3081871,
  "totalvotes": 6485683,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 20497,
  "totalvotes": 6485683,
  "party": "right-to-life",
  "candidate": "Marra, William A."
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 15845,
  "totalvotes": 6485683,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 12109,
  "totalvotes": 6485683,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 4179,
  "totalvotes": 6485683,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 3287,
  "totalvotes": 6485683,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "NY",
  "candidatevotes": 13,
  "totalvotes": 6485683,
  "party": "other",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "NC",
  "candidatevotes": 1237258,
  "totalvotes": 2134370,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "NC",
  "candidatevotes": 890167,
  "totalvotes": 2134370,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "NC",
  "candidatevotes": 5682,
  "totalvotes": 2134370,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "NC",
  "candidatevotes": 1263,
  "totalvotes": 2134370,
  "party": "",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "ND",
  "candidatevotes": 166559,
  "totalvotes": 297261,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "ND",
  "candidatevotes": 127739,
  "totalvotes": 297261,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "ND",
  "candidatevotes": 1315,
  "totalvotes": 297261,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "ND",
  "candidatevotes": 905,
  "totalvotes": 297261,
  "party": "national economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "ND",
  "candidatevotes": 396,
  "totalvotes": 297261,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "ND",
  "candidatevotes": 347,
  "totalvotes": 297261,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "OH",
  "candidatevotes": 2416549,
  "totalvotes": 4393585,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "OH",
  "candidatevotes": 1939629,
  "totalvotes": 4393585,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "OH",
  "candidatevotes": 12017,
  "totalvotes": 4393585,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "OH",
  "candidatevotes": 11926,
  "totalvotes": 4393585,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "OH",
  "candidatevotes": 8063,
  "totalvotes": 4393585,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "OH",
  "candidatevotes": 5401,
  "totalvotes": 4393585,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "OK",
  "candidatevotes": 678367,
  "totalvotes": 1171036,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "OK",
  "candidatevotes": 483423,
  "totalvotes": 1171036,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "OK",
  "candidatevotes": 6261,
  "totalvotes": 1171036,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "OK",
  "candidatevotes": 2985,
  "totalvotes": 1171036,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "OR",
  "candidatevotes": 616206,
  "totalvotes": 1201694,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "OR",
  "candidatevotes": 560126,
  "totalvotes": 1201694,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "OR",
  "candidatevotes": 14811,
  "totalvotes": 1201694,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "OR",
  "candidatevotes": 6487,
  "totalvotes": 1201694,
  "party": "independent",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "OR",
  "candidatevotes": 4064,
  "totalvotes": 1201694,
  "party": "other",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 2300087,
  "totalvotes": 4536251,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 2194944,
  "totalvotes": 4536251,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 19158,
  "totalvotes": 4536251,
  "party": "consumer",
  "candidate": "McCarthy, Eugene \"\"Gene\""
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 12051,
  "totalvotes": 4536251,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 4379,
  "totalvotes": 4536251,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 3444,
  "totalvotes": 4536251,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "PA",
  "candidatevotes": 2188,
  "totalvotes": 4536251,
  "party": "workers league",
  "candidate": "Winn, Edward"
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 225123,
  "totalvotes": 404622,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 177761,
  "totalvotes": 404622,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 825,
  "totalvotes": 404622,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 280,
  "totalvotes": 404622,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 195,
  "totalvotes": 404622,
  "party": "peace & freedom",
  "candidate": "Herberg G., Lewin"
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 159,
  "totalvotes": 404622,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 130,
  "totalvotes": 404622,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 96,
  "totalvotes": 404622,
  "party": "socialist",
  "candidate": "Kenoyer, Willa"
}, {
  "year": 1988,
  "state_po": "RI",
  "candidatevotes": 53,
  "totalvotes": 404622,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "SC",
  "candidatevotes": 606443,
  "totalvotes": 986009,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "SC",
  "candidatevotes": 370554,
  "totalvotes": 986009,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "SC",
  "candidatevotes": 4935,
  "totalvotes": 986009,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "SC",
  "candidatevotes": 4077,
  "totalvotes": 986009,
  "party": "united citizens",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "SD",
  "candidatevotes": 165415,
  "totalvotes": 312991,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "SD",
  "candidatevotes": 145560,
  "totalvotes": 312991,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "SD",
  "candidatevotes": 2016,
  "totalvotes": 312991,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "TN",
  "candidatevotes": 947233,
  "totalvotes": 1636250,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "TN",
  "candidatevotes": 679794,
  "totalvotes": 1636250,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "TN",
  "candidatevotes": 9223,
  "totalvotes": 1636250,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "TX",
  "candidatevotes": 3036829,
  "totalvotes": 5427410,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "TX",
  "candidatevotes": 2352748,
  "totalvotes": 5427410,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "TX",
  "candidatevotes": 30355,
  "totalvotes": 5427410,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "TX",
  "candidatevotes": 7208,
  "totalvotes": 5427410,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "TX",
  "candidatevotes": 270,
  "totalvotes": 5427410,
  "party": "",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 428442,
  "totalvotes": 647008,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 207343,
  "totalvotes": 647008,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 7473,
  "totalvotes": 647008,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 2158,
  "totalvotes": 647008,
  "party": "american",
  "candidate": "Dennis, Delmar"
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 455,
  "totalvotes": 647008,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 427,
  "totalvotes": 647008,
  "party": "national economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 372,
  "totalvotes": 647008,
  "party": "independent",
  "candidate": "Youngkeit, Louie G."
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 209,
  "totalvotes": 647008,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "UT",
  "candidatevotes": 129,
  "totalvotes": 647008,
  "party": "socialist",
  "candidate": "Kenoyer, Willa"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 124331,
  "totalvotes": 243328,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 115775,
  "totalvotes": 243328,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 1134,
  "totalvotes": 243328,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 1000,
  "totalvotes": 243328,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 275,
  "totalvotes": 243328,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 205,
  "totalvotes": 243328,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 189,
  "totalvotes": 243328,
  "party": "populist",
  "candidate": "Duke, David"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 164,
  "totalvotes": 243328,
  "party": "peace & freedom",
  "candidate": "Herberg G., Lewin"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 142,
  "totalvotes": 243328,
  "party": "liberty union party",
  "candidate": "Kenoyer, Willa"
}, {
  "year": 1988,
  "state_po": "VT",
  "candidatevotes": 113,
  "totalvotes": 243328,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "VA",
  "candidatevotes": 1309162,
  "totalvotes": 2191609,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "VA",
  "candidatevotes": 859799,
  "totalvotes": 2191609,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "VA",
  "candidatevotes": 14312,
  "totalvotes": 2191609,
  "party": "independent",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "VA",
  "candidatevotes": 8336,
  "totalvotes": 2191609,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 933516,
  "totalvotes": 1865253,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 903835,
  "totalvotes": 1865253,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 17240,
  "totalvotes": 1865253,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 4412,
  "totalvotes": 1865253,
  "party": "independent",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 3520,
  "totalvotes": 1865253,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 1440,
  "totalvotes": 1865253,
  "party": "workers world",
  "candidate": "Holmes, Larry"
}, {
  "year": 1988,
  "state_po": "WA",
  "candidatevotes": 1290,
  "totalvotes": 1865253,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1988,
  "state_po": "WV",
  "candidatevotes": 341016,
  "totalvotes": 653311,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "WV",
  "candidatevotes": 310065,
  "totalvotes": 653311,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "WV",
  "candidatevotes": 2230,
  "totalvotes": 653311,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1988,
  "state_po": "WI",
  "candidatevotes": 1126794,
  "totalvotes": 2191608,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "WI",
  "candidatevotes": 1047499,
  "totalvotes": 2191608,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "WI",
  "candidatevotes": 15042,
  "totalvotes": 2191608,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1988,
  "state_po": "WI",
  "candidatevotes": 2273,
  "totalvotes": 2191608,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1988,
  "state_po": "WY",
  "candidatevotes": 106867,
  "totalvotes": 176551,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1988,
  "state_po": "WY",
  "candidatevotes": 67113,
  "totalvotes": 176551,
  "party": "democrat",
  "candidate": "Dukakis, Michael"
}, {
  "year": 1988,
  "state_po": "WY",
  "candidatevotes": 2026,
  "totalvotes": 176551,
  "party": "libertarian",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 1988,
  "state_po": "WY",
  "candidatevotes": 545,
  "totalvotes": 176551,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "AL",
  "candidatevotes": 804283,
  "totalvotes": 1688060,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "AL",
  "candidatevotes": 690080,
  "totalvotes": 1688060,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "AL",
  "candidatevotes": 183109,
  "totalvotes": 1688060,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "AL",
  "candidatevotes": 5737,
  "totalvotes": 1688060,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "AL",
  "candidatevotes": 4128,
  "totalvotes": 1688060,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "AL",
  "candidatevotes": 723,
  "totalvotes": 1688060,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 102000,
  "totalvotes": 258506,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 78294,
  "totalvotes": 258506,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 73481,
  "totalvotes": 258506,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 1379,
  "totalvotes": 258506,
  "party": "america first",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 1378,
  "totalvotes": 258506,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 469,
  "totalvotes": 258506,
  "party": "independents for economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 433,
  "totalvotes": 258506,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 377,
  "totalvotes": 258506,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 365,
  "totalvotes": 258506,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "AK",
  "candidatevotes": 330,
  "totalvotes": 258506,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 572086,
  "totalvotes": 1486975,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 543050,
  "totalvotes": 1486975,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 353741,
  "totalvotes": 1486975,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 8141,
  "totalvotes": 1486975,
  "party": "independent",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 6759,
  "totalvotes": 1486975,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 2267,
  "totalvotes": 1486975,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 923,
  "totalvotes": 1486975,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "AZ",
  "candidatevotes": 8,
  "totalvotes": 1486975,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "AR",
  "candidatevotes": 505823,
  "totalvotes": 950653,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "AR",
  "candidatevotes": 337324,
  "totalvotes": 950653,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "AR",
  "candidatevotes": 99132,
  "totalvotes": 950653,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "AR",
  "candidatevotes": 8374,
  "totalvotes": 950653,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 5121325,
  "totalvotes": 11131721,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 3630574,
  "totalvotes": 11131721,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 2296006,
  "totalvotes": 11131721,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 48139,
  "totalvotes": 11131721,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 18597,
  "totalvotes": 11131721,
  "party": "peace & freedom",
  "candidate": "Daniels, Ron"
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 12711,
  "totalvotes": 11131721,
  "party": "american independent party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "CA",
  "candidatevotes": 4369,
  "totalvotes": 11131721,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 629681,
  "totalvotes": 1569180,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 562850,
  "totalvotes": 1569180,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 366010,
  "totalvotes": 1569180,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 8669,
  "totalvotes": 1569180,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 1608,
  "totalvotes": 1569180,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 274,
  "totalvotes": 1569180,
  "party": "democrat/republican",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 47,
  "totalvotes": 1569180,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 21,
  "totalvotes": 1569180,
  "party": "prohibition",
  "candidate": "Prohibition"
}, {
  "year": 1992,
  "state_po": "CO",
  "candidatevotes": 20,
  "totalvotes": 1569180,
  "party": "unaffiliated",
  "candidate": "Unaffiliated"
}, {
  "year": 1992,
  "state_po": "CT",
  "candidatevotes": 682318,
  "totalvotes": 1616156,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "CT",
  "candidatevotes": 578313,
  "totalvotes": 1616156,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "CT",
  "candidatevotes": 348771,
  "totalvotes": 1616156,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "CT",
  "candidatevotes": 5391,
  "totalvotes": 1616156,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "CT",
  "candidatevotes": 1363,
  "totalvotes": 1616156,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "DE",
  "candidatevotes": 126054,
  "totalvotes": 289620,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "DE",
  "candidatevotes": 102313,
  "totalvotes": 289620,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "DE",
  "candidatevotes": 59213,
  "totalvotes": 289620,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "DE",
  "candidatevotes": 1105,
  "totalvotes": 289620,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "DE",
  "candidatevotes": 935,
  "totalvotes": 289620,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 192619,
  "totalvotes": 227572,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 20698,
  "totalvotes": 227572,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 9681,
  "totalvotes": 227572,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 1459,
  "totalvotes": 227572,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 1446,
  "totalvotes": 227572,
  "party": "independent",
  "candidate": "Daniels, Ronald"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 676,
  "totalvotes": 227572,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 467,
  "totalvotes": 227572,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 230,
  "totalvotes": 227572,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "DC",
  "candidatevotes": 296,
  "totalvotes": 227572,
  "party": "socialist",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "FL",
  "candidatevotes": 2173310,
  "totalvotes": 5313392,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "FL",
  "candidatevotes": 2071698,
  "totalvotes": 5313392,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "FL",
  "candidatevotes": 1053067,
  "totalvotes": 5313392,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "FL",
  "candidatevotes": 15079,
  "totalvotes": 5313392,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "FL",
  "candidatevotes": 238,
  "totalvotes": 5313392,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "GA",
  "candidatevotes": 1008966,
  "totalvotes": 2321133,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "GA",
  "candidatevotes": 995252,
  "totalvotes": 2321133,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "GA",
  "candidatevotes": 309657,
  "totalvotes": 2321133,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "GA",
  "candidatevotes": 7110,
  "totalvotes": 2321133,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "GA",
  "candidatevotes": 148,
  "totalvotes": 2321133,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 179310,
  "totalvotes": 372842,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 136822,
  "totalvotes": 372842,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 53003,
  "totalvotes": 372842,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 1452,
  "totalvotes": 372842,
  "party": "independent",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 1119,
  "totalvotes": 372842,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 720,
  "totalvotes": 372842,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "HI",
  "candidatevotes": 416,
  "totalvotes": 372842,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "ID",
  "candidatevotes": 202645,
  "totalvotes": 482114,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "ID",
  "candidatevotes": 137013,
  "totalvotes": 482114,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "ID",
  "candidatevotes": 130395,
  "totalvotes": 482114,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "ID",
  "candidatevotes": 10894,
  "totalvotes": 482114,
  "party": "independent",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "ID",
  "candidatevotes": 1167,
  "totalvotes": 482114,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 2453350,
  "totalvotes": 5050157,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 1734096,
  "totalvotes": 5050157,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 840515,
  "totalvotes": 5050157,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 9218,
  "totalvotes": 5050157,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 5267,
  "totalvotes": 5050157,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 3577,
  "totalvotes": 5050157,
  "party": "populist",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 2751,
  "totalvotes": 5050157,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 1361,
  "totalvotes": 5050157,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "IL",
  "candidatevotes": 22,
  "totalvotes": 5050157,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "IN",
  "candidatevotes": 989375,
  "totalvotes": 2305871,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "IN",
  "candidatevotes": 848420,
  "totalvotes": 2305871,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "IN",
  "candidatevotes": 455934,
  "totalvotes": 2305871,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "IN",
  "candidatevotes": 7936,
  "totalvotes": 2305871,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "IN",
  "candidatevotes": 2583,
  "totalvotes": 2305871,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "IN",
  "candidatevotes": 1623,
  "totalvotes": 2305871,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 586353,
  "totalvotes": 1354607,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 504891,
  "totalvotes": 1354607,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 253468,
  "totalvotes": 1354607,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 3079,
  "totalvotes": 1354607,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 1965,
  "totalvotes": 1354607,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 1177,
  "totalvotes": 1354607,
  "party": "america first",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 1076,
  "totalvotes": 1354607,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 741,
  "totalvotes": 1354607,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 669,
  "totalvotes": 1354607,
  "party": "grassroots",
  "candidate": "Herer, Jack"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 480,
  "totalvotes": 1354607,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 273,
  "totalvotes": 1354607,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 238,
  "totalvotes": 1354607,
  "party": "independents for economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "IA",
  "candidatevotes": 197,
  "totalvotes": 1354607,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "KS",
  "candidatevotes": 449951,
  "totalvotes": 1157236,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "KS",
  "candidatevotes": 390434,
  "totalvotes": 1157236,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "KS",
  "candidatevotes": 312358,
  "totalvotes": 1157236,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "KS",
  "candidatevotes": 4314,
  "totalvotes": 1157236,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "KS",
  "candidatevotes": 179,
  "totalvotes": 1157236,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 665104,
  "totalvotes": 1492900,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 617178,
  "totalvotes": 1492900,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 203944,
  "totalvotes": 1492900,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 4513,
  "totalvotes": 1492900,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 989,
  "totalvotes": 1492900,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 695,
  "totalvotes": 1492900,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 430,
  "totalvotes": 1492900,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "KY",
  "candidatevotes": 47,
  "totalvotes": 1492900,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 815971,
  "totalvotes": 1790017,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 733386,
  "totalvotes": 1790017,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 211478,
  "totalvotes": 1790017,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 18545,
  "totalvotes": 1790017,
  "party": "america first",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 3155,
  "totalvotes": 1790017,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 1663,
  "totalvotes": 1790017,
  "party": "equal justice and opportunity",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 1552,
  "totalvotes": 1790017,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 1434,
  "totalvotes": 1790017,
  "party": "more perfect democracy",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 1136,
  "totalvotes": 1790017,
  "party": "justice, industry, and agriculture",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 889,
  "totalvotes": 1790017,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "LA",
  "candidatevotes": 808,
  "totalvotes": 1790017,
  "party": "independent",
  "candidate": "Yiamouyiannis, John"
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 263420,
  "totalvotes": 679499,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 206820,
  "totalvotes": 679499,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 206504,
  "totalvotes": 679499,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 1681,
  "totalvotes": 679499,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 519,
  "totalvotes": 679499,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 464,
  "totalvotes": 679499,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "ME",
  "candidatevotes": 91,
  "totalvotes": 679499,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "MD",
  "candidatevotes": 988571,
  "totalvotes": 1984580,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MD",
  "candidatevotes": 707094,
  "totalvotes": 1984580,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MD",
  "candidatevotes": 281414,
  "totalvotes": 1984580,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MD",
  "candidatevotes": 4715,
  "totalvotes": 1984580,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "MD",
  "candidatevotes": 2786,
  "totalvotes": 1984580,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 1318639,
  "totalvotes": 2773664,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 805039,
  "totalvotes": 2773664,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 630731,
  "totalvotes": 2773664,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 9021,
  "totalvotes": 2773664,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 3172,
  "totalvotes": 2773664,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 4208,
  "totalvotes": 2773664,
  "party": "independent voters",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 1812,
  "totalvotes": 2773664,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 1027,
  "totalvotes": 2773664,
  "party": "larouche for president party",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 13,
  "totalvotes": 2773664,
  "party": "socialist party usa",
  "candidate": "Brisben, J. Quinn"
}, {
  "year": 1992,
  "state_po": "MA",
  "candidatevotes": 2,
  "totalvotes": 2773664,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 1871182,
  "totalvotes": 4274673,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 1554940,
  "totalvotes": 4274673,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 824813,
  "totalvotes": 4274673,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 10175,
  "totalvotes": 4274673,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 8263,
  "totalvotes": 4274673,
  "party": "tisch independent citizens",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 2954,
  "totalvotes": 4274673,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 1432,
  "totalvotes": 4274673,
  "party": "workers world",
  "candidate": "Halyard, Helen"
}, {
  "year": 1992,
  "state_po": "MI",
  "candidatevotes": 914,
  "totalvotes": 4274673,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 1020997,
  "totalvotes": 2347948,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 747841,
  "totalvotes": 2347948,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 562506,
  "totalvotes": 2347948,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 3374,
  "totalvotes": 2347948,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 3363,
  "totalvotes": 2347948,
  "party": "constitution party",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 2659,
  "totalvotes": 2347948,
  "party": "grassroots",
  "candidate": "Herer, Jack"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 2499,
  "totalvotes": 2347948,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 1406,
  "totalvotes": 2347948,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 990,
  "totalvotes": 2347948,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 958,
  "totalvotes": 2347948,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 733,
  "totalvotes": 2347948,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "MN",
  "candidatevotes": 622,
  "totalvotes": 2347948,
  "party": "independents for economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "MS",
  "candidatevotes": 487793,
  "totalvotes": 981793,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MS",
  "candidatevotes": 400258,
  "totalvotes": 981793,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MS",
  "candidatevotes": 85626,
  "totalvotes": 981793,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MS",
  "candidatevotes": 4310,
  "totalvotes": 981793,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "MS",
  "candidatevotes": 2154,
  "totalvotes": 981793,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "MS",
  "candidatevotes": 1652,
  "totalvotes": 981793,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "MO",
  "candidatevotes": 1053873,
  "totalvotes": 2391270,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MO",
  "candidatevotes": 811159,
  "totalvotes": 2391270,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MO",
  "candidatevotes": 518741,
  "totalvotes": 2391270,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MO",
  "candidatevotes": 7497,
  "totalvotes": 2391270,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "MT",
  "candidatevotes": 154507,
  "totalvotes": 410583,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "MT",
  "candidatevotes": 144207,
  "totalvotes": 410583,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "MT",
  "candidatevotes": 107225,
  "totalvotes": 410583,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "MT",
  "candidatevotes": 3658,
  "totalvotes": 410583,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "MT",
  "candidatevotes": 986,
  "totalvotes": 410583,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NE",
  "candidatevotes": 343678,
  "totalvotes": 737546,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NE",
  "candidatevotes": 216864,
  "totalvotes": 737546,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NE",
  "candidatevotes": 174104,
  "totalvotes": 737546,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NE",
  "candidatevotes": 1560,
  "totalvotes": 737546,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "NE",
  "candidatevotes": 1340,
  "totalvotes": 737546,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 189148,
  "totalvotes": 506318,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 175828,
  "totalvotes": 506318,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 132580,
  "totalvotes": 506318,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 2892,
  "totalvotes": 506318,
  "party": "populist",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 2537,
  "totalvotes": 506318,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 1835,
  "totalvotes": 506318,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 677,
  "totalvotes": 506318,
  "party": "independent american",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 483,
  "totalvotes": 506318,
  "party": "independent",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "NV",
  "candidatevotes": 338,
  "totalvotes": 506318,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "NH",
  "candidatevotes": 209040,
  "totalvotes": 537215,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NH",
  "candidatevotes": 202484,
  "totalvotes": 537215,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NH",
  "candidatevotes": 121337,
  "totalvotes": 537215,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NH",
  "candidatevotes": 3548,
  "totalvotes": 537215,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NH",
  "candidatevotes": 512,
  "totalvotes": 537215,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "NH",
  "candidatevotes": 294,
  "totalvotes": 537215,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 1436206,
  "totalvotes": 3343594,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 1356865,
  "totalvotes": 3343594,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 521829,
  "totalvotes": 3343594,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 6822,
  "totalvotes": 3343594,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 4749,
  "totalvotes": 3343594,
  "party": "independent",
  "candidate": "Bradford, Drew"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 3513,
  "totalvotes": 3343594,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 2670,
  "totalvotes": 3343594,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 2095,
  "totalvotes": 3343594,
  "party": "6 million jobs",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 2011,
  "totalvotes": 3343594,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 1996,
  "totalvotes": 3343594,
  "party": "ron daniels independent",
  "candidate": "Daniels, Ron"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 1867,
  "totalvotes": 3343594,
  "party": "america first populist",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 1618,
  "totalvotes": 3343594,
  "party": "workers league",
  "candidate": "Haylard, Helen"
}, {
  "year": 1992,
  "state_po": "NJ",
  "candidatevotes": 1353,
  "totalvotes": 3343594,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 261617,
  "totalvotes": 569986,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 212824,
  "totalvotes": 569986,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 91895,
  "totalvotes": 569986,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 1615,
  "totalvotes": 569986,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 620,
  "totalvotes": 569986,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 562,
  "totalvotes": 569986,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 369,
  "totalvotes": 569986,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 183,
  "totalvotes": 569986,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 181,
  "totalvotes": 569986,
  "party": "workers world",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 1992,
  "state_po": "NM",
  "candidatevotes": 120,
  "totalvotes": 569986,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 3444450,
  "totalvotes": 7079432,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 2346649,
  "totalvotes": 7079432,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 1090721,
  "totalvotes": 7079432,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 152951,
  "totalvotes": 7079432,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 15472,
  "totalvotes": 7079432,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 13451,
  "totalvotes": 7079432,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 11318,
  "totalvotes": 7079432,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "NY",
  "candidatevotes": 4420,
  "totalvotes": 7079432,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 1134661,
  "totalvotes": 2611850,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 1114042,
  "totalvotes": 2611850,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 357864,
  "totalvotes": 2611850,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 5171,
  "totalvotes": 2611850,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 59,
  "totalvotes": 2611850,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 41,
  "totalvotes": 2611850,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "NC",
  "candidatevotes": 12,
  "totalvotes": 2611850,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "ND",
  "candidatevotes": 136244,
  "totalvotes": 308133,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "ND",
  "candidatevotes": 99168,
  "totalvotes": 308133,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "ND",
  "candidatevotes": 71084,
  "totalvotes": 308133,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "ND",
  "candidatevotes": 1637,
  "totalvotes": 308133,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "OH",
  "candidatevotes": 1984942,
  "totalvotes": 4939967,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "OH",
  "candidatevotes": 1894310,
  "totalvotes": 4939967,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "OH",
  "candidatevotes": 1036426,
  "totalvotes": 4939967,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "OH",
  "candidatevotes": 24247,
  "totalvotes": 4939967,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "OH",
  "candidatevotes": 42,
  "totalvotes": 4939967,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "OK",
  "candidatevotes": 592929,
  "totalvotes": 1390359,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "OK",
  "candidatevotes": 473066,
  "totalvotes": 1390359,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "OK",
  "candidatevotes": 319878,
  "totalvotes": 1390359,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "OK",
  "candidatevotes": 4486,
  "totalvotes": 1390359,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 621314,
  "totalvotes": 1462643,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 475757,
  "totalvotes": 1462643,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 354091,
  "totalvotes": 1462643,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 4277,
  "totalvotes": 1462643,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 3030,
  "totalvotes": 1462643,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 2609,
  "totalvotes": 1462643,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "OR",
  "candidatevotes": 1565,
  "totalvotes": 1462643,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "PA",
  "candidatevotes": 2239164,
  "totalvotes": 4959810,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "PA",
  "candidatevotes": 1791841,
  "totalvotes": 4959810,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "PA",
  "candidatevotes": 902667,
  "totalvotes": 4959810,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "PA",
  "candidatevotes": 21477,
  "totalvotes": 4959810,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "PA",
  "candidatevotes": 4661,
  "totalvotes": 4959810,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 213299,
  "totalvotes": 453365,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 131601,
  "totalvotes": 453365,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 105045,
  "totalvotes": 453365,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 1878,
  "totalvotes": 453365,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 571,
  "totalvotes": 453365,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 494,
  "totalvotes": 453365,
  "party": "independents for larouche",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 262,
  "totalvotes": 453365,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "RI",
  "candidatevotes": 215,
  "totalvotes": 453365,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "SC",
  "candidatevotes": 577507,
  "totalvotes": 1228912,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "SC",
  "candidatevotes": 525514,
  "totalvotes": 1228912,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "SC",
  "candidatevotes": 119257,
  "totalvotes": 1228912,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "SC",
  "candidatevotes": 2719,
  "totalvotes": 1228912,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "SC",
  "candidatevotes": 2680,
  "totalvotes": 1228912,
  "party": "american",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "SC",
  "candidatevotes": 1235,
  "totalvotes": 1228912,
  "party": "united citizens",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "SD",
  "candidatevotes": 136718,
  "totalvotes": 336254,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "SD",
  "candidatevotes": 124888,
  "totalvotes": 336254,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "SD",
  "candidatevotes": 73295,
  "totalvotes": 336254,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "SD",
  "candidatevotes": 814,
  "totalvotes": 336254,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "SD",
  "candidatevotes": 539,
  "totalvotes": 336254,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "TN",
  "candidatevotes": 933521,
  "totalvotes": 1982638,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "TN",
  "candidatevotes": 841300,
  "totalvotes": 1982638,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "TN",
  "candidatevotes": 199968,
  "totalvotes": 1982638,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "TN",
  "candidatevotes": 7688,
  "totalvotes": 1982638,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "TN",
  "candidatevotes": 161,
  "totalvotes": 1982638,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "TX",
  "candidatevotes": 2496071,
  "totalvotes": 6154018,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "TX",
  "candidatevotes": 2281815,
  "totalvotes": 6154018,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "TX",
  "candidatevotes": 1354781,
  "totalvotes": 6154018,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "TX",
  "candidatevotes": 19699,
  "totalvotes": 6154018,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "TX",
  "candidatevotes": 1652,
  "totalvotes": 6154018,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 322632,
  "totalvotes": 743998,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 203400,
  "totalvotes": 743998,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 183429,
  "totalvotes": 743998,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 28602,
  "totalvotes": 743998,
  "party": "populist",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 1900,
  "totalvotes": 743998,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 1319,
  "totalvotes": 743998,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 1089,
  "totalvotes": 743998,
  "party": "independents for economic recovery",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 414,
  "totalvotes": 743998,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 393,
  "totalvotes": 743998,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 292,
  "totalvotes": 743998,
  "party": "american",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 200,
  "totalvotes": 743998,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 177,
  "totalvotes": 743998,
  "party": "campaign for a new tomorrow",
  "candidate": "Daniels, Ron"
}, {
  "year": 1992,
  "state_po": "UT",
  "candidatevotes": 151,
  "totalvotes": 743998,
  "party": "socialist workers",
  "candidate": "Brisben, J. Quinn"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 133592,
  "totalvotes": 289701,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 88122,
  "totalvotes": 289701,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 65991,
  "totalvotes": 289701,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 501,
  "totalvotes": 289701,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 488,
  "totalvotes": 289701,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 329,
  "totalvotes": 289701,
  "party": "liberty union party",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 315,
  "totalvotes": 289701,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 124,
  "totalvotes": 289701,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 100,
  "totalvotes": 289701,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 82,
  "totalvotes": 289701,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "VT",
  "candidatevotes": 57,
  "totalvotes": 289701,
  "party": "freedom for larouche",
  "candidate": "Larouche, Lyndon, Jr."
}, {
  "year": 1992,
  "state_po": "VA",
  "candidatevotes": 1150517,
  "totalvotes": 2559129,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "VA",
  "candidatevotes": 1038650,
  "totalvotes": 2559129,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "VA",
  "candidatevotes": 348639,
  "totalvotes": 2559129,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "VA",
  "candidatevotes": 15129,
  "totalvotes": 2559129,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "VA",
  "candidatevotes": 5730,
  "totalvotes": 2559129,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "VA",
  "candidatevotes": 464,
  "totalvotes": 2559129,
  "party": "",
  "candidate": ""
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 993037,
  "totalvotes": 2287565,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 731234,
  "totalvotes": 2287565,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 541780,
  "totalvotes": 2287565,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 7533,
  "totalvotes": 2287565,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 4854,
  "totalvotes": 2287565,
  "party": "populist",
  "candidate": "Gritz, James \"\"Bo\""
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 2456,
  "totalvotes": 2287565,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 2354,
  "totalvotes": 2287565,
  "party": "taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 2026,
  "totalvotes": 2287565,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 1776,
  "totalvotes": 2287565,
  "party": "new alliance",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1992,
  "state_po": "WA",
  "candidatevotes": 515,
  "totalvotes": 2287565,
  "party": "socialist workers",
  "candidate": "Warren, James \"\"Mac\""
}, {
  "year": 1992,
  "state_po": "WV",
  "candidatevotes": 331001,
  "totalvotes": 683677,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "WV",
  "candidatevotes": 241974,
  "totalvotes": 683677,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "WV",
  "candidatevotes": 108829,
  "totalvotes": 683677,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "WV",
  "candidatevotes": 1873,
  "totalvotes": 683677,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 1041066,
  "totalvotes": 2531064,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 930855,
  "totalvotes": 2531064,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 544479,
  "totalvotes": 2531064,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 7518,
  "totalvotes": 2531064,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 2877,
  "totalvotes": 2531064,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 1833,
  "totalvotes": 2531064,
  "party": "labor-farm-laborista-agrario",
  "candidate": "Daniels, Ron"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 1070,
  "totalvotes": 2531064,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 961,
  "totalvotes": 2531064,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 1992,
  "state_po": "WI",
  "candidatevotes": 405,
  "totalvotes": 2531064,
  "party": "third party",
  "candidate": "Hem, Roland"
}, {
  "year": 1992,
  "state_po": "WY",
  "candidatevotes": 79347,
  "totalvotes": 199884,
  "party": "republican",
  "candidate": "Bush, George H.W."
}, {
  "year": 1992,
  "state_po": "WY",
  "candidatevotes": 68160,
  "totalvotes": 199884,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1992,
  "state_po": "WY",
  "candidatevotes": 51263,
  "totalvotes": 199884,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1992,
  "state_po": "WY",
  "candidatevotes": 844,
  "totalvotes": 199884,
  "party": "libertarian",
  "candidate": "Marrou, Andre"
}, {
  "year": 1992,
  "state_po": "WY",
  "candidatevotes": 270,
  "totalvotes": 199884,
  "party": "independent",
  "candidate": "Fulani, Lenora"
}, {
  "year": 1996,
  "state_po": "AL",
  "candidatevotes": 769044,
  "totalvotes": 1534349,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "AL",
  "candidatevotes": 662165,
  "totalvotes": 1534349,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "AL",
  "candidatevotes": 96153,
  "totalvotes": 1534349,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "AL",
  "candidatevotes": 5290,
  "totalvotes": 1534349,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "AL",
  "candidatevotes": 1697,
  "totalvotes": 1534349,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 122746,
  "totalvotes": 241620,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 80380,
  "totalvotes": 241620,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 26333,
  "totalvotes": 241620,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 7597,
  "totalvotes": 241620,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 2276,
  "totalvotes": 241620,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 925,
  "totalvotes": 241620,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 729,
  "totalvotes": 241620,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "AK",
  "candidatevotes": 634,
  "totalvotes": 241620,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "AZ",
  "candidatevotes": 653288,
  "totalvotes": 1404405,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "AZ",
  "candidatevotes": 622073,
  "totalvotes": 1404405,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "AZ",
  "candidatevotes": 112072,
  "totalvotes": 1404405,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "AZ",
  "candidatevotes": 14358,
  "totalvotes": 1404405,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "AZ",
  "candidatevotes": 2573,
  "totalvotes": 1404405,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "AZ",
  "candidatevotes": 41,
  "totalvotes": 1404405,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 475171,
  "totalvotes": 884262,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 325416,
  "totalvotes": 884262,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 69884,
  "totalvotes": 884262,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 3649,
  "totalvotes": 884262,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 3076,
  "totalvotes": 884262,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 2065,
  "totalvotes": 884262,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 932,
  "totalvotes": 884262,
  "party": "america first",
  "candidate": "Forbes, Ralph"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 823,
  "totalvotes": 884262,
  "party": "unaffiliated",
  "candidate": "Collins, Charles"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 749,
  "totalvotes": 884262,
  "party": "looking back party",
  "candidate": "Masters, Isabell"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 747,
  "totalvotes": 884262,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 729,
  "totalvotes": 884262,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 538,
  "totalvotes": 884262,
  "party": "socialist",
  "candidate": "Hollis, Mary Cal"
}, {
  "year": 1996,
  "state_po": "AR",
  "candidatevotes": 483,
  "totalvotes": 884262,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 5119835,
  "totalvotes": 10019469,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 3828381,
  "totalvotes": 10019469,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 697847,
  "totalvotes": 10019469,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 237016,
  "totalvotes": 10019469,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 73600,
  "totalvotes": 10019469,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 25332,
  "totalvotes": 10019469,
  "party": "peace & freedom",
  "candidate": "Feinland, Marsha"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 21202,
  "totalvotes": 10019469,
  "party": "american independent party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 15403,
  "totalvotes": 10019469,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "CA",
  "candidatevotes": 853,
  "totalvotes": 10019469,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 691848,
  "totalvotes": 1510702,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 671152,
  "totalvotes": 1510702,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 99629,
  "totalvotes": 1510702,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 25070,
  "totalvotes": 1510702,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 12392,
  "totalvotes": 1510702,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 2813,
  "totalvotes": 1510702,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 2809,
  "totalvotes": 1510702,
  "party": "independent",
  "candidate": "Collins, Charles"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 2545,
  "totalvotes": 1510702,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 669,
  "totalvotes": 1510702,
  "party": "socialist",
  "candidate": "Hollis, Mary Cal"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 599,
  "totalvotes": 1510702,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 557,
  "totalvotes": 1510702,
  "party": "american",
  "candidate": "Templin, Diane"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 375,
  "totalvotes": 1510702,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1996,
  "state_po": "CO",
  "candidatevotes": 244,
  "totalvotes": 1510702,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 735740,
  "totalvotes": 1392614,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 483109,
  "totalvotes": 1392614,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 139523,
  "totalvotes": 1392614,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 24321,
  "totalvotes": 1392614,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 5788,
  "totalvotes": 1392614,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 2425,
  "totalvotes": 1392614,
  "party": "concerned citizens",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 1703,
  "totalvotes": 1392614,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "CT",
  "candidatevotes": 5,
  "totalvotes": 1392614,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "DE",
  "candidatevotes": 140355,
  "totalvotes": 270810,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "DE",
  "candidatevotes": 99062,
  "totalvotes": 270810,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "DE",
  "candidatevotes": 28719,
  "totalvotes": 270810,
  "party": "unaffiliated",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "DE",
  "candidatevotes": 2052,
  "totalvotes": 270810,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "DE",
  "candidatevotes": 348,
  "totalvotes": 270810,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "DE",
  "candidatevotes": 274,
  "totalvotes": 270810,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 158220,
  "totalvotes": 185726,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 17339,
  "totalvotes": 185726,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 4780,
  "totalvotes": 185726,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 3611,
  "totalvotes": 185726,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 648,
  "totalvotes": 185726,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 588,
  "totalvotes": 185726,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 283,
  "totalvotes": 185726,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "DC",
  "candidatevotes": 257,
  "totalvotes": 185726,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "FL",
  "candidatevotes": 2546870,
  "totalvotes": 5303154,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "FL",
  "candidatevotes": 2244536,
  "totalvotes": 5303154,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "FL",
  "candidatevotes": 483870,
  "totalvotes": 5303154,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "FL",
  "candidatevotes": 23326,
  "totalvotes": 5303154,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "FL",
  "candidatevotes": 4552,
  "totalvotes": 5303154,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "GA",
  "candidatevotes": 1080843,
  "totalvotes": 2298899,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "GA",
  "candidatevotes": 1053849,
  "totalvotes": 2298899,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "GA",
  "candidatevotes": 146337,
  "totalvotes": 2298899,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "GA",
  "candidatevotes": 17870,
  "totalvotes": 2298899,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 205012,
  "totalvotes": 360120,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 113943,
  "totalvotes": 360120,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 27358,
  "totalvotes": 360120,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 10386,
  "totalvotes": 360120,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 2493,
  "totalvotes": 360120,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 570,
  "totalvotes": 360120,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "HI",
  "candidatevotes": 358,
  "totalvotes": 360120,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "ID",
  "candidatevotes": 256595,
  "totalvotes": 491711,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "ID",
  "candidatevotes": 165443,
  "totalvotes": 491711,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "ID",
  "candidatevotes": 62518,
  "totalvotes": 491711,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "ID",
  "candidatevotes": 3325,
  "totalvotes": 491711,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "ID",
  "candidatevotes": 2230,
  "totalvotes": 491711,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "ID",
  "candidatevotes": 1600,
  "totalvotes": 491711,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 2341744,
  "totalvotes": 4311391,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 1587021,
  "totalvotes": 4311391,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 346408,
  "totalvotes": 4311391,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 22548,
  "totalvotes": 4311391,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 7606,
  "totalvotes": 4311391,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 4606,
  "totalvotes": 4311391,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "IL",
  "candidatevotes": 1458,
  "totalvotes": 4311391,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "IN",
  "candidatevotes": 1006693,
  "totalvotes": 2135431,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "IN",
  "candidatevotes": 887424,
  "totalvotes": 2135431,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "IN",
  "candidatevotes": 224299,
  "totalvotes": 2135431,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "IN",
  "candidatevotes": 15632,
  "totalvotes": 2135431,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "IN",
  "candidatevotes": 1383,
  "totalvotes": 2135431,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 620258,
  "totalvotes": 1234075,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 492644,
  "totalvotes": 1234075,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 105159,
  "totalvotes": 1234075,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 6550,
  "totalvotes": 1234075,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 3349,
  "totalvotes": 1234075,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 2315,
  "totalvotes": 1234075,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 2229,
  "totalvotes": 1234075,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 1240,
  "totalvotes": 1234075,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1996,
  "state_po": "IA",
  "candidatevotes": 331,
  "totalvotes": 1234075,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "KS",
  "candidatevotes": 583245,
  "totalvotes": 1074300,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "KS",
  "candidatevotes": 387659,
  "totalvotes": 1074300,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "KS",
  "candidatevotes": 92639,
  "totalvotes": 1074300,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "KS",
  "candidatevotes": 6200,
  "totalvotes": 1074300,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "KS",
  "candidatevotes": 4557,
  "totalvotes": 1074300,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 636614,
  "totalvotes": 1388708,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 623283,
  "totalvotes": 1388708,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 120396,
  "totalvotes": 1388708,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 4009,
  "totalvotes": 1388708,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 2204,
  "totalvotes": 1388708,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 1493,
  "totalvotes": 1388708,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "KY",
  "candidatevotes": 709,
  "totalvotes": 1388708,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 927837,
  "totalvotes": 1783959,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 712586,
  "totalvotes": 1783959,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 123293,
  "totalvotes": 1783959,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 7499,
  "totalvotes": 1783959,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 4719,
  "totalvotes": 1783959,
  "party": "liberty, ecology, community",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 3366,
  "totalvotes": 1783959,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 2981,
  "totalvotes": 1783959,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "LA",
  "candidatevotes": 1678,
  "totalvotes": 1783959,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 312788,
  "totalvotes": 605897,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 186378,
  "totalvotes": 605897,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 85970,
  "totalvotes": 605897,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 15279,
  "totalvotes": 605897,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 2996,
  "totalvotes": 605897,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 1517,
  "totalvotes": 605897,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 825,
  "totalvotes": 605897,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "ME",
  "candidatevotes": 144,
  "totalvotes": 605897,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 966207,
  "totalvotes": 1780870,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 681530,
  "totalvotes": 1780870,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 115812,
  "totalvotes": 1780870,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 8765,
  "totalvotes": 1780870,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 3402,
  "totalvotes": 1780870,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 2637,
  "totalvotes": 1780870,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "MD",
  "candidatevotes": 2517,
  "totalvotes": 1780870,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 1571509,
  "totalvotes": 2556459,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 718058,
  "totalvotes": 2556459,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 227206,
  "totalvotes": 2556459,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 20424,
  "totalvotes": 2556459,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 6180,
  "totalvotes": 2556459,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 5183,
  "totalvotes": 2556459,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 4623,
  "totalvotes": 2556459,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "MA",
  "candidatevotes": 3276,
  "totalvotes": 2556459,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 1989653,
  "totalvotes": 3848844,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 1481212,
  "totalvotes": 3848844,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 336670,
  "totalvotes": 3848844,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 27670,
  "totalvotes": 3848844,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 4678,
  "totalvotes": 3848844,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 4254,
  "totalvotes": 3848844,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 3153,
  "totalvotes": 3848844,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "MI",
  "candidatevotes": 1554,
  "totalvotes": 3848844,
  "party": "socialist equality party",
  "candidate": "White, Jerome \"\"Jerry\""
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 1120380,
  "totalvotes": 2192492,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 766395,
  "totalvotes": 2192492,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 257698,
  "totalvotes": 2192492,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 24906,
  "totalvotes": 2192492,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 8271,
  "totalvotes": 2192492,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 4898,
  "totalvotes": 2192492,
  "party": "grassroots",
  "candidate": "Peron, Dennis"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 3415,
  "totalvotes": 2192492,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 2903,
  "totalvotes": 2192492,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 1808,
  "totalvotes": 2192492,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 787,
  "totalvotes": 2192492,
  "party": "independent grassroots",
  "candidate": "Birrenback, John"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 684,
  "totalvotes": 2192492,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "MN",
  "candidatevotes": 347,
  "totalvotes": 2192492,
  "party": "socialist equality party",
  "candidate": "White, Jerome \"\"Jerry\""
}, {
  "year": 1996,
  "state_po": "MS",
  "candidatevotes": 439838,
  "totalvotes": 893857,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MS",
  "candidatevotes": 394022,
  "totalvotes": 893857,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MS",
  "candidatevotes": 53427,
  "totalvotes": 893857,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "MS",
  "candidatevotes": 2809,
  "totalvotes": 893857,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MS",
  "candidatevotes": 2314,
  "totalvotes": 893857,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "MS",
  "candidatevotes": 1447,
  "totalvotes": 893857,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 1025935,
  "totalvotes": 2158065,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 890016,
  "totalvotes": 2158065,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 217188,
  "totalvotes": 2158065,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 11521,
  "totalvotes": 2158065,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 10522,
  "totalvotes": 2158065,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 2287,
  "totalvotes": 2158065,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "MO",
  "candidatevotes": 596,
  "totalvotes": 2158065,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "MT",
  "candidatevotes": 179652,
  "totalvotes": 407083,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "MT",
  "candidatevotes": 167922,
  "totalvotes": 407083,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "MT",
  "candidatevotes": 55229,
  "totalvotes": 407083,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "MT",
  "candidatevotes": 2526,
  "totalvotes": 407083,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "MT",
  "candidatevotes": 1754,
  "totalvotes": 407083,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "NE",
  "candidatevotes": 363467,
  "totalvotes": 677415,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NE",
  "candidatevotes": 236761,
  "totalvotes": 677415,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NE",
  "candidatevotes": 71278,
  "totalvotes": 677415,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "NE",
  "candidatevotes": 2792,
  "totalvotes": 677415,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "NE",
  "candidatevotes": 1928,
  "totalvotes": 677415,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "NE",
  "candidatevotes": 1189,
  "totalvotes": 677415,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 203974,
  "totalvotes": 464279,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 199244,
  "totalvotes": 464279,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 43986,
  "totalvotes": 464279,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 5608,
  "totalvotes": 464279,
  "party": "",
  "candidate": "None Of The Above"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 4730,
  "totalvotes": 464279,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 4460,
  "totalvotes": 464279,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 1732,
  "totalvotes": 464279,
  "party": "independent american",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "NV",
  "candidatevotes": 545,
  "totalvotes": 464279,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "NH",
  "candidatevotes": 246166,
  "totalvotes": 496597,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NH",
  "candidatevotes": 196486,
  "totalvotes": 496597,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NH",
  "candidatevotes": 48387,
  "totalvotes": 496597,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "NH",
  "candidatevotes": 4214,
  "totalvotes": 496597,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "NH",
  "candidatevotes": 1344,
  "totalvotes": 496597,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "NJ",
  "candidatevotes": 1652361,
  "totalvotes": 3075860,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NJ",
  "candidatevotes": 1103099,
  "totalvotes": 3075860,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NJ",
  "candidatevotes": 320400,
  "totalvotes": 3075860,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 273495,
  "totalvotes": 556074,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 232751,
  "totalvotes": 556074,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 32257,
  "totalvotes": 556074,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 13218,
  "totalvotes": 556074,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 2996,
  "totalvotes": 556074,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 713,
  "totalvotes": 556074,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "NM",
  "candidatevotes": 644,
  "totalvotes": 556074,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 3756177,
  "totalvotes": 6439129,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 1933492,
  "totalvotes": 6439129,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 503458,
  "totalvotes": 6439129,
  "party": "independence",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 123000,
  "totalvotes": 6439129,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 75956,
  "totalvotes": 6439129,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 23580,
  "totalvotes": 6439129,
  "party": "right-to-life",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 12220,
  "totalvotes": 6439129,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 5011,
  "totalvotes": 6439129,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 3473,
  "totalvotes": 6439129,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "NY",
  "candidatevotes": 2762,
  "totalvotes": 6439129,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "NC",
  "candidatevotes": 1225938,
  "totalvotes": 2515807,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "NC",
  "candidatevotes": 1107849,
  "totalvotes": 2515807,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "NC",
  "candidatevotes": 168059,
  "totalvotes": 2515807,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "NC",
  "candidatevotes": 8740,
  "totalvotes": 2515807,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "NC",
  "candidatevotes": 2771,
  "totalvotes": 2515807,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "NC",
  "candidatevotes": 2450,
  "totalvotes": 2515807,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "ND",
  "candidatevotes": 125050,
  "totalvotes": 266411,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "ND",
  "candidatevotes": 106905,
  "totalvotes": 266411,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "ND",
  "candidatevotes": 32515,
  "totalvotes": 266411,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "ND",
  "candidatevotes": 847,
  "totalvotes": 266411,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "ND",
  "candidatevotes": 745,
  "totalvotes": 266411,
  "party": "independent nomination",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "ND",
  "candidatevotes": 349,
  "totalvotes": 266411,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 2148222,
  "totalvotes": 4534434,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 1859883,
  "totalvotes": 4534434,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 483207,
  "totalvotes": 4534434,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 12851,
  "totalvotes": 4534434,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 10813,
  "totalvotes": 4534434,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 9120,
  "totalvotes": 4534434,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 7361,
  "totalvotes": 4534434,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 2962,
  "totalvotes": 4534434,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "OH",
  "candidatevotes": 15,
  "totalvotes": 4534434,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1996,
  "state_po": "OK",
  "candidatevotes": 582315,
  "totalvotes": 1206713,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "OK",
  "candidatevotes": 488105,
  "totalvotes": 1206713,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "OK",
  "candidatevotes": 130788,
  "totalvotes": 1206713,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "OK",
  "candidatevotes": 5505,
  "totalvotes": 1206713,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 649641,
  "totalvotes": 1377760,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 538152,
  "totalvotes": 1377760,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 121221,
  "totalvotes": 1377760,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 49415,
  "totalvotes": 1377760,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 8903,
  "totalvotes": 1377760,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 3379,
  "totalvotes": 1377760,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 2798,
  "totalvotes": 1377760,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 2329,
  "totalvotes": 1377760,
  "party": "",
  "candidate": "Other"
}, {
  "year": 1996,
  "state_po": "OR",
  "candidatevotes": 1922,
  "totalvotes": 1377760,
  "party": "socialist",
  "candidate": "Hollis, Mary Cal"
}, {
  "year": 1996,
  "state_po": "PA",
  "candidatevotes": 2215819,
  "totalvotes": 4501307,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "PA",
  "candidatevotes": 1801169,
  "totalvotes": 4501307,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "PA",
  "candidatevotes": 430984,
  "totalvotes": 4501307,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "PA",
  "candidatevotes": 28000,
  "totalvotes": 4501307,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "PA",
  "candidatevotes": 19552,
  "totalvotes": 4501307,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "PA",
  "candidatevotes": 5783,
  "totalvotes": 4501307,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 233050,
  "totalvotes": 390247,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 104683,
  "totalvotes": 390247,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 43723,
  "totalvotes": 390247,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 6040,
  "totalvotes": 390247,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 1109,
  "totalvotes": 390247,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 1021,
  "totalvotes": 390247,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 435,
  "totalvotes": 390247,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "RI",
  "candidatevotes": 186,
  "totalvotes": 390247,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "SC",
  "candidatevotes": 573339,
  "totalvotes": 1150182,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "SC",
  "candidatevotes": 506152,
  "totalvotes": 1150182,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "SC",
  "candidatevotes": 64377,
  "totalvotes": 1150182,
  "party": "patriot party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "SC",
  "candidatevotes": 4271,
  "totalvotes": 1150182,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "SC",
  "candidatevotes": 2043,
  "totalvotes": 1150182,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "SD",
  "candidatevotes": 150543,
  "totalvotes": 323826,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "SD",
  "candidatevotes": 139333,
  "totalvotes": 323826,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "SD",
  "candidatevotes": 32478,
  "totalvotes": 323826,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "SD",
  "candidatevotes": 1472,
  "totalvotes": 323826,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "TN",
  "candidatevotes": 909146,
  "totalvotes": 1894105,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "TN",
  "candidatevotes": 863530,
  "totalvotes": 1894105,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "TN",
  "candidatevotes": 121429,
  "totalvotes": 1894105,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 2736167,
  "totalvotes": 5611644,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 2459683,
  "totalvotes": 5611644,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 378537,
  "totalvotes": 5611644,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 20256,
  "totalvotes": 5611644,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 7472,
  "totalvotes": 5611644,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 5107,
  "totalvotes": 5611644,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "TX",
  "candidatevotes": 4422,
  "totalvotes": 5611644,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 361911,
  "totalvotes": 665629,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 221633,
  "totalvotes": 665629,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 66461,
  "totalvotes": 665629,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 4615,
  "totalvotes": 665629,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 4129,
  "totalvotes": 665629,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 2601,
  "totalvotes": 665629,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 1290,
  "totalvotes": 665629,
  "party": "independent american",
  "candidate": "Templin, Diane"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 1101,
  "totalvotes": 665629,
  "party": "independent",
  "candidate": "Crane, Peter"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 1085,
  "totalvotes": 665629,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 298,
  "totalvotes": 665629,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 235,
  "totalvotes": 665629,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 159,
  "totalvotes": 665629,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "UT",
  "candidatevotes": 111,
  "totalvotes": 665629,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 137894,
  "totalvotes": 258449,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 80352,
  "totalvotes": 258449,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 31024,
  "totalvotes": 258449,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 5585,
  "totalvotes": 258449,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 1183,
  "totalvotes": 258449,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 560,
  "totalvotes": 258449,
  "party": "",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 498,
  "totalvotes": 258449,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 480,
  "totalvotes": 258449,
  "party": "grassroots",
  "candidate": "Peron, Dennis"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 382,
  "totalvotes": 258449,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 292,
  "totalvotes": 258449,
  "party": "liberty union party",
  "candidate": "Hollis, Mary Cal"
}, {
  "year": 1996,
  "state_po": "VT",
  "candidatevotes": 199,
  "totalvotes": 258449,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "VA",
  "candidatevotes": 1138350,
  "totalvotes": 2416642,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "VA",
  "candidatevotes": 1091060,
  "totalvotes": 2416642,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "VA",
  "candidatevotes": 159861,
  "totalvotes": 2416642,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "VA",
  "candidatevotes": 13687,
  "totalvotes": 2416642,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "VA",
  "candidatevotes": 9174,
  "totalvotes": 2416642,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "VA",
  "candidatevotes": 4510,
  "totalvotes": 2416642,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 1123323,
  "totalvotes": 2253837,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 840712,
  "totalvotes": 2253837,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 201003,
  "totalvotes": 2253837,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 62696,
  "totalvotes": 2253837,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 12522,
  "totalvotes": 2253837,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 6076,
  "totalvotes": 2253837,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 4578,
  "totalvotes": 2253837,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 2189,
  "totalvotes": 2253837,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 1996,
  "state_po": "WA",
  "candidatevotes": 738,
  "totalvotes": 2253837,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 1996,
  "state_po": "WV",
  "candidatevotes": 327812,
  "totalvotes": 636459,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "WV",
  "candidatevotes": 233946,
  "totalvotes": 636459,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "WV",
  "candidatevotes": 71639,
  "totalvotes": 636459,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "WV",
  "candidatevotes": 3062,
  "totalvotes": 636459,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 1071971,
  "totalvotes": 2196169,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 845029,
  "totalvotes": 2196169,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 227339,
  "totalvotes": 2196169,
  "party": "reform party",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 32766,
  "totalvotes": 2196169,
  "party": "independent",
  "candidate": ""
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 8811,
  "totalvotes": 2196169,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 7929,
  "totalvotes": 2196169,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "WI",
  "candidatevotes": 2324,
  "totalvotes": 2196169,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 1996,
  "state_po": "WY",
  "candidatevotes": 105388,
  "totalvotes": 211571,
  "party": "republican",
  "candidate": "Dole, Robert"
}, {
  "year": 1996,
  "state_po": "WY",
  "candidatevotes": 77934,
  "totalvotes": 211571,
  "party": "democrat",
  "candidate": "Clinton, Bill"
}, {
  "year": 1996,
  "state_po": "WY",
  "candidatevotes": 25928,
  "totalvotes": 211571,
  "party": "independent",
  "candidate": "Perot, Ross"
}, {
  "year": 1996,
  "state_po": "WY",
  "candidatevotes": 1739,
  "totalvotes": 211571,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 1996,
  "state_po": "WY",
  "candidatevotes": 582,
  "totalvotes": 211571,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "AL",
  "candidatevotes": 941173,
  "totalvotes": 1666272,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "AL",
  "candidatevotes": 692611,
  "totalvotes": 1666272,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "AL",
  "candidatevotes": 26595,
  "totalvotes": 1666272,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "AL",
  "candidatevotes": 5893,
  "totalvotes": 1666272,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 167398,
  "totalvotes": 285560,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 79004,
  "totalvotes": 285560,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 28747,
  "totalvotes": 285560,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 5192,
  "totalvotes": 285560,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 2636,
  "totalvotes": 285560,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 1068,
  "totalvotes": 285560,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 919,
  "totalvotes": 285560,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "AK",
  "candidatevotes": 596,
  "totalvotes": 285560,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 781652,
  "totalvotes": 1532016,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 685341,
  "totalvotes": 1532016,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 45645,
  "totalvotes": 1532016,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 12373,
  "totalvotes": 1532016,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 5775,
  "totalvotes": 1532016,
  "party": "libertarian",
  "candidate": "L. Neil, Smith"
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 1120,
  "totalvotes": 1532016,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "AZ",
  "candidatevotes": 110,
  "totalvotes": 1532016,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 472940,
  "totalvotes": 921781,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 422768,
  "totalvotes": 921781,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 13421,
  "totalvotes": 921781,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 7358,
  "totalvotes": 921781,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 2781,
  "totalvotes": 921781,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 1415,
  "totalvotes": 921781,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "AR",
  "candidatevotes": 1098,
  "totalvotes": 921781,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 5861203,
  "totalvotes": 10965822,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 4567429,
  "totalvotes": 10965822,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 418707,
  "totalvotes": 10965822,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 45520,
  "totalvotes": 10965822,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 44987,
  "totalvotes": 10965822,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 17042,
  "totalvotes": 10965822,
  "party": "american independent party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "CA",
  "candidatevotes": 10934,
  "totalvotes": 10965822,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 883748,
  "totalvotes": 1741368,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 738227,
  "totalvotes": 1741368,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 91434,
  "totalvotes": 1741368,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 12799,
  "totalvotes": 1741368,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 12705,
  "totalvotes": 1741368,
  "party": "freedom",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 1319,
  "totalvotes": 1741368,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 712,
  "totalvotes": 1741368,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 216,
  "totalvotes": 1741368,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "CO",
  "candidatevotes": 208,
  "totalvotes": 1741368,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 816015,
  "totalvotes": 1459525,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 561094,
  "totalvotes": 1459525,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 64452,
  "totalvotes": 1459525,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 9695,
  "totalvotes": 1459525,
  "party": "concerned citizens",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 4731,
  "totalvotes": 1459525,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 3484,
  "totalvotes": 1459525,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "CT",
  "candidatevotes": 54,
  "totalvotes": 1459525,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 180068,
  "totalvotes": 327529,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 137288,
  "totalvotes": 327529,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 8307,
  "totalvotes": 327529,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 777,
  "totalvotes": 327529,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 774,
  "totalvotes": 327529,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 208,
  "totalvotes": 327529,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "DE",
  "candidatevotes": 107,
  "totalvotes": 327529,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "DC",
  "candidatevotes": 171923,
  "totalvotes": 201894,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "DC",
  "candidatevotes": 18073,
  "totalvotes": 201894,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "DC",
  "candidatevotes": 10576,
  "totalvotes": 201894,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "DC",
  "candidatevotes": 669,
  "totalvotes": 201894,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "DC",
  "candidatevotes": 539,
  "totalvotes": 201894,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "DC",
  "candidatevotes": 114,
  "totalvotes": 201894,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 2912790,
  "totalvotes": 5963110,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 2912253,
  "totalvotes": 5963110,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 97488,
  "totalvotes": 5963110,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 17484,
  "totalvotes": 5963110,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 16415,
  "totalvotes": 5963110,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 2281,
  "totalvotes": 5963110,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 1804,
  "totalvotes": 5963110,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 1371,
  "totalvotes": 5963110,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 622,
  "totalvotes": 5963110,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 562,
  "totalvotes": 5963110,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "FL",
  "candidatevotes": 40,
  "totalvotes": 5963110,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "GA",
  "candidatevotes": 1419720,
  "totalvotes": 2583208,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "GA",
  "candidatevotes": 1116230,
  "totalvotes": 2583208,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "GA",
  "candidatevotes": 36332,
  "totalvotes": 2583208,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "GA",
  "candidatevotes": 10926,
  "totalvotes": 2583208,
  "party": "independent",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 205286,
  "totalvotes": 367951,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 137845,
  "totalvotes": 367951,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 21623,
  "totalvotes": 367951,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 1477,
  "totalvotes": 367951,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 1071,
  "totalvotes": 367951,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 343,
  "totalvotes": 367951,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "HI",
  "candidatevotes": 306,
  "totalvotes": 367951,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 336937,
  "totalvotes": 501615,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 138637,
  "totalvotes": 501615,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 12292,
  "totalvotes": 501615,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 7615,
  "totalvotes": 501615,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 3488,
  "totalvotes": 501615,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 1469,
  "totalvotes": 501615,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "ID",
  "candidatevotes": 1177,
  "totalvotes": 501615,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "IL",
  "candidatevotes": 2589026,
  "totalvotes": 4742108,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "IL",
  "candidatevotes": 2019421,
  "totalvotes": 4742108,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "IL",
  "candidatevotes": 103759,
  "totalvotes": 4742108,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "IL",
  "candidatevotes": 16152,
  "totalvotes": 4742108,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "IL",
  "candidatevotes": 11623,
  "totalvotes": 4742108,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "IL",
  "candidatevotes": 2127,
  "totalvotes": 4742108,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "IN",
  "candidatevotes": 1245836,
  "totalvotes": 2199302,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "IN",
  "candidatevotes": 901980,
  "totalvotes": 2199302,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "IN",
  "candidatevotes": 18997,
  "totalvotes": 2199302,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "IN",
  "candidatevotes": 16959,
  "totalvotes": 2199302,
  "party": "independent",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "IN",
  "candidatevotes": 15530,
  "totalvotes": 2199302,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 638517,
  "totalvotes": 1353022,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 634373,
  "totalvotes": 1353022,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 37459,
  "totalvotes": 1353022,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 29374,
  "totalvotes": 1353022,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 5731,
  "totalvotes": 1353022,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 3209,
  "totalvotes": 1353022,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 2281,
  "totalvotes": 1353022,
  "party": "nominated by petition",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 1168,
  "totalvotes": 1353022,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 613,
  "totalvotes": 1353022,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 190,
  "totalvotes": 1353022,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "IA",
  "candidatevotes": 107,
  "totalvotes": 1353022,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 2000,
  "state_po": "KS",
  "candidatevotes": 622332,
  "totalvotes": 1072216,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "KS",
  "candidatevotes": 399276,
  "totalvotes": 1072216,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "KS",
  "candidatevotes": 37459,
  "totalvotes": 1072216,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "KS",
  "candidatevotes": 7370,
  "totalvotes": 1072216,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "KS",
  "candidatevotes": 4525,
  "totalvotes": 1072216,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "KS",
  "candidatevotes": 1254,
  "totalvotes": 1072216,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 872520,
  "totalvotes": 1544106,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 638923,
  "totalvotes": 1544106,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 23118,
  "totalvotes": 1544106,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 4152,
  "totalvotes": 1544106,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 2885,
  "totalvotes": 1544106,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 1513,
  "totalvotes": 1544106,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "KY",
  "candidatevotes": 995,
  "totalvotes": 1544106,
  "party": "constitution party",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 927871,
  "totalvotes": 1765656,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 792344,
  "totalvotes": 1765656,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 20473,
  "totalvotes": 1765656,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 14356,
  "totalvotes": 1765656,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 5483,
  "totalvotes": 1765656,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 2951,
  "totalvotes": 1765656,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 1103,
  "totalvotes": 1765656,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "LA",
  "candidatevotes": 1075,
  "totalvotes": 1765656,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 319951,
  "totalvotes": 651817,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 286616,
  "totalvotes": 651817,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 37127,
  "totalvotes": 651817,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 4443,
  "totalvotes": 651817,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 3074,
  "totalvotes": 651817,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 579,
  "totalvotes": 651817,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "ME",
  "candidatevotes": 27,
  "totalvotes": 651817,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 1144008,
  "totalvotes": 2025212,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 813827,
  "totalvotes": 2025212,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 53768,
  "totalvotes": 2025212,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 5310,
  "totalvotes": 2025212,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 4248,
  "totalvotes": 2025212,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 1656,
  "totalvotes": 2025212,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 1477,
  "totalvotes": 2025212,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2000,
  "state_po": "MD",
  "candidatevotes": 918,
  "totalvotes": 2025212,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 1616487,
  "totalvotes": 2733964,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 878502,
  "totalvotes": 2733964,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 173564,
  "totalvotes": 2733964,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 31022,
  "totalvotes": 2733964,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 16366,
  "totalvotes": 2733964,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 11149,
  "totalvotes": 2733964,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 3990,
  "totalvotes": 2733964,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2000,
  "state_po": "MA",
  "candidatevotes": 2884,
  "totalvotes": 2733964,
  "party": "unenrolled",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 2170418,
  "totalvotes": 4232501,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 1953139,
  "totalvotes": 4232501,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 84165,
  "totalvotes": 4232501,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 16711,
  "totalvotes": 4232501,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 3791,
  "totalvotes": 4232501,
  "party": "u.s. taxpayers party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 2426,
  "totalvotes": 4232501,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "MI",
  "candidatevotes": 1851,
  "totalvotes": 4232501,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 1168266,
  "totalvotes": 2438685,
  "party": "democratic-farmer-labor",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 1109659,
  "totalvotes": 2438685,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 126696,
  "totalvotes": 2438685,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 24460,
  "totalvotes": 2438685,
  "party": "reform party minnesota",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 5282,
  "totalvotes": 2438685,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 3272,
  "totalvotes": 2438685,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 1022,
  "totalvotes": 2438685,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "MN",
  "candidatevotes": 28,
  "totalvotes": 2438685,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 572844,
  "totalvotes": 994184,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 404614,
  "totalvotes": 994184,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 8735,
  "totalvotes": 994184,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 3267,
  "totalvotes": 994184,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 2265,
  "totalvotes": 994184,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 2009,
  "totalvotes": 994184,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MS",
  "candidatevotes": 450,
  "totalvotes": 994184,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 1189924,
  "totalvotes": 2359892,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 1111138,
  "totalvotes": 2359892,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 38515,
  "totalvotes": 2359892,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 9818,
  "totalvotes": 2359892,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 7436,
  "totalvotes": 2359892,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 1957,
  "totalvotes": 2359892,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "MO",
  "candidatevotes": 1104,
  "totalvotes": 2359892,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 240178,
  "totalvotes": 410986,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 137126,
  "totalvotes": 410986,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 24437,
  "totalvotes": 410986,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 5697,
  "totalvotes": 410986,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 1718,
  "totalvotes": 410986,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 1155,
  "totalvotes": 410986,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "MT",
  "candidatevotes": 675,
  "totalvotes": 410986,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "NE",
  "candidatevotes": 433862,
  "totalvotes": 697019,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NE",
  "candidatevotes": 231780,
  "totalvotes": 697019,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NE",
  "candidatevotes": 24540,
  "totalvotes": 697019,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "NE",
  "candidatevotes": 4592,
  "totalvotes": 697019,
  "party": "nominated by petition",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "NE",
  "candidatevotes": 2245,
  "totalvotes": 697019,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 301575,
  "totalvotes": 609426,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 279978,
  "totalvotes": 609426,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 15008,
  "totalvotes": 609426,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 4747,
  "totalvotes": 609426,
  "party": "citizens first",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 3315,
  "totalvotes": 609426,
  "party": "",
  "candidate": "None Of These Candidates"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 3311,
  "totalvotes": 609426,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 621,
  "totalvotes": 609426,
  "party": "independent american",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 415,
  "totalvotes": 609426,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 282,
  "totalvotes": 609426,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2000,
  "state_po": "NV",
  "candidatevotes": 174,
  "totalvotes": 609426,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2000,
  "state_po": "NH",
  "candidatevotes": 273559,
  "totalvotes": 569081,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NH",
  "candidatevotes": 266348,
  "totalvotes": 569081,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NH",
  "candidatevotes": 22198,
  "totalvotes": 569081,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "NH",
  "candidatevotes": 2757,
  "totalvotes": 569081,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "NH",
  "candidatevotes": 2615,
  "totalvotes": 569081,
  "party": "independence",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "NH",
  "candidatevotes": 1604,
  "totalvotes": 569081,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "NJ",
  "candidatevotes": 1788850,
  "totalvotes": 3187226,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NJ",
  "candidatevotes": 1284173,
  "totalvotes": 3187226,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NJ",
  "candidatevotes": 114203,
  "totalvotes": 3187226,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 286783,
  "totalvotes": 598605,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 286417,
  "totalvotes": 598605,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 21251,
  "totalvotes": 598605,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 2058,
  "totalvotes": 598605,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 1392,
  "totalvotes": 598605,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 361,
  "totalvotes": 598605,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "NM",
  "candidatevotes": 343,
  "totalvotes": 598605,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 4107697,
  "totalvotes": 6960215,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 2403374,
  "totalvotes": 6960215,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 244030,
  "totalvotes": 6960215,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 138216,
  "totalvotes": 6960215,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 31599,
  "totalvotes": 6960215,
  "party": "right-to-life",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 24361,
  "totalvotes": 6960215,
  "party": "independence",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 7649,
  "totalvotes": 6960215,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 1789,
  "totalvotes": 6960215,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 1498,
  "totalvotes": 6960215,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "NY",
  "candidatevotes": 2,
  "totalvotes": 6960215,
  "party": "socialist",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "NC",
  "candidatevotes": 1631163,
  "totalvotes": 2914990,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "NC",
  "candidatevotes": 1257692,
  "totalvotes": 2914990,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "NC",
  "candidatevotes": 13891,
  "totalvotes": 2914990,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "NC",
  "candidatevotes": 8874,
  "totalvotes": 2914990,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "NC",
  "candidatevotes": 3370,
  "totalvotes": 2914990,
  "party": "socialist",
  "candidate": "Not Designated"
}, {
  "year": 2000,
  "state_po": "ND",
  "candidatevotes": 174852,
  "totalvotes": 288256,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "ND",
  "candidatevotes": 95284,
  "totalvotes": 288256,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "ND",
  "candidatevotes": 10459,
  "totalvotes": 288256,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "ND",
  "candidatevotes": 7288,
  "totalvotes": 288256,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "ND",
  "candidatevotes": 373,
  "totalvotes": 288256,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "OH",
  "candidatevotes": 2350363,
  "totalvotes": 4701998,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "OH",
  "candidatevotes": 2183628,
  "totalvotes": 4701998,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "OH",
  "candidatevotes": 148353,
  "totalvotes": 4701998,
  "party": "",
  "candidate": "Not Designated"
}, {
  "year": 2000,
  "state_po": "OH",
  "candidatevotes": 13473,
  "totalvotes": 4701998,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "OH",
  "candidatevotes": 6181,
  "totalvotes": 4701998,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "OK",
  "candidatevotes": 744337,
  "totalvotes": 1234229,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "OK",
  "candidatevotes": 474276,
  "totalvotes": 1234229,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "OK",
  "candidatevotes": 9014,
  "totalvotes": 1234229,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "OK",
  "candidatevotes": 6602,
  "totalvotes": 1234229,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 720342,
  "totalvotes": 1533950,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 713577,
  "totalvotes": 1533950,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 77357,
  "totalvotes": 1533950,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 7447,
  "totalvotes": 1533950,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 9637,
  "totalvotes": 1533950,
  "party": "independent",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 3401,
  "totalvotes": 1533950,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2000,
  "state_po": "OR",
  "candidatevotes": 2189,
  "totalvotes": 1533950,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "PA",
  "candidatevotes": 2485967,
  "totalvotes": 4912185,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "PA",
  "candidatevotes": 2281127,
  "totalvotes": 4912185,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "PA",
  "candidatevotes": 103392,
  "totalvotes": 4912185,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "PA",
  "candidatevotes": 16023,
  "totalvotes": 4912185,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "PA",
  "candidatevotes": 14428,
  "totalvotes": 4912185,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "PA",
  "candidatevotes": 11248,
  "totalvotes": 4912185,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 249508,
  "totalvotes": 409112,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 130555,
  "totalvotes": 409112,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 25052,
  "totalvotes": 409112,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 2273,
  "totalvotes": 409112,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 742,
  "totalvotes": 409112,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 415,
  "totalvotes": 409112,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 271,
  "totalvotes": 409112,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 199,
  "totalvotes": 409112,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 2000,
  "state_po": "RI",
  "candidatevotes": 97,
  "totalvotes": 409112,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 786892,
  "totalvotes": 1383902,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 566037,
  "totalvotes": 1383902,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 20279,
  "totalvotes": 1383902,
  "party": "united citizens",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 4760,
  "totalvotes": 1383902,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 3309,
  "totalvotes": 1383902,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 1682,
  "totalvotes": 1383902,
  "party": "constitution party",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "SC",
  "candidatevotes": 943,
  "totalvotes": 1383902,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "SD",
  "candidatevotes": 190700,
  "totalvotes": 316269,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "SD",
  "candidatevotes": 118804,
  "totalvotes": 316269,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "SD",
  "candidatevotes": 3322,
  "totalvotes": 316269,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "SD",
  "candidatevotes": 1781,
  "totalvotes": 316269,
  "party": "independent",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "SD",
  "candidatevotes": 1662,
  "totalvotes": 316269,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "TN",
  "candidatevotes": 1061949,
  "totalvotes": 2076181,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "TN",
  "candidatevotes": 981720,
  "totalvotes": 2076181,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "TN",
  "candidatevotes": 32512,
  "totalvotes": 2076181,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "TX",
  "candidatevotes": 3799639,
  "totalvotes": 6407637,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "TX",
  "candidatevotes": 2433746,
  "totalvotes": 6407637,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "TX",
  "candidatevotes": 137994,
  "totalvotes": 6407637,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "TX",
  "candidatevotes": 23160,
  "totalvotes": 6407637,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "TX",
  "candidatevotes": 13098,
  "totalvotes": 6407637,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 515096,
  "totalvotes": 770754,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 203053,
  "totalvotes": 770754,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 35850,
  "totalvotes": 770754,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 9319,
  "totalvotes": 770754,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 3616,
  "totalvotes": 770754,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 2709,
  "totalvotes": 770754,
  "party": "independent american",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 763,
  "totalvotes": 770754,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 186,
  "totalvotes": 770754,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "UT",
  "candidatevotes": 162,
  "totalvotes": 770754,
  "party": "no party affiliation",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 149022,
  "totalvotes": 294308,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 119775,
  "totalvotes": 294308,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 20374,
  "totalvotes": 294308,
  "party": "progressive/green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 2192,
  "totalvotes": 294308,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 1044,
  "totalvotes": 294308,
  "party": "vermont grassroots",
  "candidate": "Dennis \"\"Denny\"\", Lane"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 784,
  "totalvotes": 294308,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 514,
  "totalvotes": 294308,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 219,
  "totalvotes": 294308,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 161,
  "totalvotes": 294308,
  "party": "liberty union party",
  "candidate": "McReynolds, David"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 153,
  "totalvotes": 294308,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "VT",
  "candidatevotes": 70,
  "totalvotes": 294308,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 1437490,
  "totalvotes": 2739447,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 1217290,
  "totalvotes": 2739447,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 59398,
  "totalvotes": 2739447,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 15198,
  "totalvotes": 2739447,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 5455,
  "totalvotes": 2739447,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 2807,
  "totalvotes": 2739447,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "VA",
  "candidatevotes": 1809,
  "totalvotes": 2739447,
  "party": "conservative",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 1247652,
  "totalvotes": 2487433,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 1108864,
  "totalvotes": 2487433,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 103002,
  "totalvotes": 2487433,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 13135,
  "totalvotes": 2487433,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 7171,
  "totalvotes": 2487433,
  "party": "freedom",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 2927,
  "totalvotes": 2487433,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 1989,
  "totalvotes": 2487433,
  "party": "constitution party",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 1729,
  "totalvotes": 2487433,
  "party": "workers world",
  "candidate": "Moorehead, Monica"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 660,
  "totalvotes": 2487433,
  "party": "socialist",
  "candidate": "McReynolds, David"
}, {
  "year": 2000,
  "state_po": "WA",
  "candidatevotes": 304,
  "totalvotes": 2487433,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 336475,
  "totalvotes": 648124,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 295497,
  "totalvotes": 648124,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 10680,
  "totalvotes": 648124,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 3169,
  "totalvotes": 648124,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 1912,
  "totalvotes": 648124,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 367,
  "totalvotes": 648124,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2000,
  "state_po": "WV",
  "candidatevotes": 24,
  "totalvotes": 648124,
  "party": "",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "WI",
  "candidatevotes": 1242987,
  "totalvotes": 2598607,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "WI",
  "candidatevotes": 1237279,
  "totalvotes": 2598607,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "WI",
  "candidatevotes": 94070,
  "totalvotes": 2598607,
  "party": "green",
  "candidate": "Nader, Ralph"
}, {
  "year": 2000,
  "state_po": "WI",
  "candidatevotes": 15735,
  "totalvotes": 2598607,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2000,
  "state_po": "WI",
  "candidatevotes": 6640,
  "totalvotes": 2598607,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "WI",
  "candidatevotes": 1896,
  "totalvotes": 2598607,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2000,
  "state_po": "WY",
  "candidatevotes": 147947,
  "totalvotes": 213726,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2000,
  "state_po": "WY",
  "candidatevotes": 60481,
  "totalvotes": 213726,
  "party": "democrat",
  "candidate": "Gore, Al"
}, {
  "year": 2000,
  "state_po": "WY",
  "candidatevotes": 2724,
  "totalvotes": 213726,
  "party": "reform party",
  "candidate": "Buchanan, Patrick \"\"Pat\""
}, {
  "year": 2000,
  "state_po": "WY",
  "candidatevotes": 1443,
  "totalvotes": 213726,
  "party": "libertarian",
  "candidate": "Browne, Harry"
}, {
  "year": 2000,
  "state_po": "WY",
  "candidatevotes": 720,
  "totalvotes": 213726,
  "party": "independent",
  "candidate": "Phillips, Howard"
}, {
  "year": 2000,
  "state_po": "WY",
  "candidatevotes": 411,
  "totalvotes": 213726,
  "party": "natural law",
  "candidate": "Hagelin, John"
}, {
  "year": 2004,
  "state_po": "AL",
  "candidatevotes": 1176394,
  "totalvotes": 1883415,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "AL",
  "candidatevotes": 693933,
  "totalvotes": 1883415,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "AL",
  "candidatevotes": 13088,
  "totalvotes": 1883415,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 190889,
  "totalvotes": 312598,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 111025,
  "totalvotes": 312598,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 5069,
  "totalvotes": 312598,
  "party": "populist",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 2092,
  "totalvotes": 312598,
  "party": "alaskan independence party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 1675,
  "totalvotes": 312598,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 1058,
  "totalvotes": 312598,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "AK",
  "candidatevotes": 790,
  "totalvotes": 312598,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "AZ",
  "candidatevotes": 1104294,
  "totalvotes": 2012585,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "AZ",
  "candidatevotes": 893524,
  "totalvotes": 2012585,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "AZ",
  "candidatevotes": 11856,
  "totalvotes": 2012585,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "AZ",
  "candidatevotes": 2911,
  "totalvotes": 2012585,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "AR",
  "candidatevotes": 572898,
  "totalvotes": 1054945,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "AR",
  "candidatevotes": 469953,
  "totalvotes": 1054945,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "AR",
  "candidatevotes": 6171,
  "totalvotes": 1054945,
  "party": "populist",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "AR",
  "candidatevotes": 2352,
  "totalvotes": 1054945,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "AR",
  "candidatevotes": 2083,
  "totalvotes": 1054945,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "AR",
  "candidatevotes": 1488,
  "totalvotes": 1054945,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 6745485,
  "totalvotes": 12421353,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 5509826,
  "totalvotes": 12421353,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 50165,
  "totalvotes": 12421353,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 40771,
  "totalvotes": 12421353,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 27607,
  "totalvotes": 12421353,
  "party": "peace & freedom",
  "candidate": "Peltier, Leonard"
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 26645,
  "totalvotes": 12421353,
  "party": "american independent party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "CA",
  "candidatevotes": 20854,
  "totalvotes": 12421353,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 1101255,
  "totalvotes": 2129630,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 1001732,
  "totalvotes": 2129630,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 12718,
  "totalvotes": 2129630,
  "party": "reform party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 7664,
  "totalvotes": 2129630,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 2562,
  "totalvotes": 2129630,
  "party": "american constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 1591,
  "totalvotes": 2129630,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 804,
  "totalvotes": 2129630,
  "party": "unaffiliated",
  "candidate": "Andress, Stanford"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 378,
  "totalvotes": 2129630,
  "party": "concerns of people",
  "candidate": "Amondson, Gene"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 329,
  "totalvotes": 2129630,
  "party": "socialist equality party",
  "candidate": "Van Auken, Bill"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 241,
  "totalvotes": 2129630,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 216,
  "totalvotes": 2129630,
  "party": "socialist",
  "candidate": "Brown, Walt"
}, {
  "year": 2004,
  "state_po": "CO",
  "candidatevotes": 140,
  "totalvotes": 2129630,
  "party": "prohibition",
  "candidate": "Dodge, Earl"
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 857488,
  "totalvotes": 1578769,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 693826,
  "totalvotes": 1578769,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 12969,
  "totalvotes": 1578769,
  "party": "petitioning candidate",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 9564,
  "totalvotes": 1578769,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 3367,
  "totalvotes": 1578769,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 1543,
  "totalvotes": 1578769,
  "party": "concerned citizens",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "CT",
  "candidatevotes": 12,
  "totalvotes": 1578769,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 200152,
  "totalvotes": 375190,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 171660,
  "totalvotes": 375190,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 2153,
  "totalvotes": 375190,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 586,
  "totalvotes": 375190,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 289,
  "totalvotes": 375190,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 250,
  "totalvotes": 375190,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "DE",
  "candidatevotes": 100,
  "totalvotes": 375190,
  "party": "natural law",
  "candidate": "Brown, Walt"
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 202970,
  "totalvotes": 227586,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 21256,
  "totalvotes": 227586,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 1485,
  "totalvotes": 227586,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 737,
  "totalvotes": 227586,
  "party": "d.c. statehood green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 506,
  "totalvotes": 227586,
  "party": "",
  "candidate": "Others"
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 502,
  "totalvotes": 227586,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "DC",
  "candidatevotes": 130,
  "totalvotes": 227586,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 3964522,
  "totalvotes": 7609810,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 3583544,
  "totalvotes": 7609810,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 32971,
  "totalvotes": 7609810,
  "party": "reform party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 11996,
  "totalvotes": 7609810,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 6626,
  "totalvotes": 7609810,
  "party": "constitution party of florida",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 3917,
  "totalvotes": 7609810,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 3502,
  "totalvotes": 7609810,
  "party": "socialist party of florida",
  "candidate": "Brown, Walt"
}, {
  "year": 2004,
  "state_po": "FL",
  "candidatevotes": 2732,
  "totalvotes": 7609810,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "GA",
  "candidatevotes": 1914254,
  "totalvotes": 3301875,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "GA",
  "candidatevotes": 1366149,
  "totalvotes": 3301875,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "GA",
  "candidatevotes": 18387,
  "totalvotes": 3301875,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "GA",
  "candidatevotes": 3085,
  "totalvotes": 3301875,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "HI",
  "candidatevotes": 231708,
  "totalvotes": 429013,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "HI",
  "candidatevotes": 194191,
  "totalvotes": 429013,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "HI",
  "candidatevotes": 1737,
  "totalvotes": 429013,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "HI",
  "candidatevotes": 1377,
  "totalvotes": 429013,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "ID",
  "candidatevotes": 409235,
  "totalvotes": 598376,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "ID",
  "candidatevotes": 181098,
  "totalvotes": 598376,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "ID",
  "candidatevotes": 3844,
  "totalvotes": 598376,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "ID",
  "candidatevotes": 3084,
  "totalvotes": 598376,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "ID",
  "candidatevotes": 1115,
  "totalvotes": 598376,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "IL",
  "candidatevotes": 2891550,
  "totalvotes": 5274322,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "IL",
  "candidatevotes": 2345946,
  "totalvotes": 5274322,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "IL",
  "candidatevotes": 32442,
  "totalvotes": 5274322,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "IL",
  "candidatevotes": 4384,
  "totalvotes": 5274322,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "IN",
  "candidatevotes": 1479438,
  "totalvotes": 2468002,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "IN",
  "candidatevotes": 969011,
  "totalvotes": 2468002,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "IN",
  "candidatevotes": 18058,
  "totalvotes": 2468002,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "IN",
  "candidatevotes": 1495,
  "totalvotes": 2468002,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 751957,
  "totalvotes": 1506908,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 741898,
  "totalvotes": 1506908,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 7243,
  "totalvotes": 1506908,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 2992,
  "totalvotes": 1506908,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 1304,
  "totalvotes": 1506908,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 1141,
  "totalvotes": 1506908,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "IA",
  "candidatevotes": 373,
  "totalvotes": 1506908,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "KS",
  "candidatevotes": 736456,
  "totalvotes": 1187756,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "KS",
  "candidatevotes": 434993,
  "totalvotes": 1187756,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "KS",
  "candidatevotes": 9348,
  "totalvotes": 1187756,
  "party": "reform party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "KS",
  "candidatevotes": 4013,
  "totalvotes": 1187756,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "KS",
  "candidatevotes": 2899,
  "totalvotes": 1187756,
  "party": "independent",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "KS",
  "candidatevotes": 47,
  "totalvotes": 1187756,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "KY",
  "candidatevotes": 1069439,
  "totalvotes": 1795882,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "KY",
  "candidatevotes": 712733,
  "totalvotes": 1795882,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "KY",
  "candidatevotes": 8856,
  "totalvotes": 1795882,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "KY",
  "candidatevotes": 2619,
  "totalvotes": 1795882,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "KY",
  "candidatevotes": 2213,
  "totalvotes": 1795882,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "KY",
  "candidatevotes": 22,
  "totalvotes": 1795882,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 1102169,
  "totalvotes": 1943106,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 820299,
  "totalvotes": 1943106,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 7032,
  "totalvotes": 1943106,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 5203,
  "totalvotes": 1943106,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 2781,
  "totalvotes": 1943106,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 1795,
  "totalvotes": 1943106,
  "party": "protecting working families",
  "candidate": "Brown, Walt"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 1566,
  "totalvotes": 1943106,
  "party": "prohibition",
  "candidate": "Amondson, Gene"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 1276,
  "totalvotes": 1943106,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "LA",
  "candidatevotes": 985,
  "totalvotes": 1943106,
  "party": "socialist",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 396842,
  "totalvotes": 740752,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 330201,
  "totalvotes": 740752,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 8069,
  "totalvotes": 740752,
  "party": "independent",
  "candidate": "The Better Life,"
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 2936,
  "totalvotes": 740752,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 1965,
  "totalvotes": 740752,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 735,
  "totalvotes": 740752,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "ME",
  "candidatevotes": 4,
  "totalvotes": 740752,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 1334493,
  "totalvotes": 2384238,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 1024703,
  "totalvotes": 2384238,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 11854,
  "totalvotes": 2384238,
  "party": "populist",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 6094,
  "totalvotes": 2384238,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 3632,
  "totalvotes": 2384238,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 3421,
  "totalvotes": 2384238,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "MD",
  "candidatevotes": 41,
  "totalvotes": 2384238,
  "party": "unaffiliated",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 1803800,
  "totalvotes": 2927455,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 1071109,
  "totalvotes": 2927455,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 15067,
  "totalvotes": 2927455,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 15022,
  "totalvotes": 2927455,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 10623,
  "totalvotes": 2927455,
  "party": "green-rainbow",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 7028,
  "totalvotes": 2927455,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "MA",
  "candidatevotes": 4806,
  "totalvotes": 2927455,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 2479183,
  "totalvotes": 4839252,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 2313746,
  "totalvotes": 4839252,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 24035,
  "totalvotes": 4839252,
  "party": "no party affiliation",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 10552,
  "totalvotes": 4839252,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 5325,
  "totalvotes": 4839252,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 4980,
  "totalvotes": 4839252,
  "party": "u.s. taxpayers party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "MI",
  "candidatevotes": 1431,
  "totalvotes": 4839252,
  "party": "natural law",
  "candidate": "Brown, Walt"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 1445014,
  "totalvotes": 2828387,
  "party": "democratic-farmer-labor",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 1346695,
  "totalvotes": 2828387,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 18683,
  "totalvotes": 2828387,
  "party": "better life",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 4639,
  "totalvotes": 2828387,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 4408,
  "totalvotes": 2828387,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 3074,
  "totalvotes": 2828387,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 2532,
  "totalvotes": 2828387,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 2387,
  "totalvotes": 2828387,
  "party": "christian freedom party",
  "candidate": "Harens, Thomas"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 539,
  "totalvotes": 2828387,
  "party": "socialist equality party",
  "candidate": "Van Auken, Bill"
}, {
  "year": 2004,
  "state_po": "MN",
  "candidatevotes": 416,
  "totalvotes": 2828387,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 672660,
  "totalvotes": 1139824,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 457766,
  "totalvotes": 1139824,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 3175,
  "totalvotes": 1139824,
  "party": "reform party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 1793,
  "totalvotes": 1139824,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 1758,
  "totalvotes": 1139824,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 1599,
  "totalvotes": 1139824,
  "party": "independent",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "MS",
  "candidatevotes": 1073,
  "totalvotes": 1139824,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "MO",
  "candidatevotes": 1455713,
  "totalvotes": 2731364,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MO",
  "candidatevotes": 1259171,
  "totalvotes": 2731364,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MO",
  "candidatevotes": 9831,
  "totalvotes": 2731364,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MO",
  "candidatevotes": 5355,
  "totalvotes": 2731364,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "MO",
  "candidatevotes": 1294,
  "totalvotes": 2731364,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MT",
  "candidatevotes": 266063,
  "totalvotes": 450434,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "MT",
  "candidatevotes": 173710,
  "totalvotes": 450434,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "MT",
  "candidatevotes": 6168,
  "totalvotes": 450434,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "MT",
  "candidatevotes": 1764,
  "totalvotes": 450434,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "MT",
  "candidatevotes": 1733,
  "totalvotes": 450434,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "MT",
  "candidatevotes": 996,
  "totalvotes": 450434,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "NE",
  "candidatevotes": 512814,
  "totalvotes": 778186,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NE",
  "candidatevotes": 254328,
  "totalvotes": 778186,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NE",
  "candidatevotes": 5780,
  "totalvotes": 778186,
  "party": "reform party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "NE",
  "candidatevotes": 2041,
  "totalvotes": 778186,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "NE",
  "candidatevotes": 2245,
  "totalvotes": 778186,
  "party": "nebraska party",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "NE",
  "candidatevotes": 978,
  "totalvotes": 778186,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 418690,
  "totalvotes": 829587,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 397190,
  "totalvotes": 829587,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 4838,
  "totalvotes": 829587,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 3688,
  "totalvotes": 829587,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 3176,
  "totalvotes": 829587,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 1152,
  "totalvotes": 829587,
  "party": "independent american",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "NV",
  "candidatevotes": 853,
  "totalvotes": 829587,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "NH",
  "candidatevotes": 340511,
  "totalvotes": 678287,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NH",
  "candidatevotes": 331237,
  "totalvotes": 678287,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NH",
  "candidatevotes": 4479,
  "totalvotes": 678287,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "NH",
  "candidatevotes": 2060,
  "totalvotes": 678287,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "NJ",
  "candidatevotes": 1911430,
  "totalvotes": 3611691,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NJ",
  "candidatevotes": 1670003,
  "totalvotes": 3611691,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NJ",
  "candidatevotes": 30258,
  "totalvotes": 3611691,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "NM",
  "candidatevotes": 376930,
  "totalvotes": 756304,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NM",
  "candidatevotes": 370942,
  "totalvotes": 756304,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NM",
  "candidatevotes": 4053,
  "totalvotes": 756304,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "NM",
  "candidatevotes": 2382,
  "totalvotes": 756304,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "NM",
  "candidatevotes": 1226,
  "totalvotes": 756304,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "NM",
  "candidatevotes": 771,
  "totalvotes": 756304,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 4314280,
  "totalvotes": 7448266,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 2962567,
  "totalvotes": 7448266,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 99873,
  "totalvotes": 7448266,
  "party": "independence",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 57230,
  "totalvotes": 7448266,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 11607,
  "totalvotes": 7448266,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 2405,
  "totalvotes": 7448266,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "NY",
  "candidatevotes": 304,
  "totalvotes": 7448266,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "NC",
  "candidatevotes": 1961166,
  "totalvotes": 3501007,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "NC",
  "candidatevotes": 1525849,
  "totalvotes": 3501007,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "NC",
  "candidatevotes": 11731,
  "totalvotes": 3501007,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "NC",
  "candidatevotes": 2261,
  "totalvotes": 3501007,
  "party": "unaffiliated",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "ND",
  "candidatevotes": 196651,
  "totalvotes": 312833,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "ND",
  "candidatevotes": 111052,
  "totalvotes": 312833,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "ND",
  "candidatevotes": 3756,
  "totalvotes": 312833,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "ND",
  "candidatevotes": 851,
  "totalvotes": 312833,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "ND",
  "candidatevotes": 514,
  "totalvotes": 312833,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "ND",
  "candidatevotes": 9,
  "totalvotes": 312833,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "OH",
  "candidatevotes": 2859764,
  "totalvotes": 5627903,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "OH",
  "candidatevotes": 2741165,
  "totalvotes": 5627903,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "OH",
  "candidatevotes": 26974,
  "totalvotes": 5627903,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "OK",
  "candidatevotes": 959792,
  "totalvotes": 1463758,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "OK",
  "candidatevotes": 503966,
  "totalvotes": 1463758,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "OR",
  "candidatevotes": 943163,
  "totalvotes": 1836782,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "OR",
  "candidatevotes": 866831,
  "totalvotes": 1836782,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "OR",
  "candidatevotes": 8956,
  "totalvotes": 1836782,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "OR",
  "candidatevotes": 7260,
  "totalvotes": 1836782,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "OR",
  "candidatevotes": 5315,
  "totalvotes": 1836782,
  "party": "pacific green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "OR",
  "candidatevotes": 5257,
  "totalvotes": 1836782,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 2938095,
  "totalvotes": 5769590,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 2793847,
  "totalvotes": 5769590,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 21185,
  "totalvotes": 5769590,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 6319,
  "totalvotes": 5769590,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 6318,
  "totalvotes": 5769590,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 2656,
  "totalvotes": 5769590,
  "party": "independent",
  "candidate": "Independent Party Candidate,"
}, {
  "year": 2004,
  "state_po": "PA",
  "candidatevotes": 1170,
  "totalvotes": 5769590,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 259760,
  "totalvotes": 437134,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 169046,
  "totalvotes": 437134,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 4651,
  "totalvotes": 437134,
  "party": "reform party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 1333,
  "totalvotes": 437134,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 907,
  "totalvotes": 437134,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 845,
  "totalvotes": 437134,
  "party": "nonpartisan",
  "candidate": "Nonpartisan"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 339,
  "totalvotes": 437134,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "RI",
  "candidatevotes": 253,
  "totalvotes": 437134,
  "party": "workers world",
  "candidate": "Workers World"
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 937974,
  "totalvotes": 1617700,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 661669,
  "totalvotes": 1617700,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 5520,
  "totalvotes": 1617700,
  "party": "independence",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 5317,
  "totalvotes": 1617700,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 3608,
  "totalvotes": 1617700,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 2124,
  "totalvotes": 1617700,
  "party": "united citizens",
  "candidate": "Brown, Walt"
}, {
  "year": 2004,
  "state_po": "SC",
  "candidatevotes": 1488,
  "totalvotes": 1617700,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "SD",
  "candidatevotes": 232584,
  "totalvotes": 388215,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "SD",
  "candidatevotes": 149244,
  "totalvotes": 388215,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "SD",
  "candidatevotes": 4320,
  "totalvotes": 388215,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "SD",
  "candidatevotes": 1103,
  "totalvotes": 388215,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "SD",
  "candidatevotes": 964,
  "totalvotes": 388215,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "TN",
  "candidatevotes": 1384375,
  "totalvotes": 2437319,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "TN",
  "candidatevotes": 1036477,
  "totalvotes": 2437319,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "TN",
  "candidatevotes": 16467,
  "totalvotes": 2437319,
  "party": "independent",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "TX",
  "candidatevotes": 4526917,
  "totalvotes": 7410749,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "TX",
  "candidatevotes": 2832704,
  "totalvotes": 7410749,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "TX",
  "candidatevotes": 38787,
  "totalvotes": 7410749,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "TX",
  "candidatevotes": 12341,
  "totalvotes": 7410749,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 663742,
  "totalvotes": 927844,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 241199,
  "totalvotes": 927844,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 11305,
  "totalvotes": 927844,
  "party": "unaffiliated",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 6841,
  "totalvotes": 927844,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 3375,
  "totalvotes": 927844,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 946,
  "totalvotes": 927844,
  "party": "personal choice",
  "candidate": "Jay, Charles"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 393,
  "totalvotes": 927844,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "UT",
  "candidatevotes": 43,
  "totalvotes": 927844,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 184067,
  "totalvotes": 312309,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 121180,
  "totalvotes": 312309,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 4494,
  "totalvotes": 312309,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 1102,
  "totalvotes": 312309,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 957,
  "totalvotes": 312309,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 265,
  "totalvotes": 312309,
  "party": "liberty union party",
  "candidate": "Parker, John"
}, {
  "year": 2004,
  "state_po": "VT",
  "candidatevotes": 244,
  "totalvotes": 312309,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "VA",
  "candidatevotes": 1716959,
  "totalvotes": 3195415,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "VA",
  "candidatevotes": 1454742,
  "totalvotes": 3195415,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "VA",
  "candidatevotes": 11032,
  "totalvotes": 3195415,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "VA",
  "candidatevotes": 10161,
  "totalvotes": 3195415,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "VA",
  "candidatevotes": 2521,
  "totalvotes": 3195415,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 1510201,
  "totalvotes": 2859084,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 1304894,
  "totalvotes": 2859084,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 23283,
  "totalvotes": 2859084,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 11955,
  "totalvotes": 2859084,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 3922,
  "totalvotes": 2859084,
  "party": "constitution party",
  "candidate": "Peroutka, Michael"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 2974,
  "totalvotes": 2859084,
  "party": "green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 1077,
  "totalvotes": 2859084,
  "party": "workers world",
  "candidate": "Parker, John"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 547,
  "totalvotes": 2859084,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2004,
  "state_po": "WA",
  "candidatevotes": 231,
  "totalvotes": 2859084,
  "party": "socialist equality party",
  "candidate": "Van Auken, Bill"
}, {
  "year": 2004,
  "state_po": "WV",
  "candidatevotes": 423778,
  "totalvotes": 755792,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "WV",
  "candidatevotes": 326541,
  "totalvotes": 755792,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "WV",
  "candidatevotes": 4063,
  "totalvotes": 755792,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "WV",
  "candidatevotes": 1405,
  "totalvotes": 755792,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "WV",
  "candidatevotes": 5,
  "totalvotes": 755792,
  "party": "",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "WI",
  "candidatevotes": 1489504,
  "totalvotes": 2997007,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "WI",
  "candidatevotes": 1478120,
  "totalvotes": 2997007,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "WI",
  "candidatevotes": 17272,
  "totalvotes": 2997007,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "WI",
  "candidatevotes": 6464,
  "totalvotes": 2997007,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "WI",
  "candidatevotes": 2986,
  "totalvotes": 2997007,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2004,
  "state_po": "WI",
  "candidatevotes": 2661,
  "totalvotes": 2997007,
  "party": "wisconsin green",
  "candidate": "Cobb, David"
}, {
  "year": 2004,
  "state_po": "WY",
  "candidatevotes": 167629,
  "totalvotes": 243861,
  "party": "republican",
  "candidate": "Bush, George W."
}, {
  "year": 2004,
  "state_po": "WY",
  "candidatevotes": 70776,
  "totalvotes": 243861,
  "party": "democrat",
  "candidate": "Kerry, John"
}, {
  "year": 2004,
  "state_po": "WY",
  "candidatevotes": 3372,
  "totalvotes": 243861,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2004,
  "state_po": "WY",
  "candidatevotes": 1171,
  "totalvotes": 243861,
  "party": "libertarian",
  "candidate": "Badnarik, Michael"
}, {
  "year": 2004,
  "state_po": "WY",
  "candidatevotes": 913,
  "totalvotes": 243861,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2008,
  "state_po": "AL",
  "candidatevotes": 1266546,
  "totalvotes": 2099819,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "AL",
  "candidatevotes": 813479,
  "totalvotes": 2099819,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "AL",
  "candidatevotes": 19794,
  "totalvotes": 2099819,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "AK",
  "candidatevotes": 193841,
  "totalvotes": 326197,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "AK",
  "candidatevotes": 123594,
  "totalvotes": 326197,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "AK",
  "candidatevotes": 3783,
  "totalvotes": 326197,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "AK",
  "candidatevotes": 1730,
  "totalvotes": 326197,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "AK",
  "candidatevotes": 1660,
  "totalvotes": 326197,
  "party": "alaskan independence party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "AK",
  "candidatevotes": 1589,
  "totalvotes": 326197,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "AZ",
  "candidatevotes": 1230111,
  "totalvotes": 2293475,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "AZ",
  "candidatevotes": 1034707,
  "totalvotes": 2293475,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "AZ",
  "candidatevotes": 12555,
  "totalvotes": 2293475,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "AZ",
  "candidatevotes": 11301,
  "totalvotes": 2293475,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "AZ",
  "candidatevotes": 3406,
  "totalvotes": 2293475,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "AZ",
  "candidatevotes": 1395,
  "totalvotes": 2293475,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 638017,
  "totalvotes": 1086617,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 422310,
  "totalvotes": 1086617,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 12882,
  "totalvotes": 1086617,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 4776,
  "totalvotes": 1086617,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 4023,
  "totalvotes": 1086617,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 3470,
  "totalvotes": 1086617,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "AR",
  "candidatevotes": 1139,
  "totalvotes": 1086617,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 8274473,
  "totalvotes": 13561900,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 5011781,
  "totalvotes": 13561900,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 108381,
  "totalvotes": 13561900,
  "party": "peace & freedom",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 67582,
  "totalvotes": 13561900,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 40673,
  "totalvotes": 13561900,
  "party": "american independent party",
  "candidate": "Keyes, Alan"
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 38774,
  "totalvotes": 13561900,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "CA",
  "candidatevotes": 20236,
  "totalvotes": 13561900,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 1288576,
  "totalvotes": 2401361,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 1073589,
  "totalvotes": 2401361,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 13350,
  "totalvotes": 2401361,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 10897,
  "totalvotes": 2401361,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 6233,
  "totalvotes": 2401361,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 3051,
  "totalvotes": 2401361,
  "party": "america's independent party",
  "candidate": "Keyes, Alan"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 2822,
  "totalvotes": 2401361,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 828,
  "totalvotes": 2401361,
  "party": "unaffiliated",
  "candidate": "McEnulty, Frank"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 598,
  "totalvotes": 2401361,
  "party": "boston tea party",
  "candidate": "Jay, Charles"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 348,
  "totalvotes": 2401361,
  "party": "heartquake '08",
  "candidate": "Allen, Jonathan"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 336,
  "totalvotes": 2401361,
  "party": "objectivist party",
  "candidate": "Stevens, Thomas R."
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 226,
  "totalvotes": 2401361,
  "party": "socialist",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 158,
  "totalvotes": 2401361,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 154,
  "totalvotes": 2401361,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 110,
  "totalvotes": 2401361,
  "party": "u.s. pacifist party",
  "candidate": "Lyttle, Bradford"
}, {
  "year": 2008,
  "state_po": "CO",
  "candidatevotes": 85,
  "totalvotes": 2401361,
  "party": "prohibition",
  "candidate": "Amondson, Gene"
}, {
  "year": 2008,
  "state_po": "CT",
  "candidatevotes": 997772,
  "totalvotes": 1646792,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "CT",
  "candidatevotes": 629428,
  "totalvotes": 1646792,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "CT",
  "candidatevotes": 19162,
  "totalvotes": 1646792,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "CT",
  "candidatevotes": 430,
  "totalvotes": 1646792,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 255459,
  "totalvotes": 412412,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 152374,
  "totalvotes": 412412,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 2401,
  "totalvotes": 412412,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 1109,
  "totalvotes": 412412,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 626,
  "totalvotes": 412412,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 385,
  "totalvotes": 412412,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "DE",
  "candidatevotes": 58,
  "totalvotes": 412412,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2008,
  "state_po": "DC",
  "candidatevotes": 245800,
  "totalvotes": 265853,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "DC",
  "candidatevotes": 17367,
  "totalvotes": 265853,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "DC",
  "candidatevotes": 1138,
  "totalvotes": 265853,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "DC",
  "candidatevotes": 958,
  "totalvotes": 265853,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "DC",
  "candidatevotes": 590,
  "totalvotes": 265853,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 4282074,
  "totalvotes": 8390744,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 4045624,
  "totalvotes": 8390744,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 28124,
  "totalvotes": 8390744,
  "party": "ecology party of florida",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 17218,
  "totalvotes": 8390744,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 7915,
  "totalvotes": 8390744,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 2887,
  "totalvotes": 8390744,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 2550,
  "totalvotes": 8390744,
  "party": "america's independent party",
  "candidate": "Keyes, Alan"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 1516,
  "totalvotes": 8390744,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 795,
  "totalvotes": 8390744,
  "party": "boston tea party",
  "candidate": "Jay, Charles"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 533,
  "totalvotes": 8390744,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 419,
  "totalvotes": 8390744,
  "party": "objectivist party",
  "candidate": "Stevens, Thomas R."
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 405,
  "totalvotes": 8390744,
  "party": "socialist",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 391,
  "totalvotes": 8390744,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "FL",
  "candidatevotes": 293,
  "totalvotes": 8390744,
  "party": "prohibition",
  "candidate": "Amondson, Gene"
}, {
  "year": 2008,
  "state_po": "GA",
  "candidatevotes": 2048759,
  "totalvotes": 3924486,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "GA",
  "candidatevotes": 1844123,
  "totalvotes": 3924486,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "GA",
  "candidatevotes": 28731,
  "totalvotes": 3924486,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "GA",
  "candidatevotes": 2873,
  "totalvotes": 3924486,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 325871,
  "totalvotes": 456064,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 120566,
  "totalvotes": 456064,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 3825,
  "totalvotes": 456064,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 2193,
  "totalvotes": 456064,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 1314,
  "totalvotes": 456064,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 1013,
  "totalvotes": 456064,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 979,
  "totalvotes": 456064,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "HI",
  "candidatevotes": 303,
  "totalvotes": 456064,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2008,
  "state_po": "ID",
  "candidatevotes": 403012,
  "totalvotes": 655122,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "ID",
  "candidatevotes": 236440,
  "totalvotes": 655122,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "ID",
  "candidatevotes": 7175,
  "totalvotes": 655122,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "ID",
  "candidatevotes": 4747,
  "totalvotes": 655122,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "ID",
  "candidatevotes": 3658,
  "totalvotes": 655122,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "ID",
  "candidatevotes": 90,
  "totalvotes": 655122,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 3419348,
  "totalvotes": 5522371,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 2031179,
  "totalvotes": 5522371,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 30948,
  "totalvotes": 5522371,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 19642,
  "totalvotes": 5522371,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 11838,
  "totalvotes": 5522371,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 8256,
  "totalvotes": 5522371,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "IL",
  "candidatevotes": 1160,
  "totalvotes": 5522371,
  "party": "new",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "IN",
  "candidatevotes": 1374039,
  "totalvotes": 2751054,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "IN",
  "candidatevotes": 1345648,
  "totalvotes": 2751054,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "IN",
  "candidatevotes": 29257,
  "totalvotes": 2751054,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "IN",
  "candidatevotes": 1201,
  "totalvotes": 2751054,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "IN",
  "candidatevotes": 909,
  "totalvotes": 2751054,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 828940,
  "totalvotes": 1537123,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 682379,
  "totalvotes": 1537123,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 8014,
  "totalvotes": 1537123,
  "party": "peace & freedom",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 6737,
  "totalvotes": 1537123,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 4590,
  "totalvotes": 1537123,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 4445,
  "totalvotes": 1537123,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 1423,
  "totalvotes": 1537123,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 292,
  "totalvotes": 1537123,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 182,
  "totalvotes": 1537123,
  "party": "socialist",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "IA",
  "candidatevotes": 121,
  "totalvotes": 1537123,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "KS",
  "candidatevotes": 699655,
  "totalvotes": 1235872,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "KS",
  "candidatevotes": 514765,
  "totalvotes": 1235872,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "KS",
  "candidatevotes": 10598,
  "totalvotes": 1235872,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "KS",
  "candidatevotes": 6706,
  "totalvotes": 1235872,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "KS",
  "candidatevotes": 4148,
  "totalvotes": 1235872,
  "party": "reform party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "KY",
  "candidatevotes": 1048462,
  "totalvotes": 1826620,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "KY",
  "candidatevotes": 751985,
  "totalvotes": 1826620,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "KY",
  "candidatevotes": 15378,
  "totalvotes": 1826620,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "KY",
  "candidatevotes": 5989,
  "totalvotes": 1826620,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "KY",
  "candidatevotes": 4694,
  "totalvotes": 1826620,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "KY",
  "candidatevotes": 112,
  "totalvotes": 1826620,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 1148275,
  "totalvotes": 1960761,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 782989,
  "totalvotes": 1960761,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 9368,
  "totalvotes": 1960761,
  "party": "louisiana taxpayers party",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 9187,
  "totalvotes": 1960761,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 6997,
  "totalvotes": 1960761,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 2581,
  "totalvotes": 1960761,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 735,
  "totalvotes": 1960761,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 354,
  "totalvotes": 1960761,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "LA",
  "candidatevotes": 275,
  "totalvotes": 1960761,
  "party": "prohibition",
  "candidate": "Amondson, Gene"
}, {
  "year": 2008,
  "state_po": "ME",
  "candidatevotes": 421923,
  "totalvotes": 731163,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "ME",
  "candidatevotes": 295273,
  "totalvotes": 731163,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "ME",
  "candidatevotes": 10636,
  "totalvotes": 731163,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "ME",
  "candidatevotes": 2900,
  "totalvotes": 731163,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "ME",
  "candidatevotes": 431,
  "totalvotes": 731163,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 1629467,
  "totalvotes": 2631596,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 959862,
  "totalvotes": 2631596,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 14713,
  "totalvotes": 2631596,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 9842,
  "totalvotes": 2631596,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 9205,
  "totalvotes": 2631596,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 4747,
  "totalvotes": 2631596,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "MD",
  "candidatevotes": 3760,
  "totalvotes": 2631596,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 1904097,
  "totalvotes": 3102995,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 1108854,
  "totalvotes": 3102995,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 28841,
  "totalvotes": 3102995,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 22010,
  "totalvotes": 3102995,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 14483,
  "totalvotes": 3102995,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 13189,
  "totalvotes": 3102995,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 6550,
  "totalvotes": 3102995,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "MA",
  "candidatevotes": 4971,
  "totalvotes": 3102995,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "MI",
  "candidatevotes": 2872579,
  "totalvotes": 5001596,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MI",
  "candidatevotes": 2048639,
  "totalvotes": 5001596,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MI",
  "candidatevotes": 33085,
  "totalvotes": 5001596,
  "party": "natural law",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MI",
  "candidatevotes": 23716,
  "totalvotes": 5001596,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "MI",
  "candidatevotes": 14685,
  "totalvotes": 5001596,
  "party": "u.s. taxpayers party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "MI",
  "candidatevotes": 8892,
  "totalvotes": 5001596,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 1573354,
  "totalvotes": 2910369,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 1275409,
  "totalvotes": 2910369,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 30152,
  "totalvotes": 2910369,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 9529,
  "totalvotes": 2910369,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 9174,
  "totalvotes": 2910369,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 6787,
  "totalvotes": 2910369,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 5174,
  "totalvotes": 2910369,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "MN",
  "candidatevotes": 790,
  "totalvotes": 2910369,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 724597,
  "totalvotes": 1289865,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 554662,
  "totalvotes": 1289865,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 4011,
  "totalvotes": 1289865,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 2551,
  "totalvotes": 1289865,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 2529,
  "totalvotes": 1289865,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 1034,
  "totalvotes": 1289865,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "MS",
  "candidatevotes": 481,
  "totalvotes": 1289865,
  "party": "reform party",
  "candidate": "Weill, Ted"
}, {
  "year": 2008,
  "state_po": "MO",
  "candidatevotes": 1445814,
  "totalvotes": 2925205,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MO",
  "candidatevotes": 1441911,
  "totalvotes": 2925205,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MO",
  "candidatevotes": 17813,
  "totalvotes": 2925205,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MO",
  "candidatevotes": 11386,
  "totalvotes": 2925205,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "MO",
  "candidatevotes": 8201,
  "totalvotes": 2925205,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "MO",
  "candidatevotes": 80,
  "totalvotes": 2925205,
  "party": "",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "MT",
  "candidatevotes": 242763,
  "totalvotes": 490109,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "MT",
  "candidatevotes": 231667,
  "totalvotes": 490109,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "MT",
  "candidatevotes": 10638,
  "totalvotes": 490109,
  "party": "constitution party",
  "candidate": "Paul, Ronald \"\"Ron\""
}, {
  "year": 2008,
  "state_po": "MT",
  "candidatevotes": 3686,
  "totalvotes": 490109,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "MT",
  "candidatevotes": 1355,
  "totalvotes": 490109,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 452979,
  "totalvotes": 801281,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 333319,
  "totalvotes": 801281,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 5406,
  "totalvotes": 801281,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 2972,
  "totalvotes": 801281,
  "party": "nebraska party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 2837,
  "totalvotes": 801281,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 2740,
  "totalvotes": 801281,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NE",
  "candidatevotes": 1028,
  "totalvotes": 801281,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 533736,
  "totalvotes": 967848,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 412827,
  "totalvotes": 967848,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 6267,
  "totalvotes": 967848,
  "party": "",
  "candidate": "None Of These Candidates"
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 6150,
  "totalvotes": 967848,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 4263,
  "totalvotes": 967848,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 3194,
  "totalvotes": 967848,
  "party": "independent american",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "NV",
  "candidatevotes": 1411,
  "totalvotes": 967848,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "NH",
  "candidatevotes": 384826,
  "totalvotes": 710970,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NH",
  "candidatevotes": 316534,
  "totalvotes": 710970,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NH",
  "candidatevotes": 3503,
  "totalvotes": 710970,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "NH",
  "candidatevotes": 3359,
  "totalvotes": 710970,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "NH",
  "candidatevotes": 2748,
  "totalvotes": 710970,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 2215422,
  "totalvotes": 3868237,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 1613207,
  "totalvotes": 3868237,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 21298,
  "totalvotes": 3868237,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 8441,
  "totalvotes": 3868237,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 3956,
  "totalvotes": 3868237,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 3636,
  "totalvotes": 3868237,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 699,
  "totalvotes": 3868237,
  "party": "socialist",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 639,
  "totalvotes": 3868237,
  "party": "vote here",
  "candidate": "Boss, Jeffery"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 523,
  "totalvotes": 3868237,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2008,
  "state_po": "NJ",
  "candidatevotes": 416,
  "totalvotes": 3868237,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "NM",
  "candidatevotes": 472422,
  "totalvotes": 830158,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NM",
  "candidatevotes": 346832,
  "totalvotes": 830158,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NM",
  "candidatevotes": 5327,
  "totalvotes": 830158,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "NM",
  "candidatevotes": 2428,
  "totalvotes": 830158,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NM",
  "candidatevotes": 1597,
  "totalvotes": 830158,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "NM",
  "candidatevotes": 1552,
  "totalvotes": 830158,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 4804945,
  "totalvotes": 7722019,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 2752771,
  "totalvotes": 7722019,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 84701,
  "totalvotes": 7722019,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 41249,
  "totalvotes": 7722019,
  "party": "populist",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 19596,
  "totalvotes": 7722019,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 12801,
  "totalvotes": 7722019,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 3615,
  "totalvotes": 7722019,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 1639,
  "totalvotes": 7722019,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "NY",
  "candidatevotes": 702,
  "totalvotes": 7722019,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "NC",
  "candidatevotes": 2142651,
  "totalvotes": 4310851,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "NC",
  "candidatevotes": 2128474,
  "totalvotes": 4310851,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "NC",
  "candidatevotes": 25722,
  "totalvotes": 4310851,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "NC",
  "candidatevotes": 12494,
  "totalvotes": 4310851,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "NC",
  "candidatevotes": 1510,
  "totalvotes": 4310851,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "ND",
  "candidatevotes": 168601,
  "totalvotes": 316621,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "ND",
  "candidatevotes": 141278,
  "totalvotes": 316621,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "ND",
  "candidatevotes": 4189,
  "totalvotes": 316621,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "ND",
  "candidatevotes": 1354,
  "totalvotes": 316621,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "ND",
  "candidatevotes": 1199,
  "totalvotes": 316621,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 2940044,
  "totalvotes": 5708350,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 2677820,
  "totalvotes": 5708350,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 46242,
  "totalvotes": 5708350,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 19917,
  "totalvotes": 5708350,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 12565,
  "totalvotes": 5708350,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 8518,
  "totalvotes": 5708350,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 2735,
  "totalvotes": 5708350,
  "party": "socialist",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "OH",
  "candidatevotes": 509,
  "totalvotes": 5708350,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "OK",
  "candidatevotes": 960165,
  "totalvotes": 1462661,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "OK",
  "candidatevotes": 502496,
  "totalvotes": 1462661,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 1037291,
  "totalvotes": 1827864,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 738475,
  "totalvotes": 1827864,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 18614,
  "totalvotes": 1827864,
  "party": "peace party",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 13613,
  "totalvotes": 1827864,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 7693,
  "totalvotes": 1827864,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 7635,
  "totalvotes": 1827864,
  "party": "libertarian",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "OR",
  "candidatevotes": 4543,
  "totalvotes": 1827864,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "PA",
  "candidatevotes": 3276363,
  "totalvotes": 6013272,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "PA",
  "candidatevotes": 2655885,
  "totalvotes": 6013272,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "PA",
  "candidatevotes": 42977,
  "totalvotes": 6013272,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "PA",
  "candidatevotes": 19912,
  "totalvotes": 6013272,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "PA",
  "candidatevotes": 9955,
  "totalvotes": 6013272,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "PA",
  "candidatevotes": 8180,
  "totalvotes": 6013272,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 296571,
  "totalvotes": 471766,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 165391,
  "totalvotes": 471766,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 4829,
  "totalvotes": 471766,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 1999,
  "totalvotes": 471766,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 1382,
  "totalvotes": 471766,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 797,
  "totalvotes": 471766,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 675,
  "totalvotes": 471766,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "RI",
  "candidatevotes": 122,
  "totalvotes": 471766,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "SC",
  "candidatevotes": 1034896,
  "totalvotes": 1920969,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "SC",
  "candidatevotes": 862449,
  "totalvotes": 1920969,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "SC",
  "candidatevotes": 7283,
  "totalvotes": 1920969,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "SC",
  "candidatevotes": 6827,
  "totalvotes": 1920969,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "SC",
  "candidatevotes": 5053,
  "totalvotes": 1920969,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "SC",
  "candidatevotes": 4461,
  "totalvotes": 1920969,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "SD",
  "candidatevotes": 203054,
  "totalvotes": 381975,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "SD",
  "candidatevotes": 170924,
  "totalvotes": 381975,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "SD",
  "candidatevotes": 4267,
  "totalvotes": 381975,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "SD",
  "candidatevotes": 1895,
  "totalvotes": 381975,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "SD",
  "candidatevotes": 1835,
  "totalvotes": 381975,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "TN",
  "candidatevotes": 1479178,
  "totalvotes": 2599749,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "TN",
  "candidatevotes": 1087437,
  "totalvotes": 2599749,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "TN",
  "candidatevotes": 33134,
  "totalvotes": 2599749,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "TX",
  "candidatevotes": 4479328,
  "totalvotes": 8077795,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "TX",
  "candidatevotes": 3528633,
  "totalvotes": 8077795,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "TX",
  "candidatevotes": 56116,
  "totalvotes": 8077795,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "TX",
  "candidatevotes": 7967,
  "totalvotes": 8077795,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "TX",
  "candidatevotes": 5751,
  "totalvotes": 8077795,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 596030,
  "totalvotes": 952370,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 327670,
  "totalvotes": 952370,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 12012,
  "totalvotes": 952370,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 8416,
  "totalvotes": 952370,
  "party": "peace & freedom",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 6966,
  "totalvotes": 952370,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 982,
  "totalvotes": 952370,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 262,
  "totalvotes": 952370,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "UT",
  "candidatevotes": 32,
  "totalvotes": 952370,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 219262,
  "totalvotes": 325046,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 98974,
  "totalvotes": 325046,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 3339,
  "totalvotes": 325046,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 1464,
  "totalvotes": 325046,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 1067,
  "totalvotes": 325046,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 500,
  "totalvotes": 325046,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 150,
  "totalvotes": 325046,
  "party": "socialist workers",
  "candidate": "Calero, Roger"
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 149,
  "totalvotes": 325046,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "VT",
  "candidatevotes": 141,
  "totalvotes": 325046,
  "party": "liberty union party",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 1959532,
  "totalvotes": 3723260,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 1725005,
  "totalvotes": 3723260,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 11483,
  "totalvotes": 3723260,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 11067,
  "totalvotes": 3723260,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 7474,
  "totalvotes": 3723260,
  "party": "independent green",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 6355,
  "totalvotes": 3723260,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "VA",
  "candidatevotes": 2344,
  "totalvotes": 3723260,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 1750848,
  "totalvotes": 3036878,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 1229216,
  "totalvotes": 3036878,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 29489,
  "totalvotes": 3036878,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 12728,
  "totalvotes": 3036878,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 9432,
  "totalvotes": 3036878,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 3819,
  "totalvotes": 3036878,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 705,
  "totalvotes": 3036878,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "WA",
  "candidatevotes": 641,
  "totalvotes": 3036878,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2008,
  "state_po": "WV",
  "candidatevotes": 397466,
  "totalvotes": 713451,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "WV",
  "candidatevotes": 303857,
  "totalvotes": 713451,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "WV",
  "candidatevotes": 7219,
  "totalvotes": 713451,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "WV",
  "candidatevotes": 2465,
  "totalvotes": 713451,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "WV",
  "candidatevotes": 2355,
  "totalvotes": 713451,
  "party": "mountain party",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "WV",
  "candidatevotes": 89,
  "totalvotes": 713451,
  "party": "",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 1677211,
  "totalvotes": 2983417,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 1262393,
  "totalvotes": 2983417,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 17605,
  "totalvotes": 2983417,
  "party": "independent",
  "candidate": "Nader, Ralph"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 8858,
  "totalvotes": 2983417,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 6521,
  "totalvotes": 2983417,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 5072,
  "totalvotes": 2983417,
  "party": "constitution party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 4216,
  "totalvotes": 2983417,
  "party": "green",
  "candidate": "McKinney, Cynthia"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 764,
  "totalvotes": 2983417,
  "party": "we the people",
  "candidate": "Wamboldt, Jeffrey"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 540,
  "totalvotes": 2983417,
  "party": "socialist party usa",
  "candidate": "Moore, Brian"
}, {
  "year": 2008,
  "state_po": "WI",
  "candidatevotes": 237,
  "totalvotes": 2983417,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2008,
  "state_po": "WY",
  "candidatevotes": 164958,
  "totalvotes": 254904,
  "party": "republican",
  "candidate": "McCain, John"
}, {
  "year": 2008,
  "state_po": "WY",
  "candidatevotes": 82868,
  "totalvotes": 254904,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2008,
  "state_po": "WY",
  "candidatevotes": 5238,
  "totalvotes": 254904,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2008,
  "state_po": "WY",
  "candidatevotes": 1594,
  "totalvotes": 254904,
  "party": "libertarian",
  "candidate": "Barr, Bob"
}, {
  "year": 2008,
  "state_po": "WY",
  "candidatevotes": 246,
  "totalvotes": 254904,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2012,
  "state_po": "AL",
  "candidatevotes": 1255925,
  "totalvotes": 2074338,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "AL",
  "candidatevotes": 795696,
  "totalvotes": 2074338,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "AL",
  "candidatevotes": 22717,
  "totalvotes": 2074338,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "AK",
  "candidatevotes": 164676,
  "totalvotes": 300495,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "AK",
  "candidatevotes": 122640,
  "totalvotes": 300495,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "AK",
  "candidatevotes": 7392,
  "totalvotes": 300495,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "AK",
  "candidatevotes": 2917,
  "totalvotes": 300495,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "AK",
  "candidatevotes": 2870,
  "totalvotes": 300495,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "AZ",
  "candidatevotes": 1233654,
  "totalvotes": 2299254,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "AZ",
  "candidatevotes": 1025232,
  "totalvotes": 2299254,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "AZ",
  "candidatevotes": 32100,
  "totalvotes": 2299254,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "AZ",
  "candidatevotes": 7816,
  "totalvotes": 2299254,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "AZ",
  "candidatevotes": 452,
  "totalvotes": 2299254,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "AR",
  "candidatevotes": 647744,
  "totalvotes": 1069468,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "AR",
  "candidatevotes": 394409,
  "totalvotes": 1069468,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "AR",
  "candidatevotes": 16276,
  "totalvotes": 1069468,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "AR",
  "candidatevotes": 9305,
  "totalvotes": 1069468,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "AR",
  "candidatevotes": 1734,
  "totalvotes": 1069468,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 7854285,
  "totalvotes": 13038547,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 4839958,
  "totalvotes": 13038547,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 143221,
  "totalvotes": 13038547,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 85638,
  "totalvotes": 13038547,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 53824,
  "totalvotes": 13038547,
  "party": "peace & freedom",
  "candidate": "Barr, Roseanne"
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 38372,
  "totalvotes": 13038547,
  "party": "american independent party",
  "candidate": "Hoefling, Thomas Conrad \"\"Tom\""
}, {
  "year": 2012,
  "state_po": "CA",
  "candidatevotes": 23249,
  "totalvotes": 13038547,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 1323101,
  "totalvotes": 2569516,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 1185243,
  "totalvotes": 2569516,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 35545,
  "totalvotes": 2569516,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 7508,
  "totalvotes": 2569516,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 6234,
  "totalvotes": 2569516,
  "party": "american constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 5057,
  "totalvotes": 2569516,
  "party": "peace & freedom",
  "candidate": "Barr, Roseanne"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 2588,
  "totalvotes": 2569516,
  "party": "no party affiliation",
  "candidate": "Reed, Jill Ann"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 1262,
  "totalvotes": 2569516,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 791,
  "totalvotes": 2569516,
  "party": "we the people",
  "candidate": "Tittle, Sheila \"\"Samm\""
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 679,
  "totalvotes": 2569516,
  "party": "america's party",
  "candidate": "Hoefling, Thomas Conrad \"\"Tom\""
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 317,
  "totalvotes": 2569516,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 308,
  "totalvotes": 2569516,
  "party": "socialist",
  "candidate": "Alexander, Stewart"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 267,
  "totalvotes": 2569516,
  "party": "american third position",
  "candidate": "Miller, Merlin"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 235,
  "totalvotes": 2569516,
  "party": "objectivist party",
  "candidate": "Stevens, Thomas Robert \"\"Tom\""
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 192,
  "totalvotes": 2569516,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2012,
  "state_po": "CO",
  "candidatevotes": 189,
  "totalvotes": 2569516,
  "party": "socialist equality party",
  "candidate": "White, Jerry"
}, {
  "year": 2012,
  "state_po": "CT",
  "candidatevotes": 905083,
  "totalvotes": 1558204,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "CT",
  "candidatevotes": 634892,
  "totalvotes": 1558204,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "CT",
  "candidatevotes": 12340,
  "totalvotes": 1558204,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "CT",
  "candidatevotes": 5889,
  "totalvotes": 1558204,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "DE",
  "candidatevotes": 242584,
  "totalvotes": 413890,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "DE",
  "candidatevotes": 165484,
  "totalvotes": 413890,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "DE",
  "candidatevotes": 3882,
  "totalvotes": 413890,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "DE",
  "candidatevotes": 1940,
  "totalvotes": 413890,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "DC",
  "candidatevotes": 267070,
  "totalvotes": 293764,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "DC",
  "candidatevotes": 21381,
  "totalvotes": 293764,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "DC",
  "candidatevotes": 2458,
  "totalvotes": 293764,
  "party": "d.c. statehood green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "DC",
  "candidatevotes": 2083,
  "totalvotes": 293764,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "DC",
  "candidatevotes": 772,
  "totalvotes": 293764,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 4237756,
  "totalvotes": 8474179,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 4163447,
  "totalvotes": 8474179,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 44726,
  "totalvotes": 8474179,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 8947,
  "totalvotes": 8474179,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 8154,
  "totalvotes": 8474179,
  "party": "peace & freedom",
  "candidate": "Barr, Roseanne"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 3856,
  "totalvotes": 8474179,
  "party": "objectivist party",
  "candidate": "Stevens, Thomas Robert \"\"Tom\""
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 2607,
  "totalvotes": 8474179,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 1754,
  "totalvotes": 8474179,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 946,
  "totalvotes": 8474179,
  "party": "american independent",
  "candidate": "Hoefling, Thomas Conrad \"\"Tom\""
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 820,
  "totalvotes": 8474179,
  "party": "reform party",
  "candidate": "Barnett, Andre"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 799,
  "totalvotes": 8474179,
  "party": "socialist",
  "candidate": "Alexander, Stewart"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 322,
  "totalvotes": 8474179,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "FL",
  "candidatevotes": 45,
  "totalvotes": 8474179,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "GA",
  "candidatevotes": 2078688,
  "totalvotes": 3897839,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "GA",
  "candidatevotes": 1773827,
  "totalvotes": 3897839,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "GA",
  "candidatevotes": 45324,
  "totalvotes": 3897839,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "HI",
  "candidatevotes": 306658,
  "totalvotes": 437159,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "HI",
  "candidatevotes": 121015,
  "totalvotes": 437159,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "HI",
  "candidatevotes": 3840,
  "totalvotes": 437159,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "HI",
  "candidatevotes": 3184,
  "totalvotes": 437159,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "HI",
  "candidatevotes": 2227,
  "totalvotes": 437159,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2012,
  "state_po": "HI",
  "candidatevotes": 235,
  "totalvotes": 437159,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2012,
  "state_po": "ID",
  "candidatevotes": 420911,
  "totalvotes": 652274,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "ID",
  "candidatevotes": 212787,
  "totalvotes": 652274,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "ID",
  "candidatevotes": 9453,
  "totalvotes": 652274,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "ID",
  "candidatevotes": 6901,
  "totalvotes": 652274,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "ID",
  "candidatevotes": 2222,
  "totalvotes": 652274,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "IL",
  "candidatevotes": 3019512,
  "totalvotes": 5242014,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "IL",
  "candidatevotes": 2135216,
  "totalvotes": 5242014,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "IL",
  "candidatevotes": 56229,
  "totalvotes": 5242014,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "IL",
  "candidatevotes": 30222,
  "totalvotes": 5242014,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "IL",
  "candidatevotes": 835,
  "totalvotes": 5242014,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "IN",
  "candidatevotes": 1420543,
  "totalvotes": 2624534,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "IN",
  "candidatevotes": 1152887,
  "totalvotes": 2624534,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "IN",
  "candidatevotes": 50111,
  "totalvotes": 2624534,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "IN",
  "candidatevotes": 993,
  "totalvotes": 2624534,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 822544,
  "totalvotes": 1582180,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 730617,
  "totalvotes": 1582180,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 12926,
  "totalvotes": 1582180,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 8469,
  "totalvotes": 1582180,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 3769,
  "totalvotes": 1582180,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 3038,
  "totalvotes": 1582180,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 445,
  "totalvotes": 1582180,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2012,
  "state_po": "IA",
  "candidatevotes": 372,
  "totalvotes": 1582180,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2012,
  "state_po": "KS",
  "candidatevotes": 692634,
  "totalvotes": 1159971,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "KS",
  "candidatevotes": 440726,
  "totalvotes": 1159971,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "KS",
  "candidatevotes": 20456,
  "totalvotes": 1159971,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "KS",
  "candidatevotes": 5017,
  "totalvotes": 1159971,
  "party": "reform party",
  "candidate": "Baldwin, Charles \"\"Chuck\""
}, {
  "year": 2012,
  "state_po": "KS",
  "candidatevotes": 1138,
  "totalvotes": 1159971,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "KY",
  "candidatevotes": 1087190,
  "totalvotes": 1797212,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "KY",
  "candidatevotes": 679370,
  "totalvotes": 1797212,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "KY",
  "candidatevotes": 17063,
  "totalvotes": 1797212,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "KY",
  "candidatevotes": 6872,
  "totalvotes": 1797212,
  "party": "independent",
  "candidate": "Terry, Randall"
}, {
  "year": 2012,
  "state_po": "KY",
  "candidatevotes": 6337,
  "totalvotes": 1797212,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "KY",
  "candidatevotes": 380,
  "totalvotes": 1797212,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 1152262,
  "totalvotes": 1994065,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 809141,
  "totalvotes": 1994065,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 18157,
  "totalvotes": 1994065,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 6978,
  "totalvotes": 1994065,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 2508,
  "totalvotes": 1994065,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 1767,
  "totalvotes": 1994065,
  "party": "we the people",
  "candidate": "Tittle, Sheila \"\"Samm\""
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 1368,
  "totalvotes": 1994065,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 622,
  "totalvotes": 1994065,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 518,
  "totalvotes": 1994065,
  "party": "prohibition",
  "candidate": "Fellure, Lowell Jackson \"\"Jack\""
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 389,
  "totalvotes": 1994065,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2012,
  "state_po": "LA",
  "candidatevotes": 355,
  "totalvotes": 1994065,
  "party": "socialist equality party",
  "candidate": "White, Jerome \"\"Jerry\""
}, {
  "year": 2012,
  "state_po": "ME",
  "candidatevotes": 401306,
  "totalvotes": 724758,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "ME",
  "candidatevotes": 292276,
  "totalvotes": 724758,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "ME",
  "candidatevotes": 11578,
  "totalvotes": 724758,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2012,
  "state_po": "ME",
  "candidatevotes": 9352,
  "totalvotes": 724758,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "ME",
  "candidatevotes": 8119,
  "totalvotes": 724758,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "ME",
  "candidatevotes": 2127,
  "totalvotes": 724758,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "MD",
  "candidatevotes": 1677844,
  "totalvotes": 2707327,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MD",
  "candidatevotes": 971869,
  "totalvotes": 2707327,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MD",
  "candidatevotes": 30195,
  "totalvotes": 2707327,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "MD",
  "candidatevotes": 17110,
  "totalvotes": 2707327,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "MD",
  "candidatevotes": 10309,
  "totalvotes": 2707327,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "MA",
  "candidatevotes": 1921290,
  "totalvotes": 3184196,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MA",
  "candidatevotes": 1188314,
  "totalvotes": 3184196,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MA",
  "candidatevotes": 30920,
  "totalvotes": 3184196,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "MA",
  "candidatevotes": 20691,
  "totalvotes": 3184196,
  "party": "green-rainbow",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "MA",
  "candidatevotes": 16429,
  "totalvotes": 3184196,
  "party": "",
  "candidate": "Blank Vote/Scattering"
}, {
  "year": 2012,
  "state_po": "MA",
  "candidatevotes": 6552,
  "totalvotes": 3184196,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2012,
  "state_po": "MI",
  "candidatevotes": 2564569,
  "totalvotes": 4730961,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MI",
  "candidatevotes": 2115256,
  "totalvotes": 4730961,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MI",
  "candidatevotes": 21897,
  "totalvotes": 4730961,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "MI",
  "candidatevotes": 16119,
  "totalvotes": 4730961,
  "party": "u.s. taxpayers party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "MI",
  "candidatevotes": 7973,
  "totalvotes": 4730961,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "MI",
  "candidatevotes": 5147,
  "totalvotes": 4730961,
  "party": "natural law",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 1546167,
  "totalvotes": 2936561,
  "party": "democratic-farmer-labor",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 1320225,
  "totalvotes": 2936561,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 35098,
  "totalvotes": 2936561,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 13023,
  "totalvotes": 2936561,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 10641,
  "totalvotes": 2936561,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 3722,
  "totalvotes": 2936561,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 3149,
  "totalvotes": 2936561,
  "party": "grassroots",
  "candidate": "Carlson, Jim"
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 1996,
  "totalvotes": 2936561,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 1092,
  "totalvotes": 2936561,
  "party": "constitutional government",
  "candidate": "Morstad, Dean"
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 1051,
  "totalvotes": 2936561,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2012,
  "state_po": "MN",
  "candidatevotes": 397,
  "totalvotes": 2936561,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "MS",
  "candidatevotes": 710746,
  "totalvotes": 1285584,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MS",
  "candidatevotes": 562949,
  "totalvotes": 1285584,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MS",
  "candidatevotes": 6676,
  "totalvotes": 1285584,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "MS",
  "candidatevotes": 2609,
  "totalvotes": 1285584,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "MS",
  "candidatevotes": 1588,
  "totalvotes": 1285584,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "MS",
  "candidatevotes": 1016,
  "totalvotes": 1285584,
  "party": "reform party",
  "candidate": "Washer, Barbara Dale"
}, {
  "year": 2012,
  "state_po": "MO",
  "candidatevotes": 1482440,
  "totalvotes": 2757323,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MO",
  "candidatevotes": 1223796,
  "totalvotes": 2757323,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MO",
  "candidatevotes": 43151,
  "totalvotes": 2757323,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "MO",
  "candidatevotes": 7936,
  "totalvotes": 2757323,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "MT",
  "candidatevotes": 267928,
  "totalvotes": 484048,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "MT",
  "candidatevotes": 201839,
  "totalvotes": 484048,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "MT",
  "candidatevotes": 14165,
  "totalvotes": 484048,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "MT",
  "candidatevotes": 116,
  "totalvotes": 484048,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "NE",
  "candidatevotes": 475064,
  "totalvotes": 794379,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NE",
  "candidatevotes": 302081,
  "totalvotes": 794379,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NE",
  "candidatevotes": 11109,
  "totalvotes": 794379,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NE",
  "candidatevotes": 6125,
  "totalvotes": 794379,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "NV",
  "candidatevotes": 531373,
  "totalvotes": 1014918,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NV",
  "candidatevotes": 463567,
  "totalvotes": 1014918,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NV",
  "candidatevotes": 10968,
  "totalvotes": 1014918,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NV",
  "candidatevotes": 5770,
  "totalvotes": 1014918,
  "party": "",
  "candidate": "None Of These Candidates"
}, {
  "year": 2012,
  "state_po": "NV",
  "candidatevotes": 3240,
  "totalvotes": 1014918,
  "party": "independent american",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "NH",
  "candidatevotes": 369561,
  "totalvotes": 710972,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NH",
  "candidatevotes": 329918,
  "totalvotes": 710972,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NH",
  "candidatevotes": 8212,
  "totalvotes": 710972,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NH",
  "candidatevotes": 1698,
  "totalvotes": 710972,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "NH",
  "candidatevotes": 875,
  "totalvotes": 710972,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2012,
  "state_po": "NH",
  "candidatevotes": 708,
  "totalvotes": 710972,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 2122786,
  "totalvotes": 3638499,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 1478088,
  "totalvotes": 3638499,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 21035,
  "totalvotes": 3638499,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 9886,
  "totalvotes": 3638499,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 2063,
  "totalvotes": 3638499,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 1723,
  "totalvotes": 3638499,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 1024,
  "totalvotes": 3638499,
  "party": "nsa did 911",
  "candidate": "Boss, Jeffery"
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 709,
  "totalvotes": 3638499,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 664,
  "totalvotes": 3638499,
  "party": "american third position",
  "candidate": "Miller, Merlin"
}, {
  "year": 2012,
  "state_po": "NJ",
  "candidatevotes": 521,
  "totalvotes": 3638499,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "NM",
  "candidatevotes": 415335,
  "totalvotes": 783758,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NM",
  "candidatevotes": 335788,
  "totalvotes": 783758,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NM",
  "candidatevotes": 27788,
  "totalvotes": 783758,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NM",
  "candidatevotes": 2691,
  "totalvotes": 783758,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "NM",
  "candidatevotes": 1174,
  "totalvotes": 783758,
  "party": "new mexico independent party",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "NM",
  "candidatevotes": 982,
  "totalvotes": 783758,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 4471871,
  "totalvotes": 7116784,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 2485432,
  "totalvotes": 7116784,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 63881,
  "totalvotes": 7116784,
  "party": "",
  "candidate": "Blank Vote/Void Vote/Scattering"
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 47092,
  "totalvotes": 7116784,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 39856,
  "totalvotes": 7116784,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 6270,
  "totalvotes": 7116784,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 2039,
  "totalvotes": 7116784,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "NY",
  "candidatevotes": 343,
  "totalvotes": 7116784,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "NC",
  "candidatevotes": 2270395,
  "totalvotes": 4505372,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "NC",
  "candidatevotes": 2178391,
  "totalvotes": 4505372,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "NC",
  "candidatevotes": 44515,
  "totalvotes": 4505372,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "NC",
  "candidatevotes": 12071,
  "totalvotes": 4505372,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "ND",
  "candidatevotes": 188320,
  "totalvotes": 322932,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "ND",
  "candidatevotes": 124966,
  "totalvotes": 322932,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "ND",
  "candidatevotes": 5238,
  "totalvotes": 322932,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "ND",
  "candidatevotes": 1860,
  "totalvotes": 322932,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "ND",
  "candidatevotes": 1186,
  "totalvotes": 322932,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "ND",
  "candidatevotes": 1362,
  "totalvotes": 322932,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 2827621,
  "totalvotes": 5580822,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 2661407,
  "totalvotes": 5580822,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 49493,
  "totalvotes": 5580822,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 18574,
  "totalvotes": 5580822,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 12502,
  "totalvotes": 5580822,
  "party": "independent",
  "candidate": "Duncan, Richard"
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 8151,
  "totalvotes": 5580822,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 2967,
  "totalvotes": 5580822,
  "party": "socialist",
  "candidate": "Alexander, Stewart"
}, {
  "year": 2012,
  "state_po": "OH",
  "candidatevotes": 107,
  "totalvotes": 5580822,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "OK",
  "candidatevotes": 891325,
  "totalvotes": 1334872,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "OK",
  "candidatevotes": 443547,
  "totalvotes": 1334872,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 970488,
  "totalvotes": 1789270,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 754175,
  "totalvotes": 1789270,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 24089,
  "totalvotes": 1789270,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 19427,
  "totalvotes": 1789270,
  "party": "pacific green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 13275,
  "totalvotes": 1789270,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 4432,
  "totalvotes": 1789270,
  "party": "constitution party",
  "candidate": "Christensen, Will"
}, {
  "year": 2012,
  "state_po": "OR",
  "candidatevotes": 3384,
  "totalvotes": 1789270,
  "party": "progressive",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "PA",
  "candidatevotes": 2990274,
  "totalvotes": 5742040,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "PA",
  "candidatevotes": 2680434,
  "totalvotes": 5742040,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "PA",
  "candidatevotes": 49991,
  "totalvotes": 5742040,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "PA",
  "candidatevotes": 21341,
  "totalvotes": 5742040,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 279677,
  "totalvotes": 446049,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 157204,
  "totalvotes": 446049,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 4388,
  "totalvotes": 446049,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 2421,
  "totalvotes": 446049,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 1381,
  "totalvotes": 446049,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 430,
  "totalvotes": 446049,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 416,
  "totalvotes": 446049,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "RI",
  "candidatevotes": 132,
  "totalvotes": 446049,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "SC",
  "candidatevotes": 1071645,
  "totalvotes": 1964118,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "SC",
  "candidatevotes": 865941,
  "totalvotes": 1964118,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "SC",
  "candidatevotes": 16321,
  "totalvotes": 1964118,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "SC",
  "candidatevotes": 5446,
  "totalvotes": 1964118,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "SC",
  "candidatevotes": 4765,
  "totalvotes": 1964118,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "SD",
  "candidatevotes": 210610,
  "totalvotes": 363815,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "SD",
  "candidatevotes": 145039,
  "totalvotes": 363815,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "SD",
  "candidatevotes": 5795,
  "totalvotes": 363815,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "SD",
  "candidatevotes": 2371,
  "totalvotes": 363815,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "TN",
  "candidatevotes": 1462330,
  "totalvotes": 2458577,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "TN",
  "candidatevotes": 960709,
  "totalvotes": 2458577,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "TN",
  "candidatevotes": 23001,
  "totalvotes": 2458577,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "TN",
  "candidatevotes": 6515,
  "totalvotes": 2458577,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "TN",
  "candidatevotes": 6022,
  "totalvotes": 2458577,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "TX",
  "candidatevotes": 4569843,
  "totalvotes": 7993851,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "TX",
  "candidatevotes": 3308124,
  "totalvotes": 7993851,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "TX",
  "candidatevotes": 88580,
  "totalvotes": 7993851,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "TX",
  "candidatevotes": 24657,
  "totalvotes": 7993851,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "TX",
  "candidatevotes": 2647,
  "totalvotes": 7993851,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 740600,
  "totalvotes": 1017440,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 251813,
  "totalvotes": 1017440,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 12572,
  "totalvotes": 1017440,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 5335,
  "totalvotes": 1017440,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 3817,
  "totalvotes": 1017440,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 2871,
  "totalvotes": 1017440,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "UT",
  "candidatevotes": 432,
  "totalvotes": 1017440,
  "party": "no party affiliation",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "VT",
  "candidatevotes": 199239,
  "totalvotes": 299290,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "VT",
  "candidatevotes": 92698,
  "totalvotes": 299290,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "VT",
  "candidatevotes": 3487,
  "totalvotes": 299290,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "VT",
  "candidatevotes": 2043,
  "totalvotes": 299290,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "VT",
  "candidatevotes": 1128,
  "totalvotes": 299290,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "VT",
  "candidatevotes": 695,
  "totalvotes": 299290,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "VA",
  "candidatevotes": 1971820,
  "totalvotes": 3854489,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "VA",
  "candidatevotes": 1822522,
  "totalvotes": 3854489,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "VA",
  "candidatevotes": 31216,
  "totalvotes": 3854489,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "VA",
  "candidatevotes": 13058,
  "totalvotes": 3854489,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "VA",
  "candidatevotes": 8627,
  "totalvotes": 3854489,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "VA",
  "candidatevotes": 7246,
  "totalvotes": 3854489,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 1755396,
  "totalvotes": 3125516,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 1290670,
  "totalvotes": 3125516,
  "party": "republican",
  "candidate": "Mitt, Romney"
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 42202,
  "totalvotes": 3125516,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 20928,
  "totalvotes": 3125516,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 8851,
  "totalvotes": 3125516,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 4946,
  "totalvotes": 3125516,
  "party": "justice",
  "candidate": "Anderson, Ross Carl \"\"Rocky\""
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 1318,
  "totalvotes": 3125516,
  "party": "socialism and liberation party",
  "candidate": "Lindsay, Peta"
}, {
  "year": 2012,
  "state_po": "WA",
  "candidatevotes": 1205,
  "totalvotes": 3125516,
  "party": "socialist workers",
  "candidate": "Harris, James"
}, {
  "year": 2012,
  "state_po": "WV",
  "candidatevotes": 417655,
  "totalvotes": 670438,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "WV",
  "candidatevotes": 238269,
  "totalvotes": 670438,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "WV",
  "candidatevotes": 6302,
  "totalvotes": 670438,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "WV",
  "candidatevotes": 4406,
  "totalvotes": 670438,
  "party": "mountain party",
  "candidate": "Stein, Jill"
}, {
  "year": 2012,
  "state_po": "WV",
  "candidatevotes": 3806,
  "totalvotes": 670438,
  "party": "no party affiliation",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "WI",
  "candidatevotes": 1620985,
  "totalvotes": 3071434,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "WI",
  "candidatevotes": 1410966,
  "totalvotes": 3071434,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "WI",
  "candidatevotes": 29383,
  "totalvotes": 3071434,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "WI",
  "candidatevotes": 5170,
  "totalvotes": 3071434,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2012,
  "state_po": "WI",
  "candidatevotes": 4930,
  "totalvotes": 3071434,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 170962,
  "totalvotes": 250701,
  "party": "republican",
  "candidate": "Romney, Mitt"
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 69286,
  "totalvotes": 250701,
  "party": "democrat",
  "candidate": "Obama, Barack H."
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 5326,
  "totalvotes": 250701,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 2035,
  "totalvotes": 250701,
  "party": "",
  "candidate": ""
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 1452,
  "totalvotes": 250701,
  "party": "constitution party",
  "candidate": "Goode, Virgil Hamlin, Jr."
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 1367,
  "totalvotes": 250701,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2012,
  "state_po": "WY",
  "candidatevotes": 273,
  "totalvotes": 250701,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2016,
  "state_po": "AL",
  "candidatevotes": 1318255,
  "totalvotes": 2123372,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "AL",
  "candidatevotes": 729547,
  "totalvotes": 2123372,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "AL",
  "candidatevotes": 44467,
  "totalvotes": 2123372,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "AL",
  "candidatevotes": 21712,
  "totalvotes": 2123372,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "AL",
  "candidatevotes": 9391,
  "totalvotes": 2123372,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 163387,
  "totalvotes": 318608,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 116454,
  "totalvotes": 318608,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 18725,
  "totalvotes": 318608,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 9201,
  "totalvotes": 318608,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 5735,
  "totalvotes": 318608,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 3866,
  "totalvotes": 318608,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "AK",
  "candidatevotes": 1240,
  "totalvotes": 318608,
  "party": "no party affiliation",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 1252401,
  "totalvotes": 2573165,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 1161167,
  "totalvotes": 2573165,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 106327,
  "totalvotes": 2573165,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 34345,
  "totalvotes": 2573165,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 17826,
  "totalvotes": 2573165,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 1058,
  "totalvotes": 2573165,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 29,
  "totalvotes": 2573165,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "AZ",
  "candidatevotes": 12,
  "totalvotes": 2573165,
  "party": "we the people",
  "candidate": "Tittle, Sheila \"\"Samm\""
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 684872,
  "totalvotes": 1130635,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 380494,
  "totalvotes": 1130635,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 29829,
  "totalvotes": 1130635,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 13255,
  "totalvotes": 1130635,
  "party": "better for america",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 9473,
  "totalvotes": 1130635,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 4709,
  "totalvotes": 1130635,
  "party": "prohibition",
  "candidate": "Hedges, Jim"
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 4613,
  "totalvotes": 1130635,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "AR",
  "candidatevotes": 3390,
  "totalvotes": 1130635,
  "party": "independent",
  "candidate": "Kahn, Lynn S."
}, {
  "year": 2016,
  "state_po": "CA",
  "candidatevotes": 8753788,
  "totalvotes": 14181595,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "CA",
  "candidatevotes": 4483810,
  "totalvotes": 14181595,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "CA",
  "candidatevotes": 478500,
  "totalvotes": 14181595,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "CA",
  "candidatevotes": 278657,
  "totalvotes": 14181595,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "CA",
  "candidatevotes": 120739,
  "totalvotes": 14181595,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "CA",
  "candidatevotes": 66101,
  "totalvotes": 14181595,
  "party": "peace & freedom",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 1338870,
  "totalvotes": 2780220,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 1202484,
  "totalvotes": 2780220,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 144121,
  "totalvotes": 2780220,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 38437,
  "totalvotes": 2780220,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 31485,
  "totalvotes": 2780220,
  "party": "unaffiliated",
  "candidate": "Scattering"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 11699,
  "totalvotes": 2780220,
  "party": "american constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 5028,
  "totalvotes": 2780220,
  "party": "veterans party of america",
  "candidate": "Keniston, Chris"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 1255,
  "totalvotes": 2780220,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 1096,
  "totalvotes": 2780220,
  "party": "independent american",
  "candidate": "Kopitke, Kyle Kenley"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 872,
  "totalvotes": 2780220,
  "party": "independent people of colorado",
  "candidate": "Maldonado, Joseph Allen"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 862,
  "totalvotes": 2780220,
  "party": "american solidarity party",
  "candidate": "Maturen, Michael A."
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 751,
  "totalvotes": 2780220,
  "party": "nutrition party",
  "candidate": "Silva, Rod"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 710,
  "totalvotes": 2780220,
  "party": "america's party",
  "candidate": "Hoefling, Tom"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 531,
  "totalvotes": 2780220,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 452,
  "totalvotes": 2780220,
  "party": "socialist workers",
  "candidate": "Kennedy, Alyson"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 392,
  "totalvotes": 2780220,
  "party": "kotlikoff for president",
  "candidate": "Kotlikoff, Laurence"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 382,
  "totalvotes": 2780220,
  "party": "nonviolent resistance/pacifist",
  "candidate": "Lyttle, Bradford"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 337,
  "totalvotes": 2780220,
  "party": "approval voting party",
  "candidate": "Atwood, Frank"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 271,
  "totalvotes": 2780220,
  "party": "socialist party usa",
  "candidate": "Emidio \"\"Mimi\"\", Soltysik"
}, {
  "year": 2016,
  "state_po": "CO",
  "candidatevotes": 185,
  "totalvotes": 2780220,
  "party": "prohibition",
  "candidate": "Hedges, James"
}, {
  "year": 2016,
  "state_po": "CT",
  "candidatevotes": 897572,
  "totalvotes": 1644920,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "CT",
  "candidatevotes": 673215,
  "totalvotes": 1644920,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "CT",
  "candidatevotes": 48676,
  "totalvotes": 1644920,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "CT",
  "candidatevotes": 22841,
  "totalvotes": 1644920,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "CT",
  "candidatevotes": 2616,
  "totalvotes": 1644920,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "DE",
  "candidatevotes": 235603,
  "totalvotes": 441590,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "DE",
  "candidatevotes": 185127,
  "totalvotes": 441590,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "DE",
  "candidatevotes": 14757,
  "totalvotes": 441590,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "DE",
  "candidatevotes": 6103,
  "totalvotes": 441590,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 282830,
  "totalvotes": 312575,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 12723,
  "totalvotes": 312575,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 6551,
  "totalvotes": 312575,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 4906,
  "totalvotes": 312575,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 4258,
  "totalvotes": 312575,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 1064,
  "totalvotes": 312575,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "DC",
  "candidatevotes": 243,
  "totalvotes": 312575,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 4617886,
  "totalvotes": 9420039,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 4504975,
  "totalvotes": 9420039,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 207043,
  "totalvotes": 9420039,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 64399,
  "totalvotes": 9420039,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 16475,
  "totalvotes": 9420039,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 9108,
  "totalvotes": 9420039,
  "party": "reform party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "FL",
  "candidatevotes": 153,
  "totalvotes": 9420039,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "GA",
  "candidatevotes": 2089104,
  "totalvotes": 4114732,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "GA",
  "candidatevotes": 1877963,
  "totalvotes": 4114732,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "GA",
  "candidatevotes": 125306,
  "totalvotes": 4114732,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "GA",
  "candidatevotes": 22359,
  "totalvotes": 4114732,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 266891,
  "totalvotes": 437664,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 128847,
  "totalvotes": 437664,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 15954,
  "totalvotes": 437664,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 12737,
  "totalvotes": 437664,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 8289,
  "totalvotes": 437664,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 4508,
  "totalvotes": 437664,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "HI",
  "candidatevotes": 438,
  "totalvotes": 437664,
  "party": "",
  "candidate": "Over Vote"
}, {
  "year": 2016,
  "state_po": "ID",
  "candidatevotes": 409055,
  "totalvotes": 690255,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "ID",
  "candidatevotes": 189765,
  "totalvotes": 690255,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "ID",
  "candidatevotes": 60748,
  "totalvotes": 690255,
  "party": "independent",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "ID",
  "candidatevotes": 28331,
  "totalvotes": 690255,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "ID",
  "candidatevotes": 2356,
  "totalvotes": 690255,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "IL",
  "candidatevotes": 3090729,
  "totalvotes": 5536424,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "IL",
  "candidatevotes": 2146015,
  "totalvotes": 5536424,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "IL",
  "candidatevotes": 209596,
  "totalvotes": 5536424,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "IL",
  "candidatevotes": 76802,
  "totalvotes": 5536424,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "IL",
  "candidatevotes": 13282,
  "totalvotes": 5536424,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "IN",
  "candidatevotes": 1557286,
  "totalvotes": 2734958,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "IN",
  "candidatevotes": 1033126,
  "totalvotes": 2734958,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "IN",
  "candidatevotes": 133993,
  "totalvotes": 2734958,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "IN",
  "candidatevotes": 8559,
  "totalvotes": 2734958,
  "party": "green",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "IN",
  "candidatevotes": 1937,
  "totalvotes": 2734958,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "IN",
  "candidatevotes": 57,
  "totalvotes": 2734958,
  "party": "socialist party usa",
  "candidate": "Emidio \"\"Mimi\"\", Soltysik"
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 800983,
  "totalvotes": 1565580,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 653669,
  "totalvotes": 1565580,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 59186,
  "totalvotes": 1565580,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 17746,
  "totalvotes": 1565580,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 12366,
  "totalvotes": 1565580,
  "party": "nominated by petition",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 11479,
  "totalvotes": 1565580,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 5335,
  "totalvotes": 1565580,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 2247,
  "totalvotes": 1565580,
  "party": "new independent party iowa",
  "candidate": "Kahn, Lynn S."
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 2246,
  "totalvotes": 1565580,
  "party": "legal marijuana now",
  "candidate": "Vacek, Dan"
}, {
  "year": 2016,
  "state_po": "IA",
  "candidatevotes": 323,
  "totalvotes": 1565580,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "KS",
  "candidatevotes": 671018,
  "totalvotes": 1184402,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "KS",
  "candidatevotes": 427005,
  "totalvotes": 1184402,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "KS",
  "candidatevotes": 55406,
  "totalvotes": 1184402,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "KS",
  "candidatevotes": 23506,
  "totalvotes": 1184402,
  "party": "independent",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "KS",
  "candidatevotes": 7467,
  "totalvotes": 1184402,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 1202971,
  "totalvotes": 1924149,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 628854,
  "totalvotes": 1924149,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 53752,
  "totalvotes": 1924149,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 22780,
  "totalvotes": 1924149,
  "party": "independent",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 13913,
  "totalvotes": 1924149,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 1128,
  "totalvotes": 1924149,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "KY",
  "candidatevotes": 751,
  "totalvotes": 1924149,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "LA",
  "candidatevotes": 1178638,
  "totalvotes": 2029032,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "LA",
  "candidatevotes": 780154,
  "totalvotes": 2029032,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "LA",
  "candidatevotes": 37978,
  "totalvotes": 2029032,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "LA",
  "candidatevotes": 18231,
  "totalvotes": 2029032,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2016,
  "state_po": "LA",
  "candidatevotes": 14031,
  "totalvotes": 2029032,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "ME",
  "candidatevotes": 357735,
  "totalvotes": 771892,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "ME",
  "candidatevotes": 335593,
  "totalvotes": 771892,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "ME",
  "candidatevotes": 38105,
  "totalvotes": 771892,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "ME",
  "candidatevotes": 23965,
  "totalvotes": 771892,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "ME",
  "candidatevotes": 14251,
  "totalvotes": 771892,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "ME",
  "candidatevotes": 2243,
  "totalvotes": 771892,
  "party": "unenrolled",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "MD",
  "candidatevotes": 1678006,
  "totalvotes": 2781446,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MD",
  "candidatevotes": 943428,
  "totalvotes": 2781446,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MD",
  "candidatevotes": 79605,
  "totalvotes": 2781446,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MD",
  "candidatevotes": 35945,
  "totalvotes": 2781446,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MD",
  "candidatevotes": 33541,
  "totalvotes": 2781446,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "MD",
  "candidatevotes": 10921,
  "totalvotes": 2781446,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 1995196,
  "totalvotes": 3378821,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 1090893,
  "totalvotes": 3378821,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 138018,
  "totalvotes": 3378821,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 53775,
  "totalvotes": 3378821,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 50488,
  "totalvotes": 3378821,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 47661,
  "totalvotes": 3378821,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MA",
  "candidatevotes": 2790,
  "totalvotes": 3378821,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 2279543,
  "totalvotes": 4799284,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 2268839,
  "totalvotes": 4799284,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 172136,
  "totalvotes": 4799284,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 51463,
  "totalvotes": 4799284,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 16139,
  "totalvotes": 4799284,
  "party": "u.s. taxpayers party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 8955,
  "totalvotes": 4799284,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "MI",
  "candidatevotes": 2209,
  "totalvotes": 4799284,
  "party": "natural law",
  "candidate": "Emidio \"\"Mimi\"\", Soltysik"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 1367705,
  "totalvotes": 2944782,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 1322949,
  "totalvotes": 2944782,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 112972,
  "totalvotes": 2944782,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 53075,
  "totalvotes": 2944782,
  "party": "independence",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 36986,
  "totalvotes": 2944782,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 27247,
  "totalvotes": 2944782,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 11291,
  "totalvotes": 2944782,
  "party": "legal marijuana now",
  "candidate": "Vacek, Dan"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 9456,
  "totalvotes": 2944782,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 1671,
  "totalvotes": 2944782,
  "party": "socialist workers",
  "candidate": "Kennedy, Alyson"
}, {
  "year": 2016,
  "state_po": "MN",
  "candidatevotes": 1430,
  "totalvotes": 2944782,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 700714,
  "totalvotes": 1209357,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 485131,
  "totalvotes": 1209357,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 14435,
  "totalvotes": 1209357,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 3987,
  "totalvotes": 1209357,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 3731,
  "totalvotes": 1209357,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 715,
  "totalvotes": 1209357,
  "party": "prohibition",
  "candidate": "Hedges, James"
}, {
  "year": 2016,
  "state_po": "MS",
  "candidatevotes": 644,
  "totalvotes": 1209357,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "MO",
  "candidatevotes": 1594511,
  "totalvotes": 2808605,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MO",
  "candidatevotes": 1071068,
  "totalvotes": 2808605,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MO",
  "candidatevotes": 97359,
  "totalvotes": 2808605,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MO",
  "candidatevotes": 25419,
  "totalvotes": 2808605,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MO",
  "candidatevotes": 13092,
  "totalvotes": 2808605,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "MO",
  "candidatevotes": 7156,
  "totalvotes": 2808605,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "MT",
  "candidatevotes": 279240,
  "totalvotes": 494526,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "MT",
  "candidatevotes": 177709,
  "totalvotes": 494526,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "MT",
  "candidatevotes": 28037,
  "totalvotes": 494526,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "MT",
  "candidatevotes": 7970,
  "totalvotes": 494526,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "MT",
  "candidatevotes": 1570,
  "totalvotes": 494526,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "NE",
  "candidatevotes": 495961,
  "totalvotes": 844227,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NE",
  "candidatevotes": 284494,
  "totalvotes": 844227,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NE",
  "candidatevotes": 38946,
  "totalvotes": 844227,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NE",
  "candidatevotes": 16051,
  "totalvotes": 844227,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "NE",
  "candidatevotes": 8775,
  "totalvotes": 844227,
  "party": "nominated by petition",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "NV",
  "candidatevotes": 539260,
  "totalvotes": 1125385,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NV",
  "candidatevotes": 512058,
  "totalvotes": 1125385,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NV",
  "candidatevotes": 37384,
  "totalvotes": 1125385,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NV",
  "candidatevotes": 28863,
  "totalvotes": 1125385,
  "party": "",
  "candidate": "None Of The Above"
}, {
  "year": 2016,
  "state_po": "NV",
  "candidatevotes": 5268,
  "totalvotes": 1125385,
  "party": "independent american",
  "candidate": "Kopitke, Kyle Kenley"
}, {
  "year": 2016,
  "state_po": "NV",
  "candidatevotes": 2552,
  "totalvotes": 1125385,
  "party": "no party affiliation",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 348526,
  "totalvotes": 744296,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 345790,
  "totalvotes": 744296,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 30777,
  "totalvotes": 744296,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 9618,
  "totalvotes": 744296,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 6496,
  "totalvotes": 744296,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 2411,
  "totalvotes": 744296,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2016,
  "state_po": "NH",
  "candidatevotes": 678,
  "totalvotes": 744296,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 2148278,
  "totalvotes": 3874046,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 1601933,
  "totalvotes": 3874046,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 72477,
  "totalvotes": 3874046,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 37772,
  "totalvotes": 3874046,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 6161,
  "totalvotes": 3874046,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 2156,
  "totalvotes": 3874046,
  "party": "socialist workers",
  "candidate": "Kennedy, Alyson"
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 1838,
  "totalvotes": 3874046,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 1749,
  "totalvotes": 3874046,
  "party": "workers world party",
  "candidate": "Moorehead, Monica"
}, {
  "year": 2016,
  "state_po": "NJ",
  "candidatevotes": 1682,
  "totalvotes": 3874046,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 385234,
  "totalvotes": 798319,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 319667,
  "totalvotes": 798319,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 74541,
  "totalvotes": 798319,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 9879,
  "totalvotes": 798319,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 5825,
  "totalvotes": 798319,
  "party": "better for america",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 1514,
  "totalvotes": 798319,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 1184,
  "totalvotes": 798319,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "NM",
  "candidatevotes": 475,
  "totalvotes": 798319,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 4556124,
  "totalvotes": 7802084,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 2819534,
  "totalvotes": 7802084,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 176598,
  "totalvotes": 7802084,
  "party": "independence",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 107934,
  "totalvotes": 7802084,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 77179,
  "totalvotes": 7802084,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 48447,
  "totalvotes": 7802084,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 12816,
  "totalvotes": 7802084,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "NY",
  "candidatevotes": 3452,
  "totalvotes": 7802084,
  "party": "",
  "candidate": "Void Vote"
}, {
  "year": 2016,
  "state_po": "NC",
  "candidatevotes": 2362631,
  "totalvotes": 4741564,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "NC",
  "candidatevotes": 2189316,
  "totalvotes": 4741564,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "NC",
  "candidatevotes": 130126,
  "totalvotes": 4741564,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "NC",
  "candidatevotes": 47386,
  "totalvotes": 4741564,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2016,
  "state_po": "NC",
  "candidatevotes": 12105,
  "totalvotes": 4741564,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 216794,
  "totalvotes": 344360,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 93758,
  "totalvotes": 344360,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 21434,
  "totalvotes": 344360,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 6397,
  "totalvotes": 344360,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 3780,
  "totalvotes": 344360,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 1833,
  "totalvotes": 344360,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "ND",
  "candidatevotes": 364,
  "totalvotes": 344360,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "OH",
  "candidatevotes": 2841005,
  "totalvotes": 5496487,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "OH",
  "candidatevotes": 2394164,
  "totalvotes": 5496487,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "OH",
  "candidatevotes": 215047,
  "totalvotes": 5496487,
  "party": "no party affiliation",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "OH",
  "candidatevotes": 46271,
  "totalvotes": 5496487,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "OK",
  "candidatevotes": 949136,
  "totalvotes": 1452992,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "OK",
  "candidatevotes": 420375,
  "totalvotes": 1452992,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "OK",
  "candidatevotes": 83481,
  "totalvotes": 1452992,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "OR",
  "candidatevotes": 1002106,
  "totalvotes": 2001336,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "OR",
  "candidatevotes": 782403,
  "totalvotes": 2001336,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "OR",
  "candidatevotes": 94231,
  "totalvotes": 2001336,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "OR",
  "candidatevotes": 72594,
  "totalvotes": 2001336,
  "party": "",
  "candidate": "Other"
}, {
  "year": 2016,
  "state_po": "OR",
  "candidatevotes": 50002,
  "totalvotes": 2001336,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "PA",
  "candidatevotes": 2970733,
  "totalvotes": 6115402,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "PA",
  "candidatevotes": 2926441,
  "totalvotes": 6115402,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "PA",
  "candidatevotes": 146715,
  "totalvotes": 6115402,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "PA",
  "candidatevotes": 49941,
  "totalvotes": 6115402,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "PA",
  "candidatevotes": 21572,
  "totalvotes": 6115402,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "RI",
  "candidatevotes": 252525,
  "totalvotes": 464144,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "RI",
  "candidatevotes": 180543,
  "totalvotes": 464144,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "RI",
  "candidatevotes": 14746,
  "totalvotes": 464144,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "RI",
  "candidatevotes": 9439,
  "totalvotes": 464144,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "RI",
  "candidatevotes": 6220,
  "totalvotes": 464144,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "RI",
  "candidatevotes": 671,
  "totalvotes": 464144,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 1155389,
  "totalvotes": 2103027,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 855373,
  "totalvotes": 2103027,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 49204,
  "totalvotes": 2103027,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 21016,
  "totalvotes": 2103027,
  "party": "independence",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 13034,
  "totalvotes": 2103027,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 5765,
  "totalvotes": 2103027,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "SC",
  "candidatevotes": 3246,
  "totalvotes": 2103027,
  "party": "american",
  "candidate": "Skewes, Peter"
}, {
  "year": 2016,
  "state_po": "SD",
  "candidatevotes": 227721,
  "totalvotes": 370093,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "SD",
  "candidatevotes": 117458,
  "totalvotes": 370093,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "SD",
  "candidatevotes": 20850,
  "totalvotes": 370093,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "SD",
  "candidatevotes": 4064,
  "totalvotes": 370093,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "TN",
  "candidatevotes": 1522925,
  "totalvotes": 2508027,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "TN",
  "candidatevotes": 870695,
  "totalvotes": 2508027,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "TN",
  "candidatevotes": 114407,
  "totalvotes": 2508027,
  "party": "independent",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "TX",
  "candidatevotes": 4685047,
  "totalvotes": 8969226,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "TX",
  "candidatevotes": 3877868,
  "totalvotes": 8969226,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "TX",
  "candidatevotes": 283492,
  "totalvotes": 8969226,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "TX",
  "candidatevotes": 71558,
  "totalvotes": 8969226,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "TX",
  "candidatevotes": 51261,
  "totalvotes": 8969226,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "UT",
  "candidatevotes": 515211,
  "totalvotes": 1131317,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "UT",
  "candidatevotes": 310674,
  "totalvotes": 1131317,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "UT",
  "candidatevotes": 255060,
  "totalvotes": 1131317,
  "party": "no party affiliation",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "UT",
  "candidatevotes": 39608,
  "totalvotes": 1131317,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "UT",
  "candidatevotes": 8032,
  "totalvotes": 1131317,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "UT",
  "candidatevotes": 2732,
  "totalvotes": 1131317,
  "party": "independent american",
  "candidate": "Kopitke, Kyle Kenley"
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 178573,
  "totalvotes": 320467,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 95369,
  "totalvotes": 320467,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 22899,
  "totalvotes": 320467,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 10078,
  "totalvotes": 320467,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 6758,
  "totalvotes": 320467,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 4574,
  "totalvotes": 320467,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 1063,
  "totalvotes": 320467,
  "party": "independent",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 826,
  "totalvotes": 320467,
  "party": "",
  "candidate": "Void Vote"
}, {
  "year": 2016,
  "state_po": "VT",
  "candidatevotes": 327,
  "totalvotes": 320467,
  "party": "liberty union party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "VA",
  "candidatevotes": 1981473,
  "totalvotes": 3982752,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "VA",
  "candidatevotes": 1769443,
  "totalvotes": 3982752,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "VA",
  "candidatevotes": 118274,
  "totalvotes": 3982752,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "VA",
  "candidatevotes": 54054,
  "totalvotes": 3982752,
  "party": "independent",
  "candidate": "McMullin, Evan"
}, {
  "year": 2016,
  "state_po": "VA",
  "candidatevotes": 31870,
  "totalvotes": 3982752,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "VA",
  "candidatevotes": 27638,
  "totalvotes": 3982752,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 1742718,
  "totalvotes": 3317019,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 1221747,
  "totalvotes": 3317019,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 160879,
  "totalvotes": 3317019,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 107805,
  "totalvotes": 3317019,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 58417,
  "totalvotes": 3317019,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 17623,
  "totalvotes": 3317019,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 4307,
  "totalvotes": 3317019,
  "party": "socialist workers",
  "candidate": "Kennedy, Alyson"
}, {
  "year": 2016,
  "state_po": "WA",
  "candidatevotes": 3523,
  "totalvotes": 3317019,
  "party": "socialism and liberation party",
  "candidate": "La Riva, Gloria Estella"
}, {
  "year": 2016,
  "state_po": "WV",
  "candidatevotes": 489371,
  "totalvotes": 713051,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "WV",
  "candidatevotes": 188794,
  "totalvotes": 713051,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "WV",
  "candidatevotes": 23004,
  "totalvotes": 713051,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "WV",
  "candidatevotes": 8075,
  "totalvotes": 713051,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "WV",
  "candidatevotes": 3807,
  "totalvotes": 713051,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 1405284,
  "totalvotes": 2976150,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 1382536,
  "totalvotes": 2976150,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 106674,
  "totalvotes": 2976150,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 31072,
  "totalvotes": 2976150,
  "party": "green",
  "candidate": "Stein, Jill"
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 22764,
  "totalvotes": 2976150,
  "party": "",
  "candidate": "Scattering"
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 12386,
  "totalvotes": 2976150,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 12162,
  "totalvotes": 2976150,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 1770,
  "totalvotes": 2976150,
  "party": "workers world party",
  "candidate": "Moorehead, Monica"
}, {
  "year": 2016,
  "state_po": "WI",
  "candidatevotes": 1502,
  "totalvotes": 2976150,
  "party": "american delta party",
  "candidate": "De La Fuente, Roque \"\"Rocky\""
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 174419,
  "totalvotes": 258788,
  "party": "republican",
  "candidate": "Trump, Donald J."
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 55973,
  "totalvotes": 258788,
  "party": "democrat",
  "candidate": "Clinton, Hillary"
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 13287,
  "totalvotes": 258788,
  "party": "libertarian",
  "candidate": "Johnson, Gary"
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 10128,
  "totalvotes": 258788,
  "party": "",
  "candidate": ""
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 2661,
  "totalvotes": 258788,
  "party": "",
  "candidate": "Blank Vote"
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 2042,
  "totalvotes": 258788,
  "party": "constitution party",
  "candidate": "Castle, Darrell L."
}, {
  "year": 2016,
  "state_po": "WY",
  "candidatevotes": 278,
  "totalvotes": 258788,
  "party": "",
  "candidate": "Over Vote"
}];
},{}],"EGgR":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Alton B. Parker",
    "republican": "THEODORE ROOSEVELT"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "KY": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NC": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 39
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 23
      }
    },
    "OK": {
      "electoral": {
        "democrat": 1,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 34
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"jFUY":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "William J. Bryan",
    "republican": "William H. Taft"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "CO": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "KY": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NC": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 39
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 23
      }
    },
    "OK": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 34
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"YvmL":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Woodrow Wilson",
    "republican": "William H. Taft",
    "progressive": "Theodore Roosevelt"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 13
      }
    },
    "CO": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      }
    },
    "KS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "KY": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 15
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 12
      }
    },
    "MO": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "NE": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 45,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 24,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 38
      }
    },
    "RI": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 5
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 7
      }
    },
    "WI": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"BCwg":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Woodrow Wilson",
    "republican": "Charles E. Hughes"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 29
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "KS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "KY": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MO": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "NE": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "NM": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "OH": {
      "electoral": {
        "democrat": 24,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 38
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"hAQp":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "James M. Cox",
    "republican": "Warren G. Harding"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 29
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "KY": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 38
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "TX": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"XdxI":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "John W. Davis",
    "republican": "Calvin Coolidge",
    "progressive": "Robert M. La Follette"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 29
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "OK": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 38
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "progressive": 13
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"jYrH":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Al Smith",
    "republican": "Herbert Hoover"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "GA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 29
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 18
      }
    },
    "MS": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 38
      }
    },
    "RI": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 20
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"spcH":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Franklin D. Roosevelt",
    "republican": "Herbert Hoover"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 22,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "KS": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "KY": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 19,
        "republican": 0
      }
    },
    "MN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NE": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 47,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 26,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 36
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "TN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"beJI":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Franklin D. Roosevelt",
    "republican": "Alf Landon"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 22,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "KS": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "KY": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 19,
        "republican": 0
      }
    },
    "MN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NE": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 47,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 26,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 36,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "TN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"x6tz":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Franklin D. Roosevelt",
    "republican": "Wendell Willkie"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 22,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "KY": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 19
      }
    },
    "MN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 47,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 26,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 36,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"ig6W":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Franklin D. Roosevelt",
    "republican": "Thomas E. Dewey"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 28,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "KY": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 19,
        "republican": 0
      }
    },
    "MN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 47,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "OK": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 35,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"uru1":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Harry S. Truman",
    "republican": "Thomas E. Dewey",
    "other": "Strom Thurmond",
    "Dixiecrat": "Strom Thurmond"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "Dixiecrat": 11
      }
    },
    "AR": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "CA": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 28,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "KY": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "Dixiecrat": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 19
      }
    },
    "MN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "Dixiecrat": 9
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "NM": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 47
      }
    },
    "OH": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 35
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "Dixiecrat": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"d0U5":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Adlai Stevenson",
    "republican": "Dwight D. Eisenhower"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "KY": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 20
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "MS": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"Cfg7":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Adlai Stevenson",
    "republican": "Dwight D. Eisenhower"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 20
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "MO": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"UlXQ":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "John F. Kennedy",
    "republican": "Richard Nixon",
    "other": "Harry F. Byrd",
    "southern democrat": "Harry F. Byrd"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "southern democrat": 11
      }
    },
    "AR": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 0,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 27,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "MI": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      }
    },
    "MN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "southern democrat": 8
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 45,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 32,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "TX": {
      "electoral": {
        "democrat": 24,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "WV": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"NBxv":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Lyndon B. Johnson",
    "republican": "Barry Goldwater"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "AR": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "CA": {
      "electoral": {
        "democrat": 40,
        "republican": 0
      }
    },
    "CO": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "ID": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IL": {
      "electoral": {
        "democrat": 26,
        "republican": 0
      }
    },
    "IN": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "KS": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "KY": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "MI": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "MT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NC": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NE": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      }
    },
    "NM": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "NV": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "NY": {
      "electoral": {
        "democrat": 43,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 26,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "TN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "VA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "WA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    }
  }
};
},{}],"pzTc":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Hubert Humphrey",
    "republican": "Richard Nixon",
    "other": "George Wallace",
    "american independent": "George Wallace"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "american independent": 10
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "american independent": 6
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 40
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "american independent": 12
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "american independent": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "MI": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 0,
        "american independent": 7
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 17
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 43,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "TX": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "WV": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"fnJm":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "George McGovern",
    "republican": "Richard Nixon"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 17
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 21
      }
    },
    "MN": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 17
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 41
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"eVtT":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Jimmy Carter",
    "republican": "Gerald Ford"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "AR": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "FL": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "KY": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      }
    },
    "LA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MA": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 21
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "MS": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 17
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 41,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 27,
        "republican": 0
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "TX": {
      "electoral": {
        "democrat": 26,
        "republican": 0
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "WI": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"OAKZ":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Jimmy Carter",
    "republican": "Ronald Reagan"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 45
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 17
      }
    },
    "GA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 21
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 17
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 41
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 26
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "WV": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"JeJL":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Walter Mondale",
    "republican": "Ronald Reagan"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 47
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 21
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "HI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 20
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NY": {
      "electoral": {
        "democrat": 0,
        "republican": 36
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 23
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "RI": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 29
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "WI": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"Skhf":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Michael Dukakis",
    "republican": "George H. W. Bush"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "CA": {
      "electoral": {
        "democrat": 0,
        "republican": 47
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "CT": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      }
    },
    "DE": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 21
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "IA": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "IL": {
      "electoral": {
        "democrat": 0,
        "republican": 24
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "MA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      }
    },
    "MD": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      }
    },
    "ME": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "MI": {
      "electoral": {
        "democrat": 0,
        "republican": 20
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      }
    },
    "NY": {
      "electoral": {
        "democrat": 36,
        "republican": 0
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 23
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      }
    },
    "PA": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 29
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      }
    },
    "VT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    },
    "WA": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      }
    },
    "WI": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      }
    },
    "WV": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      }
    }
  }
};
},{}],"Et8F":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Bill Clinton",
    "republican": "George H. W. Bush"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 78294,
        "republican": 102000,
        "other": 73481
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 690080,
        "republican": 804283,
        "other": 183109
      }
    },
    "AR": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      },
      "popular": {
        "democrat": 505823,
        "republican": 337324,
        "other": 99132
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 543050,
        "republican": 572086,
        "other": 353741
      }
    },
    "CA": {
      "electoral": {
        "democrat": 54,
        "republican": 0
      },
      "popular": {
        "democrat": 5121325,
        "republican": 3630574,
        "other": 2296006
      }
    },
    "CO": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 629681,
        "republican": 562850,
        "other": 366010
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 682318,
        "republican": 578313,
        "other": 348
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 192619,
        "republican": 20698,
        "other": 9681
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 126055,
        "republican": 102313,
        "other": 59213
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      },
      "popular": {
        "democrat": 2,
        "republican": 2173310,
        "other": 72
      }
    },
    "GA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      },
      "popular": {
        "democrat": 1008966,
        "republican": 995252,
        "other": 309657
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 179310,
        "republican": 136822,
        "other": 53003
      }
    },
    "IA": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 586353,
        "republican": 504891,
        "other": 253468
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 137013,
        "republican": 202645,
        "other": 130395
      }
    },
    "IL": {
      "electoral": {
        "democrat": 22,
        "republican": 0
      },
      "popular": {
        "democrat": 2453350,
        "republican": 1734096,
        "other": 840515
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      },
      "popular": {
        "democrat": 848420,
        "republican": 989375,
        "other": 455934
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 390434,
        "republican": 449951,
        "other": 312358
      }
    },
    "KY": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 665104,
        "republican": 617178,
        "other": 203944
      }
    },
    "LA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      },
      "popular": {
        "democrat": 815971,
        "republican": 733386,
        "other": 211478
      }
    },
    "MA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      },
      "popular": {
        "democrat": 1318639,
        "republican": 805039,
        "other": 630731
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 988571,
        "republican": 707094,
        "other": 281414
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 263420,
        "republican": 206504,
        "other": 206820
      }
    },
    "MI": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      },
      "popular": {
        "democrat": 1871182,
        "republican": 1554940,
        "other": 824813
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1020997,
        "republican": 747841,
        "other": 562506
      }
    },
    "MO": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1053873,
        "republican": 811159,
        "other": 518741
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 400258,
        "republican": 487793,
        "other": 85626
      }
    },
    "MT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 154507,
        "republican": 144207,
        "other": 107225
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      },
      "popular": {
        "democrat": 1,
        "republican": 1134661,
        "other": 114042
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 99168,
        "republican": 136244,
        "other": 71084
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 217344,
        "republican": 344346,
        "other": 174687
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 209040,
        "republican": 202484,
        "other": 121337
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      },
      "popular": {
        "democrat": 1436206,
        "republican": 1356865,
        "other": 521829
      }
    },
    "NM": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 261617,
        "republican": 212824,
        "other": 91895
      }
    },
    "NV": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 189148,
        "republican": 175828,
        "other": 132580
      }
    },
    "NY": {
      "electoral": {
        "democrat": 33,
        "republican": 0
      },
      "popular": {
        "democrat": 3444450,
        "republican": 2346649,
        "other": 1090721
      }
    },
    "OH": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      },
      "popular": {
        "democrat": 1984942,
        "republican": 1894310,
        "other": 1036426
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 473066,
        "republican": 592929,
        "other": 319878
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 621314,
        "republican": 475757,
        "other": 354091
      }
    },
    "PA": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      },
      "popular": {
        "democrat": 2239164,
        "republican": 1791841,
        "other": 902667
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 213302,
        "republican": 131605,
        "other": 105051
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 479514,
        "republican": 577507,
        "other": 138872
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 124888,
        "republican": 136718,
        "other": 73295
      }
    },
    "TN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 933521,
        "republican": 841300,
        "other": 199968
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      },
      "popular": {
        "democrat": 2281815,
        "republican": 2496071,
        "other": 1354781
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 183429,
        "republican": 322632,
        "other": 203400
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      },
      "popular": {
        "democrat": 1038650,
        "republican": 1150517,
        "other": 348639
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 133592,
        "republican": 88122,
        "other": 65991
      }
    },
    "WA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 993039,
        "republican": 731235,
        "other": 541801
      }
    },
    "WI": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1041066,
        "republican": 930855,
        "other": 544479
      }
    },
    "WV": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 331001,
        "republican": 241974,
        "other": 108829
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 68160,
        "republican": 79347,
        "other": 51263
      }
    }
  }
};
},{}],"yx8O":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Bill Clinton",
    "republican": "Bob Dole"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 80380,
        "republican": 122746,
        "other": 26333
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 662165,
        "republican": 769044,
        "other": 92149
      }
    },
    "AR": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      },
      "popular": {
        "democrat": 475171,
        "republican": 325416,
        "other": 69884
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 653288,
        "republican": 622073,
        "other": 112072
      }
    },
    "CA": {
      "electoral": {
        "democrat": 54,
        "republican": 0
      },
      "popular": {
        "democrat": 5119835,
        "republican": 3828380,
        "other": 697847
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 671152,
        "republican": 691848,
        "other": 99629
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 735740,
        "republican": 483109,
        "other": 139523
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 158220,
        "republican": 17339,
        "other": 3611
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 140355,
        "republican": 99062,
        "other": 28719
      }
    },
    "FL": {
      "electoral": {
        "democrat": 25,
        "republican": 0
      },
      "popular": {
        "democrat": 2546870,
        "republican": 2244536,
        "other": 483870
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      },
      "popular": {
        "democrat": 1053849,
        "republican": 1080843,
        "other": 146337
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 205012,
        "republican": 113943,
        "other": 27358
      }
    },
    "IA": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 620258,
        "republican": 492644,
        "other": 105159
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 165443,
        "republican": 256595,
        "other": 62518
      }
    },
    "IL": {
      "electoral": {
        "democrat": 22,
        "republican": 0
      },
      "popular": {
        "democrat": 2341744,
        "republican": 1587021,
        "other": 346408
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      },
      "popular": {
        "democrat": 887424,
        "republican": 1006693,
        "other": 224299
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 387659,
        "republican": 583245,
        "other": 92639
      }
    },
    "KY": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 636614,
        "republican": 623283,
        "other": 120396
      }
    },
    "LA": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      },
      "popular": {
        "democrat": 927837,
        "republican": 712586,
        "other": 123293
      }
    },
    "MA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      },
      "popular": {
        "democrat": 1571763,
        "republican": 718107,
        "other": 227217
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 966207,
        "republican": 681530,
        "other": 115812
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 312788,
        "republican": 186378,
        "other": 85970
      }
    },
    "MI": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      },
      "popular": {
        "democrat": 1989653,
        "republican": 1481212,
        "other": 336670
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1120438,
        "republican": 766476,
        "other": 257704
      }
    },
    "MO": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1025935,
        "republican": 890016,
        "other": 217188
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 394022,
        "republican": 439838,
        "other": 52222
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 167922,
        "republican": 179652,
        "other": 55229
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      },
      "popular": {
        "democrat": 1107849,
        "republican": 1225938,
        "other": 168059
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 106905,
        "republican": 125050,
        "other": 32515
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 236761,
        "republican": 363467,
        "other": 71278
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 246214,
        "republican": 196532,
        "other": 48390
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      },
      "popular": {
        "democrat": 1652329,
        "republican": 1103078,
        "other": 262134
      }
    },
    "NM": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 273495,
        "republican": 232751,
        "other": 32257
      }
    },
    "NV": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 203974,
        "republican": 199244,
        "other": 43986
      }
    },
    "NY": {
      "electoral": {
        "democrat": 33,
        "republican": 0
      },
      "popular": {
        "democrat": 3756177,
        "republican": 1933492,
        "other": 503458
      }
    },
    "OH": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      },
      "popular": {
        "democrat": 2148222,
        "republican": 1859883,
        "other": 483207
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 488105,
        "republican": 582315,
        "other": 130788
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 649641,
        "republican": 538152,
        "other": 121221
      }
    },
    "PA": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      },
      "popular": {
        "democrat": 2215819,
        "republican": 1801169,
        "other": 430984
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 233050,
        "republican": 104683,
        "other": 43723
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 506283,
        "republican": 573458,
        "other": 64386
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 139333,
        "republican": 150543,
        "other": 31250
      }
    },
    "TN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 909146,
        "republican": 863530,
        "other": 105918
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      },
      "popular": {
        "democrat": 2459683,
        "republican": 2736167,
        "other": 378537
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 221633,
        "republican": 361911,
        "other": 66461
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      },
      "popular": {
        "democrat": 1091060,
        "republican": 1138350,
        "other": 159861
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 137894,
        "republican": 80352,
        "other": 31024
      }
    },
    "WA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1123323,
        "republican": 840712,
        "other": 201003
      }
    },
    "WI": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1071971,
        "republican": 845029,
        "other": 227339
      }
    },
    "WV": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 327812,
        "republican": 233946,
        "other": 71639
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 77934,
        "republican": 105388,
        "other": 25928
      }
    }
  }
};
},{}],"lVL2":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Al Gore",
    "republican": "George W. Bush"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 79004,
        "republican": 167398,
        "other": 39158
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 692611,
        "republican": 941173,
        "other": 32488
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 422768,
        "republican": 472940,
        "other": 26073
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 685341,
        "republican": 781652,
        "other": 65023
      }
    },
    "CA": {
      "electoral": {
        "democrat": 54,
        "republican": 0
      },
      "popular": {
        "democrat": 5861203,
        "republican": 4567429,
        "other": 537224
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 738227,
        "republican": 883748,
        "other": 119393
      }
    },
    "CT": {
      "electoral": {
        "democrat": 8,
        "republican": 0
      },
      "popular": {
        "democrat": 816015,
        "republican": 561094,
        "other": 82416
      }
    },
    "DC": {
      "electoral": {
        "democrat": 2,
        "republican": 0
      },
      "popular": {
        "democrat": 171923,
        "republican": 18073,
        "other": 11898
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 180068,
        "republican": 137288,
        "other": 10266
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 25
      },
      "popular": {
        "democrat": 2912253,
        "republican": 2912790,
        "other": 138067
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      },
      "popular": {
        "democrat": 1116230,
        "republican": 1419720,
        "other": 60854
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 205286,
        "republican": 137845,
        "other": 24820
      }
    },
    "IA": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 638517,
        "republican": 634373,
        "other": 42673
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 138637,
        "republican": 336937,
        "other": 26047
      }
    },
    "IL": {
      "electoral": {
        "democrat": 22,
        "republican": 0
      },
      "popular": {
        "democrat": 2589026,
        "republican": 2019421,
        "other": 133676
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 12
      },
      "popular": {
        "democrat": 901980,
        "republican": 1245836,
        "other": 51486
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 399276,
        "republican": 622332,
        "other": 50610
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 638898,
        "republican": 872492,
        "other": 32797
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 792344,
        "republican": 927871,
        "other": 45441
      }
    },
    "MA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      },
      "popular": {
        "democrat": 1616487,
        "republican": 878502,
        "other": 207995
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1145782,
        "republican": 813797,
        "other": 65901
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 319951,
        "republican": 286616,
        "other": 45250
      }
    },
    "MI": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      },
      "popular": {
        "democrat": 2170418,
        "republican": 1953139,
        "other": 108944
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1168266,
        "republican": 1109659,
        "other": 160760
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1111138,
        "republican": 1189924,
        "other": 58830
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 404614,
        "republican": 572844,
        "other": 16726
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 137126,
        "republican": 240178,
        "other": 33693
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 14
      },
      "popular": {
        "democrat": 1257692,
        "republican": 1631163,
        "other": 22407
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 95284,
        "republican": 174852,
        "other": 18120
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 231780,
        "republican": 433862,
        "other": 31377
      }
    },
    "NH": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 266348,
        "republican": 273559,
        "other": 29174
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      },
      "popular": {
        "democrat": 1788850,
        "republican": 1284173,
        "other": 114203
      }
    },
    "NM": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 286783,
        "republican": 286417,
        "other": 25405
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 279978,
        "republican": 301575,
        "other": 27417
      }
    },
    "NY": {
      "electoral": {
        "democrat": 33,
        "republican": 0
      },
      "popular": {
        "democrat": 4107697,
        "republican": 2403374,
        "other": 310928
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 21
      },
      "popular": {
        "democrat": 2186190,
        "republican": 2351209,
        "other": 168058
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 474276,
        "republican": 744337,
        "other": 15616
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 720342,
        "republican": 713577,
        "other": 100049
      }
    },
    "PA": {
      "electoral": {
        "democrat": 23,
        "republican": 0
      },
      "popular": {
        "democrat": 2485967,
        "republican": 2281127,
        "other": 146025
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 249508,
        "republican": 130555,
        "other": 29049
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 565561,
        "republican": 785937,
        "other": 31219
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 118804,
        "republican": 190700,
        "other": 6765
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 981720,
        "republican": 1061949,
        "other": 32512
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 32
      },
      "popular": {
        "democrat": 2433746,
        "republican": 3799639,
        "other": 174252
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 203053,
        "republican": 515096,
        "other": 52605
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      },
      "popular": {
        "democrat": 1217290,
        "republican": 1437490,
        "other": 84667
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 149022,
        "republican": 119775,
        "other": 25511
      }
    },
    "WA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1247652,
        "republican": 1108864,
        "other": 130917
      }
    },
    "WI": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1242987,
        "republican": 1237279,
        "other": 118341
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 295497,
        "republican": 336475,
        "other": 16152
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 60481,
        "republican": 147947,
        "other": 9923
      }
    }
  }
};
},{}],"plnN":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "John Kerry",
    "republican": "George W. Bush"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 111025,
        "republican": 190889,
        "other": 10684
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 693933,
        "republican": 1176394,
        "other": 13122
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 469953,
        "republican": 572898,
        "other": 12094
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      },
      "popular": {
        "democrat": 893524,
        "republican": 1104294,
        "other": 14767
      }
    },
    "CA": {
      "electoral": {
        "democrat": 55,
        "republican": 0
      },
      "popular": {
        "democrat": 6745485,
        "republican": 5509826,
        "other": 166541
      }
    },
    "CO": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 1001732,
        "republican": 1101255,
        "other": 27343
      }
    },
    "CT": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 857488,
        "republican": 693826,
        "other": 27455
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 202970,
        "republican": 21256,
        "other": 3360
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 200152,
        "republican": 171660,
        "other": 3378
      }
    },
    "FL": {
      "electoral": {
        "democrat": 0,
        "republican": 27
      },
      "popular": {
        "democrat": 3583544,
        "republican": 3964522,
        "other": 61744
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      },
      "popular": {
        "democrat": 1366149,
        "republican": 1914254,
        "other": 21472
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 231708,
        "republican": 194191,
        "other": 3114
      }
    },
    "IA": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 741898,
        "republican": 751957,
        "other": 13053
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 181098,
        "republican": 409235,
        "other": 8114
      }
    },
    "IL": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      },
      "popular": {
        "democrat": 2891550,
        "republican": 2345946,
        "other": 36826
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 969011,
        "republican": 1479438,
        "other": 19553
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 434993,
        "republican": 736456,
        "other": 16307
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 712733,
        "republican": 1069439,
        "other": 13710
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 820299,
        "republican": 1102169,
        "other": 20638
      }
    },
    "MA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      },
      "popular": {
        "democrat": 1803800,
        "republican": 1071109,
        "other": 37479
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1334493,
        "republican": 1024703,
        "other": 27482
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 396842,
        "republican": 330201,
        "other": 13709
      }
    },
    "MI": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      },
      "popular": {
        "democrat": 2479183,
        "republican": 2313746,
        "other": 46323
      }
    },
    "MN": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      },
      "popular": {
        "democrat": 1445014,
        "republican": 1346695,
        "other": 36678
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1259171,
        "republican": 1455713,
        "other": 16480
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 458094,
        "republican": 684981,
        "other": 9070
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 173710,
        "republican": 266063,
        "other": 10672
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      },
      "popular": {
        "democrat": 1525849,
        "republican": 1961166,
        "other": 13992
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 111052,
        "republican": 196651,
        "other": 5130
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 254328,
        "republican": 512814,
        "other": 11044
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 340511,
        "republican": 331237,
        "other": 5990
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      },
      "popular": {
        "democrat": 1911430,
        "republican": 1670003,
        "other": 30258
      }
    },
    "NM": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 370942,
        "republican": 376930,
        "other": 8432
      }
    },
    "NV": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 397190,
        "republican": 418690,
        "other": 13707
      }
    },
    "NY": {
      "electoral": {
        "democrat": 31,
        "republican": 0
      },
      "popular": {
        "democrat": 4314280,
        "republican": 2962567,
        "other": 114189
      }
    },
    "OH": {
      "electoral": {
        "democrat": 0,
        "republican": 20
      },
      "popular": {
        "democrat": 2741167,
        "republican": 2859768,
        "other": 26973
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 503966,
        "republican": 959792,
        "other": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 943163,
        "republican": 866831,
        "other": 26788
      }
    },
    "PA": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      },
      "popular": {
        "democrat": 2938095,
        "republican": 2793847,
        "other": 37648
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 259765,
        "republican": 169046,
        "other": 8323
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 661699,
        "republican": 937974,
        "other": 18057
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 149244,
        "republican": 232584,
        "other": 6387
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1036477,
        "republican": 1384375,
        "other": 16467
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 34
      },
      "popular": {
        "democrat": 2832704,
        "republican": 4526917,
        "other": 51144
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 241199,
        "republican": 663742,
        "other": 22903
      }
    },
    "VA": {
      "electoral": {
        "democrat": 0,
        "republican": 13
      },
      "popular": {
        "democrat": 1454742,
        "republican": 1716959,
        "other": 26666
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 184067,
        "republican": 121180,
        "other": 7062
      }
    },
    "WA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1510201,
        "republican": 1304894,
        "other": 43989
      }
    },
    "WI": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1489504,
        "republican": 1478120,
        "other": 29383
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 326541,
        "republican": 423778,
        "other": 5568
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 70776,
        "republican": 167629,
        "other": 5023
      }
    }
  }
};
},{}],"eb5a":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Barack Obama",
    "republican": "John McCain"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 123594,
        "republican": 193841,
        "other": 8762
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 813479,
        "republican": 1266546,
        "other": 19794
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 422310,
        "republican": 638017,
        "other": 26290
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      },
      "popular": {
        "democrat": 1034707,
        "republican": 1230111,
        "other": 28657
      }
    },
    "CA": {
      "electoral": {
        "democrat": 55,
        "republican": 0
      },
      "popular": {
        "democrat": 8274473,
        "republican": 5011781,
        "other": 275646
      }
    },
    "CO": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      },
      "popular": {
        "democrat": 1288633,
        "republican": 1073629,
        "other": 39200
      }
    },
    "CT": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 997772,
        "republican": 629428,
        "other": 19597
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 245800,
        "republican": 17367,
        "other": 2686
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 255459,
        "republican": 152374,
        "other": 4579
      }
    },
    "FL": {
      "electoral": {
        "democrat": 27,
        "republican": 0
      },
      "popular": {
        "democrat": 4282074,
        "republican": 4045624,
        "other": 63046
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      },
      "popular": {
        "democrat": 1844123,
        "republican": 2048759,
        "other": 31604
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 325871,
        "republican": 120566,
        "other": 7131
      }
    },
    "IA": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 828940,
        "republican": 682379,
        "other": 25804
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 236440,
        "republican": 403012,
        "other": 15670
      }
    },
    "IL": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      },
      "popular": {
        "democrat": 3419348,
        "republican": 2031179,
        "other": 71844
      }
    },
    "IN": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1374039,
        "republican": 1345648,
        "other": 31367
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 514765,
        "republican": 699655,
        "other": 21452
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 751985,
        "republican": 1048462,
        "other": 26173
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 782989,
        "republican": 1148275,
        "other": 29497
      }
    },
    "MA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      },
      "popular": {
        "democrat": 1904097,
        "republican": 1108854,
        "other": 68034
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1629467,
        "republican": 959862,
        "other": 42267
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 421923,
        "republican": 295273,
        "other": 13967
      }
    },
    "MI": {
      "electoral": {
        "democrat": 17,
        "republican": 0
      },
      "popular": {
        "democrat": 2872579,
        "republican": 2048639,
        "other": 80548
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1573354,
        "republican": 1275409,
        "other": 61606
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1441911,
        "republican": 1445814,
        "other": 37480
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 554662,
        "republican": 724597,
        "other": 10606
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 231667,
        "republican": 242763,
        "other": 15872
      }
    },
    "NC": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      },
      "popular": {
        "democrat": 2142651,
        "republican": 2128474,
        "other": 39664
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 141278,
        "republican": 168601,
        "other": 6742
      }
    },
    "NE": {
      "electoral": {
        "democrat": 1,
        "republican": 4
      },
      "popular": {
        "democrat": 333319,
        "republican": 452979,
        "other": 14983
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 384826,
        "republican": 316534,
        "other": 9610
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 15,
        "republican": 0
      },
      "popular": {
        "democrat": 2215422,
        "republican": 1613207,
        "other": 39608
      }
    },
    "NM": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 472422,
        "republican": 346832,
        "other": 10904
      }
    },
    "NV": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 533736,
        "republican": 412827,
        "other": 21285
      }
    },
    "NY": {
      "electoral": {
        "democrat": 31,
        "republican": 0
      },
      "popular": {
        "democrat": 4804945,
        "republican": 2752771,
        "other": 83215
      }
    },
    "OH": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      },
      "popular": {
        "democrat": 2940044,
        "republican": 2677820,
        "other": 90486
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 502496,
        "republican": 960165,
        "other": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 1037291,
        "republican": 738475,
        "other": 52098
      }
    },
    "PA": {
      "electoral": {
        "democrat": 21,
        "republican": 0
      },
      "popular": {
        "democrat": 3276363,
        "republican": 2655885,
        "other": 81024
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 296571,
        "republican": 165391,
        "other": 9804
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 862449,
        "republican": 1034896,
        "other": 23624
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 170924,
        "republican": 203054,
        "other": 7997
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1087437,
        "republican": 1479178,
        "other": 33134
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 34
      },
      "popular": {
        "democrat": 3528633,
        "republican": 4479328,
        "other": 69834
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 327670,
        "republican": 596030,
        "other": 28670
      }
    },
    "VA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      },
      "popular": {
        "democrat": 1959532,
        "republican": 1725005,
        "other": 38723
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 219262,
        "republican": 98974,
        "other": 6810
      }
    },
    "WA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1750848,
        "republican": 1229216,
        "other": 56814
      }
    },
    "WI": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1677211,
        "republican": 1262393,
        "other": 43813
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 303857,
        "republican": 397466,
        "other": 12128
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 82868,
        "republican": 164958,
        "other": 6832
      }
    }
  }
};
},{}],"v22m":[function(require,module,exports) {
module.exports = {
  "candidates": {
    "democrat": "Barack Obama",
    "republican": "Mitt Romney"
  },
  "votes": {
    "AK": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 122640,
        "republican": 164676,
        "other": 13179
      }
    },
    "AL": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 795696,
        "republican": 1255925,
        "other": 22717
      }
    },
    "AR": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 394409,
        "republican": 647744,
        "other": 27315
      }
    },
    "AZ": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1025232,
        "republican": 1233654,
        "other": 40368
      }
    },
    "CA": {
      "electoral": {
        "democrat": 55,
        "republican": 0
      },
      "popular": {
        "democrat": 7854285,
        "republican": 4839958,
        "other": 344304
      }
    },
    "CO": {
      "electoral": {
        "democrat": 9,
        "republican": 0
      },
      "popular": {
        "democrat": 1323102,
        "republican": 1185243,
        "other": 61177
      }
    },
    "CT": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 905083,
        "republican": 634892,
        "other": 18985
      }
    },
    "DC": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 267070,
        "republican": 21381,
        "other": 5313
      }
    },
    "DE": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 242584,
        "republican": 165484,
        "other": 5853
      }
    },
    "FL": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      },
      "popular": {
        "democrat": 4237756,
        "republican": 4163447,
        "other": 72976
      }
    },
    "GA": {
      "electoral": {
        "democrat": 0,
        "republican": 16
      },
      "popular": {
        "democrat": 1773827,
        "republican": 2078688,
        "other": 47535
      }
    },
    "HI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 306658,
        "republican": 121015,
        "other": 7024
      }
    },
    "IA": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      },
      "popular": {
        "democrat": 822544,
        "republican": 730617,
        "other": 29019
      }
    },
    "ID": {
      "electoral": {
        "democrat": 0,
        "republican": 4
      },
      "popular": {
        "democrat": 212787,
        "republican": 420911,
        "other": 18576
      }
    },
    "IL": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      },
      "popular": {
        "democrat": 3019512,
        "republican": 2135216,
        "other": 87286
      }
    },
    "IN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 1152887,
        "republican": 1420543,
        "other": 51104
      }
    },
    "KS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 440726,
        "republican": 692634,
        "other": 26611
      }
    },
    "KY": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 679370,
        "republican": 1087190,
        "other": 30652
      }
    },
    "LA": {
      "electoral": {
        "democrat": 0,
        "republican": 8
      },
      "popular": {
        "democrat": 809141,
        "republican": 1152262,
        "other": 32662
      }
    },
    "MA": {
      "electoral": {
        "democrat": 11,
        "republican": 0
      },
      "popular": {
        "democrat": 1921290,
        "republican": 1188314,
        "other": 58163
      }
    },
    "MD": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1677844,
        "republican": 971869,
        "other": 57614
      }
    },
    "ME": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 401306,
        "republican": 292276,
        "other": 19598
      }
    },
    "MI": {
      "electoral": {
        "democrat": 16,
        "republican": 0
      },
      "popular": {
        "democrat": 2564569,
        "republican": 2115256,
        "other": 51136
      }
    },
    "MN": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1546167,
        "republican": 1320225,
        "other": 70169
      }
    },
    "MO": {
      "electoral": {
        "democrat": 0,
        "republican": 10
      },
      "popular": {
        "democrat": 1223796,
        "republican": 1482440,
        "other": 51087
      }
    },
    "MS": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 562949,
        "republican": 710746,
        "other": 11889
      }
    },
    "MT": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 201839,
        "republican": 267928,
        "other": 14281
      }
    },
    "NC": {
      "electoral": {
        "democrat": 0,
        "republican": 15
      },
      "popular": {
        "democrat": 2178391,
        "republican": 2270395,
        "other": 56586
      }
    },
    "ND": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 124827,
        "republican": 188163,
        "other": 9637
      }
    },
    "NE": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 302081,
        "republican": 475064,
        "other": 17234
      }
    },
    "NH": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 369561,
        "republican": 329918,
        "other": 11493
      }
    },
    "NJ": {
      "electoral": {
        "democrat": 14,
        "republican": 0
      },
      "popular": {
        "democrat": 2125101,
        "republican": 1477568,
        "other": 37623
      }
    },
    "NM": {
      "electoral": {
        "democrat": 5,
        "republican": 0
      },
      "popular": {
        "democrat": 415335,
        "republican": 335788,
        "other": 32635
      }
    },
    "NV": {
      "electoral": {
        "democrat": 6,
        "republican": 0
      },
      "popular": {
        "democrat": 531373,
        "republican": 463567,
        "other": 19978
      }
    },
    "NY": {
      "electoral": {
        "democrat": 29,
        "republican": 0
      },
      "popular": {
        "democrat": 4485741,
        "republican": 2490431,
        "other": 104987
      }
    },
    "OH": {
      "electoral": {
        "democrat": 18,
        "republican": 0
      },
      "popular": {
        "democrat": 2827709,
        "republican": 2661437,
        "other": 91701
      }
    },
    "OK": {
      "electoral": {
        "democrat": 0,
        "republican": 7
      },
      "popular": {
        "democrat": 443547,
        "republican": 891325,
        "other": 0
      }
    },
    "OR": {
      "electoral": {
        "democrat": 7,
        "republican": 0
      },
      "popular": {
        "democrat": 970488,
        "republican": 754175,
        "other": 64607
      }
    },
    "PA": {
      "electoral": {
        "democrat": 20,
        "republican": 0
      },
      "popular": {
        "democrat": 2990274,
        "republican": 2680434,
        "other": 82962
      }
    },
    "RI": {
      "electoral": {
        "democrat": 4,
        "republican": 0
      },
      "popular": {
        "democrat": 279677,
        "republican": 157204,
        "other": 9168
      }
    },
    "SC": {
      "electoral": {
        "democrat": 0,
        "republican": 9
      },
      "popular": {
        "democrat": 865941,
        "republican": 1071645,
        "other": 26532
      }
    },
    "SD": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 145039,
        "republican": 210610,
        "other": 8166
      }
    },
    "TN": {
      "electoral": {
        "democrat": 0,
        "republican": 11
      },
      "popular": {
        "democrat": 960709,
        "republican": 1462330,
        "other": 35538
      }
    },
    "TX": {
      "electoral": {
        "democrat": 0,
        "republican": 38
      },
      "popular": {
        "democrat": 3308124,
        "republican": 4569843,
        "other": 115884
      }
    },
    "UT": {
      "electoral": {
        "democrat": 0,
        "republican": 6
      },
      "popular": {
        "democrat": 251813,
        "republican": 740600,
        "other": 25027
      }
    },
    "VA": {
      "electoral": {
        "democrat": 13,
        "republican": 0
      },
      "popular": {
        "democrat": 1971820,
        "republican": 1822522,
        "other": 60147
      }
    },
    "VT": {
      "electoral": {
        "democrat": 3,
        "republican": 0
      },
      "popular": {
        "democrat": 199239,
        "republican": 92698,
        "other": 7353
      }
    },
    "WA": {
      "electoral": {
        "democrat": 12,
        "republican": 0
      },
      "popular": {
        "democrat": 1755396,
        "republican": 1290670,
        "other": 79450
      }
    },
    "WI": {
      "electoral": {
        "democrat": 10,
        "republican": 0
      },
      "popular": {
        "democrat": 1620985,
        "republican": 1407966,
        "other": 39483
      }
    },
    "WV": {
      "electoral": {
        "democrat": 0,
        "republican": 5
      },
      "popular": {
        "democrat": 238269,
        "republican": 417655,
        "other": 14514
      }
    },
    "WY": {
      "electoral": {
        "democrat": 0,
        "republican": 3
      },
      "popular": {
        "democrat": 69286,
        "republican": 170962,
        "other": 8813
      }
    }
  }
};
},{}],"Focm":[function(require,module,exports) {
var obj = require("./election-data.json"); //var total_years = 30;//how many years are in our graphic (currently not used)
//console.log(obj);
// Populating the map that saays who won each state in early elections (will update to include electoral vote)
//console.log(obj.length);
// If we are changin


var autoUpdating = false;
var voteData = new Map(); // we are now keeping track of the year as a public variable, so we only update
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

    loserMap2 = new Map(); // losermap 2 is a local version of the second place map

    map2 = new Map(); // map 2 is a local version of the winner map

    map3 = new Map(); // map 3 is a local version of the third place maap
  } else {
    map2 = map.get(year);
    map3 = thirdPlaceMap.get(year);
    loserMap2 = loserMap.get(year);
    partyMap = candidateMap.get(year);
    partyMap.get(obj[i].party);
  }

  var state = obj[i].state_po; // ARE ONLY USING THE STATE_PO, candidate votes, total votes, party, cadidate

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

  if (!partyMap.has(obj[i].party)) {
    partyMap.set(obj[i].party, {
      name: obj[i].candidate,
      votes: 0
    });
  }

  partyMap.get(obj[i].party).votes += obj[i].candidatevotes;
  candidateMap.set(year, partyMap);
} // map of json files per year


jsonFiles = new Map(); //jsonFiles.set(1900, require("./json/1900.json"));

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
jsonFiles.set(2012, require("./json/2012.json")); // do 2016 map separately

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
  }); // maybe always use electoral too

  currYearElectorates = new Map();
  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA", "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", "WI", "MO", "AR", "OK", "KS", "LA", "VA"].forEach(function (d) {
    var results = earlierYear['votes'][d]['electoral']; // currently only recording winner

    var highest = 0;
    var value = 0;
    var winner = 'NULL'; // if state doesnt exist yet

    Object.keys(results).forEach(function (e) {
      evotes = results[e];
      value += evotes;

      if (evotes > highest) {
        highest = evotes;
        winner = e;
      }

      earlierMap.get(e).votes += evotes;
    });
    earlyWinners[d] = winner;
    currYearElectorates[d] = value;
  }); //if (i < 1976) {

  candidateMap.set(i, earlierMap); //}*/

  stateWinners[i] = earlyWinners;
  stateValues.set(i, currYearElectorates);
}

candidateMap.get(2016).get("republican").name = "Donald J. Trump";
candidateMap.get(2016).get("democrat").name = "Hillary Clinton";
console.log(candidateMap.get(2016));
var timeouts = []; // 2016 is same as 2012 so don't need to do separately

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

populateTextMap(); //var title = document.getElementById("title-container");

function tooltipHtml(n, d) {
  /* function to create html content string in tooltip div. */
  // d.partyCount == 1 means its before 1976
  if (d.partyCount === 1) {
    return "<h4>STATE DATA NOT AVAILABLE</h4><table>" + // "<tr><td> Candidate </td><td>Party</td><td> Electoral Votes </td></tr>"+
    // "<tr><td>" + d.demName + "</td><td>Democrat</td><td>"+(d.demVotes)+"</td><</tr>"+
    // "<tr><td>" + d.repName + "</td><td>Republican</td><td>"+(d.repVotes)+"</td></tr>"+
    "</table>";
  } else if (d.partyCount === 2) {
    return "<h4>" + n + "</h4><table>" + "<tr><td> Candidate </td><td>Party</td><td> Total Votes </td><td> Pct. </td></tr>" + "<tr><td>" + d.demName + "</td><td>Democrat</td><td>" + d.demVotes + "</td><td>" + d.dem + "</td></tr>" + "<tr><td>" + d.repName + "</td><td>Republican</td><td>" + d.repVotes + "</td><td>" + d.rep + "</td></tr>" + "</table>";
  } else if (d.partyCount === 3) {
    return "<h4>" + n + "</h4><table>" + "<tr><td> Candidate </td><td>Party</td><td> Total Votes </td><td> Pct. </td></tr>" + "<tr><td>" + d.demName + "</td><td>Democrat</td><td>" + d.demVotes + "</td><td>" + d.dem + "</td></tr>" + "<tr><td>" + d.repName + "</td><td>Republican</td><td>" + d.repVotes + "</td><td>" + d.rep + "</td></tr>" + "<tr><td>" + d.otherName + "</td><td>" + d.thirdPartyOne + "</td><td>" + d.thirdPartyVotes + "</td><td>" + d.thirdVotes + "</td></tr>" + "</table>";
  } else {
    return "<h4>" + n + "</h4><table>" + "<tr><td> Candidate </td><td>Party</td><td> Total Votes </td><td> Pct. </td></tr>" + "<tr><td>" + d.demName + "</td><td>Democrat</td><td>" + d.demVotes + "</td><td>" + d.dem + "</td></tr>" + "<tr><td>" + d.repName + "</td><td>Republican</td><td>" + d.repVotes + "</td><td>" + d.rep + "</td></tr>" + "<tr><td>" + d.otherName + "</td><td>" + d.thirdPartyOne + "</td><td>" + d.thirdPartyVotes + "</td><td>" + d.thirdVotes + "</td></tr>" + "<tr><td>Other</td><td> N/A </td><td>" + d.otherVotes + "</td><td>" + d.other + "</td></tr>" + "</table>";
  }
}

function sliderChange(val) {
  if (!autoUpdating) {
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
  }

  autoUpdating = false; //console.log(publicYear);
  //var beforeChangeYear = 

  var currentYear = sliderTime.value().getYear() + 1900; // only do stuff if the year has changed

  if (publicYear != currentYear) {
    //d3.select('#title-container').text("US Election Results in "+d3.timeFormat('%Y')(sliderTime.value()));
    d3.select('#title-container').text("US Election Results in " + currentYear);
    publicYear = currentYear;
    d3.select('#key-title').text("Major Candidates (Winner in Bold)"); //console.log('made a call to on change, about to populate map');
    // lost popular vote ut won election

    if (currentYear == 2000 || currentYear == 2016) {
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase() + "*");
      d3.select('#republican-container').style("font-weight", "bold");
      d3.select('#democrat-container').style("font-weight", "lighter");
      d3.select('#asterisk-container').text('* = Lost Popular Vote').style("background-color", "#FFFFFF").style("outline", "0px").style("height", "20px");
    } else if (currentYear == 1924) {
      // coloring the third paarty for specific years where they got votes
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase());
      d3.select('#republican-container').style("font-weight", 900);
      d3.select('#democrat-container').style("font-weight", 100);
      d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("progressive").name).style("outline", "2px solid #000000").style("background-color", "#88FF88").style("font-weight", 100).style("height", "50px");
    } else if (currentYear == 1912) {
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name.toUpperCase());
      d3.select('#republican-container').style("font-weight", 100);
      d3.select('#democrat-container').style("font-weight", 900);
      d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("progressive").name).style("outline", "2px solid #000000").style("background-color", "#88FF88").style("font-weight", 100).style("height", "50px");
    } else if (currentYear == 1948 || currentYear == 1960) {
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name.toUpperCase());
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
      d3.select('#republican-container').style("font-weight", 100);
      d3.select('#democrat-container').style("font-weight", 900);
      d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("other").name).style("outline", "2px solid #000000").style("background-color", "#FFB020").style("font-weight", 100).style("height", "50px");
    } else if (currentYear == 1968) {
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase());
      d3.select('#republican-container').style("font-weight", 900);
      d3.select('#democrat-container').style("font-weight", 100);
      d3.select('#asterisk-container').text(candidateMap.get(currentYear).get("other").name).style("outline", "2px solid #000000").style("background-color", "#FFB020").style("font-weight", 100).style("height", "50px");
    } else if (candidateMap.get(currentYear).get("republican").votes > candidateMap.get(currentYear).get("democrat").votes) {
      //console.log("HI");
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name);
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name.toUpperCase());
      d3.select('#republican-container').style("font-weight", 900);
      d3.select('#democrat-container').style("font-weight", 100);
      d3.select('#asterisk-container').text('').style("background-color", "#FFFFFF").style("outline", "0px").style("height", "10px");
    } else {
      d3.select('#democrat-container').text(candidateMap.get(currentYear).get("democrat").name.toUpperCase());
      d3.select('#republican-container').text(candidateMap.get(currentYear).get("republican").name);
      d3.select('#democrat-container').style("font-weight", 900);
      d3.select('#republican-container').style("font-weight", 100);
      d3.select('#asterisk-container').text('').style("background-color", "#FFFFFF").style("outline", "0px").style("height", "10px");
    } //populateMap();


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
sliderChange(); // panoramic view logic

function popMapWithYear(currentYear) {
  //sliderTime.sliderBottom().max = d3.max(dataTime);
  var sampleData = {};
  /* Sample random data. */

  var titleVar = document.getElementById("title-container");
  titleVar.innerHTML = "US Election Results in " + currentYear; // idk if this if statement is actually necessary/currently it is not being used

  var currYearElectorates = stateValues.get(currentYear);

  if (currentYear < 1976) {
    earlyWinners = stateWinners[currentYear];
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA", "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", "WI", "MO", "AR", "OK", "KS", "LA", "VA"].forEach(function (d) {
      var winner = earlyWinners[d];

      if (winner == "democrat") {
        sampleData[d] = {
          mapStat: mapState,
          stateWorth: currYearElectorates[d],
          partyCount: 1,
          color: d3.interpolate("#FFFFFF", "#8686FF")(1)
        };
      } else if (winner == 'republican') {
        sampleData[d] = {
          mapStat: mapState,
          stateWorth: currYearElectorates[d],
          partyCount: 1,
          color: d3.interpolate("#FFFFFF", "#FF8686")(1)
        };
      } else if (winner == 'progressive') {
        sampleData[d] = {
          mapStat: mapState,
          stateWorth: currYearElectorates[d],
          partyCount: 1,
          color: d3.interpolate("#FFFFFF", "#00FF00")(.5)
        };
      } else if (winner == 'NULL') {
        sampleData[d] = {
          mapStat: mapState,
          stateWorth: currYearElectorates[d],
          partyCount: 1,
          color: d3.interpolate("#FFFFFF", "#000000")(.5)
        };
      } else {
        sampleData[d] = {
          mapStat: mapState,
          stateWorth: currYearElectorates[d],
          partyCount: 1,
          color: d3.interpolate("#FFFFFF", "#FFB020")(1)
        };
      }
    });
  } else {
    //var currentYear = sliderTime.value().getYear() + 1900;
    //console.log(currentYear);
    // map 2 = the winners
    var map2 = map.get(currentYear); // loser map 2 = the second place

    var loserMap2 = loserMap.get(currentYear); // iinfo and info 2 i believe are the results for a specific state

    var thirdPlace2 = thirdPlaceMap.get(currentYear);
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA", "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", "WI", "MO", "AR", "OK", "KS", "LA", "VA"].forEach(function (d) {
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

      var winningPercent = 1.0 * votes / (votes + loserVotes); // fraction only including repub and dem (top 2)

      winningPercent = Math.min(1, 4 * (winningPercent - .43)); // winning percent is simply a ratio to decide coloring, not actual winning percent

      var winPercent = Math.round(1000.0 * votes / totalvotes) / 10; // this fraction includes other

      var losePercent = Math.round(1000.0 * loserVotes / totalvotes) / 10; // IF THERE ARE ONLY 2 PARTIES WE ONLY DISPLAY TWO PARTIES    
      // Now breaking up strings so we have commas for vote count

      strVotes = addCommas(votes);
      strLoserVotes = addCommas(loserVotes); // If the percent is a whole number, still displays .0 at the end

      if (losePercent * 10 % 10 == 0) {
        losePercent = losePercent + ".0";
      }

      if (winPercent * 10 % 10 == 0) {
        winPercent = winPercent + ".0";
      }

      if (info3 == null) {
        if (party == "democrat") {
          sampleData[d] = {
            mapStat: mapState,
            stateWorth: currYearElectorates[d],
            demName: winnerName,
            repName: loserName,
            partyCount: 2,
            dem: winPercent,
            rep: losePercent,
            demVotes: strVotes,
            repVotes: strLoserVotes,
            color: d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)
          };
        } else {
          sampleData[d] = {
            mapStat: mapState,
            stateWorth: currYearElectorates[d],
            demName: loserName,
            repName: winnerName,
            partyCount: 2,
            dem: losePercent,
            rep: winPercent,
            demVotes: strLoserVotes,
            repVotes: strVotes,
            color: d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)
          };
        }
      } else {
        var thirdVotes = info3[0];
        var otherVotes = totalvotes - votes - loserVotes - thirdVotes;
        var thirdParty = info3[2].charAt(0).toUpperCase() + info3[2].substring(1);
        var otherName;
        var otherPercent; // if there are only 3 things/there is no third person listed (the third person is other)

        if (info3[2] === 'Other' || info3[2] === '' || info3[3] === 'Other' || info3[3] === '') {
          otherName = 'Other';
          thirdVotes += otherVotes;
          thirdParty = 'N/A';
          otherVotes = 0;
        } else {
          otherPercent = Math.round(1000.0 * otherVotes / totalvotes) / 10;

          if (otherPercent * 10 % 10 == 0) {
            otherPercent = otherPercent + ".0";
          }

          tempName = info3[3].split(",");
          otherName = tempName[1] + " " + tempName[0];
          otherVotes = addCommas(otherVotes);
        }

        var thirdPlacePercent = Math.round(1000.0 * thirdVotes / totalvotes) / 10;

        if (thirdPlacePercent * 10 % 10 == 0) {
          thirdPlacePercent = thirdPlacePercent + ".0";
        }

        thirdVotes = addCommas(thirdVotes);

        if (otherVotes === 0) {
          if (party == "democrat") {
            sampleData[d] = {
              mapStat: mapState,
              stateWorth: currYearElectorates[d],
              otherName: otherName,
              demName: winnerName,
              repName: loserName,
              partyCount: 3,
              dem: winPercent,
              demVotes: strVotes,
              repVotes: strLoserVotes,
              rep: losePercent,
              thirdPartyOne: thirdParty,
              thirdPartyVotes: thirdVotes,
              thirdVotes: thirdPlacePercent,
              color: d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)
            };
          } else {
            sampleData[d] = {
              mapStat: mapState,
              stateWorth: currYearElectorates[d],
              otherName: otherName,
              demName: loserName,
              repName: winnerName,
              partyCount: 3,
              dem: losePercent,
              demVotes: strLoserVotes,
              repVotes: strVotes,
              rep: winPercent,
              thirdPartyOne: thirdParty,
              thirdPartyVotes: thirdVotes,
              thirdVotes: thirdPlacePercent,
              color: d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)
            };
          }
        } else {
          // if second place is independent (ross perot 1992), still properly show stuff
          if (info2[2] === 'independent') {
            if (party == "democrat") {
              sampleData[d] = {
                mapStat: mapState,
                stateWorth: currYearElectorates[d],
                otherName: loserName,
                demName: winnerName,
                repName: otherName,
                partyCount: 4,
                dem: winPercent,
                demVotes: strVotes,
                repVotes: thirdVotes,
                rep: thirdPlacePercent,
                other: otherPercent,
                otherVotes: otherVotes,
                thirdPartyOne: 'Independent',
                thirdPartyVotes: strLoserVotes,
                thirdVotes: losePercent,
                color: d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)
              };
            } else {
              sampleData[d] = {
                mapStat: mapState,
                stateWorth: currYearElectorates[d],
                otherName: loserName,
                demName: otherName,
                repName: winnerName,
                partyCount: 4,
                dem: thirdPlacePercent,
                demVotes: thirdVotes,
                repVotes: strVotes,
                rep: winPercent,
                other: otherPercent,
                otherVotes: otherVotes,
                thirdPartyOne: 'Independent',
                thirdPartyVotes: strLoserVotes,
                thirdVotes: losePercent,
                color: d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)
              };
            }
          } else if (party == "democrat") {
            sampleData[d] = {
              mapStat: mapState,
              stateWorth: currYearElectorates[d],
              otherName: otherName,
              demName: winnerName,
              repName: loserName,
              partyCount: 4,
              dem: winPercent,
              demVotes: strVotes,
              repVotes: strLoserVotes,
              rep: losePercent,
              other: otherPercent,
              otherVotes: otherVotes,
              thirdPartyOne: thirdParty,
              thirdPartyVotes: thirdVotes,
              thirdVotes: thirdPlacePercent,
              color: d3.interpolate("#FFFFFF", "#0015BC")(winningPercent)
            };
          } else {
            sampleData[d] = {
              mapStat: mapState,
              stateWorth: currYearElectorates[d],
              otherName: otherName,
              demName: loserName,
              repName: winnerName,
              partyCount: 4,
              dem: losePercent,
              demVotes: strLoserVotes,
              repVotes: strVotes,
              rep: winPercent,
              other: otherPercent,
              otherVotes: otherVotes,
              thirdPartyOne: thirdParty,
              thirdPartyVotes: thirdVotes,
              thirdVotes: thirdPlacePercent,
              color: d3.interpolate("#FFFFFF", "#E9141D")(winningPercent)
            };
          }
        }
      }
    });
    /* draw states on id #statesvg */
    //console.log(sampleData);
    //setTimeout(function () {
    //voteData.set(currentYear, sampleData);
  }

  uStates.draw("#statesvg", sampleData, tooltipHtml); //}, 1500);
  // d3.select(self.frameElement).style("height", "600px");
} // TURNING VOTE COUNT INTO STRING WITH COMMAS


function addCommas(votes) {
  if (votes >= 1000000) {
    var millions = votes / 1000000 | 0;
    var thousands = votes / 1000 % 1000 | 0;
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

    votes = "" + millions + "," + thousands + "," + ones;
  } else if (votes >= 1000) {
    var thousands = votes / 1000 % 1000 | 0;
    var ones = votes % 1000;

    if (ones < 10) {
      ones = "00" + ones;
    } else if (ones < 100) {
      ones = "0" + ones;
    }

    votes = "" + thousands + "," + ones;
  }

  return votes;
} // PANOMARIC VIEW LOGIC


var pan = document.getElementById("play");
pan.addEventListener("click", panViewFromStart); //start at og year

var pan2 = document.getElementById("play2");
pan2.addEventListener("click", panView); // play from current year
// 3 map states for what to display

var opt1 = document.getElementById("opt1");
opt1.addEventListener("click", function d() {
  mapState = 0;
  popMapWithYear(publicYear);
});
var opt2 = document.getElementById("opt2");
opt2.addEventListener("click", function d() {
  mapState = 1;
  popMapWithYear(publicYear);
});
var opt3 = document.getElementById("opt3");
opt3.addEventListener("click", function d() {
  mapState = 2;
  popMapWithYear(publicYear);
});
var guide = document.getElementById("guide");
guide.addEventListener("click", printHelp);

function printHelp() {
  infoDiv.innerHTML = "<b>Information</b><br>Hover over a state to see election voter information*<br>The gradient scale shows the percentage voting for a specific party out of people voting for the main 2 parties*<br>Click buttons on bottom to select whether to label states with their abbreviations, electoral votes, or nothing<br>Click play from beginning or play from here to see a time lapse of how the election map has changed over time <br>Click on any year on the slider to see a brief synopsis of that years election<br>Click \"Information\" to see this instruction window<br><br><b>*State voter information is only available since 1976</b>"; // THIS IS WHERE WE WILL WRITE THE ENTIRE INFORMATIION)
}

function panViewFromStart() {
  // console.log(year);
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }

  var yearCount = 29;

  for (var i = 0; i < yearCount; i++) {
    timeouts.push(setTimeout(changeSlider, i * 1500, i));
  } //timeouts.push(setTimeout(popMapWithYear, 0000, 1976));

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
  } //console.log(sliderTime.value());
  //sliderTime.value(dataTime[0]);
  //sliderChange();
  // year count is amount of years we are working with (maybe should make a global constant)


  var year = publicYear;
  var yearCount = 29;
  var startYear = (year - 1904) / 4; //what the starting point is

  for (var i = startYear + 1; i < yearCount; i++) {
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
},{"./election-data.json":"N2yf","./json/1904.json":"EGgR","./json/1908.json":"jFUY","./json/1912.json":"YvmL","./json/1916.json":"BCwg","./json/1920.json":"hAQp","./json/1924.json":"XdxI","./json/1928.json":"jYrH","./json/1932.json":"spcH","./json/1936.json":"beJI","./json/1940.json":"x6tz","./json/1944.json":"ig6W","./json/1948.json":"uru1","./json/1952.json":"d0U5","./json/1956.json":"Cfg7","./json/1960.json":"UlXQ","./json/1964.json":"NBxv","./json/1968.json":"pzTc","./json/1972.json":"fnJm","./json/1976.json":"eVtT","./json/1980.json":"OAKZ","./json/1984.json":"JeJL","./json/1988.json":"Skhf","./json/1992.json":"Et8F","./json/1996.json":"yx8O","./json/2000.json":"lVL2","./json/2004.json":"plnN","./json/2008.json":"eb5a","./json/2012.json":"v22m"}]},{},["Focm"], null)
//# sourceMappingURL=https://uw-cse442-wi20.github.io/FP-us-election-history/src.e0500f1a.js.map