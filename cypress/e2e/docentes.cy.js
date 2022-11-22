
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
        cy.get("#BtnToCreateHmwk").click()
        cy.get("#HomeworkName").type("testhmwk")
        cy.get("#courseName").type("INGENIERIA DE SOFTWARE")
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
            cy.get("#courseName").type("INGENIERIA DE SOFTWARE")
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

describe("should show homework that student has in that course", () => {
    it("should show predefined name on div1", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
        cy.get("#passwordText").type("123")
        cy.get("#docentesPage").click()
        cy.get("#homeworkList").contains("#div1","Práctica 1")
    });
    it("should show nothing on test", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("test")
        cy.get("#passwordText").type("123")
        cy.get("#docentesPage").click()
        cy.get("#homeworkList").children().should('have.length', 0)
    });

});

describe("Log out tests", () => {
    it("should be able to log out", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
    cy.get("#passwordText").type("123")
    cy.get("#docentesPage").click()
    cy.get("#logOutButton").click()
    cy.get("#Login").should('have.css', 'display', 'block')
    });

});