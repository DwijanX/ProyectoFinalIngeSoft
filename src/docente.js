

function createHomework(name,dateInit,dateFin,courseName)
{
    let task={
        name:name,
        dateInit:dateInit,
        dateFin:dateFin,
        courseName:courseName
    }
    return task
}

export {createHomework}