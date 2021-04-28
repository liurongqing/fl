var compose = function (f, g) {
  return function (x) {
    return f(g(x))
  }
}

var a = compose(split(''))
a('this is a test 123123')