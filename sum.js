var m = module.exports = {}

m.sum = function (a) {
  // 在此填入你的程式。
  var s = 0
  for (var x of a) {
    s += x
  }
  return s
}
