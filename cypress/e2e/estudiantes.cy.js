describe("Despliegue de vistas", () => {
    it("deberia desplegar la vista de estudiantes", () => {
    cy.visit('http://localhost:1234');
     cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
     cy.get("#passwordText").type("ucb2022")
     cy.get("#estudiantesPage").click()
    cy.get("#StudentsDiv").should("be.visible")
    });
});
describe("Funciones de vista estudiante", () => {
    it("deberia registrarse a una materia", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
     cy.get("#passwordText").type("ucb2022")
     cy.get("#estudiantesPage").click()
     cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
     cy.get("#BtnToEnrollCourse").click()
     cy.get('#coursesList'). invoke("text").should("eq",'INTERNET DE LAS COSAS');
    });
    it("deberia verse la tarea al registrarse a la materia", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Antezana Rojas, Israel Gilberto")
         cy.get("#passwordText").type("ucb2022")
         cy.get("#estudiantesPage").click()
         cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
         cy.get("#BtnToEnrollCourse").click()
         cy.get("#daysWithHomework").contains("#divFecha2023-01-05","2023-01-05")
        });
});
