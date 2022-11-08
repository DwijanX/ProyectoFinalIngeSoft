import Tarea from "./tarea.js"
import Materia from "./materia.js";
import {getCourseHomeworks} from "./docente.js";
import SingletonCourses from "./SingleTonCourses.js";
let courses=SingletonCourses.getInstance();

function showCoursesOnConsole()
{
    console.log(courses);
}

export{showCoursesOnConsole}