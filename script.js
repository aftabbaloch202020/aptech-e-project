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





// Letters and their classes
const letters = [
  { char: 'F', class: 'f' },
  { char: 'E', class: 'e' },
  { char: 'S', class: 's' },
  { char: 'T', class: 't' },
  { char: 'I', class: 'i' },
  { char: 'F', class: 'f2' },
  { char: 'Y', class: 'y' },
];

const typingElement = document.getElementById("typing");
let index = 0;
const typingSpeed = 300; 

function typeLetter() {
  if (index < letters.length) {
    const span = document.createElement('span');
    span.textContent = letters[index].char;
    span.classList.add(letters[index].class);
    typingElement.appendChild(span);
    index++;
    setTimeout(typeLetter, typingSpeed);
  } else {

    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.classList.add("fade-out");
      setTimeout(() => {
        document.getElementById("main-content").style.display = "block";
      }, 1000); 
    }, 1000);
  }
}

window.addEventListener("load", typeLetter);
