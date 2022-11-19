import {getStudentsFromJson, studentLogIn, seeIfStudentExist, getStudents, setStudentName, getStudentName} from "./studentList.js"
import Student from "./estudiante.js"

describe("Se crean estudiantes predefinidos", () => {
    it("se ve que existe el primer estudiante", () => {
        getStudentsFromJson()
        let students = getStudents()
        const [first] = students
        expect(first.getName()).toEqual("Aguilar Alcocer, Dayan");
    });
    it("se ve que existen mas estudiantes", () => {
        let students = getStudents()
        const [, second] = students
        expect(second.getName()).toEqual("Aliss Arteaga, Francisco Gabriel");
    });
});

describe("no deja entrar a estudiantes no inscritos", () => {
    it("deja entrar a estudiante Inscrito", () => {
        expect(studentLogIn("Cari Rodriguez, Nicolas","123")).toEqual(true);
    });
    it("no deja entrar a alguien Extraño", () => {
        expect(studentLogIn("Pepito Perez Pepinola")).toEqual(false);
    });
    it("no deja entrar a alguien inscrito que no sabe la clave", () => {
        expect(studentLogIn("Cari Rodriguez, Nicolas","")).toEqual(false);
    });
});

describe("iterar para ver encontrar a estudiante", () => {
    it("busca estudiante inscrito", () => {
        let student = seeIfStudentExist("Cari Rodriguez, Nicolas")
        expect(student.getName()).toEqual("Cari Rodriguez, Nicolas");
    });
    it("error en estudiante no inscrito", () => {
        let student = seeIfStudentExist("Messi")
        expect(student).toEqual(null);
    });
});

describe("guarda nombre de estudiante en variable", () => {
    it("busca estudiante inscrito", () => {
        setStudentName("jose")
        expect(getStudentName()).toEqual("jose");
    });
});