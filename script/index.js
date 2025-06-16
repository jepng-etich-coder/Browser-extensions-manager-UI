/*Theme switching */
let darkmode = localStorage.getItem("darkmode"); /*save to local storage*/
const themeSwitch = document.querySelector("#theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};
if (darkmode === "active") {
  enableDarkmode();
}

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
};

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

/*Handle toggles to set active state */

const toggles = document.querySelectorAll(".toggle-switch");
toggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const card = toggle.closest(".card");
    if (toggle.checked) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
});

/*Handle filtering buttons */
const activeBtn = document.querySelector("#nav-btn-active");
const inactiveBtn = document.querySelector("#nav-btn-inactive");
const allBtn = document.querySelector("#nav-btn-all");
const cards = document.querySelectorAll(".card");

activeBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

inactiveBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    if (!card.classList.contains("active")) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

allBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("hidden");
  });
});

/*Handle removing card */
const removeBtns = document.querySelectorAll(".remove-btn");
removeBtns.forEach((removeBtn) => {
  removeBtn.addEventListener("click", () => {
    const card = removeBtn.closest(".card");
    card.classList.add("hidden");
  });
});
