import * as errorCode from './errorCodes'
import { CoursesControllerSingleton } from "./coursesController";
import {getCoursesFromAllStudentsWithinACourse} from "./studentList.js"
import {getProfessorName} from "./predefinedCourses"

let coursesController=CoursesControllerSingleton.getInstance()

let alertMessages={[errorCode.OK]:"Se creo correctamente",
  [errorCode.CourseNotFound]:"No existe el curso",
  [errorCode.HomeworkNotFound]:"No existe la tarea",
  [errorCode.DeadlineAlreadyPassed]:"La fecha final ya paso",
  [errorCode.DeadlineCantBeLowerThanInit]:"La fecha inicial no puede ser mayor a la final"}
  

const createHmwkForm=document.querySelector("#HomeworkCreation-form");
const createCourseForm=document.querySelector("#CourseCreation-form");
const HomeworkMoficationForm=document.querySelector("#HomeworkMofication-form");
const BtnToCreateHmwk=document.querySelector("#BtnToCreateHmwk");
const BtnToCreateCourse=document.querySelector("#BtnToCreateCourse");
const selectedHomeworkStats=document.querySelector("#selectedHomeworkStats");
const docentesPage = document.querySelector("#docentesPage");

//Form Objects
const HomeworkName = document.querySelector("#HomeworkName");
const CourseName = document.querySelector("#courseName");
const DateInit = document.querySelector("#dateInit");
const DateFin = document.querySelector("#dateFin");
const CourseNameCreation = document.querySelector("#CourseNameCreation");
const courseInitials = document.querySelector("#courseInitials");
const TeachersName = document.querySelector("#TeachersName");
const HomeworkNameModif = document.querySelector("#HomeworkNameModif");
const dateInitModif = document.querySelector("#dateInitModif");
const dateFinModif = document.querySelector("#dateFinModif");
const IDModif = document.querySelector("#IDModif");
const CourseNameModif = document.querySelector("#CourseNameModif");
const homeworkList =  document.querySelector("#homeworkList");
const selectedHomework = document.querySelector("#selectedHomework");
const HoursNeededHmwk=document.querySelector("#HoursNeededHmwk");

let noNumberFields=document.querySelectorAll(".noNumbersInput")

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();
  loadTeacherViewBaseStatus()
});

function loadTeacherViewBaseStatus()
{
  selectedHomeworkStats.innerHTML=""
  selectedHomework.innerHTML=""
  loadListByDates()
}


createHmwkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  const hoursNeeded=HoursNeededHmwk.value
  let status=coursesController.tryToCreateHomework(hmwkName,dateInit,dateFin,courseName,hoursNeeded)
  console.log(coursesController.getHomeworkBasedOnId(13));
  alert(alertMessages[status])
  if(status==errorCode.OK)
  {
    loadListByDates()
  }
});
HomeworkMoficationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const hmwkName = HomeworkNameModif.value;
  const dateInit = dateInitModif.value;
  const dateFin = dateFinModif.value;
  const idModif = IDModif.value;
  const courseNameModif = CourseNameModif.value;
  let status=coursesController.tryToModifyHomework(idModif,hmwkName,dateInit,dateFin,courseNameModif)
  alert(alertMessages[status]);
  loadListByDates()
  showItemsOnClick(idModif)

  return status;
});
createCourseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const CourseName = CourseNameCreation.value;
  const CourseInitials = courseInitials.value;
  const Teacher = TeachersName.value;
  coursesController.tryToCreateCourse(CourseInitials,CourseName,Teacher);
  alert("Curso creado con exito");
});
BtnToCreateHmwk.addEventListener("click", (event) => {
  event.preventDefault();
  createHmwkForm.style.display="block"
  createCourseForm.style.display="none"
  HomeworkMoficationForm.style.display="none"
});
BtnToCreateCourse.addEventListener("click", (event) => {
  event.preventDefault();
  createCourseForm.style.display="block"
  createHmwkForm.style.display="none"
  HomeworkMoficationForm.style.display="none"

});

noNumberFields.forEach(noNumberField=>
    {
      noNumberField.addEventListener("input", (event) => {
        event.preventDefault();
        let currentLength=String(noNumberField.value).length-1
        if (isNaN(noNumberField.value[currentLength])==false && noNumberField.value[currentLength]!=" ")
        {
          noNumberField.value = noNumberField.value.slice(0,currentLength)
        }
      });
    })

