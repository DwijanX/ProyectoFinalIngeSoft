 import {createHomework} from "./docente";

 describe("Crear una tarea", () => {
    it("Se crea una tarea", () => {
        expect(createHomework("test","2021-01-01","2021-01-02","testCourse")).toEqual({
            name:"test",
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
        });
    });
});
