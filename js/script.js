if (window.innerWidth>768){const lenis = new Lenis({
  duration: 1.4,
  smoothWheel: true
});


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}


requestAnimationFrame(raf);}


const revealElements = document.querySelectorAll(
  ".card, .hero-content, .video-section, .testimonial-grid .card"
);


revealElements.forEach(el => {
  el.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);


revealElements.forEach(el => {
  revealObserver.observe(el);
});


const bannerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {


        entry.target
          .querySelectorAll(".banner-content, .banner-image")
          .forEach(el => {
            el.classList.add("animate");
          });


        bannerObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3
  }
);


document
  .querySelectorAll(".banner-wrapper")
  .forEach(section => {
    bannerObserver.observe(section);
  });


document
  .querySelectorAll(".card")
  .forEach((card, index) => {


    card.style.transitionDelay =
      `${index * 50}ms`;


});

if (window.innerWidth>768) {window.addEventListener("scroll", () => {


  const y = window.scrollY;


  const shape4 = document.querySelector(".shape-4");



  if(shape4)
    shape4.style.transform =
      `0 ${y * 0.15}px`;


});}

const progressBar =
document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {


  const scrollTop = window.scrollY;


  const docHeight =
    document.documentElement.scrollHeight
    - window.innerHeight;


  const progress =
    (scrollTop / docHeight) * 100;


if (progressBar) {
progressBar.style.width=progress+"%";
}
});



$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,

    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 2,
        
      },

      1000: {
        items: 3 
      }
    }
  });
});

let lenis;


window.scrollFunction = function() {
  const mybutton = document.getElementById("myBtn");
  if (mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.setProperty('display', 'block', 'important');
    } else {
      mybutton.style.setProperty('display', 'none', 'important');
    }
  }
};

window.topFunction = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


window.addEventListener('scroll', window.scrollFunction);


window.scrollFunction();

const triangle = document.querySelector('.play-triangle');
const video = document.querySelector('#myVideo');
const overlay = document.querySelector('#video-overlay');
const closeButton = document.querySelector('button#video-close-btn');
triangle.addEventListener('click', () => {
  video.style.display = 'block';
  overlay.style.display = 'block';
  closeButton.style.display = 'block';
  video.play();
});

overlay.addEventListener('click', () => {
  video.style.display = 'none';
  overlay.style.display = 'none';
  closeButton.style.display = 'none';
  video.pause();
});
document.querySelector('#video-close-btn').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    const overlay = document.getElementById('video-overlay');
    
    if (video) {
        video.pause();
        video.style.display = 'none';
    }
    if (overlay) {
        overlay.style.display = 'none';
    }
    this.style.display = 'none';
});
function closeVideo() {
    if (video) {
        video.pause();
        video.style.display = 'none';
    }
    if (overlay) {
        overlay.style.display = 'none';
    }
    button.style.display = 'none';
}
closeButton.addEventListener('click', closeVideo);

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navbar.classList.toggle('open');
});