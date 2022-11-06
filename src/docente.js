import Tarea from "./tarea.js"
import Materia from "./materia.js";
let coursesArray=[]

function createHomework(name,dateInit,dateFin,courseName, id)
{
    let task=new Tarea(name,dateInit,dateFin,courseName, id);
    let courseIndex=findCourse(courseName)
    if(courseIndex!=-1)
    {
        coursesArray[courseIndex].addHomework(task)
        return task.getHomeworkObj()
    }
    return null
}
function findCourse(name)
{
    for(let index=0;index<coursesArray.length;index++)
    {
        if(coursesArray[index].CompareName(name))
            return index;
    }
    return -1;
}
function getCourseHomeworks(courseName)
{
    let courseIndex=findCourse(courseName)
    if(courseIndex!=-1)
        return coursesArray[courseIndex].getHomeworkArray()
    return null
}

function getHomeworkBasedOnId(id)
{
    for(let CourseIndex=0;CourseIndex<coursesArray.length;CourseIndex++)
    {
        let CourseHomeworks=coursesArray[CourseIndex].getHomeworkArray()
        for(let HomeworkIndex=0; HomeworkIndex<CourseHomeworks.length; HomeworkIndex++)
        {
            if(CourseHomeworks[HomeworkIndex].getId() == id)
                return CourseHomeworks[HomeworkIndex]
        }
    }
    return null
}

function clearCourseHomeworks(courseName)
{
    let courseIndex=findCourse(courseName)
    let status=1
    if(courseIndex!=-1)
    {
        coursesArray[courseIndex].clearHomeworks()
        status=0
    }
    return status
}
function createCourse(Initials,Name,TeachersName)
{
    let task=new Materia(Initials,Name,TeachersName);
    coursesArray.push(task);
    console.log(coursesArray);
    return task.getCourseObj()
}


export {createHomework,getCourseHomeworks,clearCourseHomeworks,createCourse,getHomeworkBasedOnId}