
var puf = (function() {

  var listeners = {};

  return {
    subscribe: function(name, callback) {
      if (!listeners[name]) {
        listeners[name] = [];
      };
      listeners[name].push(callback);
    },

    publish: function(name) {
    var args = Array.prototype.slice.call(arguments, 1); 
      if (listeners[name]) {
        for (var i = 0; i < listeners[name].length; i++) {
          listeners[name][i].apply(null, args);
        }
      }
    },

    spy: function() {
      return listeners;
    }

  }

})();