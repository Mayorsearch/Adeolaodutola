console.log("Script loaded");

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");
console.log("FAQ questions found:", faqQuestions.length);
faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    console.log("Clicked question, answer:", answer);

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

console.log("Carousel elements found - images:", images.length, "dots:", dots.length, "nextBtn:", nextBtn, "prevBtn:", prevBtn);

let currentIndex = 0;

// Calculate image width dynamically
function getImageWidth() {
  const width = images[0] ? images[0].offsetWidth + 20 : 320;
  console.log("Image width:", width);
  return width;
}

function updateCarousel() {
  const transform = `translateX(-${currentIndex * getImageWidth()}px)`;
  console.log("Updating carousel to index", currentIndex, "transform:", transform);
  imagesContainer.style.transform = transform;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    console.log("Next clicked");
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    console.log("Prev clicked");
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateCarousel();
  });
}

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    console.log("Dot clicked:", index);
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize carousel after images load
window.addEventListener("load", () => {
  console.log("Window loaded, initializing carousel");
  updateCarousel();
});