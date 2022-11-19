import {seeIfStudentExist, getStudentName} from "./studentList.js"
import { CoursesControllerSingleton } from "./coursesController";
let coursesController=CoursesControllerSingleton.getInstance()

const hoursToConsiderDayOverloaded=3

const BtnToEnrollCourse=document.querySelector("#BtnToEnrollCourse");
const enrollCourse=document.querySelector("#enrollCourse");
const coursesList = document.querySelector("#coursesList");
const homeworkDays = document.querySelector("#daysWithHomework");
const actualHomework = document.querySelector("#actualHomework");
const estudiantesPage = document.querySelector("#estudiantesPage");
const courseBox = document.querySelector("#courseBox")
let student

estudiantesPage.addEventListener("click", (event) => {
  event.preventDefault();
  loadBaseStatus()
});

function loadBaseStatus()
{
  student = seeIfStudentExist(getStudentName())
  console.log(student)
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
    student.addCoursesToStudent(courseName)
    let newOption = document.createElement("option");
    newOption.text = courseName;
    newOption.value = courseName;
    courseBox.appendChild(newOption);
    loadCourses();
    loadListByDates();
  }
  else{
    alert("no te lograste inscribir a la materia");
  }
});

function loadCourses()
{
  coursesList.innerHTML = student.showAllEnrolledCourses()
}

function loadListByDates()
{  
  homeworkDays.innerHTML=""
  console.log(student.getCoursesStudent())
  let HomeworkDatesObj=coursesController.getStudentHomeworksByDate(student.getCoursesStudent())
  Object.keys(HomeworkDatesObj).forEach((date)=>
  {
    addElementsToFather(homeworkDays,loadDateContainer(HomeworkDatesObj[date],date))
  })

}
function addListenerForSelectedCourse(){

  courseBox.addEventListener('change', (event) => {
    loadSelectedCourse(event.target.value)
  });
}
function loadSelectedCourse(course){
  homeworkDays.innerHTML=""
  let homeworkDatesObj=coursesController.getStudentHomeworkByClass(course)
  Object.keys(homeworkDatesObj).forEach((date)=>{
    addElementsToFather(homeworkDays,loadDateContainer(homeworkDatesObj[date],date))
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
    student.completeHomework(hmwkId);
    coursesController.markHmwkAsDone(hmwkId);
  });
}
function InitializeMarkButton(Button,homeworkId)
{
  let disabled=student.getIfIdCompleted(homeworkId)
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
  addPropsToElement(dateTittleDiv,{"id":"divFechaTitle" + date}, date + "==>")
  addElementsToFather(dateContainer,dateTittleDiv)
  for(let i=0; i<homeworksArray.length; i++)
  {
    addElementsToFather(dateContainer, createHomeworkItem(homeworksArray[i]))
  }
  if(coursesController.getHoursToComplete(homeworksArray)>hoursToConsiderDayOverloaded)
    dateTittleDiv.style.color="red";
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
  addListenerForSelectedCourse();
  InitializeMarkButton(homeworkMarkButton,homework.id)
  return homeworkContainer
}