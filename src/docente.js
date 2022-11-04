import Tarea from "./tarea.js"
let HomeWorkArray=[]

function createHomework(name,dateInit,dateFin,courseName)
{
    let task=new Tarea(name,dateInit,dateFin,courseName);
    HomeWorkArray.push(task);
    return task.getHomeworkObj()
}
function getHomeworkArray()
{
    return HomeWorkArray;
}
function clearHomeworkArray()
{
    HomeWorkArray=[]
}
function deleteHomework(){
    if(HomeWorkArray.length>0){
        HomeWorkArray.pop();
    }
    return HomeWorkArray.length;
}

export {createHomework,getHomeworkArray,clearHomeworkArray,deleteHomework}