function picture (name, imgsrc, imgtype) {
  this.name = name;
  this.id= imgsrc;
  this.imgsrc= 'img/' + imgsrc + imgtype;
  this.clicked= 0;
  this.displayed= 0;
}

var bag = new picture ('bag', 'bag', '.jpg');
var banana = new picture ('banana','banana','.jpg');
var bathroom = new picture ('bathroom', 'bathroom', '.jpg');
var boots= new picture ('boots', 'boots', '.jpg');
var breakfast= new picture ('breakfast', 'breakfast', '.jpg');
var bubblegum= new picture ('bubblegum', 'bubblegum', '.jpg');
var chair= new picture ('chair', 'chair', '.jpg');
var cthulhu= new picture ('cthulhu', 'cthulhu', '.jpg');
var dogduck= new picture ('dog duck', 'dog-duck', '.jpg');
var dragon= new picture ('dragon', 'dragon', '.jpg');
var pen= new picture ('pen', 'pen', '.jpg');
var petsweep= new picture ('pet sweep', 'pet-sweep', '.jpg');
var scissors= new picture ('scissors', 'scissors', '.jpg');
var shark= new picture ('shark', 'shark', '.jpg');
var sweep= new picture ('sweep', 'sweep', '.png');
var tauntaun= new picture ('tauntaun', 'tauntaun', '.jpg');
var unicorn= new picture ('unicorn', 'unicorn', '.jpg');
var usb= new picture ('usb', 'usb', '.gif');
var watercan= new picture ('watercan', 'water-can', '.jpg');
var wineglass= new picture ('wineglass', 'wine-glass', '.jpg');

var stuff = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

function randomNumber () {
  return Math.floor(Math.random() *stuff.length);
};



function randomCombination () {
  var random1= randomNumber();
  var random2= randomNumber();
  var random3= randomNumber();

  while (random1 === random2) {
    random2= randomNumber();
    // console.log(random2);
  }
  while (random3 == random2 || random3 === random1) {
    random3= randomNumber();
    // console.log(random3);
  }
  var arrayRandoms= [random1,random2,random3];
  return arrayRandoms;
}

var pageLoadCount = 0;

function buildPage (){
  if (pageLoadCount < 25) {
    var arrayRandoms = randomCombination();
    var imagePlace = document.getElementById('pictures');
    var oneEl= document.createElement('img');
    oneEl.src= stuff[arrayRandoms[0]].imgsrc;
    oneEl.setAttribute('id', stuff[arrayRandoms[0]].id);
    var twoEl= document.createElement('img');
    twoEl.src= stuff[arrayRandoms[1]].imgsrc;
    twoEl.setAttribute('id', stuff[arrayRandoms[1]].id);
    var threeEl= document.createElement('img');
    threeEl.src= stuff[arrayRandoms[2]].imgsrc;
    threeEl.setAttribute('id', stuff[arrayRandoms[2]].id);

    imagePlace.appendChild(oneEl);
    imagePlace.appendChild(twoEl);
    imagePlace.appendChild(threeEl);

    stuff[arrayRandoms[0]].displayed++;
    stuff[arrayRandoms[1]].displayed++;
    stuff[arrayRandoms[2]].displayed++;

    pageLoadCount +=1;
  } else {
    makeChart();
  }
}
buildPage();


function clickChoice () {
  for (i=0; i<stuff.length; i++) {
    if (this.id === stuff[i].id){
      stuff[i].clicked++;
    }
  }
  console.log(this.id);
  var imagePlace = document.getElementById('pictures');
  imagePlace.textContent='';
  buildPage();
  listenClick();
}

function listenClick () {
  var displayedImages = document.getElementsByTagName('img');
  for (var i=0; i<displayedImages.length; i++) {
    displayedImages[i].addEventListener('click', clickChoice)
  }
}
listenClick();


function makeChart () {
  var arrayfordisplayedData= [];
  var arrayforclickedData= [];
  for (var i=0; i<stuff.length; i++) {
    arrayforclickedData.push(stuff[i].clicked);
    arrayfordisplayedData.push(stuff[i].displayed);
  }

  var barElements = {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogduck', 'dragon', 'pen', 'petsweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'watercan', 'wineglass'],

    datasets: [
      {
        label: 'Times Clicked',
        fillColor: '#ff3399',
        strokeColor: '#ff3399',
        highlightFill: '#ffb3d9',
        highlightStroke: '#ffb3d9',
        data: arrayforclickedData
      },
      {
        label: 'Times Displayed',
        fillColor: '#005ce6',
        strokeColor: '#005ce6',
        highlightFill: '#99c2ff',
        highlightStroke: '#99c2ff',
        data: arrayfordisplayedData
      },
    ]
  };
  var canvas = document.getElementById('myBarChart');
  var ctx = canvas.getContext('2d');
  new Chart(ctx).Bar(barElements, {
    multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>'
  });

}
