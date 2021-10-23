// const home = document.querySelector(".spotlight");

// const positions = [
//   {
//     left: 374,
//     top: 150,
//   },
//   {
//     left: 687,
//     top: 208,
//   },
//   {
//     left: 355,
//     top: 557,
//   },
//   {
//     left: 829,
//     top: 501,
//   },
//   {
//     left: 961,
//     top: 221,
//   },
//   {
//     left: 461,
//     top: 291,
//   },
//   {
//     left: 534,
//     top: 192,
//   },
//   {
//     left: 638,
//     top: 560,
//   },
//   {
//     left: 937,
//     top: 410,
//   },
//   {
//     left: 222,
//     top: 555,
//   },
//   {
//     left: 844,
//     top: 138,
//   },
//   {
//     left: 538,
//     top: 478,
//   },
//   {
//     left: 158,
//     top: 357,
//   },
//   {
//     left: 300,
//     top: 258,
//   },
//   {
//     left: 215,
//     top: 154,
//   },
// ];

// home.addEventListener("click", (e) => {
//   positions.map((position) => {
//     var heart = document.createElement("div");
//     var parentPositionLeft = heart.getBoundingClientRect().left;
//     var parentPositionTop = heart.getBoundingClientRect().top;
//     heart.style.left = parentPositionLeft + position.left + "px";
//     heart.style.top = parentPositionTop + position.top + "px";

//     heart.className += "hehe";
//     heart.innerHTML = `<div class="heart2"></div>`;
//     document.body.appendChild(heart);
//     setTimeout(() => {
//       document.body.removeChild(heart);
//     }, 5000);
//   });
// });

// nav bar

const navBtn = document.querySelector(".button-nav");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  requestAnimationFrame(() => {
    navLinks.classList.toggle("open");
  });
});
