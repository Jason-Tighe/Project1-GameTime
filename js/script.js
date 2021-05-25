const game = document.querySelector('.game')
const canvas = document.querySelector('canvas')
const mainBoi = document.querySelector('.mainBoi');
const badBoi = document.querySelector('.badBoi');
const boop = document.querySelector('#boop')
const baap = document.querySelector('#baap')
const dist = document.querySelector('#counter')
const img = document.querySelector('img')



canvas.width = 600;
canvas.height = 600;

const ctx = canvas.getContext('2d');


// const dinoTimer = null
// const dino ={img:null, x:0, y:0, width:28, height:42, currentframe:0, totalframes:6}
//
// dino.img = new Image();
// dino.img.src = "css/assets/dinobites/DinoSprites - doux.png";
//
// dino.img.onload = function(){
//   dinoTimer = setInterval(animateDino, 120);
// }
//
// function animateDino(){
//   dino.currentFrame++;
//   ctx.drawImage(dino.img, dino.currentFrame * dino.width, 0, dino.width, dino.height, 0, 0, dino.width, dino.height);
//
//   if(dino.currentFrame >= dino.totalFrame){
//     dino.currentFrame = 0
//   }
// }




function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,400)
    ctx.lineTo(600,400)
    ctx.lineWidth = 1.9;
    ctx.strokeStyle = "grey"
    ctx.stroke();
}

let preSetTime = 1000;
let enemSpeed = 5 ;

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumberInterval(timeInterval){
  let returnTime = timeInterval;
  if(Math.random() < .5){
    returnTime =+ getRandomNumber(preSetTime%3, preSetTime * 1.5);
  } else {
    returnTime -= getRandomNumber(preSetTime%5, preSetTime%2);
  }
  return returnTime
}
// const b = canvas.getContext('2d');
// const g = canvas.getContext('2d');

// g.fillStyle = "darkgrey"
// g.fillRect(0,775,innerWidth, 1000)
// g.fillStyle = "grey"
// g.fillRect(0,775,innerWidth, 25)

class Player{
    constructor(x, y, size, color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.jumpHeight = 12;
    this.shouldJump = false;
    this.jumpCounter = 0;
  }
  jump(){
    if(this.shouldJump){
      this.jumpCounter++;
      if(this.jumpCounter < 15){
       this.y -= this.jumpHeight;
    } else if(this.jumpCounter > 14 && this.jumpCounter < 19){
      this.y += 0;
    } else if (this.jumpCounter < 33){
      this.y += this.jumpHeight;
    }

    if(this.jumpCounter >= 32){
      this.shouldJump = false;
    }
    }
  }
  draw(){
    this.jump();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}


let player = new Player( 150, 350, 50,"teal");

class Enemy {
  constructor(size, speed){
    this.x = canvas.width + size;
    this.y = 400 - size;
    this.size = size;
    this.color = "orange";
    this.slideSpeed = speed;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  slide(){
    this.draw();
    this.x -= this.slideSpeed;
  }
}

let pillarMen = []

function generateBaddies (){
  let timeDelay = randomNumberInterval(preSetTime);
  pillarMen.push(new Enemy(45, enemSpeed))

  setTimeout(generateBaddies, timeDelay)
}


setTimeout(()=>{
  generateBaddies();
},randomNumberInterval(preSetTime))



function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height)

  drawBackgroundLine();

  player.draw();

  pillarMen.forEach((pillarMan, index) => {
    pillarMan.slide();
    if((pillarMan.x + pillarMan.size) <= 0){
      setTimeout(() => {
        pillarMen.splice(index, 1);
      }, 0)
    }
  });
}

animate();







addEventListener("keydown", (e)=>{
  if(e.code === 'Space'){
    if(!player.shouldJump){
      player.jumpCounter=0;
      player.shouldJump = true;
    }
  }
})


function county() {
  let x = 0
  let max = 10;
  function incrementCounter() {
    dist.innerHTML = x;
    if (x++ <= x++)
    setTimeout(incrementCounter, 10)
  }
    incrementCounter();
}

county()
