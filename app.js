function picture (name, imgsrc, imgtype) {
  this.name = name;
  this.id= imgsrc;
  this.imgsrc= 'img/' + imgsrc + imgtype;
}

var bag = new picture ('bag', 'bag', '.jpg');
var banana = new picture ('banana','banana','.jpg');
var bathroom = new picture ('bathroom', 'bathroom', '.jpg');
var boots= new picture ('boots', 'boots', '.jpg');
var breakfast= new picture ('breakfast', 'breakfast', '.jpg');

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
  // console.log(arrayRandoms);
  var oneEl = document.getElementById('one');
  var twoEl = document.getElementById('two');
  var threeEl = document.getElementById('three');

  oneEl.src= stuff[arrayRandoms[0]].imgsrc;
  twoEl.src= stuff[arrayRandoms[1]].imgsrc;
  threeEl.src= stuff[arrayRandoms[2]].imgsrc;
}

buildPage();
