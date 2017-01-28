Array.prototype.sum = function () {
var res = 0;
for (var i = 0; i < this.length; i++)
res += this[i];
return res;
};

var udgift=new Array(
  15000,
  1000,
  1000,
  24,
  30,
  29,
  81,
  15,
  1302,
  129,
  150,
  373,
  699,
  525,
  15,
  4715
)
console.log(udgift.sum())
console.log('--------------------------')
console.log(12410-7695)
