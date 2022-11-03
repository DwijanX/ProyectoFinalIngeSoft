import createHomework from "./docente";

const HomeworkName = document.querySelector("#HomeworkName");
const CourseName = document.querySelector("#courseName");
const DateInit = document.querySelector("#dateInit");
const DateFin = document.querySelector("#dateFin");
const form=document.querySelector("#HomeworkCreation-form");

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");

form.addEventListener("click", (event) => {
  event.preventDefault();

  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  createHomework(hmwkName,dateInit,dateFin,courseName)
});

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./docentes.html";
});

estudiantesPage.addEventListener("click", (event) => {
  event.preventDefault();

  document.location.href = "./estudiantes.html";
});