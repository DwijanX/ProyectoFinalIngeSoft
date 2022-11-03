
let HomeWorkArray=[]

function createHomework(name,dateInit,dateFin,courseName)
{
    let task={
        name:name,
        dateInit:dateInit,
        dateFin:dateFin,
        courseName:courseName
    }
    HomeWorkArray.push(task);
    return task
}
function getHombeworkArray()
{
    return HomeWorkArray;
}
function clearHomeworkArray()
{
    HomeWorkArray=[]
}

export {createHomework,getHombeworkArray,clearHomeworkArray}