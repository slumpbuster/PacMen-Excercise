var pos = 0;
let pageWidth = window.innerWidth;

// slows down the opening and closing of the mouth
var mouth = 0;

// This array holds the pacman images *left/right, open/close
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
// This array holds all the pacmen
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale
  }
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // This variable helps determine which PacMan image should be displayed *facing left or right
  let direction = 0;
  // This variable helps determine which PacMan image should be displayed *open or closed - it flips between values 0 and 1
  let focus = 0;
  // set random velocity
  let velocity = setToRandom(10);
  // set random start position
  let position = setToRandom(200);
  // set random size
  let size = Math.ceil(Math.random() * 150);
  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');

  newimg.style.position = 'absolute';
  newimg.width = size;
  newimg.src = pacArray[direction][focus];
      
  // set position here 
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
    direction,
    focus
  }
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item)
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;

    item.direction = checkPageBounds(item.direction, item.newimg.width, item.velocity.x + item.position.x, pageWidth);
    // opens/closes mouth *dividing by 4 to slow down the open close
    if (mouth %4 === 0) item.focus = (item.focus + 1) % 2;
    // set the image (open/close) and left/right
    item.newimg.src = pacArray[item.direction][item.focus];
  })
  mouth++;
  setTimeout(update, 30);
}

function checkCollisions(item) {
  // detect collision with all walls and make pacman bounce
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth || item.position.x + item.velocity.x < 0)
    item.velocity.x = -item.velocity.x;
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight || item.position.y + item.velocity.y < 0)
    item.velocity.y = -item.velocity.y;
}
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  // determine whether traveling left to right or right to left
  if (direction === 0 && (pos + imgWidth) >= pageWidth) direction = 1;
  if (direction === 1 && pos <= 0) direction = 0;
  return direction;
}

function makeOne() {
  // add a new PacMan
  pacMen.push(makePac()); 
}