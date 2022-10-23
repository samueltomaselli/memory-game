const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");

input.addEventListener("input", ({ target }) => {
  if (target.value.length > 1) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
});

const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("player", input.value);
  window.location = "pages/game.html";
};

form.addEventListener("submit", handleSubmit);
