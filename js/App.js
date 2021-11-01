// nav bar

const navBtn = document.querySelector(".button-nav");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  requestAnimationFrame(() => {
    navLinks.classList.toggle("open");
    navBtn.classList.toggle("open");
  });
});
navLinks.addEventListener("click", () => {
  requestAnimationFrame(() => {
    navLinks.classList.remove("open");
    navBtn.classList.remove("open");
  });
});

//  testimonial slider
const container = document.querySelector(".testimonial-container");
// const testimonialSlider = document.querySelector(".testimonial-slider");
// const SliderItems = Array.from(testimonialSlider.children);
console.log(container);
const arrow = document.querySelector(".arrow-test");
container.addEventListener("scroll", (e) => {
  const { scrollLeft, scrollWidth, clientWidth } = e.target;
  const width = scrollWidth - clientWidth;
  console.log(width);
  if (scrollLeft === width) {
    arrow.classList.remove("fa-angle-double-right");
    arrow.classList.add("fa-angle-double-left");
  }
  if (scrollLeft === 0) {
    arrow.classList.remove("fa-angle-double-left");
    arrow.classList.add("fa-angle-double-right");
  }
});
