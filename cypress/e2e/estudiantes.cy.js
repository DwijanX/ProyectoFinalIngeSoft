describe("Despliegue de vistas", () => {
    it("deberia desplegar la vista de estudiantes", () => {
    cy.visit('http://localhost:1234');
     cy.get("#loginText").type("Cari Rodriguez, Nicolas")
     cy.get("#passwordText").type("123")
     cy.get("#estudiantesPage").click()
    cy.get("#StudentsDiv").should("be.visible")
    });
});
describe("Funciones de vista estudiante", () => {
    it("deberia registrarse a una materia", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Montaño Urquieta, Dieter")
     cy.get("#passwordText").type("123")
     cy.get("#estudiantesPage").click()
     cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
     cy.get("#BtnToEnrollCourse").click()
     cy.get('#coursesList').invoke("text").should("eq",'INTERNET DE LAS COSAS');
    });
    it("deberia verse la tarea al registrarse a la materia", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Montaño Urquieta, Dieter")
     cy.get("#passwordText").type("123")
         cy.get("#estudiantesPage").click()
         cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
         cy.get("#BtnToEnrollCourse").click()
         cy.get("#daysWithHomework").contains("#divFecha2023-01-05","2023-01-05")
        });
    it("deberia tener una dia de tareas de color rojo", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Montaño Urquieta, Dieter")
     cy.get("#passwordText").type("123")
        cy.get("#estudiantesPage").click()
        cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
        cy.get("#BtnToEnrollCourse").click()
        cy.get('#divFechaTitle2023-01-12').should('have.css', 'color', 'rgb(255, 0, 0)')
        });
});
describe("Student courses", () => {
    it("should show enrolled courses", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Montaño Urquieta, Dieter")
    cy.get("#passwordText").type("123")
    cy.get("#estudiantesPage").click()
    cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("INGENIERIA DE SOFTWARE")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("SISTEMAS DE INFORMACION III")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("REDES DE COMPUTADORAS II")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("TECNOLOGIAS WEB")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("ADMINISTRACION II")
    cy.get("#BtnToEnrollCourse").click()
    });
});

describe("Focus On a course", () => {
    it("should show the comboBox", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Montaño Urquieta, Dieter")
    cy.get("#passwordText").type("123")
    cy.get("#estudiantesPage").click()
    cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("INGENIERIA DE SOFTWARE")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("SISTEMAS DE INFORMACION III")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#courseBox").select("All").should('have.value',"All")
    });
    it("should step on internet de las cosas", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Montaño Urquieta, Dieter")
        cy.get("#passwordText").type("123")
        cy.get("#estudiantesPage").click()
        cy.get("#enrollCourse").type("INTERNET DE LAS COSAS")
        cy.get("#BtnToEnrollCourse").click()
        cy.get("#courseBox").select("INTERNET DE LAS COSAS").should('have.value',"INTERNET DE LAS COSAS")

        });
    it("should step on sistemas de informacion", () => {
        cy.visit('http://localhost:1234');
        cy.get("#loginText").type("Montaño Urquieta, Dieter")
        cy.get("#passwordText").type("123")
        cy.get("#estudiantesPage").click()
        cy.get("#enrollCourse").type("INGENIERIA DE SOFTWARE")
        cy.get("#BtnToEnrollCourse").click()
        cy.get("#enrollCourse").type("SISTEMAS DE INFORMACION III")
        cy.get("#BtnToEnrollCourse").click()
        cy.get("#courseBox").select("SISTEMAS DE INFORMACION III").should('have.value',"SISTEMAS DE INFORMACION III")

        });
});
describe("FeedBack", () => {
    it("the add feedback should appear", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Montaño Urquieta, Dieter")
    cy.get("#passwordText").type("123")
    cy.get("#estudiantesPage").click()
    cy.get("#enrollCourse").type("TECNOLOGIAS WEB")
    cy.get("#BtnToEnrollCourse").click()
    cy.get("#enrollCourse").type("ADMINISTRACION II")
    cy.get("#hmwkBtn1").click()
    });
});
describe("Pressing feedBackbutton should show the input for hors spent", () => {
    it("the add feedback fields should appear", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Montaño Urquieta, Dieter");
    cy.get("#passwordText").type("123");
    cy.get("#estudiantesPage").click();
    cy.get("#enrollCourse").type("TECNOLOGIAS WEB");
    cy.get("#BtnToEnrollCourse").click();
    cy.get("#enrollCourse").type("ADMINISTRACION II");
    cy.get("#hmwkBtn1").click();
    cy.get("#feedbackbtn1").click();
    });
});


describe("Log out tests", () => {
    it("should be able to log out", () => {
    cy.visit('http://localhost:1234');
    cy.get("#loginText").type("Montaño Urquieta, Dieter")
    cy.get("#passwordText").type("123")
    cy.get("#estudiantesPage").click()
    cy.get("#logOutButton").click()
    cy.get("#Login").should('have.css', 'display', 'block')
    });

});