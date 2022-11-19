
     
class Student{
    
    constructor(Name)
    {
        this.name=Name;
        this.coursesStudent = new Set();
        this.completedHomeworkIds = new Set();
    }

    addCoursesToStudent(course)
    {
        this.coursesStudent.add(course)
    }

    getCoursesStudent()
    {
        return this.coursesStudent;
    }

    showAllEnrolledCourses()
    {
        let materias = "";
        this.coursesStudent.forEach(course=>{
            materias +=course+", "
        })
        return materias.substring(0,materias.length-2)
    }

    completeHomework(id)
    {
        this.completedHomeworkIds.add(id)
    }

    getIfIdCompleted(id)
    {
        return this.completedHomeworkIds.has(id)
    }

}

export default Student;