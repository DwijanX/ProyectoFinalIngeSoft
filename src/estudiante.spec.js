//import { expect } from "chai";
import {addCoursesToStudent, showAllEnrolledCourses, daysWithHomework,getHomeworkList} from "./estudiante.js"
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
describe("Shows a homework list ", () => {
    it("the list shows that it has just one assignment", () => {
        createCourse("tst","mate","testName")
        createHomework(createHomework("test","2021-01-01","2021-01-02","mate",0))
        let homework = [{"courseName": "mate", "dateFin": "2021-01-02", "dateInit": "2021-01-01", "id": 0, "name": "test", "timesCompleted": 0}]
        expect(getHomeworkList()).toEqual(homework);
    });
});
describe("ver fechas de tareas dentro de cada materia", () => {
    it("se agrega una materia", () => {
        createCourse("tst","mate","testName")
        createHomework("test","2021-01-01","2021-01-02","mate",0)
        let days = {"2021-01-02": [{"courseName": "mate", "dateFin": "2021-01-02", "dateInit": "2021-01-01", "id": 0, "name": "test", "timesCompleted": 0}]};
        expect(daysWithHomework()).toEqual(days);
    });
    it("se agrega mas tareas", () => {
        createCourse("tst","mate","testName")
        createHomework("test","2021-01-01","2021-01-02","mate",0)
        createHomework("tes3","2021-01-01","2021-01-02","mate",2)
        createHomework("test2","2021-01-01","2021-01-03","mate",1)
        let days ={"2021-01-02": [{"courseName": "mate", "dateFin": "2021-01-02", "dateInit": "2021-01-01", "id": 0, "name": "test", "timesCompleted": 0}, 
        {"courseName": "mate", "dateFin": "2021-01-02", "dateInit": "2021-01-01", "id": 2, "name": "tes3", "timesCompleted": 0}], 
        "2021-01-03": [{"courseName": "mate", "dateFin": "2021-01-03", "dateInit": "2021-01-01", "id": 1, "name": "test2", "timesCompleted": 0}]}
        expect(daysWithHomework()).toEqual(days);
    });
});