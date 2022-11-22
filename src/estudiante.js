
class Student{
    
    constructor(Name)
    {
        this.name=Name;
        this.coursesStudent = new Set();
        this.completedHomeworkIds = new Set();
        this.hoursFeedback= Object.create(null);
    }
    addCoursesToStudent(course)
    {
        this.coursesStudent.add(course)
    }
    addFeedback(hours,hmwkId){
        this.hoursFeedback["hoursTaken"]=hours;
        this.hoursFeedback["homeworkId"]=hmwkId;
    }
    getFeedBackhours(){
        return this.hoursFeedback["hoursTaken"];
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

    getName()
    {
        return this.name
    }
}

export default Student;