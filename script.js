//   card  //
new Swiper(".myEventSlider", {
    loop:true,
    spaceBetween:30,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        0:{ slidesPerView:1 },
        768:{ slidesPerView:2 },
        992:{ slidesPerView:3 }
    }
});


// reviews cards //

var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// reviews cards //


function openAbout() {
  document.getElementById("aboutModal").style.display = "flex";
}

function closeAbout() {
  document.getElementById("aboutModal").style.display = "none";
}





  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
