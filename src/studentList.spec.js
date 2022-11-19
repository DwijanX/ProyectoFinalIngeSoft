import {getStudentsFromJson, StudentLogIn} from "./studentList.js"
import Student from "./estudiante.js"

describe("Se crean estudiantes predefinidos", () => {
    it("se ve que existe el primer estudiante", () => {
        let students = getStudentsFromJson()
        const [first] = students
        expect(first.getName()).toEqual("Aguilar Alcocer, Dayan");
    });
    it("se ve que existen mas estudiantes", () => {
        let students = getStudentsFromJson()
        const [, second] = students
        expect(second.getName()).toEqual("Aliss Arteaga, Francisco Gabriel");
    });
});

describe("no deja entrar a estudiantes no inscritos", () => {
    it("deja entrar a estudiante Inscrito", () => {
        expect(StudentLogIn("Cari Rodriguez, Nicolas","123")).toEqual(true);
    });
    it("no deja entrar a alguien Extraño", () => {
        expect(StudentLogIn("Pepito Perez Pepinola")).toEqual(false);
    });
    it("no deja entrar a alguien inscrito que no sabe la clave", () => {
        expect(StudentLogIn("Cari Rodriguez, Nicolas","")).toEqual(false);
    });
});