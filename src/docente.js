import Tarea from "./tarea.js"
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
    let Course={initials:Initials,name:Name,teachersName:TeachersName};
    coursesArray.push(Course);
    return Course;

}

export {createHomework,getHomeworkArray,clearHomeworkArray,createCourse}