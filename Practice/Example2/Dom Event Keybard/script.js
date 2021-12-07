let imageIndex = 0;
let imageLinks = ['photo/harley-01.jpg', 
                  'photo/harley-02.jpg', 
                  'photo/harley-03.jpg'];

let image = document.querySelector('.image');
let prev = document.getElementById('button prev-button')
let next = document.getElementById('button next-button');

function prevImage() {
  if (imageIndex > 0) {
    imageIndex--;
    image.src = imageLinks[imageIndex];
  }
}

function nextImage() {
  if (imageIndex < imageLinks.length - 1) {
    imageIndex++;
    image.src = imageLinks[imageIndex];
  }
}

function keyup(event) {
  console.log(event.key)
  if (event.key === 'ArrowLeft') {
    prevImage();
  }
  else if (event.key === 'ArrowRight') {
    nextImage();
  }
}

document.addEventListener('keyup', keyup);

prev.addEventListener('click', prevImage);
next.addEventListener('click', nextImage);