import translationEN from '../../src/lang/en.json';
import translationIT from '../../src/lang/it.json';

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:19006/');

    cy.contains(translationEN.home.settingsButton).click();

    cy.get('select').select(translationEN.language.it);

    cy.contains(translationIT.settings.title);
  });
});
