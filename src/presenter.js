const {readFileSync, promises: fsPromises} = require('fs');

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");
const MainDiv = document.querySelector("#MainDiv");



docentesPage.addEventListener("click", (event) => {
  const contents = readFileSync("HtmlCode\\docentes.html", 'utf-8');
  MainDiv.innerHTML=contents;
  
});
estudiantesPage.addEventListener("click", (event) => {
  const contents = readFileSync("HtmlCode\\estudiantes.html", 'utf-8');
  MainDiv.innerHTML=contents;
  
});

