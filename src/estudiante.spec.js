//import { expect } from "chai";
import Student from "./estudiante.js"

describe("Marcado de tareas", () => {
    let newStudent;
    beforeEach(() => {
        newStudent=new Student("Nicolas")
      });
    it("se completa una tarea", () => {
        newStudent.completeHomework(0);
        expect(newStudent.getIfIdCompleted(0)).toEqual(true);
    });
});

describe("agregar materias a estudiantes", () => {
    let newStudent;
    beforeEach(() => {
        newStudent=new Student("Nicolas")
      });
    it("se agrega una materia", () => {
        newStudent.addCoursesToStudent("mate")
        expect(newStudent.showAllEnrolledCourses()).toEqual("mate");
    });
    it("se agrega una materia", () => {
        newStudent.addCoursesToStudent("mate")
        newStudent.addCoursesToStudent("reli")
        expect(newStudent.showAllEnrolledCourses()).toEqual("mate, reli");
    });
    it("se obtiene un set de cursos", () => {
        let ExpectedVal=new Set(["mate","reli"])
        newStudent.addCoursesToStudent("mate")
        newStudent.addCoursesToStudent("reli")
        expect(newStudent.getCoursesStudent()).toEqual(ExpectedVal);
    });
});

describe("devuelve valores de constructor", () => {
    let newStudent;
    beforeEach(() => {
        newStudent=new Student("Santiago")
      });
    it("Muestra nombre de estudiante creado", () => {
        expect(newStudent.getName()).toEqual("Santiago");
    });
});
describe("devuelve valores de hoursFeedback", () => {
    let newStudent;
    beforeEach(() => {
        newStudent=new Student("Santiago")
        newStudent.addFeedback(8,1)
      });
    it("Devuelve las horas que le tomo al estudiante", () => {
        expect(newStudent.getFeedBackhours()).toEqual(8);
    });
});

