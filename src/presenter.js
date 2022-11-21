import {professorLogIn, logInProfessorCredentials, createPredefinedCourses, createPredefinedHomework} from "./predefinedCourses"
import {getStudentsFromJson, studentLogIn, setStudentName} from "./studentList.js"

const docentesPage = document.querySelector("#docentesPage");
const estudiantesPage = document.querySelector("#estudiantesPage");

const TeachersDiv = document.querySelector("#TeachersDiv");
const StudentsDiv = document.querySelector("#StudentsDiv");
const Login = document.querySelector("#Login");
const LogOut = document.querySelector("#logOutButton");

//Minor objects
const createHmwkForm=document.querySelector("#HomeworkCreation-form");
const createCourseForm=document.querySelector("#CourseCreation-form");
const HomeworkMofication=document.querySelector("#HomeworkMofication-form");

const loginText = document.querySelector("#loginText");
const passwordText = document.querySelector("#passwordText");
let passInfo = document.querySelector("#pass");
let alreadyLoaded=false
let alreadyLoggedIn=false;
function loadSampleData()
{
  if(alreadyLoaded==false)
  {
    createPredefinedCourses()
    createPredefinedHomework()
    alreadyLoaded=true
  }
}
function logInProcedure()
{
  alreadyLoggedIn=true;
  loadSampleData()
  resetMinorObjsStyles()
  estudiantesPage.style.display="none"
  docentesPage.style.display="none"
  LogOut.style.display="inline-block"
  passInfo.style.color="black";
}

docentesPage.addEventListener("click", (event) => {
  event.preventDefault();

  logInProfessorCredentials()
  if(professorLogIn(loginText.value, passwordText.value) && !alreadyLoggedIn)
  {
    logInProcedure()
    TeachersDiv.style.display="flex"
    StudentsDiv.style.display="none"
    Login.style.display="none"
  }
  else{
    passInfo.innerHTML = "credenciales incorrectas"
    passInfo.style.color="red";
  }

  
});

estudiantesPage.addEventListener("click", (event) => {
  event.preventDefault();

  getStudentsFromJson()
  if(studentLogIn(loginText.value, passwordText.value)  && !alreadyLoggedIn)
  {
    logInProcedure()
    setStudentName(loginText.value)
    StudentsDiv.style.display="flex"
    TeachersDiv.style.display="none"
    Login.style.display="none"
    passInfo.style.color="black";
  }
  else{
    passInfo.innerHTML = "credenciales incorrectas"
    passInfo.style.color="red";
  }
});
LogOut.addEventListener("click",(event)=>{
  event.preventDefault();
  resetMinorObjsStyles();
  resetPages();
  alreadyLoggedIn=false;
  estudiantesPage.style.display="inline-block"
  docentesPage.style.display="inline-block"
  LogOut.style.display="none"
})

function resetMinorObjsStyles()
{
  createHmwkForm.style.display="none"
  createCourseForm.style.display="none"
  HomeworkMofication.style.display="none"
  
}
function resetPages()
{
  StudentsDiv.style.display="none"
  TeachersDiv.style.display="none"
  Login.style.display="block"
}