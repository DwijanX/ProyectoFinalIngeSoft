import Student from "./estudiante.js";
import {combineDicts} from "./predefinedStudents.js"

let students = new Set();
let studentsName = new Set();

let studentPassword = "123"

let studentName = ""

function getStudentsFromJson()
{
    let studentDicts = combineDicts()

    for(let pos=0;pos < studentDicts.length; pos++)
    {
        for(let studentPos=0; studentPos < studentDicts[pos]["students"].length; studentPos++)
        {
            let student = new Student(studentDicts[pos]["students"][studentPos])
            student.addCoursesToStudent(studentDicts[pos]["course"])
            students.add(student)
            studentsName.add(student.getName())
        }
    }
}

function getStudents()
{
    return students
}


function studentLogIn(name, password)
{
    if(studentsName.has(name) && password == studentPassword)
    {
        return true
    }
    return false
}

function seeIfStudentExist(name)
{
    for(let key of students)
    {
        if(key.getName() == name)
        {
            return key
        }
    }
    return null
}

function setStudentName(name)
{
    studentName = name
}

function getStudentName()
{
    return studentName
}

function getCoursesStudent()
{
    
}


export {getStudentsFromJson, studentLogIn, seeIfStudentExist, getStudents, setStudentName, getStudentName}