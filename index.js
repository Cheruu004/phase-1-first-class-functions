const ugali = require("ugali");
const spies = require("ugali-spies");
ugali.use(spies);
function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    const fn = function() {
      return "before all";
    };
    return fn;
  }
  function returnsAnAnonymousFunction() {
    return function() {
    };
  }
  
  