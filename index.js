window.onscroll = function() {scrollFunction()};
                        
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menu").style.margin = "0";
    document.getElementById("menu").style.borderRadius = "0";
    document.getElementById("menu").style.height = "50px";
    document.getElementById("logo").style.width = "65%";
    document.getElementById("logo").style.marginTop = "-6%";
  } else {
    document.getElementById("menu").style.top = "28px";
    document.getElementById("menu").style.width = "94%";
    document.getElementById("menu").style.margin = " 0 calc((100% - 94%)/2)";
    document.getElementById("menu").style.borderRadius = "55px";
    document.getElementById("menu").style.height = "94px";
    document.getElementById("logo").style.width = "100%";
    document.getElementById("logo").style.marginTop = "0";
  }
}


var slideShow = 1;
showDivs(slideShow);
function plusDivs(n) {
showDivs(slideShow += n);
}
function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideShow = 1}
if (n < 1) {slideShow = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideShow-1].style.display = "block";  
}


function myD() {
    var x = document.getElementById("menu2");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      x.style.width = "200px";
    } else {
      x.style.visibility = "hidden";
      x.style.width = "0";
    }
  }
  function myX() {
    var x = document.getElementById("menu2");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
      x.style.width = "0";
    } else {
      x.style.visibility = "visible";
      x.style.width = "200px";
    }
  }



  function validateForm() {
    var x;
    var y;
    var z;
    x = document.forms["Form"]["txtname"].value;
    y = document.forms["Form"]["email"].value;
    z = document.forms["Form"]["message"].value;
    if (x == "") {
    alert("Vui lòng nhập tên của bạn");
    return false;
    } else if (y == "") {
    alert("Vui lòng nhập email");
    return false;
    } else if (z == "") {
        alert("Hãy gửi lời nhắn cho mình nhé");
        return false;
    } else {
        alert("Cảm ơn bạn đã gửi tin nhắn cho mình");
    }
 }
