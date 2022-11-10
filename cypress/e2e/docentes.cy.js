
describe("Despliegue de vistas", () => {
    it("deberia desplegar la vista de docentes", () => {
    cy.visit('http://localhost:1234');
     cy.get("#docentesPage").click()
     cy.get("#TeachersDiv").should("be.visible")
    });
    it("deberia desplegar la vista de estudiantes", () => {
        cy.visit('http://localhost:1234');
         cy.get("#estudiantesPage").click()
         cy.get("#StudentsDiv").should("be.visible")
        });
});
describe("Funciones de vista docente", () => {
    it("deberia agregar una materia", () => {
    cy.visit('http://localhost:1234');
     cy.get("#docentesPage").click()
     cy.get("#BtnToCreateCourse").click()
     cy.get("#CourseNameCreation").type("test")
     cy.get("#courseInitials").type("tst")
     cy.get("#TeachersName").type("testTeacher")
     cy.get("#CourseCreation-form").submit()
    });
    it("deberia agregar una tarea", () => {
         cy.get("#BtnToCreateHmwk").click()
         cy.get("#HomeworkName").type("testhmwk")
         cy.get("#courseName").type("test")
         cy.get("#dateInit").type("2022-11-09")
         cy.get("#dateFin").type("2023-11-10")
         cy.get("#HomeworkCreation-form").submit();
         cy.get("#homeworkList").contains("#div0","testhmwk")
        });
    it("deberia agregar una  segunda tarea", () => {
            cy.get("#BtnToCreateHmwk").click()
            cy.get("#HomeworkName").type("testhmwk")
            cy.get("#courseName").type("test2")
            cy.get("#dateInit").type("2022-11-09")
            cy.get("#dateFin").type("2023-11-10")
            cy.get("#HomeworkCreation-form").submit();
            cy.get("#homeworkList").contains("#div0","testhmwk")
           });
           
    it("deberia modificar una tarea", () => {
        cy.get("#0mdf").click()
        cy.get("#0mdf").type("test")
        cy.get("#HomeworkNameModif").type("nameChangedHmwk")
        cy.get("#HomeworkMofication-form").submit();
        cy.get("#homeworkList").contains("#div0","nameChangedHmwk")
        
        });
    it("deberia eliminar una tarea", () => {
            cy.get("#0dlt").click()
            cy.get("#div0").should('not.exist');
            
        });
});
