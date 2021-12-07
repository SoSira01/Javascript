let thumbnailImages = document.querySelectorAll('.thumbnail-image');
let bigImage = document.querySelector('.big-image');
let buttonClick = document.querySelector('.button')

function changeImage(event) {
  bigImage.src = event.target.src;
}

function removeImage() {
  bigImage.src = '';
}

thumbnailImages.forEach((thumbnail) => {
  //thumbnail.addEventListener('mouseout', removeImage);
  thumbnail.addEventListener('mouseover', changeImage);
  buttonClick.addEventListener('click', removeImage);
});

//addEventListener('click', removeImage);

    

