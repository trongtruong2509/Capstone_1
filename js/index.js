const body = document.body;
const navContainer = document.querySelector(".page-header nav .container");
// const menu = document.querySelector(".page-header .menu");

let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
 
  if (currentScroll > lastScroll && currentScroll > 99) {
    // down
    // console.log('Last scroll ' + lastScroll);
    navContainer.classList.remove('my-2');
  } else if (currentScroll < lastScroll && currentScroll <= 99) {
    // up
    navContainer.classList.add('my-2');

  } 

  lastScroll = currentScroll;
});