(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function (xDim, yDim) {
    this.DIM_X = xDim;
    this.DIM_Y = yDim;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new window.Asteroids.Ship(this.randomPosition(), this);
  };

  Game.prototype.randomPosition = function () {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
  };

  Game.prototype.allObjects = function () {
    game = this;
    return this.asteroids.concat(game.ship);
  };

  Game.prototype.addAsteroids = function () {
    for (var x = 0; x < this.NUM_ASTEROIDS; x++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach( function (el) {
      el.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach (function (el) {
      el.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];

    if (pos[0] <= 0) {
      x = this.DIM_X + pos[0];
    }
    if (pos[0] >= this.DIM_X) {
      x = pos[0] - this.DIM_X;
    }

    if (pos[1] <= 0) {
      y = this.DIM_Y + pos[1];
    }
    if (pos[1] >= this.DIM_Y) {
      y = pos[1] - this.DIM_Y;
    }

    return [x, y];
  };

  Game.prototype.checkCollisions = function () {
    var collisions = [];
    this.allObjects().forEach(function (el1, idx, arr) {
      arr.slice(idx + 1).forEach(function (el2) {
        if (el1.isCollidedWith(el2)) {
          collisions.push([el1, el2]);
        }
      });
    });
    collisions.forEach(function (el) {
      el[0].collideWith(el[1]);
    });
  };

  Game.prototype.remove = function (object) {

    var idx = this.asteroids.indexOf(object);
    this.asteroids.splice(idx, 1);
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

})();
