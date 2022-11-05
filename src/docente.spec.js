
import {createHomework,getHomeworkArray,clearHomeworkArray,createCourse,getHomeworkBasedOnId} from "./docente";

 describe("Crear una tarea", () => {
    beforeEach(() => {
        clearHomeworkArray();
      });
    it("Se crea una tarea", () => {
        expect(createHomework("test","2021-01-01","2021-01-02","testCourse",0)).toEqual({
            name:"test",
            id:0,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
        });
    });
    it("Se crean varias tareas", () => {
        createHomework("test1","2021-01-01","2021-01-02","testCourse1",1)
        createHomework("test2","2021-01-01","2021-01-02","testCourse2",2)
        let expectedArray=[{
            name:"test1",
            id:1,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse1",
        },{
            name:"test2",
            id:2,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse2",
        }]
        expect(getHomeworkArray()).toEqual(expectedArray);
    });
});
describe("Pruebas de Materia",()=>{
    it("Se deberia crear una materia",()=>{
        let expectedCourse={initials:"MAT1",name:"Calculo 1",teachersName:"IDK"}
        expect(createCourse("MAT1","Calculo 1","IDK")).toEqual(expectedCourse);
    })
})

describe("Pruebas para conseguir Id",()=>{
    it("deberia de volver tarea 1",()=>{
        createHomework("test","2021-01-01","2021-01-02","testCourse",0)
        expect(getHomeworkBasedOnId(0)).toEqual({
            name:"test",
            id:0,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
        });
    })
    it("deberia de volver nulo",()=>{
        expect(getHomeworkBasedOnId(4)).toEqual(null);
    })
})

