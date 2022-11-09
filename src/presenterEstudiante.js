import {addCoursesToStudent, showAllEnrolledCourses, daysWithHomework} from "./estudiante.js"
import {getCourseHomeworks,markHmwkAsDone} from "./docente.js";

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
  const newDiv = document.createElement('div');
  while (homeworkDays.firstChild) {
    homeworkDays.removeChild(homeworkDays.lastChild);
  }

  for (const [key, values] of Object.entries(homework)) {
    addDateToList(key,values)

  }
}

function addListenerForfurtherinfo(homworkDiv,homework){
  homworkDiv.addEventListener('click', function handleClick(event){
    showFurtherInformation(homework);
  });
}

function showFurtherInformation(homework){
 actualHomework.innerHTML= `Homework : ${homework.name} started on ${homework.dateInit} and you must complete it by ${homework.dateFin}`
}
function addElementsToFather(Father,...children)
{
  for(let index=0;index<children.length;index++)
  {
    Father.appendChild(children[index])
  }
}
function addPropsToElement(element,props,innerHTML)
{
  element.innerHTML=innerHTML;
  for (let property in props) {
    element.setAttribute(`${property}`,`${props[property]}`);
  }
}
function homeworkMarkButtonListener(element,hmwkId)
{
  element.addEventListener('click', function handleClick(event){
    markHmwkAsDone(hmwkId);
  });
}
function addDateToList(date, homework)
{
  const dateContainer=document.createElement('div');
  const dateTittleDiv = document.createElement('h3');
  addPropsToElement(dateTittleDiv,{"id":"divFecha"+fechaNumber,"class":"divFecha" + fechaNumber}, date + "==>")
  addElementsToFather(dateContainer,dateTittleDiv)

  for(let i=0; i<homework.length; i++)
  {
    let homeworkContainer=document.createElement("div");
    let homeworkMarkButton= document.createElement('button');
    let homeworkName = document.createElement('div');
    addPropsToElement(homeworkName,{"id":"hmwkName"+homework[i].id}, homework[i].name)
    addPropsToElement(homeworkMarkButton,{"id":"hmwkBtn"+homework[i].id}, "Marcar como completada")
    addElementsToFather(homeworkContainer,homeworkName,homeworkMarkButton)
    addElementsToFather(dateContainer,homeworkContainer)
    addListenerForfurtherinfo(homeworkName,homework[i]);
    homeworkMarkButtonListener(homeworkMarkButton,homework[i].id);
  }
  addElementsToFather(homeworkDays,dateContainer)

}
  

