
window.magic_canvas = function(id, image_sources) {
// uma adaptação a partir do código do SuperHcurrent_indexhttps://oil-paintings.superhi.com //

// IMAGES ANIMATION //

// PARTICIPATION POVERTY //
const canvasTag = document.querySelector(id)
const txtTag = canvasTag.parentElement;

// CANVAS SIZE SAME AS DIV SIZE //
ctx = canvasTag.getContext('2d');

let target_height = canvasTag.parentElement.clientHeight * 0.2;

canvasTag.width = canvasTag.parentElement.clientWidth;
canvasTag.height = canvasTag.parentElement.clientHeight;
canvasTag.style.width  = canvasTag.parentElement.clientWidth;
canvasTag.style.height = canvasTag.parentElement.clientHeight;


console.log(canvasTag.parentElement);
let currentX = null
let currentY = null

let current_index = -1

const images = image_sources.map(src => {
  const image = document.createElement("img")
  image.src = src
  return image
})

// ON MOUSE MOVE //
// mousedown mouseup mousemove

txtTag.onmousedown = function(ev) {
  txtTag.onmousemove = function (event) {
    currentX = event.offsetX;
    currentY = event.offsetY;

    //console.log(event);
  };
  ev.preventDefault();
}

txtTag.onmouseup = function(ev) {
  txtTag.onmousemove = function (event) {
    currentX=null
    currentY=null
  };
  ev.preventDefault();
}

// ON MOUSE CLICK //

txtTag.addEventListener("mousedown", function (){
  current_index = current_index + 1
  if (current_index >= images.length) {
    current_index= 0
  }
});

const draw = function () {
  if (currentX) {
    let img = images[current_index];
    let im_scale = target_height / img.height;
    let w = img.width * im_scale;
    let h = img.height * im_scale;
    if (img.complete) {
      ctx.drawImage (img, currentX - w * 0.5 , currentY, w, h);
    }
  }

  requestAnimationFrame(draw)
}

  requestAnimationFrame(draw);
}

magic_canvas("#canvas", ["img11.jpg", "img22.jpg", "img33.jpg", "img44.jpg"]);















