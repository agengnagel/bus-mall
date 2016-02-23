function picture (name, imgsrc) {
  this.name = name;
  this.id= imgsrc;
  this.imgsrc= 'img/' + imgsrc + '.jpg';
}

var bag = new picture ('bag', 'bag');
var banana = new picture ('banana','banana');
var bathroom = new picture ('bathroom', 'bathroom');
var boots= new picture ('boots', 'boots');
var breakfast= new picture ('breakfast', 'breakfast');

var stuff = [bag,banana,bathroom,boots,breakfast];

function randomNumber () {
  var random= Math.floor(Math.random() *stuff.length);
  return random;
};

var random1= randomNumber();
console.log(random1);
var random2= randomNumber();
console.log(random2);
var random3= randomNumber();
console.log(random3);

while (random1 === random2) {
  random2= randomNumber();
  console.log(random2);
}
while (random3 == random2 || random3 === random1) {
  random3= randomNumber();
  console.log(random3);
}

var oneEl = document.getElementById('one');
var twoEl = document.getElementById('two');
var threeEl = document.getElementById('three');

oneEl.src= stuff[random1].imgsrc;
twoEl.src= stuff[random2].imgsrc;
threeEl.src= stuff[random3].imgsrc;
