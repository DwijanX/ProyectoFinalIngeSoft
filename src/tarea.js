import { deleteHomework } from "./docente";

class Tarea{
    constructor(name,dateInit,dateFin,courseName, id)
    {
        this.name=name;
        this.dateInit=dateInit;
        this.dateFin=dateFin;
        this.courseName=courseName;
        this.id = id
        this.timesCompleted=0;
    }
    getHomeworkObj()
    {
        return {
            name:this.name,
            id: this.id,
            dateInit:this.dateInit,
            dateFin:this.dateFin,
            courseName:this.courseName,
            timesCompleted:this.timesCompleted=0
        }
    }
    getId()
    {
        return this.id
    }
    getCourse()
    {
        return this.courseName
    }
    getName()
    {
        return this.name
    }
    getDateInit()
    {
        return this.dateInit
    }
    getDateFin()
    {
        return this.dateFin
    }
    modifyAtts(name,dateInit,dateFin)
    {
        this.name=name;
        this.dateInit=dateInit;
        this.dateFin=dateFin;
    }
    addToCompleted()
    {
        this.timesCompleted+=1;
    }
    getTimesCompleted()
    {
        return this.timesCompleted;
    }

}
export default Tarea;