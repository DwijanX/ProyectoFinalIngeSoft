//import { expect } from "chai";
import {addCoursesToStudent, showAllEnrolledCourses, daysWithHomework} from "./estudiante.js"
import {createHomework,createCourse} from "./docente.js"

describe("", () => {
    it("", () => {
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

describe("ver fechas de tareas dentro de cada materia", () => {
    it("se agrega una materia", () => {
        createCourse("tst","mate","testName")
        createHomework("test","2021-01-01","2021-01-02","mate",0)
        let days = new Set();
        days.add("2021-01-02")
        expect(daysWithHomework()).toEqual(days);
    });
    it("se agrega mas tareas", () => {
        createCourse("tst","mate","testName")
        createHomework("test2","2021-01-01","2021-01-03","mate",0)
        let days = new Set();
        days.add("2021-01-02")
        days.add("2021-01-03")
        expect(daysWithHomework()).toEqual(days);
    });
});