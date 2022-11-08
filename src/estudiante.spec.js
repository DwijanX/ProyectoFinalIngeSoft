//import { expect } from "chai";
import {addCoursesToStudent, showAllEnrolledCourses} from "./estudiante.js"


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
