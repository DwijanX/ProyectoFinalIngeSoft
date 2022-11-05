import Tarea from "./tarea.js"
import materia from "./materia.js"
import Materia from "./materia.js";
let HomeWorkArray=[]
let coursesArray=[]

function createHomework(name,dateInit,dateFin,courseName)
{
    let task=new Tarea(name,dateInit,dateFin,courseName);
    HomeWorkArray.push(task);
    return task.getHomeworkObj()
}
function getHomeworkArray()
{
    return HomeWorkArray;
}

function clearHomeworkArray()
{
    HomeWorkArray=[]
}
function createCourse(Initials,Name,TeachersName)
{
    let task=new Materia(Initials,Name,TeachersName);
    coursesArray.push(task);
    console.log(coursesArray);
    return task.getCourseObj()
}

export {createHomework,getHomeworkArray,clearHomeworkArray,createCourse}