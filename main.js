let even = [];
let odd = [];

const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const firstText = document.querySelector("#first-text");
const secondText = document.querySelector("#second-text");
const tekst = document.querySelector(".tekst");
const cont = document.querySelector(".container");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isNaN(elInput.value)) {
    cont.classList.add("d-none");
    tekst.classList.remove("d-none");
    tekst.innerHTML = "Iltimos raqam kiritsangiz!!!";
    elInput.value = "";
  } else if (elInput.value.length == 0) {
    cont.classList.add("d-none");
    tekst.classList.remove("d-none");
    tekst.innerHTML = "Iltimos nimadir kiritsangiz!!!";
    elInput.value = "";
  } else if (elInput.value % 2 == 0) {
    cont.classList.remove("d-none");
    tekst.classList.add("d-none");
    even.push(Number(elInput.value));
    elInput.value = "";
    firstText.innerHTML = "Juft sonlar: " + even;
    console.log(even);
  } else {
    cont.classList.remove("d-none");
    tekst.classList.add("d-none");
    odd.push(Number(elInput.value));
    elInput.value = "";
    secondText.innerHTML = "Toq sonlar: " + odd;
    console.log(odd);
  }
});
