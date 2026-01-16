// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  
  // Carousel
  let index = 0;
  const images = document.querySelector(".images");
  const dots = document.querySelectorAll(".dot");
  
  function updateCarousel() {
    images.style.transform = `translateX(${-index * 320}px)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }
  
  document.querySelector(".next").onclick = () => {
    index = (index + 1) % dots.length;
    updateCarousel();
  };
  
  document.querySelector(".prev").onclick = () => {
    index = (index - 1 + dots.length) % dots.length;
    updateCarousel();
  };



  /************* FAQ ACCORDION *************/
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Toggle open / close
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      // Close others
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.display = "none";
      });
      answer.style.display = "block";
    }
  });
});


/************* CAROUSEL *************/
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".images img");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Calculate image width dynamically
function getImageWidth() {
  return images[0].offsetWidth + 20; // image + margin
}

function updateCarousel() {
  imagesContainer.style.transform =
    `translateX(-${currentIndex * getImageWidth()}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateCarousel();
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});