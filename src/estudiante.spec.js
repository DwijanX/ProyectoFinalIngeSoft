//import { expect } from "chai";
import {addCoursesToStudent, showAllEnrolledCourses,completeHomework,getIfIdCompleted,getCoursesStudent} from "./estudiante.js"

describe("Marcado de tareas", () => {
    it("se completa una tarea", () => {
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
    it("se obtiene un set de cursos", () => {
        let ExpectedVal=new Set(["mate","reli"])
        expect(getCoursesStudent()).toEqual(ExpectedVal);
    });
});


