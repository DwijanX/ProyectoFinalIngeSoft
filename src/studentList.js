import Student from "./estudiante.js";
import {combineDicts} from "./predefinedStudents.js"

let students = new Set();


function getStudentsFromJson()
{
    let studentDicts = combineDicts()

    for(let pos=0;pos < studentDicts.length; pos++)
    {
        for(let studentPos=0; studentPos < studentDicts[pos]["students"].length; studentPos++)
        {
            students.add(studentDicts[pos]["students"][studentPos])
        }
    }
    return students
}


export {getStudentsFromJson}