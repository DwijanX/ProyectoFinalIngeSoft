import {markHmwkAsDone} from "./docente.js";

let coursesStudent = new Set();
let completedHomeworkIds=new Set();

function addCoursesToStudent(course)
{
    coursesStudent.add(course)
}
function getCoursesStudent()
{
    return coursesStudent;
}

function showAllEnrolledCourses()
{
    let materias = "";
    coursesStudent.forEach(course=>{
        materias +=course+", "
    })
    return materias.substring(0,materias.length-2)
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


export{addCoursesToStudent, showAllEnrolledCourses,completeHomework,getIfIdCompleted,getCoursesStudent}