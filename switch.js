// @ts-check

/** @type {NodeListOf<HTMLButtonElement>} */
const switchButtons = document.querySelectorAll(".light-switch");

switchButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentTheme = document.body.classList.value;
    const opositeTheme = currentTheme == "light" ? "dark" : "light";
    document.body.classList.remove(currentTheme)
    document.body.classList.add(opositeTheme)
    window.localStorage.setItem("theme", opositeTheme)
  })
})