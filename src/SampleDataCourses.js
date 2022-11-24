import { CoursesControllerSingleton } from "./coursesController";
let coursesController=CoursesControllerSingleton.getInstance()

let professorArrayRef=[]
function loadProfessorCredentials()
{
    professorArrayRef.push("Antezana Rojas, Israel Gilberto")
    professorArrayRef.push("Rocabado Torrez, Jose Marcelo")
    professorArrayRef.push("Molina Arcienega, Luis Alberto")
    professorArrayRef.push("Marin Garcia, Eduardo Enrique")
    professorArrayRef.push("Beltran Mercado, Franz Osvaldo")
    professorArrayRef.push("Lopez Gumucio, Jorge Ricardo")
    professorArrayRef.push("test")
}
function createPredefinedCourses(coursesControllerRef)
{
    coursesControllerRef.tryToCreateCourse("SIS-213","INGENIERIA DE SOFTWARE",professorArrayRef[0]);
    coursesControllerRef.tryToCreateCourse("SIS-225","SISTEMAS DE INFORMACION III",professorArrayRef[1]);
    coursesControllerRef.tryToCreateCourse("SIS-233","REDES DE COMPUTADORAS II",professorArrayRef[2]);
    coursesControllerRef.tryToCreateCourse("SIS-234","INTERNET DE LAS COSAS",professorArrayRef[3]);
    coursesControllerRef.tryToCreateCourse("SIS-241","TECNOLOGIAS WEB",professorArrayRef[4]);
    coursesControllerRef.tryToCreateCourse("ADM-112","ADMINISTRACION II",professorArrayRef[5]);
    coursesControllerRef.tryToCreateCourse("tst-142","test",professorArrayRef[6]);
}

function createPredefinedHomework(coursesControllerRef)
{
    let status = 0
    coursesControllerRef.tryToCreateHomework("PRIMERA EVALUACION","2023-01-01","2023-01-02","ADMINISTRACION II",15)
    coursesControllerRef.tryToCreateHomework("Práctica 1","2023-01-01","2023-01-05","INTERNET DE LAS COSAS",4)
    coursesControllerRef.tryToCreateHomework("Práctica 2","2023-01-01","2023-01-06","INTERNET DE LAS COSAS",2)
    coursesControllerRef.tryToCreateHomework("Práctica 3","2023-01-01","2023-01-12","INTERNET DE LAS COSAS",20)
    coursesControllerRef.tryToCreateHomework("Cortina","2023-01-10","2023-01-12","INTERNET DE LAS COSAS",20)
    coursesControllerRef.tryToCreateHomework("Tour of Heroes","2023-01-01","2023-01-04","TECNOLOGIAS WEB",1)
    coursesControllerRef.tryToCreateHomework("Practica CRUD","2023-01-01","2023-01-20","TECNOLOGIAS WEB",3)
    coursesControllerRef.tryToCreateHomework("Examen 3","2023-01-01","2023-01-06","REDES DE COMPUTADORAS II",8)
    coursesControllerRef.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","REDES DE COMPUTADORAS II",6)
    coursesControllerRef.tryToCreateHomework("Examen 4","2023-01-01","2023-01-07","SISTEMAS DE INFORMACION III",15)
    coursesControllerRef.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","SISTEMAS DE INFORMACION III",7)
    coursesControllerRef.tryToCreateHomework("1er Sprint Backlog - Trello","2023-01-01","2023-01-05","INGENIERIA DE SOFTWARE",10)
    coursesControllerRef.tryToCreateHomework("Entregables 1ra Iteracion","2023-01-01","2023-01-12","INGENIERIA DE SOFTWARE",11)
    coursesControllerRef.tryToCreateHomework("Entrega Proyecto Final","2023-01-01","2023-01-20","INGENIERIA DE SOFTWARE",8)
}
function loadSampleData()
{
    loadProfessorCredentials();
    createPredefinedCourses(coursesController);
    createPredefinedHomework(coursesController);
}
function getGeneratedProfessorArray()
{
    return professorArrayRef 
}

export {loadSampleData,getGeneratedProfessorArray}