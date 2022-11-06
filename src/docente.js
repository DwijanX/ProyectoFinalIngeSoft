import Tarea from "./tarea.js"
import Materia from "./materia.js";

const CourseNotFound=1
const HomeworkNotFound=2;
let courses={}

function createHomework(name,dateInit,dateFin,courseName, id)
{
    let task=new Tarea(name,dateInit,dateFin,courseName, id);
    if(courses[courseName])
    {
        courses[courseName].addHomework(task)
        return task.getHomeworkObj()
    }
    return CourseNotFound
}
function getCourseHomeworks(courseName)
{
    if(courses[courseName])
    {
        return courses[courseName].getHomeworkArray()
    }
    return CourseNotFound
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
    return HomeworkNotFound
}

function deleteHomework(name){
    if(HomeWorkArray.length>0){
        for(let i=0;i<HomeWorkArray.length;i++){
            if(HomeWorkArray[i].nameMatchs(name)){
                HomeWorkArray.splice(i,1);
            }
        }
    }
    return HomeWorkArray.length;
}

function clearCourseHomeworks(courseName)
{ 
    let status=CourseNotFound
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
function modifyHomework(id,name,dateInit,dateFin,CourseName)
{
    let answer=CourseNotFound;
    if(courses[CourseName])
    {
        answer=courses[CourseName].modifyHomework(id,name,dateInit,dateFin);
    }
    return answer;
}
export {createHomework,getCourseHomeworks,clearCourseHomeworks,createCourse,getHomeworkBasedOnId,modifyHomework,deleteHomework}