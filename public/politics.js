var republicans = [{name:"D. Trump", image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToCHOV9vbXmyJrsc1nCinSRmhOgiIC6EgsFcA7oHUFGq0ratuuVljzLTtW"},
{name:"S. Squanto", image:"http://www.bookunitsteacher.com/indians/famous/squantodrawing.gif"},
{name:"B. Bird", image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWK19fe8P2TG_Zl6Qp29REMAyCIUfWJYzknCMZma6VsFNoLZy5rPvNGG8"},
{name:"W. Waldo", image:"https://img.buzzfeed.com/buzzfeed-static/static/2014-09/12/15/enhanced/webdr08/enhanced-29328-1410550760-9.jpg"},
{name:"M. Bison", image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLb2jeyEYJdGuKQIJc4h-FVXF88AH6v-qrYJehw0UufGHPKsjL2A"},
{name:"E. Honda", image:"http://vignette2.wikia.nocookie.net/streetfighter/images/0/08/Honda-hundred-artwork.png/revision/latest?cb=20100709174135"},
{name:"Q. Cumber", image:"http://vignette4.wikia.nocookie.net/ben10fanfiction/images/a/a3/Q-cumber.png/revision/latest?cb=20110909102326"},
{name:"I.P. Freely", image:"http://s2.dmcdn.net/AFnwr.jpg"}];

var democrats = [{name:"J.C. Howard", image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6Fbv7bk6ZA41MHTDck7GCtbxp1InNeZk00cBghWqm3ZN-Ov9z"},
  {name:"M. Howard", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmE-QEucC0V7sqH0qyM6qK-qfNQwLZdTkYqWpDDCGtvJCeRFbF"},
  {name:"L. Fine", image:"http://media.sdreader.com/img/blogs/entry_img/2011/Oct/05/bedlam_in_paradise_-_larry_air_fountain_pen_t620.jpg?fbf2daa044e08a86b24c9c38cd7501865a0e2373"},
  {name:"S. Howard", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI0-b9Qt6uJLRcSj72t4bw89bYAGsILe8NJ3GpkrTpWRURxyk"},
  {name:"H. Farnsworth", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFp-OlZHtzchi8NdNUXSEA8qKua_htdeAceTdRGO9U3eCyK1Eq5Q"},
  {name:"H. Simpson", image:"http://www.homersimpsonquotes.com/images/homer.gif"},
  {name:"P.J. Fry", image:"https://pbs.twimg.com/profile_images/2385099537/r3zn1k.png"},
  {name:"B.B. Rodriguez", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafsAPspVKKRRkJeoR7LatPsq3S7skA2epKN3r_E-hxGy2Y9e_-A"}];



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
