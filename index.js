const menuBall = document.querySelector(".call__in");
const menuLinks = Array.from(document.querySelectorAll(".menu__item"));

let showCasing = false;
let menuCasing = false;

document.addEventListener("click", () => {
  console.log(showCasing, menuCasing);
});

menuBall.addEventListener("click", () => {
  if (showCasing) {
    document.querySelector(".showcase").style = "";
    document.querySelector(".showcase").classList.remove("showcase");
    document.getElementById("menuButt").classList.toggle("show__me");
    showCasing = false;
    return;
  }

  // console.log("menu");
  if (!showCasing) {
    document.getElementById("bc__name").classList.toggle("hidden");
  }
  document.getElementById("menuButt").classList.toggle("show__me");
});

menuLinks.forEach((link, index) => {
  let backwards = menuLinks.length - index - 1;
  let backAdjust = backwards * 24;
  let offsetAdjusted = link.offsetTop - backAdjust;
  let jumpUp = offsetAdjusted * -1;
  console.table(index, jumpUp);

  link.addEventListener("click", (e) => {
    e.target.classList.add("showcase");
    e.target.style = `transform: translateY(${jumpUp}px)`;
    document.getElementById("menuButt").classList.remove("show__me");
    showCasing = true;
  });
});

// `transform: "translateY(100px)";`;
