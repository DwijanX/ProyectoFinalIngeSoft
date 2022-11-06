const {readFileSync, promises: fsPromises} = require('fs');

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");
const TeachersDiv = document.querySelector("#TeachersDiv");
const StudentsDiv = document.querySelector("#StudentsDiv");
//Minor objects
const createHmwkForm=document.querySelector("#HomeworkCreation-form");
const createCourseForm=document.querySelector("#CourseCreation-form");



docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  createHomework(hmwkName,dateInit,dateFin,courseName)
  
});
estudiantesPage.addEventListener("click", (event) => {
  StudentsDiv.style.display="flex"
  TeachersDiv.style.display="none"
  resetMinorObjsStyles()
  
});

function resetMinorObjsStyles()
{
  createHmwkForm.style.display="none"
  createCourseForm.style.display="none"
}