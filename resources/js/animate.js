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


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6797673d825083258e0b8feb/1iijmmik8';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
