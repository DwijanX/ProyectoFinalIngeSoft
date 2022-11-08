//import { expect } from "chai";
import {addCoursesToStudent, showAllEnrolledCourses, daysWithHomework} from "./estudiante.js"
import {createHomework} from "./docente.js"

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
/*
describe("ver fechas de tareas dentro de cada materia", () => {
    it("se agrega una materia", () => {
        createHomework("test","2021-01-01","2021-01-02","mate",0)
        expect(daysWithHomework()).toEqual(["2021-01-02"]);
    });
});*/