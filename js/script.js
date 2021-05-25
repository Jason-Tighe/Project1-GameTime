const game = document.querySelector('.game')
const canvas = document.querySelector('canvas')
const mainBoi = document.querySelector('.mainBoi');
const badBoi = document.querySelector('.badBoi');
const boop = document.querySelector('#boop')
const baap = document.querySelector('#baap')
const dist = document.querySelector('#counter')


canvas.width = 240;
canvas.height = 120;

const ctx = canvas.getContext('2d');


const img = new Image();
img.src = "css/assets/dinobites/DinoGreen.png";

img.onload = function(){
  init();
}

const scale = 1;
const width = 24;
const height = 24;
const scaledWidth = scale * width;
const scaledHeight = scale * height;



function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
}

const cycleLoop = [4, 5, 6, 7, 8, 9];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++;
  if (frameCount < 9) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, width, height);
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
  drawBackgroundLine();

}

function init() {
  window.requestAnimationFrame(step);
}





function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,80)
    ctx.lineTo(500,80)
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

//
// class Player{
//     constructor(x, y, size, color){
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.color = color;
//     this.jumpHeight = 12;
//     this.shouldJump = false;
//     this.jumpCounter = 0;
//   }
//   jump(){
//     if(this.shouldJump){
//       this.jumpCounter++;
//       if(this.jumpCounter < 15){
//        this.y -= this.jumpHeight;
//     } else if(this.jumpCounter > 14 && this.jumpCounter < 19){
//       this.y += 0;
//     } else if (this.jumpCounter < 33){
//       this.y += this.jumpHeight;
//     }
//
//     if(this.jumpCounter >= 32){
//       this.shouldJump = false;
//     }
//     }
//   }
//   draw(){
//     this.jump();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.size, this.size);
//   }
// }
//
//
// let player = new Player( 150, 350, 50,"teal");
//
// class Enemy {
//   constructor(size, speed){
//     this.x = canvas.width + size;
//     this.y = 400 - size;
//     this.size = size;
//     this.color = "orange";
//     this.slideSpeed = speed;
//   }
//   draw(){
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.size, this.size);
//   }
//   slide(){
//     this.draw();
//     this.x -= this.slideSpeed;
//   }
// }



//
// let pillarMen = []
//
//
//
// function generateBaddies (){
//   let timeDelay = randomNumberInterval(preSetTime);
//   pillarMen.push(new Enemy(45, enemSpeed))
//   setTimeout(generateBaddies, timeDelay)
// }
//
//
// setTimeout(()=>{
//   generateBaddies();
//  },randomNumberInterval(preSetTime))
//
//
//
// function animate(){
//   requestAnimationFrame(animate);
//   ctx.clearRect(0,0,canvas.width, canvas.height)
//
  drawBackgroundLine();
//
//   player.draw();
//
//   pillarMen.forEach((pillarMan, index) => {
//     pillarMan.slide();
//     if((pillarMan.x + pillarMan.size) <= 0){
//       setTimeout(() => {
//         pillarMen.splice(index, 1);
//       }, 0)
//     }
//   });
// }
//
// animate();







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
