import * as errorCode from './errorCodes'
import { Courses } from './Courses';
import {getCoursesFromAllStudents} from "./studentList.js"

class CoursesController extends  Courses{
    constructor()
    {
        super();
        this.homeworkId=0;
    }
    tryToModifyHomework(idModif,hmwkName,dateInit,dateFin,courseNameModif)
    {
        let status=this.#validateHomeworksInput(dateFin,dateInit);
        if (status==errorCode.OK)
        {
            this.modifyHomework(idModif,hmwkName,dateInit,dateFin,courseNameModif)
        }
        return status;
    }
    tryToCreateCourse(CourseInitials,CourseName,Teacher)
    {
        this.createCourse(CourseInitials,CourseName,Teacher)
    }
    tryToCreateHomework(hmwkName,dateInit,dateFin,courseName,hoursNeeded)
    {
        let status=this.#validateHomeworksInput(dateFin,dateInit);
        if (status==errorCode.OK)
        {
            hoursNeeded=parseInt(hoursNeeded)
          let createdHmwk=this.createHomework(hmwkName,dateInit,dateFin,courseName,hoursNeeded,this.homeworkId)
          
          if(createdHmwk!=errorCode.CourseNotFound)
          {
            this.homeworkId++;
            return errorCode.OK
          }
          else
            return errorCode.CourseNotFound
        }
        return status
    }
    getAllHomeworksByDate()
    {
        let CourseNames=this.getCourseNames()
        let HomeworksArray=[]
        CourseNames.forEach((CourseName)=>{
            HomeworksArray=HomeworksArray.concat(this.getCourseHomeworks(CourseName))
        })
        return this.getdaysWithHomework(HomeworksArray);
    }
    getStudentHomeworksByDate(coursesEnlisted)
    {
        let CourseNames= getCoursesFromAllStudents()
        let HomeworksArray=[]
        CourseNames.forEach((CourseName)=>{
            if(coursesEnlisted.has(CourseName))
            {
                HomeworksArray=HomeworksArray.concat(this.getCourseHomeworks(CourseName))
            }
        })
        return this.getdaysWithHomework(HomeworksArray);
        
    }
    getStudentHomeworkByClass(course){
        let assigmentArray=[];
        assigmentArray=assigmentArray.concat(this.getCourseHomeworks(course))
        return this.getdaysWithHomework(assigmentArray);
    }
    getdaysWithHomework(homeworks)
    {
        let daysWithHomework={};
        for (let j=0; j<homeworks.length; j++)
        {
            if( daysWithHomework[homeworks[j].getDateFin()] == undefined)
                daysWithHomework[homeworks[j].getDateFin()] = [homeworks[j]]
            else
                daysWithHomework[homeworks[j].getDateFin()].push(homeworks[j])
        }
        return daysWithHomework
    }
    #validateHomeworksInput(dateFin,dateInit)
    {
        let status=0;
        let today=new Date()
        if(this.#checkIfDate1IsLowerThan2(today,dateFin)==false)
            status= errorCode.DeadlineAlreadyPassed;
        if (this.#checkIfDate1IsLowerThan2(dateInit,dateFin)==false)
            status= errorCode.DeadlineCantBeLowerThanInit;
        return status
    }
    #checkIfDate1IsLowerThan2(date1,date2)
    {
        date1=new Date(date1);
        date2=new Date(date2);
        if(date1-date2<=0)
            return true
        else
            return false
    }
}
let CoursesControllerSingleton = (function () {
    let instance;
    function createInstance() {
        let object = new CoursesController();
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
export {CoursesControllerSingleton}