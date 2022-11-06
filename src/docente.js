import Tarea from "./tarea.js"
import Materia from "./materia.js";
let courses={}

function createHomework(name,dateInit,dateFin,courseName, id)
{
    let task=new Tarea(name,dateInit,dateFin,courseName, id);
    if(courses[courseName])
    {
        courses[courseName].addHomework(task)
        return task.getHomeworkObj()
    }
    return null
}
function getCourseHomeworks(courseName)
{
    if(courses[courseName])
    {
        return courses[courseName].getHomeworkArray()
    }
    return null
}

function getHomeworkBasedOnId(id)
{
    for (const courseName in courses) {
        let CourseHomeworks=courses[courseName].getHomeworkArray()
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
    
    let status=1
    if(courses[courseName])
    {
        courses[courseName].clearHomeworks()
        status=0
    }
    return status
}
function createCourse(Initials,Name,TeachersName)
{
    let task=new Materia(Initials,Name,TeachersName);
    courses[Name]=task
    return task.getCourseObj()
}

export {createHomework,getCourseHomeworks,clearCourseHomeworks,createCourse,getHomeworkBasedOnId}