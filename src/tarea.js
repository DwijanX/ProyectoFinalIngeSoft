class Tarea{
    constructor(name,dateInit,dateFin,courseName, id)
    {
        this.name=name;
        this.dateInit=dateInit;
        this.dateFin=dateFin;
        this.courseName=courseName;
        this.id = id
    }
    getHomeworkObj()
    {
        return {
            name:this.name,
            id: this.id,
            dateInit:this.dateInit,
            dateFin:this.dateFin,
            courseName:this.courseName
        }
    }

    getId()
    {
        return this.id
    }
}
export default Tarea;