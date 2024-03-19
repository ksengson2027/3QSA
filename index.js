const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const game = document.getElementById('game')
var amountOfCorrects = 0;
var amountOfTries = 7


const spawnThreshold = {
  xmax: 200,
  xmin: canvas.width - 80,
  ymax: canvas.height - 400, 
  ymin: canvas.height - 80
}

const clawImage = new Image()
clawImage.src = 'claw.png'
const clawClosed = new Image()
clawClosed.src = 'claw-closed.png'
const sirjm = new Image()
sirjm.src = './toys/sirjm.png'
const althea = new Image()
althea.src = './toys/althea.png'
const alex = new Image()
alex.src = './toys/alex.png'
const andy = new Image()
andy.src = './toys/andy.png'
const bea = new Image()
bea.src = './toys/bea.png'
const brenice = new Image()
brenice.src = './toys/brenice.png'
const dexter = new Image()
dexter.src = './toys/dexter.png'
const ely = new Image()
ely.src = './toys/ely.png'
const eri = new Image()
eri.src = './toys/eri.png'
const gio = new Image()
gio.src = './toys/gio.png'
const hannah = new Image()
hannah.src = './toys/hannah.png'
const ian = new Image()
ian.src = './toys/ian.png'
const jab = new Image()
jab.src = './toys/jab.png'
const jaedon = new Image()
jaedon.src = './toys/jaedon.png'
const jm = new Image()
jm.src = './toys/jm.png'
const josh = new Image()
josh.src = './toys/josh.png'
const krisha = new Image()
krisha.src = './toys/krisha.png'
const liam = new Image()
liam.src = './toys/liam.png'
const loverboy = new Image()
loverboy.src = './toys/loverboy.png'
const lovergirl = new Image()
lovergirl.src = './toys/lovergirl.png'
const nix = new Image()
nix.src = './toys/nix.png'
const ong = new Image()
ong.src = './toys/ong.png'
const patricia = new Image()
patricia.src = './toys/patricia.png'
const rhon = new Image()
rhon.src = './toys/rhon.png'
const sasha = new Image()
sasha.src = './toys/sasha.png'
const sean = new Image()
sean.src = './toys/sean.png'
const seb = new Image()
seb.src = './toys/seb.png'
const tifanny = new Image()
tifanny.src = './toys/tifanny.png'
const tristan = new Image()
tristan.src = './toys/tristan.png'
const yesha = new Image()
yesha.src = './toys/yesha.png'
const zoe = new Image()
zoe.src = './toys/zoe.png'
const paolo = new Image()
paolo.src = './toys/paolo.png'

const allBKNamesList = ["Sir JM", "Alex", "Althea", "Andy", "Bea", "Brenice", "Dexter", "Ely","Eri","Gio","Hannah","Ian","Jab","Jaedon","JM","Josh","Krisha","Liam","Miggy","Reana","Nix","Tiffany","Ysha","Kate","Sean","Seb","Pani","Tristan","Yesha","Zoe","Rhon"]

var toy
function rngToy() {
  var randomNum = Math.ceil((Math.random() * (31 - 0) + 0))
  var randomImage
  var randomName
  switch(randomNum){
    case 1:
      randomImage = sirjm
      randomName = "Sir JM"
      break;

    case 2:
      randomImage = alex
      randomName = "Alex"
      break;

    case 3:
      randomImage = althea
      randomName = "Althea"
      break;

    case 4:
      randomImage = andy
      randomName = "Andy"
      break;

    case 5:
      randomImage = bea
      randomName = "Bea"
      break;
      
    case 6:
      randomImage = brenice
      randomName = "Brenice"
      break;
      
    case 7:
      randomImage = dexter
      randomName = "Dexter"
      break;
      
    case 8:
      randomImage = ely
      randomName = "Ely"
      break;
      
    case 9:
      randomImage = eri
      randomName = "Eri"
      break;
      
    case 10:
      randomImage = gio
      randomName = "Gio"
      break;
      
    case 11:
      randomImage = hannah
      randomName = "Hannah"
      break;
      
    case 12:
      randomImage = ian
      randomName = "Ian"
      break;
      
    case 13:
      randomImage = jab
      randomName = "Jab"
      break;
      
    case 14:
      randomImage = jaedon
      randomName = "Jaedon"
      break;
      
    case 15:
      randomImage = jm
      randomName = "JM"
      break;
      
    case 16:
      randomImage = josh
      randomName = "Josh"
      break;
      
    case 17:
      randomImage = krisha
      randomName = "Krisha"
      break;
      
    case 18:
      randomImage = liam
      randomName = "Liam"
      break;
      
    case 19:
      randomImage = loverboy
      randomName = "Miggy"
      break;
      
    case 20:
      randomImage = lovergirl
      randomName = "Reana"
      break;
      
    case 21:
      randomImage = nix
      randomName = "Nix"
      break;
      
    case 22:
      randomImage = ong
      randomName = "Tiffany"
      break;
      
    case 23:
      randomImage = patricia
      randomName = "Ysha"
      break;
      
    case 24:
      randomImage = sasha
      randomName = "Kate"
      break;
      
    case 25:
      randomImage = sean
      randomName = "Sean"
      break;
      
    case 26:
      randomImage = seb
      randomName = "Seb"
      break;
      
    case 27:
      randomImage = tifanny
      randomName = "Pani"
      break;
      
    case 28:
      randomImage = tristan
      randomName = "Tristan"
      break;
      
    case 29:
      randomImage = yesha
      randomName = "Yesha"
      break;
      
    case 30:
      randomImage = zoe
      randomName = "Zoe"
      break;
      
    case 31:
      randomImage = rhon
      randomName = "Rhon"
      break;
  }
  x = Math.ceil(Math.random() * (spawnThreshold.xmax - spawnThreshold.xmin) + spawnThreshold.xmin)
  y = Math.ceil(Math.random() * (spawnThreshold.ymax - spawnThreshold.ymin) + spawnThreshold.ymin)
  toy = {
    x: x,
    y: y,
    width: randomImage.width,
    height: randomImage.height,
    image: randomImage,
    caught: false,
    name: randomName
  }
}


