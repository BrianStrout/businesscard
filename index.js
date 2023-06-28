const menuBall = document.querySelector(".call__in");
const menuLinks = Array.from(document.querySelectorAll(".menu__item"));

let location;
menuBall.addEventListener("click", () => {
  console.log("menu");
  document.querySelector(".name").classList.toggle("hidden");
  document.getElementById("menuButt").classList.toggle("show__me");
});

menuLinks.forEach((link, index) => {
  let backwards = menuLinks.length - index - 1;
  let backAdjust = backwards * 24;
  // console.log(link);
  console.log(index);
  console.log(backwards);
  console.log(link.offsetTop, typeof link.offsetTop);
  let offsetAdjusted = link.offsetTop - backAdjust;

  let jumpUp = offsetAdjusted * -1;

  console.table(index, jumpUp);
  // let place;
  // let placer = unitHeight * place;

  link.addEventListener("click", (e) => {
    // console.log(
    //   e.target,
    //   index,
    //   "x",
    //   link.clientHeight,
    //   "=",
    //   unitHeight,
    //   "?",
    //   jumpUp
    // );

    e.target.style = `transform: translateY(${jumpUp}px)`;
  });
});

// `transform: "translateY(100px)";`;
