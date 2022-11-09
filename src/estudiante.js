import Tarea from "./tarea.js"
import Materia from "./materia.js";
import {getCourseHomeworks,markHmwkAsDone} from "./docente.js";

let coursesStudent = new Set();
let completedHomeworkIds=new Set();

function addCoursesToStudent(course)
{
    coursesStudent.add(course)
}

function showAllEnrolledCourses()
{
    let materias = "";
    coursesStudent.forEach(course=>{
        materias +=course+", "
    })
    return materias.substring(0,materias.length-2)
}

function daysWithHomework()
{
    let daysWithHomework={};
    let homework;
    coursesStudent.forEach(course=>{
        homework = getCourseHomeworks(course)
        for (let j=0; j<homework.length; j++)
      {
        if( daysWithHomework[homework[j].getDateFin()] == undefined)
        {
            daysWithHomework[homework[j].getDateFin()] = [homework[j]]
        }
        else{
            daysWithHomework[homework[j].getDateFin()].push(homework[j])
        }
      }
    })
    return daysWithHomework
}
function completeHomework(id)
{
    completedHomeworkIds.add(id)
    markHmwkAsDone(id);
}

function getIfIdCompleted(id)
{
    return completedHomeworkIds.has(id)
}


export{addCoursesToStudent, showAllEnrolledCourses, daysWithHomework,completeHomework,getIfIdCompleted}