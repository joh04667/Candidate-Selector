var republicans = ["D. Trump", "S. Squanto", "B. Bird", "W. Waldo", "M. Bison", "E. Honda", "Q. Cumber", "I.P. Freely"];
var democrats = ["J. Howard", "M. Howard", "L. Fine", "S. Howard", "D. Suess", "H. Simpson", "P.J. Fry", "B.B. Rodriguez"];



function findWinner() {

  if(Math.floor(Math.random() * 2)) {
    return democrats[Math.floor(Math.random() * democrats.length)];
  } else {
    return republicans[Math.floor(Math.random() * republicans.length)];
  }
}


exports.republicans = republicans;
exports.democrats = democrats;
exports.findWinner = findWinner;
