
const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  createHomework(hmwkName,dateInit,dateFin,courseName)
  
});
