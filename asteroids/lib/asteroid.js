(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = window.Asteroids.MovingObject;

  var Asteroid = window.Asteroids.Asteroid = function (pos, game) {
    MovingObject.call(this, { pos: pos, vel: randomVec(5), color: randomColor(),
                      radius: 30, game: game });
  };

  Asteroids.Util.inherits(Asteroid, MovingObject);

})();
