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

  for (const [key, values] of Object.entries(homeworkDays)) {
    addDateToList(key,values)
  }
 /*for (let i=0; i<homeworkDays.size; i++)
  {
    console.log(homeworkDays[i])
    addDateToList(homeworkDays[i])
  }*/
}


function addDateToList(date, homework)
{
  console.log(homework)
  const dateContainer=document.createElement('div');
  const newDiv = document.createElement('div');
  newDiv.setAttribute("id", "divFecha" + fechaNumber); //added "div" for no #<number> iDs (breaks finder)
  newDiv.setAttribute("class", "showTarea");
  newDiv.innerHTML += date + "==>";
  dateContainer.appendChild(newDiv);
  for(let i=0; i<homework.length; i++)
  {
    const newHomework = document.createElement('div');
    newHomework.innerHTML = homework[i].name
    dateContainer.appendChild(newHomework);
  }
  homeworkDays.appendChild(dateContainer);
}