function loadHomeworkByStudentCourses()
{
  let course = coursesController.getCourseByProfessorName(getProfessorName())
  return getCoursesFromAllStudentsWithinACourse(course)
}
  /*  
function getStudentsSizeInHomework(homework)
{

}*/

function loadListByDates()
{  
  homeworkList.innerHTML=""
  console.log(loadHomeworkByStudentCourses())
  let HomeworkDatesObj=coursesController.getAllHomeworksByDate(loadHomeworkByStudentCourses())
  Object.keys(HomeworkDatesObj).forEach((date)=>
  {
    addElementsToFather(homeworkList,loadDateContainer(HomeworkDatesObj[date],date))
  })

}
function loadDateContainer(homeworksArray,date)
{
  let dateContainer=document.createElement('div');
  let dateTittleDiv = document.createElement('h3');
  addPropsToElement(dateContainer,{"id":"divFechaDocente"+date})
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
  let idList = homework.getId().toString();
  //Name Div
  const homeworkNameDiv = document.createElement('div');
  addPropsToElement(homeworkNameDiv,{"class":"HomeworkText","id":"divName" + idList},homework.name)
  //delete button
  const deleteButton = document.createElement('button');
  addPropsToElement(deleteButton,{"class":"HomeworkBtn","id":idList+"dlt"},"Eliminar")
  //ModifyButton
  const modifyButton = document.createElement('button');
  addPropsToElement(modifyButton,{"class":"HomeworkBtn","id":idList+"mdf"},"Modificar")

  //Container
  const HmwkContainer=document.createElement('div');
  addPropsToElement(HmwkContainer,{"class":"HomeworkContainer","id":"div" + idList})
  addElementsToFather(HmwkContainer,homeworkNameDiv,modifyButton,deleteButton)
  //event listeners
  addListenerForNewItem(homeworkNameDiv,idList);
  addListenerToModifyButton(modifyButton,homework);
  addListenerToDeleteButton(deleteButton,homework)
  return HmwkContainer
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
function addListenerToDeleteButton(deleteButton,homework){
  deleteButton.addEventListener('click', (event=>{
    HomeworkMoficationForm.style.display="none";
    createHmwkForm.style.display="block";
    createCourseForm.style.display="none";
    deleteHomeworkFromHTML(homework.id)
  console.log(homework);
    coursesController.deleteHomework(homework.courseName,homework.id);
    showItemsOnClick(homework.id)
    alert("La Tarea fue eliminada exitosamente");
  }))
  
}
function addListenerToModifyButton(modifyButton,homework)
{
  modifyButton.addEventListener('click', (event=>{
    HomeworkMoficationForm.style.display="block"
    createHmwkForm.style.display="none"
    createCourseForm.style.display="none"
    loadModificationFormWithHmwkInfo(homework)
  })) 
}

function loadModificationFormWithHmwkInfo(homework)
{
  IDModif.value=homework.id
  CourseNameModif.value=homework.courseName
  HomeworkNameModif.value=homework.name
  dateInitModif.value=homework.dateInit
  dateFinModif.value=homework.dateFin
} 
function addListenerForNewItem(newHomeworkDiv,id)
{
    newHomeworkDiv.addEventListener('click', function handleClick(event) {
      showItemsOnClick(id);
      loadHomeworkStats(id);
    });
}

function showItemsOnClick(divID)
{
  const homework = coursesController.getHomeworkBasedOnId(parseInt(divID))
  console.log("desde show");
  console.log(homework);
  if(homework != 2)
  {
    selectedHomework.innerHTML = "nombre: " + homework.name + " , fecha inicio: " + homework.dateInit + " , fecha fin: " + 
    homework.dateFin + " , materia: " + homework.courseName+", Horas necesarias:  "+homework.hoursNeeded+", Horas por dia:  "+homework.getHoursPerDay();
  }
  else{
    selectedHomework.innerHTML = ""
  }
  
}
function loadHomeworkStats(id)
{
  const homework = coursesController.getHomeworkBasedOnId(parseInt(id))
  selectedHomeworkStats.innerHTML="Completa "+homework.timesCompleted+" veces";
}

function deleteHomeworkFromHTML(divID)
{
  let ObjectId = "#div" + divID.toString()
  console.log(ObjectId);
  let homeworkToModify = document.querySelector(ObjectId)
  homeworkToModify.remove()
  selectedHomeworkStats.innerHTML=""
}

export {loadTeacherViewBaseStatus} 