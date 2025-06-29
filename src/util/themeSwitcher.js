function themeSwitcher() {
  const lightThemeButtons = document.querySelectorAll(".themeSwitcher-btn1");
  const darkThemeButtons = document.querySelectorAll(".themeSwitcher-btn2");

  const bodyTheme = document.body.classList;
  const currentTheme = localStorage.getItem("theme");

  currentTheme && bodyTheme.add(currentTheme);

  console.log(bodyTheme);

  lightThemeButtons.forEach(function switchToLightTheme(button) {
    button.addEventListener("click", () => {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");

      localStorage.setItem("theme", "theme-light");

      console.log(bodyTheme);
    });
  });

  darkThemeButtons.forEach(function switchToDarkTheme(button) {
    button.addEventListener("click", () => {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");

      localStorage.setItem("theme", "theme-dark");

      console.log(bodyTheme);
    });
  });
}

export default themeSwitcher;
