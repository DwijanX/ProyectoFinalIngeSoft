import Homework from "./homework.js"
import Course from "./Course.js";
let courses={}
const CourseNotFound=1
const HomeworkNotFound=2;

function createHomework(name,dateInit,dateFin,courseName, id)
{
    let task=new Homework(name,dateInit,dateFin,courseName, id);
    if(courses[courseName])
    {
        courses[courseName].addHomework(task)
        console.log(courses)
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
    let course=new Course(Initials,Name,TeachersName);
    courses[Name]=course
    return course.getCourseObj()
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
function deleteHomework(courseName, homeworkId){
    let status=CourseNotFound;
   if(courses[courseName]){
    status=courses[courseName].deleteHomework(homeworkId);
   }
   return status;
}
function markHmwkAsDone(id)
{
    let hmwk=getHomeworkBasedOnId(id)
    hmwk.addToCompleted()
}
function getCourseNames()
{
    return Object.keys(courses)
}
export {createHomework,getCourseHomeworks,clearCourseHomeworks,createCourse,getHomeworkBasedOnId,modifyHomework,deleteHomework,markHmwkAsDone,getCourseNames}