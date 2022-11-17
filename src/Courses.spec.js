
import {Courses} from "./Courses";
import Course from "./Course"
import * as errorCode from './errorCodes'

const CourseNotFound=1
const HomeworkNotFound=2;


 describe("Crear una tarea", () => {
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
        CoursesObj.createCourse("tst","testCourse","testTeacher")
      });
    it("Se crea una tarea", () => {
        expect(CoursesObj.createHomework("test","2021-01-01","2021-01-02","testCourse",2,0)).toEqual({
            name:"test",
            id:0,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
            timesCompleted: 0,
            hoursNeeded:2
        });
    });
    it("Se crean varias tareas", () => {
        CoursesObj.createHomework("test1","2021-01-01","2021-01-02","testCourse",2,1)
        CoursesObj.createHomework("test2","2021-01-01","2021-01-02","testCourse",2,2)
        let expectedArray=[{
            name:"test1",
            id:1,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
            timesCompleted: 0,
            hoursNeeded:2
        },{
            name:"test2",
            id:2,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
            timesCompleted: 0,
            hoursNeeded:2
        }]
        expect(CoursesObj.getCourseHomeworks("testCourse")).toEqual(expectedArray);
    });
    it("Trata de crear una tarea para un curso que no existe", () => {
        expect(CoursesObj.createHomework("test","2021-01-01","2021-01-02","testCourse1",0)).toEqual(CourseNotFound);
    });
    
});
describe("Deletes an assigned homework", () => {
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
        CoursesObj.createCourse("tst","testCourse","testTeacher")
      });
    it("it deletes the assigned homework when the list has just one assignment", () => {
        CoursesObj.createHomework("test1","2021-01-01","2021-01-02","testCourse",2,1)
        expect(CoursesObj.deleteHomework("testCourse",1)).toEqual(0);
    });
    it("it deletes the assigned homework based on the given id", () => {
        CoursesObj.createHomework("test1","2021-01-01","2021-01-02","testCourse",2,1)
        CoursesObj.createHomework("test2","2021-01-01","2021-01-02","testCourse",2,2)
        CoursesObj.createHomework("test3","2021-01-01","2021-01-02","testCourse",2,3)
        expect(CoursesObj.deleteHomework("testCourse",3)).toEqual(2);
    });
    it("Tries to delete a homework that doesnt exist", () => {
        expect(CoursesObj.deleteHomework("testCourse",20)).toEqual(errorCode.HomeworkNotFound);
    });
    
    it("Tries to delete a homework from a course that doesnt exist", () => {
        expect(CoursesObj.deleteHomework("testCourse279",0)).toEqual(errorCode.CourseNotFound);
    });
});


describe("Pruebas para conseguir Id",()=>{
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
        CoursesObj.createCourse("tst","testCourse","testTeacher")
      });
    it("deberia devolver tarea 1",()=>{
        CoursesObj.createHomework("test","2021-01-01","2021-01-02","testCourse",2,0)
        expect(CoursesObj.getHomeworkBasedOnId(0)).toEqual({
            name:"test",
            id:0,
            dateInit:"2021-01-01",
            dateFin:"2021-01-02",
            courseName:"testCourse",
            timesCompleted: 0,
            hoursNeeded:2
        });
    })
    it("Se trata de obtener una tarea que no existe",()=>{
        expect(CoursesObj.getHomeworkBasedOnId(4)).toEqual(HomeworkNotFound);
    })
})

