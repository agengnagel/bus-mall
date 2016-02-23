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

function randomCombination () {
  var random1= randomNumber();
  var random2= randomNumber();
  var random3= randomNumber();

  while (random1 === random2) {
    random2= randomNumber();
    console.log(random2);
  }
  while (random3 == random2 || random3 === random1) {
    random3= randomNumber();
    console.log(random3);
  }
  var arrayRandoms= [random1,random2,random3];
  return arrayRandoms;
}

function buildPage (){
  var arrayRandoms = randomCombination();
  console.log(arrayRandoms);
  var oneEl = document.getElementById('one');
  var twoEl = document.getElementById('two');
  var threeEl = document.getElementById('three');

  oneEl.src= stuff[arrayRandoms[0]].imgsrc;
  twoEl.src= stuff[arrayRandoms[1]].imgsrc;
  threeEl.src= stuff[arrayRandoms[2]].imgsrc;
}

buildPage();
