
 
 document.addEventListener("DOMContentLoaded", (event) => {

const tl = gsap.timeline({
  paused: true
});
let path = document.querySelector("path");
gsap.set(".main-navigation", { visibility: "hidden" });

  function revealMenu() {
    revealMenuItems();

    const toggleBtn = document.getElementById("toggle-btn");
    const overlay = document.querySelector(".overlay");
    const menu = document.querySelector(".main-navigation");

    toggleBtn.onclick = (e) => {
      const html = document.documentElement;
      if (toggleBtn.classList.contains("active")) {
        toggleBtn.classList.remove("active");
        menu.classList.remove("active");
        html.classList.remove("disable-scroll");
        tl.reverse();
        setTimeout(() => {
          overlay.classList.remove("active");
        }, 1000);
      } else {
        toggleBtn.classList.add("active");
        menu.classList.add("active");
        overlay.classList.add("active");
        html.classList.add("disable-scroll");
        tl.reversed(!tl.reversed());
      }
    };
  }
  revealMenu();

window.addEventListener("scroll", () => {
  const toggleBtn = document.getElementById("toggle-btn");
  const scrollThreshold = 100;

  if (window.scrollY > scrollThreshold) {
    toggleBtn.classList.add("fixed");
  } else {
    toggleBtn.classList.remove("fixed");
  }
});


function revealMenuItems() {
  const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const end = "M0, 1005S175, 995, 500, 995s500, 5, 500, 5V0H0Z";

  const power2 = "power2.inout";

  tl.to("#toggle-btn", 1.25, {
    marginTop: "-0.3rem",
    x: -40,
    y: 30,
    ease: power2
  });
  tl.to(
    "#nav-image",
    1,
    {
     
      ease: power2
    },
    "<"
  );


  tl.to(
    path,
    0.8,
    {
      attr: {
        d: start
      },
      ease: power2
    },
    "<"
  ).to(
    path,
    0.8,
    {
      attr: { d: end },
      ease: power2
    },
    "-=0.5"
  );

  tl.to(
    ".main-navigation",
    0.5,
    {
      visibility: "visible"
    },
    "-=0.5"
  );

  tl.to(
    ".menu-item>a",
    0.5,
    {
      top: 0,
      ease: "power3.in",
      stagger: {
        amount: 0.5
      }
    },
    "-=1"
  ).reverse();
}


  gsap.to(".upper-text span", {
    x: 0,
    opacity: 1,
    duration: 4, 
    ease: "power3.out"
  });
  gsap.to(".lower-text span", {
    x: 0,
    opacity: 1,
    duration: 4,
    ease: "power3.out",
    
  });

  gsap.to(".loader", {
    opacity: 0,
    pointerEvents: "none",
    duration: 1,
    delay: 3.5,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
      window.scrollTo({ top: 0, behavior: "smooth" });
      gsap.to(".hero", {
        scale: 1,
        opacity: 1,
        gap: 12, 
        duration: 1.2,
        ease: "power3.out"
      });
    }
  });



 });




//question --------

  const tabs = document.querySelectorAll('.tab-item');
  const images = document.querySelectorAll('[data-image]');

  function setActive(index) {
    // Images
    images.forEach((img, i) => {
      img.style.opacity = i === index ? '1' : '0';
      img.style.zIndex = i === index ? '10' : '0';
    });
    // Tabs
    tabs.forEach((tab, i) => {
      if (i === index) {
        tab.classList.add('bg-[#2a57f8]');
        tab.classList.remove('bg-transparent');
      } else {
        tab.classList.remove('bg-[#2a57f8]');
        tab.classList.add('bg-transparent');
      }
    });
  }

  // Hover to activate
  tabs.forEach((tab, i) => {
    tab.addEventListener('mouseenter', () => setActive(i));
  });

  // Default active state
  setActive(0);




  const galleryslider = new Swiper('.gallery-slider.regular-ticker .content-holder', {
  slidesPerView: 4,
  centeredSlides: true, 
  loop: true, 
  speed: 3000,
  spaceBetween: 0,
  initialSlide: 1,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
  },
});

const reversegalleryslider = new Swiper('.gallery-slider.reverse-ticker .content-holder', {
  slidesPerView: 4,
  centeredSlides: true, 
  loop: true, 
  speed: 3000,
  spaceBetween: 0,
  initialSlide: 1,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
  },
});

const testimonialSlider = new Swiper('.testimonial-slider .content-holder', {
  slidesPerView: 1,
  loop: true, 
  speed: 4000,
  spaceBetween: 0,
  initialSlide: 1,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.testimonial-slider .swiper-pagination',
    clickable: true,
  },
});


window.onload = function () {
  setTimeout(function () {
    AOS.init({
    });
  }, 0);
};