var claw
clawImage.onload = function() {
    claw = {
        x: canvas.width / 2 - (clawImage.width / 2),
        y: 0,
        width: clawImage.width,
        height: clawImage.height,
        isOpen: true,
        image: clawImage,
        speed: 10,
        canMove: true
    }
}

// Function to draw the claw
function drawClaw() {
  //console.log(claw.image, claw.x, claw.y, claw.width, claw.height)
  //console.log(toy.image, toy.x, toy.y, toy.width, toy.height)
  ctx.drawImage(claw.image, claw.x, claw.y, claw.width, claw.height)
  ctx.fillStyle = 'rgba(0, 0, 0)';
  ctx.fillRect(claw.x + claw.width / 2.3, claw.y - (claw.height * 8 ) + 40, claw.width / 8 , claw.height * 8);
  ctx.drawImage(toy.image, toy.x, toy.y, toy.width, toy.height)
}

function drawClawMachine(){
  ctx.fillStyle = 'rgba(0, 0, 0)';
  ctx.fillRect(150, 400, 10, canvas.height - 400)
}

var clawExtend
var clawRetract
var plushiesOwned = []

function extendClaw() {
  if (claw.y + claw.height >= canvas.height) {
    amountOfTries--
    document.getElementById('tries-counter').innerHTML = "Amount of tries: " + amountOfTries
    if(amountOfCorrects < 5 && amountOfTries == 0){
      dontRunGame = true
      alert('wow you suck at this')
      game.style.display = 'none'
      document.getElementById('starting-screen').style.display = 'block'
      document.getElementById('win-popup').style.display = 'none'
    }
    clearInterval(clawExtend);
    shouldRetractClaw = true
  }
}

function checkCollision() {
  return(
      claw.x + claw.width / 4 >= toy.x &&
      claw.x <= toy.x + toy.width / 4  &&
      claw.y - 50 <= toy.y + toy.height &&
      claw.y - 50 + claw.height >= toy.y
  )
}

function pickUpToy() {
  if(checkCollision() && toy.caught == false && claw.y != 0){
    clearInterval(clawExtend);
    toy.caught = true
    shouldRetractClaw = true
    claw.image = clawClosed
  }
}

var shouldRetractClaw = false
function retractClaw() {
  if(shouldRetractClaw == false){ return }
  if(claw.y <= 0){
    claw.y = 0
    claw.canMove = true
    oneTimeUse = true
    claw.isOpen = !claw.isOpen
    shouldRetractClaw = false
  } else if(clawExtending == false){
    claw.y -= claw.speed
  }
}

var toyDrop
function dropToy(){
  if(toy.y > canvas.height - toy.height && claw.canMove ) {
    startQuiz()
    rngToy()
    clearInterval(toyDrop)
  }
}

function moveToy() {
  if(toy.caught == false){ return }
  toy.y = (claw.y + 50)
  toy.x = claw.x + (toy.width / 8)
}

