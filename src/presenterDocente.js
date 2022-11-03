import createHomework from "./docente";

const HomeworkName = document.querySelector("#HomeworkName");
const CourseName = document.querySelector("#courseName");
const DateInit = document.querySelector("#dateInit");
const DateFin = document.querySelector("#dateFin");
const form=document.querySelector("#HomeworkCreation-form");

form.addEventListener("click", (event) => {
  event.preventDefault();

  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  createHomework(hmwkName,dateInit,dateFin,courseName)
});
