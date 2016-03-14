(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  if (typeof Asteroids.Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (Child, Parent) {
    var Surrogate = function () {};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  };



  randomVec = function(length) {
    var x = Math.random() * length;
    var y = Math.sqrt((length * length) - (x * x));
    var z = Math.random();
    if (z > 0.5) {
      x = -1 * x;
    }
    z = Math.random();
    if (z > 0.5) {
      y = -1 * y;
    }
    return [x , y];
  };

  var HEX_DIGITS = "0123456789ABCDEF";
  randomColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

})();
