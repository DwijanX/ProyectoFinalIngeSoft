
const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./docentes.html";
});
