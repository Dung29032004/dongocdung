// var img=[];
// var curimg=0;
// function loadimages(){
//     for(i=1;i<5;i++){
//         img[i] = new Image();
//         img[i].src="image/phieu"+i+".jpg"
//     }
// }
// function next(){
//     if (curimg<img.length-1){
//         curimg++;
//         document.getElementById("phieu").src=img[curimg].src;
//     }
//     if(curimg==img.length-1){
//         curimg=0;
//     }
// }
// function back(){
//     if(curimg>0){
//         curimg--;
//         document.getElementById("phieu").src=img[curimg].src;
//     }
//     if(curimg==0){
//         curimg=img.length-1;
//     }
// }
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}