import * as errorCode from './errorCodes'
import {createHomework,getCourseNames,getCourseHomeworks,modifyHomework,createCourse} from "./docente";
import {getCoursesStudent} from './estudiante'

class CoursesController{
    constructor()
    {
        this.homeworkId=0;
    }
    modifyHomework(idModif,hmwkName,dateInit,dateFin,courseNameModif)
    {
        let status=this.#validateHomeworksInput(dateFin,dateInit);
        if (status==errorCode.OK)
        {
            modifyHomework(idModif,hmwkName,dateInit,dateFin,courseNameModif)
        }
        return status;
    }
    createCourse(CourseInitials,CourseName,Teacher)
    {
        createCourse(CourseInitials,CourseName,Teacher)
    }
    createHomework(hmwkName,dateInit,dateFin,courseName)
    {
        let status=this.#validateHomeworksInput(dateFin,dateInit);

        if (status==errorCode.OK)
        {
          let createdHmwk=createHomework(hmwkName,dateInit,dateFin,courseName,this.homeworkId)
          
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
        let CourseNames=getCourseNames()
        let HomeworksArray=[]
        CourseNames.forEach((CourseName)=>{
            HomeworksArray=HomeworksArray.concat(getCourseHomeworks(CourseName))
        })
        console.log(HomeworksArray);
        return this.getdaysWithHomework(HomeworksArray);
    }
    getStudentHomeworksByDate()
    {
        let CourseNames=getCoursesStudent()
        let HomeworksArray=[]
        CourseNames.forEach((CourseName)=>{
            HomeworksArray=HomeworksArray.concat(getCourseHomeworks(CourseName))
        })
        console.log(HomeworksArray);
        return this.getdaysWithHomework(HomeworksArray);
        
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