const game = document.querySelector('.game')
const canvas = document.querySelector('canvas')
const pen = document.querySelector('.mainBoi');
const badBoi = document.querySelector('.badBoi');
const boop = document.querySelector('#boop')
const baap = document.querySelector('#baap')
const dist = document.querySelector('#counter')


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');


// c.fillRext(x,y,width, height)
//this is setting up the  siz of  the shape to be a variable that I can update
// c.fillRect(100,635, 70, 150)

let xM = 100
let yM = 635
let wM = 70
let hM = 150
let dX = 1


function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth, innerHeight);
  c.beginPath();
  c.fillStyle = 'teal',
  c.fillRect(xM, yM, wM, hM)

  xM += dX;
}

animate();

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


  function jump(){
    if(pen.classList != 'animate')
    {pen.classList.add('animate')
  }
     setTimeout(function(){
      pen.classList.remove('animate')},600)
  }






  // var checkDead = setInterval(function(){
  //   var characterTop = parseInt(window.getComputedStyle(pen).getPropertyValue('top'));
  // }, 10);

  //this allows us to click anywhere with the game div to get it to jump instead of just the chracter itself
  gameBoy.addEventListener('click', (e) =>{jump() });
