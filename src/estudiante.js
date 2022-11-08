import Tarea from "./tarea.js"
import Materia from "./materia.js";
import {getCourseHomeworks} from "./docente.js";
import SingletonCourses from "./SingleTonCourses.js";

let coursesStudent = [];

function showCoursesOnConsole()
{
    console.log(courses);
}

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


export{addCoursesToStudent, showAllEnrolledCourses}