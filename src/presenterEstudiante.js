import {showCoursesOnConsole} from "./estudiante"
import {getCourseHomeworks} from "./docente.js";

const BtnToEnrollCourse=document.querySelector("#BtnToEnrollCourse");
const enrollCourse=document.querySelector("#enrollCourse");
const coursesList =  document.querySelector("#coursesList");

BtnToEnrollCourse.addEventListener("click", (event) => {
  event.preventDefault();
  const courseName = enrollCourse.value;
  const course = getCourseHomeworks(courseName)
  if(course!= 1)
  {
    alert("te inscribiste a " +courseName+ " con exito");
  }
  else{
    alert("no te lograste inscribir a la materia");
  }
});
