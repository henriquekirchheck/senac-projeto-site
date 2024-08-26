function main() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const localStorage = window.localStorage.getItem("theme");

  if (localStorage) {
    document.body.classList.add(localStorage)
    return
  }
  document.body.classList.add(media.matches ? "dark" : "light")
}

main()