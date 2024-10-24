// JavaScript to show/hide the "Scroll to Top" button
window.addEventListener("scroll", function () {
  const scrollToTopButton = document.querySelector(".scrollToTop");
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add("visible");
  } else {
    scrollToTopButton.classList.remove("visible");
  }

  const header = document.querySelector('header');

  if(this.window.pageYOffset > sticky){
    header.classList.add('sticky');
  }else{
    header.classList.remove('sticky');
  }
});

