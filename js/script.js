const canvas = document.querySelector('canvas')
const dist = document.querySelector('.distance')
const mainBoi = document.querySelector('.mainBoi');
const badBoi = document.querySelector('.badBoi');
const boop = document.querySelector('#boop')
const baap = document.querySelector('#baap')
const game = document.querySelector('.game')



function jump(){
  if(mainBoi.classList == "animate"){return}
  mainBoi.classList.add("animate");
  setTimeout(function(){
    mainBoi.classList.remove("animate")
  },600)
}


let x = mainBoi.offSetTop;

function buttBump(){
  let mainBoiTop = parseInt(window.getComputedStyle(mainBoi).getPropertyValue("top"));
  let badBoiLeft = parseInt(window.getComputedStyle(badBoi).getPropertyValue("left"));
  if(badBoiLeft < 50 && badBoiLeft > -50 && mainBoiTop >= 200){
    badBoi.style.animation ="none";
    alert("game over boi")
    // badBoi.style.animation ="block 1s infinite linear";
  }
}


const deadYet = setInterval((e)=> buttBump(), 10);

console.log(deadYet)

addEventListener("click", (e)=>{jump()});
//this is bringing in the canvas tag


//this is setting up the size of the canvas
// canvas.width = 600;
// canvas.height = 400;


//this is settin the context of the cavnas, think dimensions.
// const ctx = canvas.getContext('2d');

// function score() {
//   let x = 0
//   function incrementCounter() {
//     dist.innerHTML = x;
//     if (x++ <= x++)
//     setTimeout(incrementCounter, 50)
//   }
//   incrementCounter();
// }
//
// score()




// this is just creating a line to look like a track
//
// function drawBackgroundLine(){
//     ctx.beginPath();
//     ctx.moveTo(0,300)
//     ctx.lineTo(600,300)
//     ctx.lineWidth = 13;
//     ctx.strokeStyle = "#7dbd7d"
//     ctx.stroke();
// }
//
// drawBackgroundLine();
//
//
// let preSetTime = 1500;
// let enemSpeed = 7 ;
//
//
// function speedUp(){
//   if (clicks >= 5){
//     enemSpeed++
//   }
//
// }
//
//
// //this is generating a random number
// function getRandomNumber(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
//
// //this is using the random number generated to create random intervals for the enemies to spawn at
// function randomNumberInterval(timeInterval){
//   let returnTime = timeInterval;
//   if(Math.random() < .5){
//     returnTime =+ getRandomNumber(preSetTime%3, preSetTime * 2);
//   } else {
//     returnTime -= getRandomNumber(preSetTime%5, preSetTime%2);
//   }
//   return returnTime
// }
//
//
// //this is the collision function, it's checking to see if th
// //getPrototypeOf returns the value of the internal prototype property, in this case it's the class
//
//
// function loversCollide(player,dangerBoi){
//     let s1 = Object.assign(Object.create(Object.getPrototypeOf(player)), player);
//     let s2 = Object.assign(Object.create(Object.getPrototypeOf(dangerBoi)), dangerBoi);
//     s2.size = s2.size-10;
//     s2.x = s2.x + 20;
//     s2.y = s2.y + 20;
//     return !(
//         s1.x>s2.x+s2.size || //R1 is to the right of R2
//         s1.x+s1.size<s2.x || //R1 to the left of R2
//         s1.y>s2.y+s2.size || //R1 is below R2
//         s1.y+s1.size<s2.y //R1 is above R2\
//     )
// }
//
//
// class Player{
//     constructor(x, y, size){
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.color = "#40bac2";
//     this.jumpFrame = 12;
//     this.shouldJump = false;
//     this.jumpCounter = 0;
//   }
//
//   // this is the jump method it works on a 32 frame sequence, basically once it reaches 32frames,
//   // which would be the top of the jump, it clears it back down to 0.
//   // this also prevents the player from jumping more than once,
//
//   jump(){
//     if(this.shouldJump){
//       this.jumpCounter++;
//       if(this.jumpCounter < 15){
//        this.y -= this.jumpFrame;
//     } else if(this.jumpCounter > 14 && this.jumpCounter < 19){
//       this.y += 0;
//     } else if (this.jumpCounter < 33){
//       this.y += this.jumpFrame;
//     }
//
//     if(this.jumpCounter >= 32){
//       this.shouldJump = false;
//     }
//     }
//   }
//   //this is draw method that that draws the player, with the jump method each time
//   draw(){
//     this.jump();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.size, this.size);
//   }
// }
//
//
//
//
// // new player
// let player = new Player( 150, 250, 50);
//
// //enemy class
// class Enemy {
//   constructor(size, speed){
//     this.x = canvas.width + size;
//     this.y = 300 - size;
//     this.size = size;
//     this.color = "#306228";
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
//
// //enemy array
// let dangerBois = []
//
//
// //this creates more enemies and pushes them into the array
//
// function generateBaddies (){
//   let timeDelay = randomNumberInterval(preSetTime);
//   dangerBois.push(new Enemy(45, enemSpeed))
//   setTimeout(generateBaddies, timeDelay)
// }
//
//
//
// //this generates new enemies at a random interval
// setTimeout(()=>{
//   generateBaddies();
//  },randomNumberInterval(preSetTime))
//
//
// //this is the animation function, this draws the player, the base line, consitently clears them aswell
// //this also animates the sliding of the enemies, checks for collision, and deletes enemies out of the array
//
//
// let animationId = null;
//
// function animate(){
//   animationId = requestAnimationFrame(animate);
//   ctx.clearRect(0,0,canvas.width, canvas.height)
//
//   drawBackgroundLine();
//   player.draw();
//
//   dangerBois.forEach((dangerBoi, index) => {
//     dangerBoi.slide();
//
//     if(loversCollide(player, dangerBoi)){
//       cancelAnimationFrame(animationId);
//       alert("you jumped " + clicks + "times. Next time try better")
//
//     }
//
//     if((dangerBoi.x + dangerBoi.size) <= 0){
//       setTimeout(() => {
//         dangerBois.splice(index, 1);
//       }, 0)
//     }
//   });
// }
//
// animate();
//
//
// //this is the button to make the player jump.
//
// var clicks = 0
//
// function jumpShell(){
//   clicks++
//   dist.innerHTML = "Jumps:" + clicks
//
// }
//
// addEventListener("keydown", (e)=>{
//   if(event.key === ' '){
//     if(!player.shouldJump){
//       player.jumpCounter=0;
//       player.shouldJump = true;
//       jumpShell()
//       speedUp()
//
//     }
//   }
// })
//
// addEventListener("click", (e)=>{
//   if('click'){
//     if(!player.shouldJump){
//       player.jumpCounter=0;
//       player.shouldJump = true;
//       jumpShell()
//       speedUp()
//     }
//   }
// })
