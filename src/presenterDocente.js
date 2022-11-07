import {createHomework,createCourse,modifyHomework , getHomeworkBasedOnId, deleteHomework} from "./docente";


const createHmwkForm=document.querySelector("#HomeworkCreation-form");
const createCourseForm=document.querySelector("#CourseCreation-form");
const HomeworkMoficationForm=document.querySelector("#HomeworkMofication-form");
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
const HomeworkNameModif = document.querySelector("#HomeworkNameModif");
const dateInitModif = document.querySelector("#dateInitModif");
const dateFinModif = document.querySelector("#dateFinModif");
const IDModif = document.querySelector("#IDModif");
const CourseNameModif = document.querySelector("#CourseNameModif");
const homeworkList =  document.querySelector("#homeworkList");
const selectedHomework = document.querySelector("#selectedHomework");
var showHomework = document.getElementsByClassName("showHomework");

noNumberFields=document.querySelectorAll(".noNumbersInput")

let idTarea = 0
function validateHomeworksInput(dateFin,dateInit)
{
  let status=0;
  today=new Date()
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
  return status
}

createHmwkForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const hmwkName = HomeworkName.value;
  const courseName = CourseName.value;
  const dateInit = DateInit.value;
  const dateFin = DateFin.value;
  
  let status=validateHomeworksInput(dateFin,dateInit);

  if (status==0)
  {
    let createdHmwk=createHomework(hmwkName,dateInit,dateFin,courseName,idTarea)
    if(createdHmwk!=null)
    {
      addItemToHomeworkList(createdHmwk)
      idTarea++;
    }
    else
    {
      alert("No existe el curso al que se intenta crear la tarea")
      status=3;
    }
  }
  return status;
});
// deleteButtonForm.addEventListener("submit", (event)=>{
//  event.preventDefault();
//  const idDelete = idToDelete.value;
//  const courseDelete = courseNameToDelete.value;
//  const startDate = startDateToDelete.value;
//  const endDate = endDateToDelete.value;
//  let status=validateHomeworksInput(startDate,endDate);
//  if(status==0){
//   deleteHomework(courseDelete,idDelete)
//  }
//  return status;
// });
HomeworkMoficationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const hmwkName = HomeworkNameModif.value;
  const dateInit = dateInitModif.value;
  const dateFin = dateFinModif.value;
  const idModif = IDModif.value;
  const courseNameModif = CourseNameModif.value;
  
  let status=validateHomeworksInput(dateFin,dateInit);
  if (status==0)
  {
    modifyHomework(idModif,hmwkName,dateInit,dateFin,courseNameModif)
  }
  return status;
});
createCourseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const CourseName = CourseNameCreation.value;
  const CourseInitials = courseInitials.value;
  const Teacher = TeachersName.value;
  createCourse(CourseInitials,CourseName,Teacher);
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
        if (isNaN(noNumberField.value[currentLength])==false)
        {
          noNumberField.value = noNumberField.value.slice(0,currentLength)
        }
      });
    })

function checkIfDate1IsLowerThan2(date1,date2)
{
  date1=new Date(date1);
  date2=new Date(date2);
  if(date1-date2<=0)
    return true
  else
    return false
}

function addItemToHomeworkList(homework)
{
  let idList = idTarea.toString();
  const HmwkContainer=document.createElement('div');
  const newDiv = document.createElement('div');
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML='Eliminar';
  const modifyButton = document.createElement('button');
  modifyButton.innerHTML="Modificar"
  newDiv.setAttribute("id", idList);
  newDiv.setAttribute("class", "showHomework");
  newDiv.innerHTML += homework.name;
  HmwkContainer.appendChild(newDiv);
  HmwkContainer.appendChild(modifyButton);
  HmwkContainer.appendChild(deleteButton);
  homeworkList.appendChild(HmwkContainer);
  addListenerForNewItem(newDiv,idList);
  addListenerToModifyButton(modifyButton,homework);
  addListenerToDeleteButton(deleteButton,homework)
}
function addListenerToDeleteButton(deleteButton,homework){
  deleteButton.addEventListener('click', (event=>{
    HomeworkMoficationForm.style.display="none";
    createHmwkForm.style.display="none";
    createCourseForm.style.display="none";
    deleteHomework(homework.courseName,homework.id);
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
    });
}

function showItemsOnClick(divID)
{
  const homework = getHomeworkBasedOnId(parseInt(divID))
  selectedHomework.innerHTML = "nombre: " + homework.name + " , fecha inicio: " + homework.dateInit + " , fecha fin: " + 
  homework.dateFin + " , materia: " + homework.courseName
}
