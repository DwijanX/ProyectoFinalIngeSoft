import Student from "./estudiante.js";
import {combineDicts} from "./predefinedStudents.js"

let studentPassword = "123"

let studentName = ""

let studentDict = {}


function getStudentsFromJson()
{
    let neoDict = combineDicts()

    for(let pos=0;pos < neoDict.length; pos++)
    {
        for(let studentPos=0; studentPos < neoDict[pos]["students"].length; studentPos++)
        {
            let student = new Student(neoDict[pos]["students"][studentPos])
            if (!studentDict[student.getName()]) {
                studentDict[student.getName()] = [];
                studentDict[student.getName()] = student
            }
            studentDict[student.getName()].addCoursesToStudent(neoDict[pos]["course"])
        }
    }
}

function getStudents()
{
    return studentDict
}

function studentLogIn(name, password)
{
    if(name in studentDict && password == studentPassword)
    {
        return true
    }
    return false
}

function seeIfStudentExist(name)
{
    if(name in studentDict)
    {
        return studentDict[name]
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

function getCoursesFromAllStudents()
{
    let courses = new Set();
    for(let key in studentDict)
    {
        let student = studentDict[key].getCoursesStudent()
        for(let course of student)
        {
            courses.add(course)
        }
    }
    return courses
}

function getCoursesFromAllStudentsWithinACourse(courseToCheck)
{
    let courses = new Set();
    for (const key in studentDict) {

        let student = studentDict[key].getCoursesStudent()
        if(student.has(courseToCheck))
        {
            for(let course of student)
            {
                courses.add(course)
            }
        } 
    }
    return courses
}





export {getStudentsFromJson,studentLogIn, seeIfStudentExist, getStudents, setStudentName, getStudentName, getCoursesFromAllStudents, getCoursesFromAllStudentsWithinACourse}