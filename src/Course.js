import { deleteHomework } from "./docente";

const HomeworkNotFound=2;
class Course{
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
    getHomeworkIndexById(id)
    {
        for(let HomeworkIndex=0; HomeworkIndex<this.Homeworks.length; HomeworkIndex++)
        {
            if(this.Homeworks[HomeworkIndex].getId() == id)
            {
                return HomeworkIndex
            }
        }
        return -1;
    }
    modifyHomework(id,name,dateInit,dateFin)
    {
        let answer=HomeworkNotFound;
        let HomeworkIndex=this.getHomeworkIndexById(id);
        if(HomeworkIndex!=-1)
        {
            this.Homeworks[HomeworkIndex].modifyAtts(name,dateInit,dateFin);
            answer=this.Homeworks[HomeworkIndex]
        }
        return answer
    }
    deleteHomework(id){
        let HomeworkIndex=this.getHomeworkIndexById(id);
        if(HomeworkIndex!=-1)
        {
            this.Homeworks.splice(HomeworkIndex);
        }
        return this.getHomeworkArray().length;
    }
}
export default Course;