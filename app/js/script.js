const form = document.querySelector(".hero__post__form");
const submitBtn = document.querySelector(".btn");
const firstName = document.querySelector(".hero__post__form__firstName");
const lastName = document.querySelector(".hero__post__form__lastName");
const email = document.querySelector(".hero__post__form__email");
const password = document.querySelector(".hero__post__form__password");
const elements = document.querySelectorAll(".formElement");

function formInput(name) {
  return `${name} cannot be empty`;
}

function createUIElement(name) {
  let errorDiv = document.createElement("div");
  let errorText = document.createTextNode(formInput(name));
  errorDiv.appendChild(errorText);
  errorDiv.classList.add("errorMessage");

  return errorDiv;
}

submitBtn.addEventListener("click", () => {
  if (
    firstName.value === "" &&
    !form.children[0].children[1].style.display == "block"
  ) {
    elements[0].appendChild(createUIElement("First Name"));

    form.children[0].children[1].style.display = "block";
    form.children[0].children[0].style.border = "2px solid var(--red)";
    form.children[0].children[0].removeAttribute("placeholder");
  }

  if (
    lastName.value === "" &&
    !form.children[0].children[1].style.display == "block"
  ) {
    elements[1].appendChild(createUIElement("Last Name"));

    form.children[1].children[1].style.display = "block";
    form.children[1].children[0].style.border = "2px solid var(--red)";
    form.children[1].children[0].removeAttribute("placeholder");
  }

  if (
    email.value === "" &&
    !form.children[0].children[1].style.display == "block"
  ) {
    elements[2].appendChild(createUIElement("Email Address"));

    form.children[2].children[1].style.display = "block";
    form.children[2].children[0].style.border = "2px solid var(--red)";
    form.children[2].children[0].removeAttribute("placeholder");
  }

  if (
    lastName.value === "" &&
    !form.children[0].children[1].style.display == "block"
  ) {
    elements[3].appendChild(createUIElement("Password"));

    form.children[3].children[1].style.display = "block";
    form.children[3].children[0].style.border = "2px solid var(--red)";
    form.children[3].children[0].removeAttribute("placeholder");
  }
});
