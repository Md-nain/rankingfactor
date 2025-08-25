
 
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const heading = item.querySelector(".heading");

    heading.addEventListener("click", () => {
      // close all others
      faqItems.forEach(sibling => {
        if (sibling !== item) {
          sibling.classList.remove("in");
          const content = sibling.querySelector(".faq-content");
          content.style.maxHeight = null; // collapse
        }
      });

      // toggle current
      item.classList.toggle("in");
      const content = item.querySelector(".faq-content");

      if (item.classList.contains("in")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   const tocBlock = document.querySelector(".toc-block");
//   const tocHeader = tocBlock?.querySelector("h4");
//   const aside = document.querySelector(".blog-aside-content");
//   const mainContent = document.querySelector(".blog-main-content");

  
//   if (tocHeader) {
//     tocHeader.addEventListener("click", function () {
//       if (window.innerWidth < 767) {
//         tocBlock.classList.toggle("open");
//       }
//     });
//   }

  
//   if (aside && mainContent) {
//     let asideWidth = null;
//     let asideLeft = null;

//     const updateAsidePosition = () => {
//       if (window.innerWidth >= 767) {
//         const rect = aside.getBoundingClientRect();
//         asideWidth = rect.width;
//         asideLeft = rect.left + window.scrollX;
//       }
//     };

//     updateAsidePosition();
//     window.addEventListener("resize", updateAsidePosition);

//     window.addEventListener("scroll", function () {
//       if (window.innerWidth >= 767) {
//         const asideRect = aside.getBoundingClientRect();
//         const mainRect = mainContent.getBoundingClientRect();

//         if (mainRect.top < 0 && mainRect.bottom > asideRect.height) {
//           aside.classList.add("sticky");
//           aside.classList.remove("stop");
//           aside.style.width = asideWidth + "px";
//           aside.style.left = asideLeft + "px";
//         } else if (mainRect.bottom <= asideRect.height) {
//           aside.classList.remove("sticky");
//           aside.classList.add("stop");
//           aside.style.width = "";
//           aside.style.left = "";
//         } else {
//           aside.classList.remove("sticky", "stop");
//           aside.style.width = "";
//           aside.style.left = "";
//         }
//       } else {
//         aside.classList.remove("sticky", "stop");
//         aside.style.width = "";
//         aside.style.left = "";
//       }
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // TOC toggle (mobile)
  const tocBlock  = document.querySelector(".toc-block");
  const tocHeader = tocBlock?.querySelector("h4");
  if (tocHeader) {
    tocHeader.addEventListener("click", () => {
      if (window.innerWidth < 767) tocBlock.classList.toggle("open");
    });
  }

  // Sticky aside via GSAP
  const asideCol = document.querySelector(".blog-aside-content");
  const mainCol  = document.querySelector(".blog-main-content");

  if (asideCol && mainCol) {
    let asideInner = asideCol.querySelector(".aside-inner");
    if (!asideInner) {
      const wrap = document.createElement("div");
      wrap.className = "aside-inner";
      while (asideCol.firstChild) wrap.appendChild(asideCol.firstChild);
      asideCol.appendChild(wrap);
      asideInner = wrap;
    }

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        let st;
        const setLockedWidth = () => {
          const w = asideCol.clientWidth;  
          gsap.set(asideInner, { width: w }); 
        };
        const clearLockedWidth = () => gsap.set(asideInner, { width: "" });

        st = ScrollTrigger.create({
          trigger: asideInner,
          start: "top top+=16",
          end: () => "+=" + Math.max(0, mainCol.offsetHeight - asideInner.offsetHeight),
          pin: true,     
          pinSpacing: true,  
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefreshInit: setLockedWidth,
          onRefresh: setLockedWidth,
          onKill: clearLockedWidth
        });
        window.addEventListener("load", () => ScrollTrigger.refresh());
        window.addEventListener("resize", () => ScrollTrigger.refresh());
        return () => {
          st && st.kill();
          clearLockedWidth();
        };
      }
    });
  }
});
