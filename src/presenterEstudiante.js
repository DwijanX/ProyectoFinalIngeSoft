import {addCoursesToStudent, showAllEnrolledCourses, getCourses, daysWithHomework, getHomeworkList} from "./estudiante.js"
import {getCourseHomeworks, getHomeworkBasedOnId} from "./docente.js";

const BtnToEnrollCourse=document.querySelector("#BtnToEnrollCourse");
const enrollCourse=document.querySelector("#enrollCourse");
const coursesList = document.querySelector("#coursesList");
const homeworkDays = document.querySelector("#daysWithHomework");
const homeworkList =  document.querySelector("#homeworkList");
const actualHomework = document.querySelector("#actualHomework");

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
  let homework = daysWithHomework();
  //idList = getHomeworkList.length;
  //newDiv.setAttribute("id", "div" + idList);
  const newDiv = document.createElement('div');
  while (homeworkDays.firstChild) {
    homeworkDays.removeChild(homeworkDays.lastChild);
  }

  for (const [key, values] of Object.entries(homework)) {
    addDateToList(key,values)

  }
  //addListenerForfurtherinfo(newDiv,idList);
}

function addListenerForfurtherinfo(homworkDiv,homework){
  homworkDiv.addEventListener('click', function handleClick(event){
    showFurtherInformation(homework);
  });
}

function showFurtherInformation(homework){
 // homework != 2 ? selectedHomework.innerHTML= `Homework : ${homework.name} started on ${homework.dateInit} and you must complete it by ${homework.dateFin}` : selectedHomework.innerHTML = ""
 actualHomework.innerHTML= `Homework : ${homework.name} started on ${homework.dateInit} and you must complete it by ${homework.dateFin}`
}
function addDateToList(date, homework)
{
  const dateContainer=document.createElement('div');
  const newDiv = document.createElement('div');
  const superDiv = document.createElement('div');
  const checkBox = document.createElement('checkbox');
  superDiv.appendChild(newDiv);
  superDiv.appendChild(checkBox);
  idList = getHomeworkList.length;
  newDiv.setAttribute("id", "div" + idList);
  newDiv.setAttribute("id", "divFecha" + fechaNumber); //added "div" for no #<number> iDs (breaks finder)
  newDiv.setAttribute("class", "showTarea");
  newDiv.innerHTML += date + "==>";
  dateContainer.appendChild(superDiv);
  for(let i=0; i<homework.length; i++)
  {
    const newHomework = document.createElement('div');
    newHomework.innerHTML = homework[i].name
    dateContainer.appendChild(newHomework);
    addListenerForfurtherinfo(newHomework,homework[i]);
  }
  homeworkDays.appendChild(dateContainer);

}
  

