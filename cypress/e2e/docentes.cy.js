
describe("Despliegue de vistas", () => {
    it("deberia desplegar la vista de docentes", () => {
    cy.visit('http://localhost:1234');
     cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
     cy.get("#passwordText").type("123")
     cy.get("#docentesPage").click()
     cy.get("#TeachersDiv").should("be.visible")
    });
});
describe("Funciones de vista docente", () => {

    it("deberia agregar una tarea", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
        cy.get("#passwordText").type("123")
        cy.get("#docentesPage").click()
        cy.get("#BtnToCreateCourse").click()
        cy.get("#CourseNameCreation").type("testg")
        cy.get("#courseInitials").type("tst")
        cy.get("#TeachersName").type("testTeacher")
        cy.get("#CourseCreation-form").submit()
        cy.get("#BtnToCreateHmwk").click()
        cy.get("#HomeworkName").type("testhmwk")
        cy.get("#courseName").type("testg")
        cy.get("#dateInit").type("2022-11-09")
        cy.get("#dateFin").type("2023-11-10")
        cy.get("#HoursNeededHmwk").type("2")
        cy.get("#HomeworkCreation-form").submit();
        cy.get("#homeworkList").contains("#div14","testhmwk")
        });
    it("deberia agregar una  segunda tarea", () => {
            cy.get("#BtnToCreateHmwk").click()
            cy.get("#HomeworkName").type("testhmwk")
            cy.get("#courseName").clear()
            cy.get("#courseName").type("testg")
            cy.get("#dateInit").type("2022-11-09")
            cy.get("#dateFin").type("2023-11-10")
            cy.get("#HomeworkCreation-form").submit();
            cy.get("#homeworkList").contains("#div15","testhmwk")
           });
           
    it("deberia modificar una tarea", () => {
        cy.get("#14mdf").click()
        cy.get("#HomeworkNameModif").clear()
        cy.get("#HomeworkNameModif").type("nameChangedHmwk")
        cy.get("#HomeworkMofication-form").submit();
        cy.get("#homeworkList").contains("#div14","nameChangedHmwk")
        
        });
    it("deberia eliminar una tarea", () => {
            cy.get("#14dlt").click()
            cy.get("#div14").should('not.exist');
            
        });
});
