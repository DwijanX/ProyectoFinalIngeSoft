import Tarea from "./tarea.js"
import Materia from "./materia.js";
let HomeWorkArray=[]
let coursesArray=[]

function createHomework(name,dateInit,dateFin,courseName, id)
{
    let task=new Tarea(name,dateInit,dateFin,courseName, id);
    HomeWorkArray.push(task);
    return task.getHomeworkObj()
}
function getHomeworkArray()
{
    return HomeWorkArray;
}

function getHomeworkBasedOnId(id)
{
    for(var i=0; i<HomeWorkArray.length; i++)
    {
        if(HomeWorkArray[i].getId() == id)
        {
            return HomeWorkArray[i]
        }
    }
    return null
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


export {createHomework,getHomeworkArray,clearHomeworkArray,createCourse,getHomeworkBasedOnId}