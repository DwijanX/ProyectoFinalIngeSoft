
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./docentes.html";
});

estudiantesPage.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./estudiantes.html";
});