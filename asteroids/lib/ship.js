(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  window.Asteroids.Ship = function (pos, game) {
    Asteroids.MovingObject.call(this,
      { vel: [0, 0], pos: pos, color: "black", radius: 20, game: game} );
  };

  Asteroids.Util.inherits(window.Asteroids.Ship, window.Asteroids.MovingObject);

})();
