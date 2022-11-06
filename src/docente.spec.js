
import {createHomework,getCourseHomeworks,clearCourseHomeworks,createCourse,getHomeworkBasedOnId} from "./docente";
import Materia from "./materia"


 describe("Crear una tarea", () => {
    createCourse("tst","testCourse","testTeacher")
    beforeEach(() => {
        clearCourseHomeworks("testCourse");
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
        createHomework("test1","2021-01-01","2021-01-02","testCourse",1)
        createHomework("test2","2021-01-01","2021-01-02","testCourse",2)
        let expectedArray=[{
            name:"test1",
            id:1,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
        },{
            name:"test2",
            id:2,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
        }]
        expect(getCourseHomeworks("testCourse")).toEqual(expectedArray);
    });
    it("Trata de crear una tarea para un curso que no existe", () => {
        expect(createHomework("test","2021-01-01","2021-01-02","testCourse1",0)).toEqual(null);
    });
});


describe("Pruebas para conseguir Id",()=>{
    createCourse("tst","testCourse","testTeacher")

    beforeEach(() => {
      });
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

describe("Pruebas sobre Materia",()=>{
    let materia;
    beforeEach(() => {
        materia=new Materia("tst","test","testTeacher")
      });
    it("Se deberia crear una materia",()=>{
        let expectedCourse={initials:"MAT1",name:"Calculo 1",teachersName:"IDK"}
        expect(createCourse("MAT1","Calculo 1","IDK")).toEqual(expectedCourse);
    })
    it("Prueba del comparador en falso",()=>{
        expect(materia.CompareName("hi")).toEqual(false);
    })
    it("Prueba del comparador en verdadero",()=>{
        expect(materia.CompareName("test")).toEqual(true);
    })
    it("Prueba de obtener el array de tareas de un curso que no existe",()=>{
        expect(getCourseHomeworks("course3414214")).toEqual(null)
    })
    it("Prueba de eliminar el array de tareas de un curso que no existe",()=>{
        expect(clearCourseHomeworks("course3414214")).toEqual(1)
    })
})
