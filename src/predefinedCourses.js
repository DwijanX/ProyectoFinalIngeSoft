import { CoursesControllerSingleton } from "./coursesController";
let coursesController=CoursesControllerSingleton.getInstance()

let professorArray = []
//let professordPassword = "ucb2022"
let professorName = ""
let professordPassword = "123"

function logInProfessorCredentials()
{
    professorArray.push("Antezana Rojas, Israel Gilberto")
    professorArray.push("Rocabado Torrez, Jose Marcelo")
    professorArray.push("Molina Arcienega, Luis Alberto")
    professorArray.push("Marin Garcia, Eduardo Enrique")
    professorArray.push("Beltran Mercado, Franz Osvaldo")
    professorArray.push("Lopez Gumucio, Jorge Ricardo")
    professorArray.push("test")
}

function professorLogIn(name, password)
{
    if(professorArray.includes(name) && password == professordPassword)
    {
        return true
    }
    return false
}

function createPredefinedCourses()
{
    coursesController.tryToCreateCourse("SIS-213","INGENIERIA DE SOFTWARE",professorArray[0]);
    coursesController.tryToCreateCourse("SIS-225","SISTEMAS DE INFORMACION III",professorArray[1]);
    coursesController.tryToCreateCourse("SIS-233","REDES DE COMPUTADORAS II",professorArray[2]);
    coursesController.tryToCreateCourse("SIS-234","INTERNET DE LAS COSAS",professorArray[3]);
    coursesController.tryToCreateCourse("SIS-241","TECNOLOGIAS WEB",professorArray[4]);
    coursesController.tryToCreateCourse("ADM-112","ADMINISTRACION II",professorArray[5]);
    coursesController.tryToCreateCourse("tst-142","test",professorArray[6]);
}

function createPredefinedHomework()
{
    let status = 0
    status=coursesController.tryToCreateHomework("PRIMERA EVALUACION","2023-01-01","2023-01-02","ADMINISTRACION II",15)
    status=coursesController.tryToCreateHomework("Práctica 1","2023-01-01","2023-01-05","INTERNET DE LAS COSAS",4)
    status=coursesController.tryToCreateHomework("Práctica 2","2023-01-01","2023-01-06","INTERNET DE LAS COSAS",2)
    status=coursesController.tryToCreateHomework("Práctica 3","2023-01-01","2023-01-12","INTERNET DE LAS COSAS",20)
    status=coursesController.tryToCreateHomework("Cortina","2023-01-10","2023-01-12","INTERNET DE LAS COSAS",20)
    status=coursesController.tryToCreateHomework("Tour of Heroes","2023-01-01","2023-01-04","TECNOLOGIAS WEB",1)
    status=coursesController.tryToCreateHomework("Practica CRUD","2023-01-01","2023-01-20","TECNOLOGIAS WEB",3)
    status=coursesController.tryToCreateHomework("Examen 3","2023-01-01","2023-01-06","REDES DE COMPUTADORAS II",8)
    status=coursesController.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","REDES DE COMPUTADORAS II",6)
    status=coursesController.tryToCreateHomework("Examen 4","2023-01-01","2023-01-07","SISTEMAS DE INFORMACION III",15)
    status=coursesController.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","SISTEMAS DE INFORMACION III",7)
    status=coursesController.tryToCreateHomework("1er Sprint Backlog - Trello","2023-01-01","2023-01-05","INGENIERIA DE SOFTWARE",10)
    status=coursesController.tryToCreateHomework("Entregables 1ra Iteracion","2023-01-01","2023-01-12","INGENIERIA DE SOFTWARE",11)
    status=coursesController.tryToCreateHomework("Entrega Proyecto Final","2023-01-01","2023-01-20","INGENIERIA DE SOFTWARE",8)
}

function setProfessorName(name)
{
    professorName = name
}

function getProfessorName()
{
    return professorName
}

export {createPredefinedCourses, createPredefinedHomework, professorLogIn, logInProfessorCredentials, setProfessorName, getProfessorName}