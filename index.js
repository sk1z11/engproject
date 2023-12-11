// timing to show animate fade
const ANIMATE_SWITCH_TIME = 7000;

window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  const cards = app.querySelector(".cards");

  const swicthCard = (target, isClosest = true) => {
    const targetWrapper = isClosest ? target.closest(".card") : null;
    const frontCard = (isClosest ? targetWrapper : target).querySelector(
      ".card__front"
    );
    const backCard = (isClosest ? targetWrapper : target).querySelector(
      ".card__back"
    );

    if (frontCard.classList.contains("card__front--click")) {
      frontCard.classList.remove("card__front--click");
    } else isClosest && frontCard.classList.add("card__front--click");

    if (backCard.classList.contains("card__back--click")) {
      backCard.classList.remove("card__back--click");
    } else isClosest && backCard.classList.add("card__back--click");
  };

  cards.addEventListener("click", (event) => swicthCard(event.target));

  window.addEventListener("click", (event) => {
    const target = event.target;
    const itemCards = cards.querySelectorAll(".card");

    if (!target.closest(".cards")) {
      console.log(target);
      itemCards.forEach((card) => {
        swicthCard(card, false);
      });
    }
  });

  setTimeout(() => {
    const cards = app.querySelector(".cards");
    const firstCard = cards.firstElementChild;
    const switchIcon = firstCard.querySelector(".switch");

    let isTouchedFirstCard = false;
    firstCard.addEventListener("touchstart", () => {
      isTouchedFirstCard = true;
    });

    if (!isTouchedFirstCard) {
      switchIcon.classList.add("switch--do");
    }
  }, ANIMATE_SWITCH_TIME);
});
