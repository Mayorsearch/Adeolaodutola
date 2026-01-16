console.log("Script loaded");

// FAQ Accordion
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

// Carousel
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".images img");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// Calculate image width dynamically
function getImageWidth() {
  return images[0] ? images[0].offsetWidth + 20 : 320; // fallback to 320
}

function updateCarousel() {
  imagesContainer.style.transform =
    `translateX(-${currentIndex * getImageWidth()}px)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
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

// Initialize carousel after images load
window.addEventListener("load", () => {
  updateCarousel();
});