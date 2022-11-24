function e(e,r,t,o){Object.defineProperty(e,r,{get:t,set:o,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=r.parcelRequirec771;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){o[e]=r},r.parcelRequirec771=a),a.register("5pdT7",(function(r,t){e(r.exports,"professorLogIn",(()=>s)),e(r.exports,"setProfessorName",(()=>n)),e(r.exports,"getProfessorName",(()=>i)),e(r.exports,"setProfessorArray",(()=>l));let o=[],a="";function s(e,r){return!(!o.includes(e)||"123"!=r)}function n(e){a=e}function i(){return a}function l(e){o=e}})),a.register("bcjz4",(function(r,t){e(r.exports,"getStudentsFromJson",(()=>l)),e(r.exports,"studentLogIn",(()=>u)),e(r.exports,"seeIfStudentExist",(()=>d)),e(r.exports,"setStudentName",(()=>c)),e(r.exports,"getStudentName",(()=>m)),e(r.exports,"getCoursesFromAllStudents",(()=>h)),e(r.exports,"getCoursesFromAllStudentsWithinACourse",(()=>g)),e(r.exports,"getStudentsInCourse",(()=>C));var o=a("7J2j4"),s=a("8VHPe");let n="",i={};function l(){let e=(0,s.combineDicts)();for(let r=0;r<e.length;r++)for(let t=0;t<e[r].students.length;t++){let a=new(0,o.default)(e[r].students[t]);i[a.getName()]||(i[a.getName()]=[],i[a.getName()]=a),i[a.getName()].addCoursesToStudent(e[r].course)}}function u(e,r){return e in i&&"123"==r}function d(e){return e in i?i[e]:null}function c(e){n=e}function m(){return n}function h(){let e=new Set;for(let r in i){let t=i[r].getCoursesStudent();for(let r of t)e.add(r)}return e}function g(e){let r=new Set;for(const t in i){let o=i[t].getCoursesStudent();if(o.has(e))for(let t of o)e!=t&&r.add(t)}return r}function C(e){let r={};for(const t in i){let o=i[t].getCoursesStudent();if(o.has(e))for(let e of o)r[e]||(r[e]=[],r[e]=0),r[e]=1+parseInt(r[e])}return r}})),a.register("7J2j4",(function(r,t){e(r.exports,"default",(()=>o));var o=class{constructor(e){this.name=e,this.coursesStudent=new Set,this.completedHomeworkIds=new Set,this.hoursFeedback=Object.create(null),this.stressFeedback=Object.create(null)}addCoursesToStudent(e){this.coursesStudent.add(e)}addStressLevel(e,r){console.log("Setting Stress Level"),this.stressFeedback[r]=e}getStressLevel(e){return this.stressFeedback[e]}addFeedback(e,r){console.log("saving feedback"),this.hoursFeedback[r]=e}getFeedBackhours(e){return this.hoursFeedback[e]}getCoursesStudent(){return this.coursesStudent}showAllEnrolledCourses(){let e="";return this.coursesStudent.forEach((r=>{e+=r+", "})),e.substring(0,e.length-2)}completeHomework(e){this.completedHomeworkIds.add(e)}getIfIdCompleted(e){return this.completedHomeworkIds.has(e)}getName(){return this.name}}})),a.register("8VHPe",(function(r,t){e(r.exports,"combineDicts",(()=>d));let o={course:"TECNOLOGIAS WEB",students:["Aguilar Alcocer, Dayan","Aliss Arteaga, Francisco Gabriel","Balderrama Vargas, Gabriel Ichiro","Bustamante Jaldin, Sergio","Camargo Aramayo, Maria Belen","Canapi Madrid, Cristian Said","Cari Rodriguez, Nicolas","Garcia Vacaflor, Jerson Alan","Gonzalez Fernandez, Grover Leonardo","Guardia Ramirez, Rodrigo","Gutierrez Calizaya, Melina Aylem","Riva Salinas, Paulo Ariel","Rivero Arnez, Christian","Rodriguez Alvarez, Noel Alejandro","Roman Arevalo, Libia Nataly","Roman Ledezma, Edwin Oswaldo"]},a={course:"INTERNET DE LAS COSAS",students:["Acero Rojas, Edwin Daniel","Balderrama Vargas, Gabriel Ichiro","Cari Rodriguez, Nicolas","Diaz Crespo, Rene Dorian","Escobar Herrada, Marco Fernando","Fuentes Martinez, Aramis","Garcia Arias, Alfred Brandon","Guardia Ramirez, Rodrigo","Lopez Soria, Jose Carlos","Montaño Urquieta, Dieter","Ortuño Prudencio, Jhonny Ricardo","Rivero Arnez, Christian"]},s={course:"REDES DE COMPUTADORAS II",students:["Aguilera Cordero, Isabel Consuelo","Aliss Arteaga, Francisco Gabriel","Almendras Santa Cruz, Brian","Balderrama Vargas, Gabriel Ichiro","Camargo Aramayo, Maria Belen","Cari Rodriguez, Nicolas","Escobar Herrada, Marco Fernando","Flores Lopez, Alejandro Santiago","Fuentes Martinez, Aramis","Garcia Arias, Alfred Brandon","Lopez Soria, Jose Carlos","Rivero Arnez, Christian","Sanchez San Miguel, Jose Manuel","Tarquino Cespedes, Adriana Valentina","Vera Loza, Rosa Noelia"]},n={course:"SISTEMAS DE INFORMACION III",students:["Balderrama Vargas, Gabriel Ichiro","Cari Rodriguez, Nicolas","Copa Mejia, Daho Fabio","Escobar Herrada, Marco Fernando","Garcia Arias, Alfred Brandon","Guardia Ramirez, Rodrigo","Gutierrez Calizaya, Melina Aylem","Lopez Soria, Jose Carlos","Mamani Perez, Sandra Jael","Rivero Arnez, Christian","Salazar Aramayo, Luis Felipe","Salazar Villegas, Luis Sebastian","Sanchez San Miguel, Jose Manuel","Tarquino Cespedes, Adriana Valentina","Terceros Ortega, Jonatan Gerson","Torrico Hinojosa, Santiago Jose","Uribe Tapia, Nicole Alejandra"]},i={course:"INGENIERIA DE SOFTWARE",students:["Aguayo Salas, Karen Pilar","Asturizaga Garcia, Sebastian","Balderrama Vargas, Gabriel Ichiro","Cari Rodriguez, Nicolas","Encinas Cabezas, Angy Alejandra","Garcia Arias, Alfred Brandon","Guardia Ramirez, Rodrigo","Gutierrez Calizaya, Melina Aylem","Lee Perez, Young Woang","Rivero Arnez, Christian","Rodriguez Coca, Alejandro Josue","Rojas Reque, Kevin Yamil","Torrico Hinojosa, Santiago Jose"]},l={course:"ADMINISTRACION II",students:["Alavi Gutierrez, Dilan Alvaro","Arze Mejia, Jaime Alberto","Balderrama Muñoz, Wendy Isabel","Bustamante Jaldin, Sergio","Calvimonte Siles, Mariana","Camargo Aramayo, Maria Belen","Cari Rodriguez, Nicolas","Crespo Romero, Melany","Gamboa Montaño, Kevin","Lazarte Cabero, Diego","Mencia Cespedes, Tatiana Dayana","Quiroga Zambrana, Marcelo Sergio","Rivero Arnez, Christian","Sanchez San Miguel, Jose Manuel","Torrico Quilla, Gonzalo Nicolas","Villegas Quiroga, Andres Sebastian"]},u=[];function d(){return u.push(o),u.push(a),u.push(s),u.push(n),u.push(i),u.push(l),u}})),a.register("imxDU",(function(r,t){e(r.exports,"CoursesControllerSingleton",(()=>l));var o=a("bNTfp"),s=a("jfUYD"),n=a("bcjz4");class i extends s.Courses{constructor(){super(),this.homeworkId=0}tryToModifyHomework(e,r,t,a,s){let n=this.#e(a,t);return n==o.OK&&this.modifyHomework(e,r,t,a,s),n}tryToCreateCourse(e,r,t){this.createCourse(e,r,t)}tryToCreateHomework(e,r,t,a,s){let n=this.#e(t,r);if(n==o.OK){return s=parseInt(s),this.createHomework(e,r,t,a,s,this.homeworkId)!=o.CourseNotFound?(this.homeworkId++,o.OK):o.CourseNotFound}return n}getAllHomeworksByDate(e){let r=this.getCourseNames(),t=[];return r.forEach((r=>{e.has(r)&&(t=t.concat(this.getCourseHomeworks(r)))})),this.getdaysWithHomework(t)}getStudentHomeworksByDate(e){let r=(0,n.getCoursesFromAllStudents)(),t=[];return r.forEach((r=>{e.has(r)&&(t=t.concat(this.getCourseHomeworks(r)))})),this.getdaysWithHomework(t)}getStudentHomeworksByDate(e){let r=(0,n.getCoursesFromAllStudents)(),t=[];return r.forEach((r=>{e.has(r)&&(t=t.concat(this.getCourseHomeworks(r)))})),this.getdaysWithHomework(t)}getStudentHomeworkByClass(e){let r=[];return r=r.concat(this.getCourseHomeworks(e)),this.getdaysWithHomework(r)}getdaysWithHomework(e){let r={};for(let t=0;t<e.length;t++)null==r[e[t].getDateFin()]?r[e[t].getDateFin()]=[e[t]]:r[e[t].getDateFin()].push(e[t]);return r}#e(e,r){let t=0,a=new Date;return 0==this.#r(a,e)&&(t=o.DeadlineAlreadyPassed),0==this.#r(r,e)&&(t=o.DeadlineCantBeLowerThanInit),t}#r(e,r){return(e=new Date(e))-(r=new Date(r))<=0}}let l=function(){let e;return{getInstance:function(){return e||(e=new i),e}}}()})),a.register("bNTfp",(function(r,t){e(r.exports,"OK",(()=>o)),e(r.exports,"CourseNotFound",(()=>a)),e(r.exports,"HomeworkNotFound",(()=>s)),e(r.exports,"DeadlineAlreadyPassed",(()=>n)),e(r.exports,"DeadlineCantBeLowerThanInit",(()=>i));const o=0,a="CourseNoFound",s=2,n=3,i=4})),a.register("jfUYD",(function(r,t){e(r.exports,"Courses",(()=>i));var o=a("cD3kB"),s=a("dEoGZ"),n=a("bNTfp");class i{constructor(){this.courses={}}createHomework(e,r,t,a,s,i){let l=new(0,o.default)(e,r,t,a,s,i);return this.courses[a]?(this.courses[a].addHomework(l),l.getHomeworkObj()):n.CourseNotFound}getCourseNames(){return Object.keys(this.courses)}getCourseHomeworks(e){return this.courses[e]?this.courses[e].getHomeworkArray():1}getHomeworkBasedOnId(e){for(const r in this.courses){let t=this.courses[r].getHomeworkArray();for(let r=0;r<t.length;r++)if(t[r].getId()==e)return t[r]}return 2}clearCourseHomeworks(e){let r=1;return this.courses[e]&&(this.courses[e].clearHomeworks(),r=0),r}createCourse(e,r,t){let o=new(0,s.default)(e,r,t);return this.courses[r]=o,o.getCourseObj()}modifyHomework(e,r,t,o,a){let s=1;return this.courses[a]&&(s=this.courses[a].modifyHomework(e,r,t,o)),s}markHmwkAsDone(e){this.getHomeworkBasedOnId(e).addToCompleted()}addFeedbackToAhmwk(e,r){this.getHomeworkBasedOnId(r).addFeedback(e),console.log(this.getHomeworkBasedOnId(r))}getCourseByName(e){for(const r in this.courses){let t=this.courses[r].getCourseObj();if(t.teachersName==e)return t.name}return 1}deleteHomework(e,r){let t=n.CourseNotFound;return this.courses[e]&&(t=this.courses[e].deleteHomework(r)),t}getHoursToComplete(e){let r=0;return e.forEach((e=>{r+=e.getHoursPerDay()})),r}}})),a.register("cD3kB",(function(r,t){e(r.exports,"default",(()=>o));var o=class{constructor(e,r,t,o,a,s){this.name=e,this.dateInit=r,this.dateFin=t,this.courseName=o,this.hoursNeeded=a,this.id=s,this.timesCompleted=0,this.homeworkFeedbacks=[]}addFeedback(e){this.homeworkFeedbacks.push(e)}getFeedback(){return this.homeworkFeedbacks}sumFeedback(){let e=0,r=this.homeworkFeedbacks;for(let t=0;t<r.length;t++)e=parseInt(r[t])+e;return e/this.homeworkFeedbacks.length}getHomeworkObj(){return{name:this.name,id:this.id,dateInit:this.dateInit,dateFin:this.dateFin,courseName:this.courseName,timesCompleted:this.timesCompleted=0}}getId(){return this.id}getDateFin(){return this.dateFin}modifyAtts(e,r,t){this.name=e,this.dateInit=r,this.dateFin=t}getHoursPerDay(){let e=new Date(this.dateFin),r=new Date(this.dateInit),t=Math.floor(Math.abs(e-r)/864e5);return this.hoursNeeded/t}addToCompleted(){this.timesCompleted+=1}getTimesCompleted(){return this.timesCompleted}}})),a.register("dEoGZ",(function(r,t){e(r.exports,"default",(()=>s)),a("jfUYD");var o=a("bNTfp");var s=class{constructor(e,r,t){this.initials=e,this.name=r,this.teachersName=t,this.Homeworks=[]}addHomework(e){this.Homeworks.push(e)}getCourseObj(){return{initials:this.initials,name:this.name,teachersName:this.teachersName}}CompareName(e){return this.name==e}getHomeworkArray(){return this.Homeworks}clearHomeworks(){this.Homeworks=[]}getHomeworkIndexById(e){for(let r=0;r<this.Homeworks.length;r++)if(this.Homeworks[r].getId()==e)return r;return-1}modifyHomework(e,r,t,o){let a=2,s=this.getHomeworkIndexById(e);return-1!=s&&(this.Homeworks[s].modifyAtts(r,t,o),a=this.Homeworks[s]),a}deleteHomework(e){let r,t=this.getHomeworkIndexById(e);return-1!=t?(this.Homeworks.splice(t,1),r=this.getHomeworkArray().length):r=o.HomeworkNotFound,r}}}));var s=a("5pdT7"),n=a("bcjz4");let i=a("imxDU").CoursesControllerSingleton.getInstance(),l=[];function u(){var e;l.push("Antezana Rojas, Israel Gilberto"),l.push("Rocabado Torrez, Jose Marcelo"),l.push("Molina Arcienega, Luis Alberto"),l.push("Marin Garcia, Eduardo Enrique"),l.push("Beltran Mercado, Franz Osvaldo"),l.push("Lopez Gumucio, Jorge Ricardo"),l.push("test"),(e=i).tryToCreateCourse("SIS-213","INGENIERIA DE SOFTWARE",l[0]),e.tryToCreateCourse("SIS-225","SISTEMAS DE INFORMACION III",l[1]),e.tryToCreateCourse("SIS-233","REDES DE COMPUTADORAS II",l[2]),e.tryToCreateCourse("SIS-234","INTERNET DE LAS COSAS",l[3]),e.tryToCreateCourse("SIS-241","TECNOLOGIAS WEB",l[4]),e.tryToCreateCourse("ADM-112","ADMINISTRACION II",l[5]),e.tryToCreateCourse("tst-142","test",l[6]),function(e){e.tryToCreateHomework("PRIMERA EVALUACION","2023-01-01","2023-01-02","ADMINISTRACION II",15),e.tryToCreateHomework("Práctica 1","2023-01-01","2023-01-05","INTERNET DE LAS COSAS",4),e.tryToCreateHomework("Práctica 2","2023-01-01","2023-01-06","INTERNET DE LAS COSAS",2),e.tryToCreateHomework("Práctica 3","2023-01-01","2023-01-12","INTERNET DE LAS COSAS",20),e.tryToCreateHomework("Cortina","2023-01-10","2023-01-12","INTERNET DE LAS COSAS",20),e.tryToCreateHomework("Tour of Heroes","2023-01-01","2023-01-04","TECNOLOGIAS WEB",1),e.tryToCreateHomework("Practica CRUD","2023-01-01","2023-01-20","TECNOLOGIAS WEB",3),e.tryToCreateHomework("Examen 3","2023-01-01","2023-01-06","REDES DE COMPUTADORAS II",8),e.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","REDES DE COMPUTADORAS II",6),e.tryToCreateHomework("Examen 4","2023-01-01","2023-01-07","SISTEMAS DE INFORMACION III",15),e.tryToCreateHomework("Proyecto Final","2023-01-01","2023-01-12","SISTEMAS DE INFORMACION III",7),e.tryToCreateHomework("1er Sprint Backlog - Trello","2023-01-01","2023-01-05","INGENIERIA DE SOFTWARE",10),e.tryToCreateHomework("Entregables 1ra Iteracion","2023-01-01","2023-01-12","INGENIERIA DE SOFTWARE",11),e.tryToCreateHomework("Entrega Proyecto Final","2023-01-01","2023-01-20","INGENIERIA DE SOFTWARE",8)}(i)}const d=document.querySelector("#docentesPage"),c=document.querySelector("#estudiantesPage"),m=document.querySelector("#TeachersDiv"),h=document.querySelector("#StudentsDiv"),g=document.querySelector("#Login"),C=document.querySelector("#logOutButton"),I=document.querySelector("#HomeworkCreation-form"),S=document.querySelector("#CourseCreation-form"),y=document.querySelector("#HomeworkMofication-form"),A=document.querySelector("#loginText"),f=document.querySelector("#passwordText");let k=document.querySelector("#pass"),p=!1;function w(){p=!0,E(),c.style.display="none",d.style.display="none",C.style.display="inline-block",k.style.color="black"}function E(){I.style.display="none",S.style.display="none",y.style.display="none"}d.addEventListener("click",(e=>{e.preventDefault(),(0,s.professorLogIn)(A.value,f.value)&&!p?(w(),(0,s.setProfessorName)(A.value),m.style.display="flex",h.style.display="none",g.style.display="none"):(k.innerHTML="credenciales incorrectas",k.style.color="red")})),c.addEventListener("click",(e=>{e.preventDefault(),(0,n.studentLogIn)(A.value,f.value)&&!p?(w(),(0,n.setStudentName)(A.value),h.style.display="flex",m.style.display="none",g.style.display="none",k.style.color="black"):(k.innerHTML="credenciales incorrectas",k.style.color="red")})),C.addEventListener("click",(e=>{e.preventDefault(),E(),h.style.display="none",m.style.display="none",g.style.display="block",p=!1,c.style.display="inline-block",d.style.display="inline-block",C.style.display="none"})),window.onload=()=>{u(),(0,s.setProfessorArray)(l),(0,n.getStudentsFromJson)()};
//# sourceMappingURL=index.8e5f36d3.js.map
