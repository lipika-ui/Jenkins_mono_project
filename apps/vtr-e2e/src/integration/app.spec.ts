import { getGreeting } from '../support/app.po';

context('vtr', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
     // getGreeting().contains('Welcome to vtr!'); 
     cy.get('h1').contains('Welcome to vtr');
  });

  it('should display Test Heading', () => {
  
    cy.get('h1.staticH1').should('have.text','Test Heading');
 });

 
});
