// JavaScript Document
var length = 6;                //the total number of images
var current = 1;               //the current slide number

var slide_tray = new Array();  //an array to hold the uploaded images

function load_slide(place,file) {
   slide_tray[place] = new Image();
   slide_tray[place].src = file;
   }
   
//This loop is executed when the page is uploaded to initialise the image array
for (i=1; i<=length;  i++)
{
   var file_name = "images/image" + i + ".jpg";	//Generate current iamge file name
   load_slide(i, file_name);
}

function goforward() {
  current = current + 1;
  if( current > length ) {
     current = 1;
  }
  document.slide.src=slide_tray[current].src; //update current image

 
}

function gobackward() {
  current = current - 1;
  if( current < 1 ) {
     current = length;
  }
  document.slide.src=slide_tray[current].src;  //update current image

}