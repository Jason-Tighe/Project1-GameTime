const game = document.querySelector('.game')
// const canvas = document.querySelector('canvas')
const mainBoi = document.querySelector('.mainBoi');
const badBoi = document.querySelector('.badBoi');
const boop = document.querySelector('#boop')
const baap = document.querySelector('#baap')
const dist = document.querySelector('#counter')

function jump(){
  if(mainBoi.classList == "animate"){return}
  mainBoi.classList.add("animate");
  setTimeout(function(){
    mainBoi.classList.remove("animate")
  },400)
}



addEventListener("click", (e)=>{jump()});

// found this tip on resizing the canvas
// window.addEventListener('resize', function(){
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// })
// canvas.width = 600;
// canvas.height = 300;
//
// const ctx = canvas.getContext('2d');
//
// function background() {
//   ctx.fillStyle="blue"
//   ctx.fillRect=(0,0,600,3)
//
// }
// background()
//
// img = new Image();
// img.src = "css/assets/dinobites/DinoRed.png";
//
// img.onload = function(){
//   init();
// }

//I'm able to make the class for the player and draw the image. I'm having trouble animating it.
//
// class Dino{
//   constructor(x, y){
//     this.scale = 4;
//     this.x = x;
//     this.y = y;
//     this.width = 24 ;
//     this.height = 24 ;
//     this.canvasX = 10;
//     this.canvasY = canvas.height- 100;
//     this.scaledWidth = this.scale * this.width;
//     this.scaledHeight = this.scale * this.height;
//     this.cycleLoop = [4, 5, 6, 7, 8, 9];
//     this.currentLoopIndex = 0;
//     this.frameCount = 0;
//     this.image = 'css/assets/dinobites/DinoGreen.png'
//   }
//   drawImage() {
//       var image = new Image();
//       image.onload = () => {
//         ctx.mozImageSmoothingEnabled = false;
//         ctx.imageSmoothingEnabled = false;
//         ctx.drawImage(image, this.x * this.width, this.y * this.height, this.width, this.height, this.canvasX, this.canvasY, this.scaledWidth, this.scaledHeight);
//       };
//       image.src = this.image;
//     }
// }


//attempt to pust objects into an array and animate through that. Did not knwo how to clear previous drawings
// const loop = [new Dino(4, 0), new Dino(5, 0), new Dino(6, 0), new Dino(7, 0), new Dino(8, 0), new Dino(9, 0)]
// function animate(){
// for(let i = 0; i < loop.length; i++){
//   if(i > loop.length){
//     let i = 0;
//   }
//   const green = loop[i]
//   green.drawImage()
//   loop.splice(0,1)
//   }
// }


// const green = new Dino(4,0)
// green.drawImage()
//
// console.log(green.animate)
//
// console.log(green.step)
// console.log(Dino)
// console.log(green.drawImage)


//
// const images = {};
// images.sprite = new Image();
// images.sprite.src = 'css/assets/dinobites/DinoGreen.png'


// step() {
//  const cycleLoop = [4, 5, 6, 7, 8, 9];
//  let currentLoopIndex = 0;
//  let frameCount = 0;
//  frameCount++;
//  if (frameCount < 1) {
//    window.requestAnimationFrame();
//    return;
//  }
//  frameCount = 0;
//  ctx.clearRect(0, 0, width, height);
//  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
//  currentLoopIndex++;
//  if (currentLoopIndex >= cycleLoop.length) {
//    currentLoopIndex = 0;
//  }
//  window.requestAnimationFrame(step);
// }
// init() {
//  window.requestAnimationFrame(step);
// }


//this is an animated dino boy, I can turn these const to part of a class and the functions to methods. BUT I need to move this dude first.
//
// const scale = 3;
// const width = 24 ;
// const height = 24 ;
// const canvasX = 10;
// let canvasY = 200;
// const scaledWidth = scale * width;
// const scaledHeight = scale * height;
// const cycleLoop = [4, 5, 6, 7, 8, 9];
// let currentLoopIndex = 0;
// let frameCount = 0;
//
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img, frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
//
//   ctx.mozImageSmoothingEnabled =false;
//   ctx.imageSmoothingEnabled = false;
//
// }
//
//
// function step() {
//   frameCount++;
//   if (frameCount < 6) {
//     window.requestAnimationFrame(step);
//     return;
//   }
//   frameCount = 0;
//   ctx.clearRect(canvasX, canvasY, scale * width, scale * height);
//   drawFrame(cycleLoop[currentLoopIndex], 0, canvasX, canvasY);
//   currentLoopIndex++;
//   if (currentLoopIndex >= cycleLoop.length) {
//     currentLoopIndex = 0;
//   }
//   window.requestAnimationFrame(step);
//
// }
//
// function init() {
//   window.requestAnimationFrame(step);
// }
// function bang(){
//   ctx.clearRect(canvasX, canvasY, scale * width, scale * height)
// }
//
// function jump(){
//   canvasY -= 60
// }
//
// function land(){
//   if(canvasY < 200){
//   canvasY += 25
//  }
// }
//
// function softLand(){
//   while(canvasY < 200){
//   }  setInterval(land(),600)
// }
//
// //janky jump button
// addEventListener("keydown", (e)=>{
//   if(event.key === 'Shift'){
//
//       bang();
//       jump();
//     setInterval(()=> land(), 300, ()=> bang())
//   }
// })

//From this point down game is almost done.
//
// function drawBackgroundLine(){
//     ctx.beginPath();
//     ctx.moveTo(0,400)
//     ctx.lineTo(600,400)
//     ctx.lineWidth = 1.9;
//     ctx.strokeStyle = "grey"
//     ctx.stroke();
// }
//
//
// drawBackgroundLine();
//
// let preSetTime = 1000;
// let enemSpeed = 6 ;
//
// function getRandomNumber(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function randomNumberInterval(timeInterval){
//   let returnTime = timeInterval;
//   if(Math.random() < .5){
//     returnTime =+ getRandomNumber(preSetTime%3, preSetTime * 1.5);
//   } else {
//     returnTime -= getRandomNumber(preSetTime%5, preSetTime%2);
//   }
//   return returnTime
// }
//
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
//
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.size, this.size);
//   }
//   collide(){
//     }
// }
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
//
//
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



// function animate(){
//   requestAnimationFrame(animate);
//   ctx.clearRect(0,0,canvas.width, canvas.height)
//
//   drawBackgroundLine();
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






//
// addEventListener("keydown", (e)=>{
//   if(event.key === 'Shift'){
//     if(!player.shouldJump){
//       player.jumpCounter=0;
//       player.shouldJump = true;
//     }
//   }
// })

//
// function county() {
//   let x = 0
//   let max = 10;
//   function incrementCounter() {
//     dist.innerHTML = x;
//     if (x++ <= x++)
//     setTimeout(incrementCounter, 10)
//   }
//     incrementCounter();
// }
//
// county()
