import {addCoursesToStudent, showAllEnrolledCourses,completeHomework,getIfIdCompleted} from "./estudiante.js"
import { CoursesControllerSingleton } from "./coursesController";
let coursesController=CoursesControllerSingleton.getInstance()

const BtnToEnrollCourse=document.querySelector("#BtnToEnrollCourse");
const enrollCourse=document.querySelector("#enrollCourse");
const coursesList = document.querySelector("#coursesList");
const homeworkDays = document.querySelector("#daysWithHomework");
const actualHomework = document.querySelector("#actualHomework");
const estudiantesPage = document.querySelector("#estudiantesPage");

let fechaNumber = 0
estudiantesPage.addEventListener("click", (event) => {
  event.preventDefault();
  loadBaseStatus()
});

function loadBaseStatus()
{
  actualHomework.innerHTML=""
  enrollCourse.value=""
  loadCourses()
  loadListByDates()
}

BtnToEnrollCourse.addEventListener("click", (event) => {
  event.preventDefault();
  const courseName = enrollCourse.value;
  const course = coursesController.getCourseHomeworks(courseName)
  if(course!= 1)
  {
    alert("te inscribiste a " +courseName+ " con exito");
    addCoursesToStudent(courseName)
    loadCourses();
    loadListByDates();
  }
  else{
    alert("no te lograste inscribir a la materia");
  }
});
function loadCourses()
{
  coursesList.innerHTML = showAllEnrolledCourses()
}

function loadListByDates()
{  
  homeworkDays.innerHTML=""
  let HomeworkDatesObj=coursesController.getStudentHomeworksByDate()
  Object.keys(HomeworkDatesObj).forEach((date)=>
  {
    addElementsToFather(homeworkDays,loadDateContainer(HomeworkDatesObj[date],date))
  })

}
function addListenerForfurtherinfo(homworkDiv,homework){
  homworkDiv.addEventListener('click', function handleClick(event){
    showFurtherInformation(homework);
  });
}

function showFurtherInformation(homework){
 actualHomework.innerHTML= `Homework : ${homework.name} started on ${homework.dateInit} and you must complete it by ${homework.dateFin}`+", Horas necesarias:  "+homework.hoursNeeded+", Horas por dia:  "+homework.getHoursPerDay();
}
function addElementsToFather(Father,...children)
{
  for(let index=0;index<children.length;index++)
  {
    Father.appendChild(children[index])
  }
}
function addPropsToElement(element,props,...innerHTML)
{
  if(innerHTML[0]!=undefined)
    element.innerHTML=innerHTML[0];
  for (let property in props) {
    element.setAttribute(`${property}`,`${props[property]}`);
  }
}
function homeworkMarkButtonListener(element,hmwkId)
{
  element.addEventListener('click', function handleClick(event){
    element.disabled=true;
    element.style.backgroundColor="#00FF00"
    element.style.color="white"
    element.innerHTML="Done"
    completeHomework(hmwkId);
    coursesController.markHmwkAsDone(hmwkId);
  });
}
function InitializeMarkButton(Button,homeworkId)
{
  let disabled=getIfIdCompleted(homeworkId)
  Button.disabled=disabled
  if(disabled)
  {
    addPropsToElement(Button,{"id":"hmwkBtn"+homeworkId,"class":"HomeworkBtn"}, "Done")
    Button.style.backgroundColor="#00FF00"
    Button.style.color="white"
  }
  else
  {
    addPropsToElement(Button,{"id":"hmwkBtn"+homeworkId,"class":"HomeworkBtn"}, "Mark done")
    homeworkMarkButtonListener(Button,homeworkId);
  }

}

function loadDateContainer(homeworksArray,date)
{
  let dateContainer=document.createElement('div');
  dateContainer=document.createElement('div');
  let dateTittleDiv = document.createElement('h3');
  addPropsToElement(dateContainer,{"id":"divFecha"+date})
  addPropsToElement(dateTittleDiv,{"class":"divFecha" + date}, date + "==>")
  addElementsToFather(dateContainer,dateTittleDiv)
  for(let i=0; i<homeworksArray.length; i++)
  {
    addElementsToFather(dateContainer, createHomeworkItem(homeworksArray[i]))
  }
  return dateContainer
}
function createHomeworkItem(homework)
{
  let homeworkContainer=document.createElement("div");
  let nameContainer= document.createElement('div');
  let homeworkMarkButton= document.createElement('button');
  addPropsToElement(homeworkContainer,{"id":"hmwkCont"+homework.id,"class":"HomeworkContainer"})
  addPropsToElement(nameContainer,{"id":"hmwkName"+homework.id,"class":"HomeworkText"}, homework.name)
  addElementsToFather(homeworkContainer,nameContainer,homeworkMarkButton)
  addListenerForfurtherinfo(nameContainer,homework);
  InitializeMarkButton(homeworkMarkButton,homework.id)
  return homeworkContainer
}