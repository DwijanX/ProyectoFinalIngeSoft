import {showCoursesOnConsole} from "./estudiante"
const testdiv = document.querySelector("#testdiv");
const testButton = document.querySelector("#testButton");


testButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("hi");
    showCoursesOnConsole()
  });