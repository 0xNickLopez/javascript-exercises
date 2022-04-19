const repeatString = function(a, b) {
let n = "";
if (b < 0) return "ERROR";
 for (let i = 0; i < b; i++) {
    n += a;
 }

 return n;
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
