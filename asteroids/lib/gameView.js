(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var gameView = Asteroids.GameView = function (Game, ctx) {
    this.Game = Game;
    this.ctx = ctx;
  };

  Asteroids.GameView.prototype.start = function () {
    var animateCallBack = function () {
      this.Game.step();
      this.Game.draw(this.ctx);
    }.bind(this);

    setInterval(animateCallBack, 20);

  };

})();
