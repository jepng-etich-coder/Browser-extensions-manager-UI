/*Pseudo code
ON page load:
    CHECK if a saved theme exists in local storage
    IF a theme exists THEN
        APPLY the saved theme (e.g., add/remove `dark´ class or attribute)
    ELSE
        SET default theme to light
    END IF

WHEN the user clicks the theme toggle switch:
    IF the current theme is light THEN
        SWITCH to dark theme
        ADD `dark´ class or data attribute to the document
        SAVE `dark´ theme in local storage
    ELSE
        SWITCH to light theme
        REMOVE `dark´ class or data attribute from the document
        SAVE `light´ theme in local storage

*/
let darkmode = localStorage.getItem("darkmode");

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
  //   darkmode !== "active" ? enableDarkmode : disableDarkmode;
});
