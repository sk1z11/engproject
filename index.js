// timing to show animate fade
const ANIMATE_SWITCH_TIME = 7000;

window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  setTimeout(() => {
    const cards = app.querySelector(".cards");
    const firstCard = cards.firstElementChild;
    const switchIcon = firstCard.querySelector(".switch");

    let isTouchedFirstCard = false;
    firstCard.addEventListener("touchstart", () => {
      isTouchedFirstCard = true;
    });

    if (!isTouchedFirstCard){
      switchIcon.classList.add("switch--do");
    }
  }, ANIMATE_SWITCH_TIME);
});
