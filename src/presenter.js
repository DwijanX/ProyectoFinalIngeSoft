const {readFileSync, promises: fsPromises} = require('fs');

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");
const TeachersDiv = document.querySelector("#TeachersDiv");
const StudentsDiv = document.querySelector("#StudentsDiv");




docentesPage.addEventListener("click", (event) => {

  TeachersDiv.style.display="flex"
  StudentsDiv.style.display="none"
  
});
estudiantesPage.addEventListener("click", (event) => {
  StudentsDiv.style.display="flex"
  TeachersDiv.style.display="none"
  
});

