import {addCoursesToStudent, showAllEnrolledCourses, getCourses, daysWithHomework} from "./estudiante.js"
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
    addCoursesToStudent(courseName)
    coursesList.innerHTML = showAllEnrolledCourses()
  }
  else{
    alert("no te lograste inscribir a la materia");
  }
});

function showAllHomeworkByDays()
{
  let homeworkDays = daysWithHomework()
  for (let i=0; i<homeworkDays.length; i++)
  {
  //anadir un nuevo div para cada dia y luego mostrarlo
  }
}