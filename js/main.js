(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logger = require('./logger');
logger.log('Hurray! it works, olá :)');

},{"./logger":2}],2:[function(require,module,exports){
module.exports = {
    log: function(string) {
        if (console) console.log(string);
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9cXE9uZURyaXZlXFxEb2N1bWVudG9zXFxHaXRodWJcXGdoLXBhZ2VzXFxsZWFybmluZ19ndWxwXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jYXJsby9PbmVEcml2ZS9Eb2N1bWVudG9zL0dpdGh1Yi9naC1wYWdlcy9sZWFybmluZ19ndWxwL2J1aWxkL2pzL2Zha2VfM2MxODczNTAuanMiLCJDOi9Vc2Vycy9jYXJsby9PbmVEcml2ZS9Eb2N1bWVudG9zL0dpdGh1Yi9naC1wYWdlcy9sZWFybmluZ19ndWxwL2J1aWxkL2pzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5sb2dnZXIubG9nKCdIdXJyYXkhIGl0IHdvcmtzLCBvbMOhIDopJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsb2c6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgICBpZiAoY29uc29sZSkgY29uc29sZS5sb2coc3RyaW5nKTtcbiAgICB9XG59O1xuIl19
