var m = module.exports = {}

m.sum = function (a) {
  var s = 0
  for (var x of a) {
    s += x
  }
  return s
}
