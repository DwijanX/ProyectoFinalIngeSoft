describe("cambiar pagina", () => {
    it("deberia entrar a pagina de docentes", () => {
    cy.visit('http://127.0.0.1:5500/docentes.html');
     cy.get("#title").should("contain", "Docentes");
    });
    it("deberia entrar a pagina de docentes", () => {
        cy.visit('http://127.0.0.1:5500/estudiantes.html');
         cy.get("#title").should("contain", "Estudiantes");
        });
});