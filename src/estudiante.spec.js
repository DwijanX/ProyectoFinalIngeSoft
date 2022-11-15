//import { expect } from "chai";
import {addCoursesToStudent, showAllEnrolledCourses, daysWithHomework,completeHomework,getIfIdCompleted} from "./estudiante.js"
import {createHomework,createCourse} from "./docente.js"


describe("Marcado de tareas", () => {
    it("se completa una tarea", () => {
        createCourse("tst","mate","testName")
        createHomework("test","2021-01-01","2021-01-02","mate",0)
        completeHomework(0);
        expect(getIfIdCompleted(0)).toEqual(true);
    });
});

describe("agregar materias a estudiantes", () => {
    it("se agrega una materia", () => {
        addCoursesToStudent("mate")
        expect(showAllEnrolledCourses()).toEqual("mate");
    });
    it("se agrega una materia", () => {
        addCoursesToStudent("reli")
        expect(showAllEnrolledCourses()).toEqual("mate, reli");
    });
});


