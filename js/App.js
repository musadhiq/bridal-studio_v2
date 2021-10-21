const home = document.querySelector(".spotlight");

const positions = [
  {
    left: 374,
    top: 150,
  },
  {
    left: 687,
    top: 208,
  },
  {
    left: 355,
    top: 557,
  },
  {
    left: 829,
    top: 501,
  },
  {
    left: 961,
    top: 221,
  },
  {
    left: 461,
    top: 291,
  },
  {
    left: 534,
    top: 192,
  },
  {
    left: 638,
    top: 560,
  },
  {
    left: 937,
    top: 410,
  },
  {
    left: 222,
    top: 555,
  },
  {
    left: 844,
    top: 138,
  },
  {
    left: 538,
    top: 478,
  },
  {
    left: 158,
    top: 357,
  },
  {
    left: 300,
    top: 258,
  },
  {
    left: 215,
    top: 154,
  },
];
positions.map((position) => {
  let heart = document.createElement("div");
  var parentPositionLeft = heart.getBoundingClientRect().left;
  var parentPositionTop = heart.getBoundingClientRect().top;
  heart.style.left = parentPositionLeft + position.left + "px";
  heart.style.top = parentPositionTop + position.top + "px";

  heart.className += "hehe";
  heart.innerHTML = `<div class="heart2"></div>`;
  document.body.appendChild(heart);
});

home.addEventListener("click", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  let heart = document.createElement("div");
  var parentPositionLeft = heart.getBoundingClientRect().left;
  var parentPositionTop = heart.getBoundingClientRect().top;

  heart.style.left = parentPositionLeft + x + "px";
  heart.style.top = parentPositionTop + y + "px";

  heart.className += "hehe";
  heart.innerHTML = `<div class="heart2"></div>`;
  document.body.appendChild(heart);
  console.log(heart);
  //   setTimeout(() => {
  //     document.body.removeChild(heart);
  //   }, 590);
});
