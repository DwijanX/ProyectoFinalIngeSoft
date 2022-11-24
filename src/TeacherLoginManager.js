
let professorArray = []
//let professordPassword = "ucb2022"
let professorName = ""
let professordPassword = "123"

function professorLogIn(name, password)
{
    if(professorArray.includes(name) && password == professordPassword)
    {
        return true
    }
    return false
}
function setProfessorName(name)
{
    professorName = name
}

function getProfessorName()
{
    return professorName
}
function setProfessorArray(incomingArray)
{
    professorArray=incomingArray
}

export { professorLogIn, setProfessorName, getProfessorName,setProfessorArray}