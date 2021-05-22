const game = document.querySelector('.game')
const canvas = document.querySelector('canvas')
const mainBoi = document.querySelector('.mainBoi');
const badBoi = document.querySelector('.badBoi');
const boop = document.querySelector('#boop')
const baap = document.querySelector('#baap')
const dist = document.querySelector('#counter')


canvas.width = 600;
canvas.height = 600;
const ctx = canvas.getContext('2d');
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


let player = new Player( 150, 350, 50, "teal");

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


function drawBackgroundLine(){
    ctx.beginPath();
    ctx.moveTo(0,400)
    ctx.lineTo(600,400)
    ctx.lineWidth = 1.9;
    ctx.strokeStyle = "grey"
    ctx.stroke();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height)

  drawBackgroundLine();

  player.draw();
  
  pillarMen.forEach(pillarMan => {
    pillarMan.slide();
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


//
// // c.fillRext(x,y,width, height)
// //this is setting up the  siz of  the shape to be a variable that I can update
// // c.fillRect(100,635, 70, 150)
// //starting coords for mainBoi
// let xM = 100
// let yM = 635
// let wM = 70
// let hM = 150
// let dX = 1
//
//
// var xB = innerWidth
// var yB = 720
// var wB = 70
// var hB = 70
// var dxB = 1
//
// // function animate(){
// //   requestAnimationFrame(animate);
// //   b.clearRect(xB,yB,innerWidth,innerHeight);
// //   b.beginPath();
// //   // g.fillStyle = "darkgrey"
// //   // g.fillRect(0,775,innerWidth, 1000)
// //   // g.fillStyle = "grey"
// //   // g.fillRect(0,775,innerWidth, 25)
// //   b.fillStyle = 'red',
// //   b.fillRect(xB, yB, wB, hB)
// //
// //
// //   xB -= dxB;
// // }
//
// // animate();
//
//
// m.fillStyle = 'orange',
// m.fillRect(xM, yM, wM, hM)
//
// function jump(){
//   if(yM > limit && !goingDown){
//           yM-=10;
//       } else{
//       goingDown = true;
//           yM +=10;
//           if(yM > jump_y){
//               clearInterval(jumping);
//               goingDown = false;
//           }
//
//       }
//   }
  // body.addEventListener('click', (e) =>{jump() });

  //this is getting the coords
  // function getCoords(elem) {
  //   let box = elem.getBoundingClientRect();
  //   return {
  //     top: box.top + window.pageYOffset,
  //     right: box.right + window.pageXOffset,
  //     bottom: box.bottom + window.pageYOffset,
  //     left: box.left + window.pageXOffset
  //   }
  // }

  // console.log(getCoords(baap))

  //this is getting the left
  // function runner() {
  //     let xB = baap.offsetLeft

  //       function travel() {
  //        bRun.textContent = xB;
  //        if (xB > 20)

  //            setTimeout(travel, 1001)
  //     }
  //     travel();
  // }

  // runner()

  // let timerId = setInterval(() => console.log(getCoords(baap)), 100)

  // setTimeout(function(){
  //      baap.offsetLeft},1)



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




  // function xBUpdate(){
  //   if(xB <= xR){
  //   console.log("hello")
  // }
  //   setTimeout(function(){
  //    return xB.offsetLeft},1)
  // }

  // xBUpdate()

  //
  // function jump(){
  //   if(mainBoi.classList != 'animate')
  //   {pen.classList.add('animate')
  // }
  //    setTimeout(function(){
  //     mainBoi.classList.remove('animate')},600)
  // }






  // var checkDead = setInterval(function(){
  //   var characterTop = parseInt(window.getComputedStyle(pen).getPropertyValue('top'));
  // }, 10);

  //this allows us to click anywhere with the game div to get it to jump instead of just the chracter itself
