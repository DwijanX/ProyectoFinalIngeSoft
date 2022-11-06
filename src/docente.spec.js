 import {createHomework,getHomeworkArray,clearHomeworkArray, deleteHomework} from "./docente";

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
        expect(getHomeworkArray()).toEqual(expectedArray);
    });
    
});
describe("Deletes an assigned homework", () => {
    beforeEach(() => {
        clearHomeworkArray();
      });
    it("it deletes the assigned homework when the list has just one assignment", () => {
        createHomework("test1","2021-01-01","2021-01-02","testCourse1")
        expect(deleteHomework("test1")).toEqual(0);
    });
    it("it deletes the assigned homework based on the given name", () => {
        createHomework("test1","2021-01-01","2021-01-02","testCourse1")
        createHomework("test2","2021-01-01","2021-01-02","testCourse2")
        createHomework("test3","2021-01-01","2021-01-02","testCourse3")
        expect(deleteHomework("test2")).toEqual(2);
    });
});
