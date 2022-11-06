
import {createHomework,getCourseHomeworks,clearCourseHomeworks,createCourse,getHomeworkBasedOnId,modifyHomework, deleteHomework} from "./docente";
import Materia from "./materia"
const CourseNotFound=1
const HomeworkNotFound=2;


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
        expect(createHomework("test","2021-01-01","2021-01-02","testCourse1",0)).toEqual(CourseNotFound);
    });
    
});
describe("Deletes an assigned homework", () => {
    createCourse("tst","testCourse","testTeacher")
    beforeEach(() => {
        clearCourseHomeworks("testCourse");
      });
    it("it deletes the assigned homework when the list has just one assignment", () => {
        createHomework("test1","2021-01-01","2021-01-02","testCourse",1)
        expect(deleteHomework("testCourse",1)).toEqual(0);
    });
    it("it deletes the assigned homework based on the given id", () => {
        createHomework("test1","2021-01-01","2021-01-02","testCourse",1)
        createHomework("test2","2021-01-01","2021-01-02","testCourse",2)
        createHomework("test3","2021-01-01","2021-01-02","testCourse",3)
        expect(deleteHomework("testCourse",3)).toEqual(2);
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
    it("Se trata de obtener una tarea que no existe",()=>{
        expect(getHomeworkBasedOnId(4)).toEqual(HomeworkNotFound);
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
        expect(getCourseHomeworks("course3414214")).toEqual(CourseNotFound)
    })
    it("Prueba de eliminar el array de tareas de un curso que no existe",()=>{
        expect(clearCourseHomeworks("course3414214")).toEqual(1)
    })
})
describe("Modificar una tarea", () => {
    createCourse("tst","testCourse","testTeacher")
    beforeEach(() => {
        clearCourseHomeworks("testCourse");
      });
    it("Se modifica una tarea", () => {
        createHomework("test","2021-01-01","2021-01-02","testCourse",0)
        expect(modifyHomework(0,"test4","2021-01-01","2021-01-03","testCourse")).toEqual({
            name:"test4",
            id:0,
            dateInit:"2021-01-01",
            dateFin:"2021-01-03",
            courseName:"testCourse",
        });
    });
    it("Se modifica una tarea que no existe", () => {
        createHomework("test","2021-01-01","2021-01-02","testCourse",0)
        expect(modifyHomework(1,"test4","2021-01-01","2021-01-03","testCourse")).toEqual(HomeworkNotFound);
    });
    it("Se modifica una tarea que no existe en el curso brindado", () => {
        createHomework("test","2021-01-01","2021-01-02","testCourse",0)
        expect(modifyHomework(0,"test4","2021-01-01","2021-01-03","testCourse1")).toEqual(CourseNotFound);
    });

    
});
