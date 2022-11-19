import {professorLogIn, logInProfessorCredentials, createPredefinedCourses, createPredefinedHomework} from "./predefinedCourses"
import {getStudentsFromJson, studentLogIn, setStudentName, addCoursesToStudent} from "./studentList.js"

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");

const TeachersDiv = document.querySelector("#TeachersDiv");
const StudentsDiv = document.querySelector("#StudentsDiv");
const Login = document.querySelector("#Login");
//Minor objects
const createHmwkForm=document.querySelector("#HomeworkCreation-form");
const createCourseForm=document.querySelector("#CourseCreation-form");
const HomeworkMofication=document.querySelector("#HomeworkMofication-form");

const loginText = document.querySelector("#loginText");
const passwordText = document.querySelector("#passwordText");
let passInfo = document.querySelector("#pass");
let alreadyLoaded=false
function loadSampleData()
{
  if(alreadyLoaded==false)
  {
    createPredefinedCourses()
    createPredefinedHomework()
    alreadyLoaded=true
  }
}

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  logInProfessorCredentials()
  if(professorLogIn(loginText.value, passwordText.value))
  {
    loadSampleData()
    TeachersDiv.style.display="flex"
    StudentsDiv.style.display="none"
    Login.style.display="none"
    resetMinorObjsStyles()
  }
  else{
    passInfo.innerHTML = "credenciales incorrectas"
  }

  
});

estudiantesPage.addEventListener("click", (event) => {
  event.preventDefault();

  getStudentsFromJson()
  if(studentLogIn(loginText.value, passwordText.value))
  {
    setStudentName(loginText.value)
    loadSampleData()
    StudentsDiv.style.display="flex"
    TeachersDiv.style.display="none"
    Login.style.display="none"
    resetMinorObjsStyles()
  }
  else{
    passInfo.innerHTML = "credenciales incorrectas"
  }
});

function resetMinorObjsStyles()
{
  createHmwkForm.style.display="none"
  createCourseForm.style.display="none"
  HomeworkMofication.style.display="none"
}