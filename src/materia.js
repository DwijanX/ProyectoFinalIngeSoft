class Materia{
    constructor(Initials,Name,TeachersName)
    {
        this.initials=Initials;
        this.name=Name;
        this.teachersName=TeachersName;
        this.Homeworks=[]
    }
    addHomework(homework)
    {
        this.Homeworks.push(homework)
    }
    getCourseObj()
    {
        return {
            initials:this.initials,
            name:this.name,
            teachersName:this.teachersName
        }
    }
    CompareName(Name) {
        return this.name == Name;
    }
    getHomeworkArray()
    {
        return this.Homeworks;
    }
    clearHomeworks()
    {
        this.Homeworks=[]
    }
}
export default Materia;