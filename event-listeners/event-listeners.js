// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','imgs/HD-Wallpapers-1080p-Widescreen.jpg','imgs/Red-Leaves-Wallpaper.jpg','imgs/wallpaper1.jpg','imgs/Wallpaper-HD-6A.jpg'];
var currentIndex = 0;
document.getElementsByTagName("img")[0].addEventListener("click", showNextPicture);
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;

  }
	var image = document.getElementsByTagName("img")[0];
  	image.src= pictures[currentIndex];
  // YOUR TASK: Finish this function!
}