const canvas = document.querySelector('canvas')
const dist = document.querySelector('.distance')


//this function adds and removes the animate class to the player tag "mainBoi". This allows us to jump using css, but also takes it away so we can reapply that animation.

// function jump(){
//   if(mainBoi.classList == "animate"){return}
//   mainBoi.classList.add("animate");
//   setTimeout(function(){
//     mainBoi.classList.remove("animate")
//   },600)
// }
//
//
// let x = mainBoi.offSetTop;
// console.log(x)


//this is a rough collision function, it checks to see if the character Mainboi;s top touches the left of the enemy block.
//
//
// function buttBump(){
//   let mainBoiTop = parseInt(window.getComputedStyle(mainBoi).getPropertyValue("top"));
//   let badBoiLeft = parseInt(window.getComputedStyle(badBoi).getPropertyValue("left"));
//   if(badBoiLeft < 48 && badBoiLeft > -48 && mainBoiTop >= 200){
//     badBoi.style.animation ="none";
//     alert("game over boi")
//   }
// }

//
// const deadYet = setInterval((e)=> buttBump(), 10);
//
// console.log(deadYet)
//
// addEventListener("click", (e)=>{jump()});

// found this tip on resizing the canvas
// window.addEventListener('resize', function(){
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
// })
canvas.width = 600;
canvas.height = 600;

const ctx = canvas.getContext('2d');






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
// let img = new Image();
//
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img.src ="css/assets/dinobites/DinoRed.png", frameX * width, frameY * height, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
//
//   ctx.mozImageSmoothingEnabled =false;
//   ctx.imageSmoothingEnabled = false;
//
// }
//



// From this point down game is almost done.

function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,400)
    ctx.lineTo(600,400)
    ctx.lineWidth = 1.9;
    ctx.strokeStyle = "grey"
    ctx.stroke();
}


drawBackgroundLine();

let preSetTime = 2000;
let enemSpeed = 8 ;

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


//this is the collision function, it's checking to see if the

function squaresColliding(player,block){
    let s1 = Object.assign(Object.create(Object.getPrototypeOf(player)), player);
    let s2 = Object.assign(Object.create(Object.getPrototypeOf(block)), block);
    s2.size = s2.size;
    s2.x = s2.x + 10;
    s2.y = s2.y + 10;
    return !(
        s1.x>s2.x+s2.size || //R1 is to the right of R2
        s1.x+s1.size<s2.x || //R1 to the left of R2
        s1.y>s2.y+s2.size || //R1 is below R2
        s1.y+s1.size<s2.y //R1 is above R2\
    )
}


//player class
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

  // this is the jump method it works on a 32 frame sequence, basically once it reaches 32frames,
  // which would be the top of the jump, it clears it back down to 0.
  // this also prevents the player from jumping more than once,

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


// new player
let player = new Player( 150, 350, 50,"teal");

//enemy class
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



//enemy array
let blocks = []


//this creates more enemies and pushes them into the array

function generateBaddies (){
  let timeDelay = randomNumberInterval(preSetTime);
  blocks.push(new Enemy(45, enemSpeed))
  setTimeout(generateBaddies, timeDelay)
}



//this generates new enemies at a random interval
setTimeout(()=>{
  generateBaddies();
 },randomNumberInterval(preSetTime))


//this is the animation function, this draws the player, the base line, consitently clears them aswell
//this also animates the sliding of the enemies, checks for collision, and deletes enemies out of the array
let animationId = null;
function animate(){
  animationId = requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height)

  drawBackgroundLine();

  player.draw();

  blocks.forEach((block, index) => {
    block.slide();

    if(squaresColliding(player, block)){
      cancelAnimationFrame(animationId);
    }

    if((block.x + block.size) <= 0){
      setTimeout(() => {
        blocks.splice(index, 1);
      }, 0)
    }
  });
}

animate();


//this is the button to make the player jump.
addEventListener("keydown", (e)=>{
  if(event.key === 'Shift'){
    if(!player.shouldJump){
      player.jumpCounter=0;
      player.shouldJump = true;
    }
  }
})


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
