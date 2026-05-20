document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HERO BUTTON
  ========================= */

  const enterButton = document.querySelector(".hero__button");

  if (enterButton) {
    enterButton.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = enterButton.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }

  /* =========================
   SECRET MODAL
========================= */

const secretBtn = document.getElementById("secret-btn");
const surpriseModal = document.getElementById("surprise-modal");
const modalClose = document.getElementById("modal-close");
const surpriseClose = document.getElementById("surprise-close");

if (surpriseClose && surpriseModal) {

  surpriseClose.addEventListener("click", () => {

    surpriseModal.classList.remove("open");

  });

}

if (secretBtn && surpriseModal) {

  secretBtn.addEventListener("click", () => {

    surpriseModal.classList.add("open");
    createConfetti();
  });

}

if (modalClose && surpriseModal) {

  modalClose.addEventListener("click", () => {
    surpriseModal.classList.remove("open");
  });

}


/* CLOSE WHEN CLICKING OUTSIDE */

const modalOverlay = document.querySelector(".surprise-modal__overlay");

if (modalOverlay && surpriseModal) {

  modalOverlay.addEventListener("click", () => {
    surpriseModal.classList.remove("open");
  });

}

  /* =========================
     LETTER INTERACTION
  ========================= */

  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  let letterOpen = false;

  if (envelope && letter) {

envelope.addEventListener("click", () => {

  console.log("Envelope clicked");

  if (!letterOpen) {

    envelope.classList.add("open");

    setTimeout(() => {
      letter.classList.add("visible");
    }, 400);

    letterOpen = true;

  } else {

    letter.classList.remove("visible");

    setTimeout(() => {
      envelope.classList.remove("open");
    }, 300);

    letterOpen = false;
  }
});
  }

  /* =========================
     GIFT BOX
  ========================= */

  const giftbox = document.getElementById("giftbox");
  const surprise = document.getElementById("surprise");

  let giftOpened = false;

  if (giftbox && surprise) {

giftbox.addEventListener("click", () => {

  console.log("Gift clicked");

  if (!giftOpened) {

    giftbox.classList.add("opened");

    setTimeout(() => {
      surprise.classList.add("visible");
      giftbox.classList.add("opened");
    }, 500);

    giftOpened = true;
  }
});
  }
});
function checkPassword() {
  console.log("button clicked");
  const password = document
    .getElementById("password-input")
    .value
    .trim();
  if (password === "blue") {
    document.getElementById("password-screen").style.display = "none";
  } else {
    alert("Wrong !!!! Try again.");
  }
}

function createConfetti() {
  const colors = [
    "#ffd700",
    "#ff4d6d",
    "#7b2cbf",
    "#00c2ff",
    "#ffffff"
  ];
  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("real-confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      2 + Math.random() * 3 + "s";
    confetti.style.transform =
      `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}