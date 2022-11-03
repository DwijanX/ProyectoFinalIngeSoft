import createHomework from "./docente";

const HomeworkName = document.querySelector("#HomeworkName");
const CourseName = document.querySelector("#courseName");
const DateInit = document.querySelector("#dateInit");
const DateFin = document.querySelector("#dateFin");
const form=document.querySelector("#HomeworkCreation-form");
const noNumberFields=document.querySelectorAll(".noNumberField")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  createHomework(hmwkName,dateInit,dateFin,courseName)
});



noNumberFields.forEach(noNumberField=>
  {
    noNumberField.addEventListener("input", (event) => {
      event.preventDefault();
      let currentLength=String(noNumberField.value).length-1
      if (isNaN(noNumberField.value[currentLength])==false)
      {
        noNumberField.value = noNumberField.value.slice(0,currentLength-1)
      }
    });
  })
