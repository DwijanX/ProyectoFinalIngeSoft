let dictTechWeb = {
    "course": "TECNOLOGIAS WEB",
    "students":
    [
        "Aguilar Alcocer, Dayan",
        "Aliss Arteaga, Francisco Gabriel",
        "Balderrama Vargas, Gabriel Ichiro",
        "Bustamante Jaldin, Sergio",
        "Camargo Aramayo, Maria Belen",
        "Canapi Madrid, Cristian Said",
        "Cari Rodriguez, Nicolas",
        "Garcia Vacaflor, Jerson Alan",
        "Gonzalez Fernandez, Grover Leonardo",
        "Guardia Ramirez, Rodrigo",
        "Gutierrez Calizaya, Melina Aylem",
        "Riva Salinas, Paulo Ariel",
        "Rivero Arnez, Christian",
        "Rodriguez Alvarez, Noel Alejandro",
        "Roman Arevalo, Libia Nataly",
        "Roman Ledezma, Edwin Oswaldo"
    ]
}

let dictIoT = {
    "course": "INTERNET DE LAS COSAS",
    "students":
    [
        "Acero Rojas, Edwin Daniel",
        "Balderrama Vargas, Gabriel Ichiro",
        "Cari Rodriguez, Nicolas",
        "Diaz Crespo, Rene Dorian",
        "Escobar Herrada, Marco Fernando",
        "Fuentes Martinez, Aramis",
        "Garcia Arias, Alfred Brandon",
        "Guardia Ramirez, Rodrigo",
        "Lopez Soria, Jose Carlos",
        "Montaño Urquieta, Dieter",
        "Ortuño Prudencio, Jhonny Ricardo",
        "Rivero Arnez, Christian"
    ]
}

let dictRedes = {
    "course": "REDES DE COMPUTADORAS II",
    "students":
    [
	    "Aguilera Cordero, Isabel Consuelo",
        "Aliss Arteaga, Francisco Gabriel",
	    "Almendras Santa Cruz, Brian",
        "Balderrama Vargas, Gabriel Ichiro",
        "Camargo Aramayo, Maria Belen",
        "Cari Rodriguez, Nicolas",
        "Escobar Herrada, Marco Fernando",
	    "Flores Lopez, Alejandro Santiago",
        "Fuentes Martinez, Aramis",
        "Garcia Arias, Alfred Brandon",
        "Lopez Soria, Jose Carlos",
        "Rivero Arnez, Christian",
	    "Sanchez San Miguel, Jose Manuel",
        "Tarquino Cespedes, Adriana Valentina",
	    "Vera Loza, Rosa Noelia"
    ]
}

let dictSisInfo = {
    "course": "SISTEMAS DE INFORMACION III",
    "students":
    [
        "Balderrama Vargas, Gabriel Ichiro",
        "Cari Rodriguez, Nicolas",
        "Copa Mejia, Daho Fabio",
        "Escobar Herrada, Marco Fernando",
        "Garcia Arias, Alfred Brandon",
        "Guardia Ramirez, Rodrigo",
        "Gutierrez Calizaya, Melina Aylem",
        "Lopez Soria, Jose Carlos",
        "Mamani Perez, Sandra Jael",
        "Rivero Arnez, Christian",
        "Salazar Aramayo, Luis Felipe",
	    "Salazar Villegas, Luis Sebastian",
	    "Sanchez San Miguel, Jose Manuel",
        "Tarquino Cespedes, Adriana Valentina",
	    "Terceros Ortega, Jonatan Gerson",
        "Torrico Hinojosa, Santiago Jose",
	    "Uribe Tapia, Nicole Alejandra"
    ]
}

let dictIngSoft = {
    "course": "INGENIERIA DE SOFTWARE",
    "students":
    [
        "Aguayo Salas, Karen Pilar",
        "Asturizaga Garcia, Sebastian",
        "Balderrama Vargas, Gabriel Ichiro",
        "Cari Rodriguez, Nicolas",
        "Encinas Cabezas, Angy Alejandra",
        "Garcia Arias, Alfred Brandon",
        "Guardia Ramirez, Rodrigo",
        "Gutierrez Calizaya, Melina Aylem",
        "Lee Perez, Young Woang",
        "Rivero Arnez, Christian",
        "Rodriguez Coca, Alejandro Josue",
	    "Rojas Reque, Kevin Yamil",
        "Torrico Hinojosa, Santiago Jose"
    ]
}

let dictAdmin = {
    "course": "ADMINISTRACION II",
    "students":
    [
        "Alavi Gutierrez, Dilan Alvaro",
        "Arze Mejia, Jaime Alberto",
        "Balderrama Muñoz, Wendy Isabel",
        "Bustamante Jaldin, Sergio",
        "Calvimonte Siles, Mariana",
        "Camargo Aramayo, Maria Belen",
        "Cari Rodriguez, Nicolas",
        "Crespo Romero, Melany",
        "Gamboa Montaño, Kevin",
        "Lazarte Cabero, Diego",
        "Mencia Cespedes, Tatiana Dayana",
        "Quiroga Zambrana, Marcelo Sergio",
        "Rivero Arnez, Christian",
        "Sanchez San Miguel, Jose Manuel",
	    "Torrico Quilla, Gonzalo Nicolas",
        "Villegas Quiroga, Andres Sebastian"
    ]
}

let DictList = []
function combineDicts()
{
    DictList.push(dictTechWeb)
    DictList.push(dictIoT)
    DictList.push(dictRedes)
    DictList.push(dictSisInfo)
    DictList.push(dictIngSoft)
    DictList.push(dictAdmin)

    return DictList
}



export {combineDicts}