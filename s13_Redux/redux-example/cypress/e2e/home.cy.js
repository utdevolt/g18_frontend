
// El primer string del describe hace referencia al título principal
describe("Probando el home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  });
  // El string del IT hace referencia a la prueba que haremos en sí
  it("Vamos a probar que el texto Dayvid Ramos exista", () => {
    // Lo que va dentro del IT es el paso a paso

    // Paso 1: Entrar a la web
    // recordatorio cy: cypress
    cy.get("h2").contains("Dayvid Ramos");
  });

  it("vamos a probar si se puede escribir en el input", () => {
    // cy.get("h2");
    cy.get(".task").should("have.length",0);
    cy.get("input[type=text]").type("Tarea 2");
    // cy.wait(1500); // delay entre ejecuciones
    cy.get("button").contains("Crear Tarea").click();
    cy.get(".tasks").should("have.length",1);

    cy.get("input[type=text]").type("Tarea 3");
    // cy.wait(1500); // delay entre ejecuciones
    cy.get("button").contains("Crear Tarea").click();
    cy.get(".tasks").should("have.length",1);


  })

  

});