describe("Pruebas sobre Materia",()=>{
    let CoursesObj;
    let materia;
    beforeEach(() => {
        CoursesObj=new Courses()
        materia=new Course("tst","test","testTeacher")
      });
    it("Se deberia crear una materia",()=>{
        let expectedCourse={initials:"MAT1",name:"Calculo 1",teachersName:"IDK"}
        expect(CoursesObj.createCourse("MAT1","Calculo 1","IDK")).toEqual(expectedCourse);
    })
    it("Prueba del comparador en falso",()=>{
        expect(materia.CompareName("hi")).toEqual(false);
    })
    it("Prueba del comparador en verdadero",()=>{
        expect(materia.CompareName("test")).toEqual(true);
    })
    it("Prueba de obtener el array de tareas de un curso que no existe",()=>{
        expect(CoursesObj.getCourseHomeworks("course3414214")).toEqual(CourseNotFound)
    })
    it("Prueba de eliminar el array de tareas de un curso que no existe",()=>{
        expect(CoursesObj.clearCourseHomeworks("course3414214")).toEqual(1)
    })
    it("Prueba de eliminar el array de tareas",()=>{
        CoursesObj.createCourse("TST","test","test")
        expect(CoursesObj.clearCourseHomeworks("test")).toEqual(0)
    })
    it("Prueba de obtener el array de nombres de materia",()=>{
        CoursesObj.createCourse("TST","test","test")
        CoursesObj.createCourse("TST","test1","test")
        CoursesObj.createCourse("TST","test2","test")
        expect(CoursesObj.getCourseNames()).toEqual(["test","test1","test2"])
    })
    
})

describe("Modificar una tarea", () => {
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
        CoursesObj.createCourse("tst","testCourse","testTeacher")
      });
    it("Se modifica una tarea", () => {
        CoursesObj.createHomework("test","2021-01-01","2021-01-02","testCourse",2,0)
        expect( CoursesObj.modifyHomework(0,"test4","2021-01-01","2021-01-03","testCourse")).toEqual({
            name:"test4",
            id:0,
            dateInit:"2021-01-01",
            dateFin:"2021-01-03",
            courseName:"testCourse",
            timesCompleted: 0,
            hoursNeeded:2
        });
    });
    it("Se modifica una tarea que no existe", () => {
        CoursesObj.createHomework("test","2021-01-01","2021-01-02","testCourse",0)
        expect( CoursesObj.modifyHomework(1,"test4","2021-01-01","2021-01-03","testCourse")).toEqual(HomeworkNotFound);
    });
    it("Se modifica una tarea que no existe en el curso brindado", () => {
        CoursesObj.createHomework("test","2021-01-01","2021-01-02","testCourse",0)
        expect( CoursesObj.modifyHomework(0,"test4","2021-01-01","2021-01-03","testCourse1")).toEqual(CourseNotFound);
    });

    
});
describe("Obtener datos de una tarea", () => {
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
        CoursesObj.createCourse("tst","mate","testName")
        CoursesObj.createHomework("test","2021-01-01","2021-01-02","mate",2,0)
      });
    it("Se puede obtener el id de una tarea", () => {
        let hmwk=CoursesObj.getHomeworkBasedOnId(0)
        expect(hmwk.getId()).toEqual(0);
    });
    it("Se puede obtener la fecha final de una tarea", () => {
        let hmwk=CoursesObj.getHomeworkBasedOnId(0)
        expect(hmwk.getDateFin()).toEqual("2021-01-02");
    });
});

describe("estadisticas", () => {
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
      });
    it("se puede obtener la cantidad de veces que una materia fue completada", () => {
        CoursesObj.createCourse("tst","mate","testName")
        CoursesObj.createHomework("test","2021-01-01","2021-01-02","mate",2,0)
        let hmwk=CoursesObj.getHomeworkBasedOnId(0)
        CoursesObj.markHmwkAsDone(0)
        CoursesObj.markHmwkAsDone(0)
        expect(hmwk.getTimesCompleted()).toEqual(2);
    });
});

describe("Tiempo", () => {
    let CoursesObj;
    beforeEach(() => {
        CoursesObj=new Courses()
        CoursesObj.createCourse("tst","mate","testName")
      });
    it("Deberia calcular las horas necesarias por dia para acabar la tarea", () => {
        CoursesObj.createHomework("test","2021-01-01","2021-01-03","mate",3,0)
        let hmwk=CoursesObj.getHomeworkBasedOnId(0)
        expect(hmwk.getHoursPerDay()).toEqual(1.5);
    });
});

