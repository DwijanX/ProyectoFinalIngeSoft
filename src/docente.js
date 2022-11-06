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
function deleteHomework(name){
    if(HomeWorkArray.length>0){
        for(let i=0;i<HomeWorkArray.length;i++){
            if(HomeWorkArray[i].nameMatchs(name)){
                HomeWorkArray.splice(i,1);
            }
        }
    }
    return HomeWorkArray.length;
}

export {createHomework,getHomeworkArray,clearHomeworkArray,deleteHomework}