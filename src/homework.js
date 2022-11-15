
class Homework{
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
export default Homework;