var correctButton = 0
function startQuiz() {
  document.getElementById('quiz-popup').style.display = 'block';
  game.style.display = 'none';
  dontRunGame = true;

  correctButton = Math.ceil(Math.random() * 4);
  var correctButtonDocument;
  var correctAnswer = toy.name;
  plushiesOwned.push(toy.image)
  var namesUsable = allBKNamesList.slice(); // Copy allBKNamesList to namesUsable

  var randomNameCount = -1;
  var namesUsed = [];
  switch (correctButton) {
    case 1:
      correctButtonDocument = document.getElementById('button-1');
      break;
    case 2:
      correctButtonDocument = document.getElementById('button-2');
      break;
    case 3:
      correctButtonDocument = document.getElementById('button-3');
      break;
    case 4:
      correctButtonDocument = document.getElementById('button-4');
      break;
  }

  while (randomNameCount < 3) {
    randomNameCount++;
    namesUsable.forEach(function func(value, index) {
      if (value == correctAnswer) {
        namesUsable.splice(index, 1);
      }
    });

    // Choose a random name from namesUsable and push it to namesUsed
    var rng = Math.floor(Math.random() * namesUsable.length);
    namesUsed.push(namesUsable[rng]);
    namesUsable.splice(rng, 1); // Remove the chosen name from namesUsable

    // Check if namesUsed has enough elements, otherwise reset and continue
    if (namesUsed.length < randomNameCount + 1) {
      namesUsable = allBKNamesList.slice(); // Reset namesUsable to allBKNamesList
      randomNameCount = -1;
      namesUsed = [];
      continue;
    }
  }

  for (var i = 0; i <= randomNameCount; i++) {
    document.getElementById(`button-${i + 1}`).innerHTML = namesUsed[i];
  }
  correctButtonDocument.innerHTML = correctAnswer;
}

function resetGame(){
  dontRunGame = true
  game.style.display = 'none'
  document.getElementById('starting-screen').style.display = 'block'
  document.getElementById('win-popup').style.display = 'none'
}

function answerQuiz(buttonClicked) {
  if(buttonClicked == correctButton){
    amountOfCorrects++
    alert('correct!')
    document.getElementById(`toy-display-${plushiesOwned.length}`).src = plushiesOwned[plushiesOwned.length - 1].src
    document.getElementById(`toy-display-${plushiesOwned.length}`).style.display = 'inline'
  } else {
    alert('wromg')
    plushiesOwned.splice(plushiesOwned.length)
  }
  amountOfTries--
  document.getElementById('tries-counter').innerHTML = "Amount of tries: " + amountOfTries
  document.getElementById('score-counter').innerHTML = "Amount of plushies: " + amountOfCorrects+ "/5"
  document.getElementById('quiz-popup').style.display = 'none'
  game.style.display = 'block'
  dontRunGame = false
  if(amountOfCorrects == 5){
    dontRunGame = true
    document.getElementById('win-popup').style.display = 'block'
  } else if(amountOfCorrects < 5 && amountOfTries == 0){
    dontRunGame = true
    alert('wow you suck at this')
    game.style.display = 'none'
    document.getElementById('starting-screen').style.display = 'block'
    document.getElementById('win-popup').style.display = 'none'
  }
}

var dontRunGame = true
const toysBackground = new Image()
toysBackground.src = 'fake.png'
function tick() {
  if(dontRunGame){return}
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(toysBackground, spawnThreshold.xmax - 40, spawnThreshold.ymax + 10)
  dropToy()
  moveToy()
  drawClawMachine()
  extendClaw();
  drawClaw();
  retractClaw()
  pickUpToy()
}
setInterval(tick, 1000/60);

document.addEventListener('keydown', (event) => {
  if(claw.canMove == false) { return }
    if (event.key === 'ArrowLeft' && claw.x > 0) {
      claw.x -= 10;
    } else if (event.key === 'ArrowRight' && claw.x + claw.width < canvas.width) {
      claw.x += 10;
    }
});

var oneTimeUse = true
var clawExtending = false

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && oneTimeUse == true) {
      if(toy.caught == false){
        clawExtend = setInterval(() => {
          claw.y += claw.speed  
          shouldRetractClaw = false
          claw.canMove = false
          oneTimeUse = false
          claw.isOpen = !claw.isOpen;
        }, 1000/60);
      }
      else if(toy.caught && claw.x + claw.width < 150 ){
        toy.caught = false
        toyDrop = setInterval(() => {
          toy.y += 10
        }, 1000/ 60);
        claw.image = clawImage
      }
    }
});

function startGame() {
  dontRunGame = false
  game.style.display = 'block'
  amountOfTries = 7
  amountOfCorrects = 0
  document.getElementById('win-popup').style.display = 'none'
  document.getElementById('tries-counter').innerHTML = "Amount of tries: " + amountOfTries
  document.getElementById('score-counter').innerHTML = "Amount of plushies: " + amountOfCorrects+ "/5"
  document.getElementById('starting-screen').style.display = 'none'
  rngToy()
}
