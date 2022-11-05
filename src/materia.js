class Materia{
    constructor(Initials,Name,TeachersName)
    {
        this.initials=Initials;
        this.name=Name;
        this.teachersName=TeachersName;
    }
    getCourseObj()
    {
        return {
            initials:this.initials,
            name:this.name,
            teachersName:this.teachersName
        }
    }
}
export default Materia;