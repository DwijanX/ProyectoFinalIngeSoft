import Homework from "./homework.js"
import Course from "./Course.js";
import * as errorCode from './errorCodes'
const CourseNotFound=1
const HomeworkNotFound=2;

class Courses{
    constructor()
    {
        this.courses={}
    }
    createHomework(name,dateInit,dateFin,courseName,hoursNeeded, id)
    {
        let task=new Homework(name,dateInit,dateFin,courseName,hoursNeeded, id);
        
        if(this.courses[courseName])
        {
            this.courses[courseName].addHomework(task)
            return task.getHomeworkObj()
        }
        return errorCode.CourseNotFound
    }
    getCourseHomeworks(courseName)
    {
        if(this.courses[courseName])
        {
            return this.courses[courseName].getHomeworkArray()
        }
        return CourseNotFound
    }
    getHomeworkBasedOnId(id)
    {
        for (const courseName in this.courses) {
            let CourseHomeworks=this.courses[courseName].getHomeworkArray()
            for(let HomeworkIndex=0; HomeworkIndex<CourseHomeworks.length; HomeworkIndex++)
            {
                if(CourseHomeworks[HomeworkIndex].getId() == id)
                    return CourseHomeworks[HomeworkIndex]
            }
        }
        return HomeworkNotFound
    }
    clearCourseHomeworks(courseName)
    { 
        let status=CourseNotFound
        if(this.courses[courseName])
        {
            this.courses[courseName].clearHomeworks()
            status=0
        }
        return status
    }
    createCourse(Initials,Name,TeachersName)
    {
        let course=new Course(Initials,Name,TeachersName);
        this.courses[Name]=course
        return course.getCourseObj()
    }
    modifyHomework(id,name,dateInit,dateFin,CourseName)
    {
        let answer=CourseNotFound;
        if(this.courses[CourseName])
        {
            answer=this.courses[CourseName].modifyHomework(id,name,dateInit,dateFin);
        }
        return answer;
    }
    markHmwkAsDone(id)
    {
        let hmwk=this.getHomeworkBasedOnId(id)
        hmwk.addToCompleted()
    }
    getCourseNames()
    {
        return Object.keys(this.courses)
    }
    deleteHomework(courseName, homeworkId){
        let status=errorCode.CourseNotFound;
       if(this.courses[courseName]){
        status=this.courses[courseName].deleteHomework(homeworkId);
       }
       return status;
    }

}
export {Courses}