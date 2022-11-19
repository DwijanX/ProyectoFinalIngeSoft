import Student from "./estudiante.js";
import {combineDicts} from "./predefinedStudents.js"

let students = new Set();
let studentsName = new Set();

let studentPassword = "123"

function getStudentsFromJson()
{
    let studentDicts = combineDicts()

    for(let pos=0;pos < studentDicts.length; pos++)
    {
        for(let studentPos=0; studentPos < studentDicts[pos]["students"].length; studentPos++)
        {
            let student = new Student(studentDicts[pos]["students"][studentPos])
            students.add(student)
            studentsName.add(student.getName())
        }
    }
    return students
}


function StudentLogIn(name, password)
{
    if(studentsName.has(name) && password == studentPassword)
    {
        return true
    }
    return false
}

export {getStudentsFromJson, StudentLogIn}