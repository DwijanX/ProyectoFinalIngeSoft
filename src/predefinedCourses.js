import { CoursesControllerSingleton } from "./coursesController";
let coursesController=CoursesControllerSingleton.getInstance()

function createPredefinedCourses()
{
    coursesController.tryToCreateCourse("SIS-213","INGENIERIA DE SOFTWARE","Antezana Rojas, Israel Gilberto");
    coursesController.tryToCreateCourse("SIS-225","SISTEMAS DE INFORMACION III","Rocabado Torrez, Jose Marcelo");
    coursesController.tryToCreateCourse("SIS-233","REDES DE COMPUTADORAS II","Molina Arcienega, Luis Alberto");
    coursesController.tryToCreateCourse("SIS-234","INTERNET DE LAS COSAS","Marin Garcia, Eduardo Enrique");
    coursesController.tryToCreateCourse("SIS-241","TECNOLOGIAS WEB","Beltran Mercado, Franz Osvaldo");
    coursesController.tryToCreateCourse("ADM-112","ADMINISTRACION II","Lopez Gumucio, Jorge Ricardo");
}

function createPredefinedHomework()
{
    let status = 0
    status=coursesController.tryToCreateHomework("PRIMERA EVALUACION","2023-01-01","2023-01-02","ADMINISTRACION II")
    status=coursesController.tryToCreateHomework("Práctica 1","2023-01-01","2023-01-05","INTERNET DE LAS COSAS")
    status=coursesController.tryToCreateHomework("Práctica 2","2023-01-01","2023-01-06","INTERNET DE LAS COSAS")
    status=coursesController.tryToCreateHomework("Práctica 3","2023-01-01","2023-01-12","INTERNET DE LAS COSAS")
    status=coursesController.tryToCreateHomework("Tour of Heroes","2023-01-01","2023-01-04","TECNOLOGIAS WEB")
    status=coursesController.tryToCreateHomework("Practica CRUD","2023-01-01","2023-01-20","TECNOLOGIAS WEB")
    status=coursesController.tryToCreateHomework("Examen 3","2023-01-01","2023-01-06","REDES DE COMPUTADORAS II")
    status=coursesController.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","REDES DE COMPUTADORAS II")
    status=coursesController.tryToCreateHomework("Examen 4","2023-01-01","2023-01-07","SISTEMAS DE INFORMACION III")
    status=coursesController.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","SISTEMAS DE INFORMACION III")
    status=coursesController.tryToCreateHomework("1er Sprint Backlog - Trello","2023-01-01","2023-01-05","INGENIERIA DE SOFTWARE")
    status=coursesController.tryToCreateHomework("Entregables 1ra Iteracion","2023-01-01","2023-01-12","INGENIERIA DE SOFTWARE")
    status=coursesController.tryToCreateHomework("1er Sprint Backlog - Trello","2023-01-01","2023-01-05","INGENIERIA DE SOFTWARE")
    status=coursesController.tryToCreateHomework("Entrega Proyecto Final","2023-01-01","2023-01-20","INGENIERIA DE SOFTWARE")
}

export {createPredefinedCourses, createPredefinedHomework}