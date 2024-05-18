var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.filter = 'brightness(50%)';
  });
  images[i].addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.filter = 'brightness(100%)';
  });
}