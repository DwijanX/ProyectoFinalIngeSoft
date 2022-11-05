class Tarea{
    constructor(name,dateInit,dateFin,courseName)
    {
        this.name=name;
        this.dateInit=dateInit;
        this.dateFin=dateFin;
        this.courseName=courseName;
        this.id = 0
    }
    getHomeworkObj()
    {
        return {
            name:this.name,
            dateInit:this.dateInit,
            dateFin:this.dateFin,
            courseName:this.courseName
        }
    }
    changeHomeworkID(number)
    {
        this.id = number
    }

    getId()
    {
        return this.id
    }
}
export default Tarea;