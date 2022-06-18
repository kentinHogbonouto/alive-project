/**********Owl Carousel Assises********** */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4,
            nav:true,
        }
    }
})


/*******************Search Bar *******************/
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
  
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

/*******************Shop Bar *******************/
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
  document.getElementById("main").style.marginRight = "450px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.body.style.backgroundColor = "white";
}



/*******************Single product*******************/

function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}

