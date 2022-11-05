class Tarea{
    constructor(name,dateInit,dateFin,courseName)
    {
        this.name=name;
        this.dateInit=dateInit;
        this.dateFin=dateFin;
        this.courseName=courseName;
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
    nameMatchs(name){
        return this.name==name;
    }
}
export default Tarea;