import {createHomework,createCourse,modifyHomework , getHomeworkBasedOnId, deleteHomework} from "./docente";
const CourseNotFound=1
const HomeworkNotFound=2;

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

noNumberFields=document.querySelectorAll(".noNumbersInput")

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();
  loadBaseStatus()
});

function loadBaseStatus()
{
  selectedHomeworkStats.innerHTML=""
  selectedHomework.innerHTML=""
}


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
    if(createdHmwk!=CourseNotFound)
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

  rewriteModifiedHomework(idModif)
  showItemsOnClick(idModif)

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
  deleteButton.setAttribute("id",idList+"dlt")
  deleteButton.innerHTML='Eliminar';
  const modifyButton = document.createElement('button');
  modifyButton.innerHTML="Modificar"
  modifyButton.setAttribute("id",idList+"mdf")
  newDiv.setAttribute("id", "div" + idList); //added "div" for no #<number> iDs (breaks finder)
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
    createHmwkForm.style.display="block";
    createCourseForm.style.display="none";
    deleteHomeworkFromHTML(homework.id)
    deleteHomework(homework.courseName,homework.id);
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
  const homework = getHomeworkBasedOnId(parseInt(divID))
  if(homework != 2)
  {
    selectedHomework.innerHTML = "nombre: " + homework.name + " , fecha inicio: " + homework.dateInit + " , fecha fin: " + 
    homework.dateFin + " , materia: " + homework.courseName
  }
  else{
    selectedHomework.innerHTML = ""
  }
  
}
function loadHomeworkStats(id)
{
  const homework = getHomeworkBasedOnId(parseInt(id))
  selectedHomeworkStats.innerHTML="Completa "+homework.timesCompleted+" veces";
}

function rewriteModifiedHomework(divID)
{
  ObjectId = "#div" + divID.toString()
  const homework = getHomeworkBasedOnId(parseInt(divID))
  let homeworkToModify = document.querySelector(ObjectId)
  homeworkToModify.innerHTML = homework.name;
}

function deleteHomeworkFromHTML(divID)
{
  ObjectId = "#div" + divID.toString()
  let homeworkToModify = document.querySelector(ObjectId)
  divToDelete = homeworkToModify.parentElement
  divToDelete.remove()
  selectedHomeworkStats.innerHTML=""
}