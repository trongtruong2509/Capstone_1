const body = document.body;
const navContainer = document.querySelector(".page-header nav .container");

// Header scroll animation
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 99) {
        // down
        // console.log('Last scroll ' + lastScroll);
        navContainer.classList.remove('my-2');
        navContainer.classList.add('py-1');
    } else if (currentScroll < lastScroll && currentScroll <= 99) {
        // up
        navContainer.classList.add('my-2');
        navContainer.classList.remove('py-1');

    }

    lastScroll = currentScroll;
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
