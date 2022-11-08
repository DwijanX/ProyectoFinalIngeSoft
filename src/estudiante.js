import Tarea from "./tarea.js"
import Materia from "./materia.js";
import {getCourseHomeworks} from "./docente.js";

let coursesStudent = [];
let days = new Set();

function addCoursesToStudent(course)
{
    coursesStudent.push(course)
}

function showAllEnrolledCourses()
{
    let materias = "";
    for (let i=0; i<coursesStudent.length; i++)
    {
        materias += coursesStudent[i]
        if(i<coursesStudent.length-1)
        {
            materias += ", "
        }
    }
    return materias
}

function daysWithHomework()
{
    let daysWithHomework={};
    let homework;
    for (let i=0; i<coursesStudent.length; i++)
    {
      homework = getCourseHomeworks(coursesStudent[i])
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
    }
    return daysWithHomework
}

/*
function getDaysWithHomeworkAsString() //set returns difficult to read code
{
    let diasDeTrabajo = "";
    for (let i=0; i<days.length; i++)
    {
        diasDeTrabajo += days[i]
        if(i<days.length-1)
        {
            diasDeTrabajo += ", "
        }
    }
    return diasDeTrabajo
}*/


export{addCoursesToStudent, showAllEnrolledCourses, daysWithHomework}