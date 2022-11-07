import Tarea from "./tarea.js"
import Materia from "./materia.js";
import SingletonCourses from "./SingleTonCourses.js";
let courses=SingletonCourses.getInstance();

function showCoursesOnConsole()
{
    console.log(courses);
}

export{showCoursesOnConsole}