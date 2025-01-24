const animatedBox = document.getElementsByClassName('animateMe');
let lastScrollTop = 0;
// animatedBox.style.transform=`translateX(-200%)`;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        console.log(scrollTop);
console.log()
        // Scrolling down incrementt
        // animatedBox.style.transform = `translateX(${scrollTop * 0.01}%)`;
    } else {
        console.log(scrollTop);
        // animatedBox.style.transform = `translateX(${-scrollTop * -0.01}%)`;
        // Scrolling up
        // animatedBox.style.transform = `translateX(${scrollTop * 0.1}%)`;
        // animatedBox.classList.add(".tilt-in-fwd-tr ")
    }

    lastScrollTop = scrollTop;
});
