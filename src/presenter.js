const {readFileSync, promises: fsPromises} = require('fs');

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");
const TeachersDiv = document.querySelector("#TeachersDiv");
const StudentsDiv = document.querySelector("#StudentsDiv");
const createHmwkForm=document.querySelector("#HomeworkCreation-form");



docentesPage.addEventListener("click", (event) => {

  TeachersDiv.style.display="flex"
  StudentsDiv.style.display="none"
  resetMinorObjsStyles()
  
  
});
estudiantesPage.addEventListener("click", (event) => {
  StudentsDiv.style.display="flex"
  TeachersDiv.style.display="none"
  resetMinorObjsStyles()
  
});

function resetMinorObjsStyles()
{
  createHmwkForm.style.display="none"
}