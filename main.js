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
//hamburger

var hamburger = document.querySelector(".pahe-header__hamburger");
var menu = document.querySelector(".page-header__nav");
var closebtn = document.querySelector(".page-header__close");
hamburger.addEventListener('click', function(event)  {
    event.preventDefault();
    menu.classList.add("showbtn");
    closebtn.classList.add("showbtn");
    hamburger.classList.add("hidebtn");
});
closebtn.addEventListener('click', function(event2)  {
    event2.preventDefault();
    menu.classList.remove("showbtn");
    closebtn.classList.remove("showbtn");
    hamburger.classList.remove("hidebtn");
});

