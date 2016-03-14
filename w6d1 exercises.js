var sum = function () {
  var sum = 0;
[].slice.call(arguments).forEach(function (num) {
    sum += num;
  });
  return sum;
};
//
// console.log(sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function () {
  var args = [].slice.call(arguments);
  var context = args[0];
  var fn = this;
  return function () {
    var args2 = [].slice.call(arguments);
    var args3 = args.slice(1).concat(args2);
    fn.apply(context, args3);
  };
};

var curriedSum = function (numArgs) {
  var numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var sum = 0;
      for (var x = 0; x < numbers.length; x++) {
        sum += numbers[x];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
};

// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curry;
    }
  }

  return _curry;
};
//
// var a = sum.curry(3);
// console.log(a(1)(2)(3));


Function.prototype.inherits = function (Parent) {
  var Surrogate = function () {};
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
