(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
    this.game = params.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var dangerZone = this.radius + otherObject.radius;
    var distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) +
                             Math.pow((this.pos[1] - otherObject.pos[1]), 2));
    if (distance <= dangerZone) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.collideWith = function (otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
  };

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

})();
