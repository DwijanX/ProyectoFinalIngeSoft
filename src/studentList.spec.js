import {getStudentsFromJson, logInStudentCredentials} from "./studentList.js"

describe("Se crean estudiantes predefinidos", () => {
    it("se ve que existe Nicolas Cari", () => {
        let students = getStudentsFromJson()
        expect(students.has("Cari Rodriguez, Nicolas")).toEqual(true);
    });
    it("se ve que existe Christian Rivero", () => {
        let students = getStudentsFromJson()
        expect(students.has("Rivero Arnez, Christian")).toEqual(true);
    });
});
