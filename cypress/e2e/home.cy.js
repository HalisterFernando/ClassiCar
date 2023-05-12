describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should display the rules', () => {
    cy.contains('Seja Bem-vindo ao ClassiCar Trunfo!');
  });
  it('should be able to create a card', () => {
    cy.get('[data-testid="ok-btn"').click();

    const saveBtn = cy.get('[data-testid="save-btn"]');

    saveBtn.should('be.disabled');

    const cardName = cy.get('[data-testid="card-name"]');
    const previewName = cy.get('[data-testid="preview-name"]');
    const cardDescription = cy.get('[data-testid="card-description"]');
    const previewDescription = cy.get('[data-testid="preview-description"]');
    const cardSpeed = cy.get('[data-testid="speed"]');
    const previewSpeed = cy.get('[data-testid="preview-speed"]');
    const cardWeight = cy.get('[data-testid="weight"]');
    const previewWeight = cy.get('[data-testid="preview-weight"]');
    const cardLength = cy.get('[data-testid="length"]');
    const previewLength = cy.get('[data-testid="preview-length"]');
    const cardImage = cy.get('[data-testid="card-image"]');
    const previewImage =  cy.get('[data-testid="preview-image"]');

    cardName.type('Niva');
    previewName.first().should('have.text', 'Niva');

    cardDescription.type('Um SUV soviético');
    previewDescription.first().should('have.text', 'Um SUV soviético');

    cardSpeed.invoke('val', '').type('130');
    previewSpeed.first().should('have.text', '130 Km/h');

    cardWeight.invoke('val', '').type('1065');
    previewWeight.first().should('have.text', '1065 kg');

    cardLength.invoke('val', '').type('3.7');
    previewLength.first().should('have.text', '3.7 mts');

    
    cardImage.type('https://www.ultimatespecs.com/cargallery/Lada/210/w400_default2.jpg');   
    previewImage.first().should('have.attr', 'src', 'https://www.ultimatespecs.com/cargallery/Lada/210/w400_default2.jpg');

    saveBtn.should('not.be.disabled');
    saveBtn.click();

    cy.contains('Niva');
  });
});
