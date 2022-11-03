 import {createHomework,getHombeworkArray,clearHomeworkArray} from "./docente";

 describe("Crear una tarea", () => {
    beforeEach(() => {
        clearHomeworkArray();
      });
    it("Se crea una tarea", () => {
        expect(createHomework("test","2021-01-01","2021-01-02","testCourse")).toEqual({
            name:"test",
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
        });
    });
    it("Se crean varias tareas", () => {
        createHomework("test1","2021-01-01","2021-01-02","testCourse1")
        createHomework("test2","2021-01-01","2021-01-02","testCourse2")
        let expectedArray=[{
            name:"test1",
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse1",
        },{
            name:"test2",
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse2",
        }]
        expect(getHombeworkArray()).toEqual(expectedArray);
    });
});
