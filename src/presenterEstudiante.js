import {addCoursesToStudent, showAllEnrolledCourses, getCourses, daysWithHomework} from "./estudiante.js"
import {getCourseHomeworks} from "./docente.js";

const BtnToEnrollCourse=document.querySelector("#BtnToEnrollCourse");
const enrollCourse=document.querySelector("#enrollCourse");
const coursesList =  document.querySelector("#coursesList");
const homeworkDays =  document.querySelector("#daysWithHomework");


let fechaNumber = 0


BtnToEnrollCourse.addEventListener("click", (event) => {
  event.preventDefault();
  const courseName = enrollCourse.value;
  const course = getCourseHomeworks(courseName)
  if(course!= 1)
  {
    alert("te inscribiste a " +courseName+ " con exito");
    addCoursesToStudent(courseName)
    coursesList.innerHTML = showAllEnrolledCourses()
    showAllHomeworkByDays()
  }
  else{
    alert("no te lograste inscribir a la materia");
  }
});

function showAllHomeworkByDays()
{
  let homeworkDays = daysWithHomework()

  const iterator = homeworkDays.values();
  addDateToList(iterator.next().value)
 /*for (let i=0; i<homeworkDays.size; i++)
  {
    console.log(homeworkDays[i])
    addDateToList(homeworkDays[i])
  }*/
}


function addDateToList(date)
{
  const dateContainer=document.createElement('div');
  const newDiv = document.createElement('div');
  const newHomework = document.createElement('div');
  newDiv.setAttribute("id", "divFecha" + fechaNumber); //added "div" for no #<number> iDs (breaks finder)
  newDiv.setAttribute("class", "showTarea");
  newDiv.innerHTML += date + "==>";
  dateContainer.appendChild(newDiv);
  HmwkContainer.appendChild(newHomework);
  homeworkDays.appendChild(dateContainer);
}