import {createHomework,createCourse, getHomeworkArray, getHomeworkBasedOnId} from "./docente";


const createHmwkForm=document.querySelector("#HomeworkCreation-form");
const createCourseForm=document.querySelector("#CourseCreation-form");
const BtnToCreateHmwk=document.querySelector("#BtnToCreateHmwk");
const BtnToCreateCourse=document.querySelector("#BtnToCreateCourse");

//Form Objects
const HomeworkName = document.querySelector("#HomeworkName");
const CourseName = document.querySelector("#courseName");
const DateInit = document.querySelector("#dateInit");
const DateFin = document.querySelector("#dateFin");
const CourseNameCreation = document.querySelector("#CourseNameCreation");
const courseInitials = document.querySelector("#courseInitials");
const TeachersName = document.querySelector("#TeachersName");

const homeworkList =  document.querySelector("#homeworkList");
const selectedHomework = document.querySelector("#selectedHomework");
var showHomework = document.getElementsByClassName("showHomework");

noNumberFields=document.querySelectorAll(".noNumbersInput")

let idTarea = 0

createHmwkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  today=new Date()
  let status=0
  if(checkIfDate1IsLowerThan2(today,dateFin)==false)
  {
    alert("La fecha de fin ya paso");
    status= 1;
  }
  if (checkIfDate1IsLowerThan2(dateInit,dateFin)==false)
  {
    alert("La fecha inicial no puede ser mayor a la final");
    status= 2;
  }
  if (status==0)
    createHomework(hmwkName,dateInit,dateFin,courseName,idTarea)
    addItemToHomeworkList()
    idTarea++;
  return status;
});

createCourseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const CourseName = CourseNameCreation.value;
  const CourseInitials = courseInitials.value;
  const Teacher = TeachersName.value;
  createCourse(CourseInitials,CourseName,Teacher);
});


BtnToCreateHmwk.addEventListener("click", (event) => {
  event.preventDefault();
  createHmwkForm.style.display="block"
  createCourseForm.style.display="none"
});
BtnToCreateCourse.addEventListener("click", (event) => {
  event.preventDefault();
  createCourseForm.style.display="block"
  createHmwkForm.style.display="none"

});


noNumberFields.forEach(noNumberField=>
    {
      noNumberField.addEventListener("input", (event) => {
        event.preventDefault();
        let currentLength=String(noNumberField.value).length-1
        if (isNaN(noNumberField.value[currentLength])==false)
        {
          noNumberField.value = noNumberField.value.slice(0,currentLength-1)
        }
      });
    })

function checkIfDate1IsLowerThan2(date1,date2)
{
  date1=new Date(date1);
  date2=new Date(date2);
  console.log(date1);
  console.log(date2);
  if(date1-date2<=0)
    return true
  else
    return false
}

function addItemToHomeworkList()
{
  let homeworkArray = getHomeworkArray()
  let idList = "div" + idTarea.toString()
  const homework = homeworkArray[homeworkArray.length - 1]
  const newDiv = document.createElement('div')
  newDiv.setAttribute("id", idList)
  newDiv.setAttribute("class", "showHomework")
  newDiv.innerHTML += homework.name
  homeworkList.appendChild(newDiv)
  showHomework = document.getElementsByClassName("showHomework");
  addListenerForNewItem()
}

function addListenerForNewItem()
{
  for (const homework of showHomework) {
    homework.addEventListener('click', function handleClick(event) {
      showItemsOnClick(homework.id)
    });
  }
}

function showItemsOnClick(divID)
{
  let string = divID.toString()
  const homework = getHomeworkBasedOnId(parseInt(string.substr(3)))
  selectedHomework.innerHTML = "nombre: " + homework.name + " , fecha inicio: " + homework.dateInit + " , fecha fin: " + 
  homework.dateFin + " , materia: " + homework.courseName
}
