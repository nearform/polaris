import translationEN from '../../src/lang/en.json';
import translationIT from '../../src/lang/it.json';

describe('Internationalisation support', () => {
  it('changes the app language', () => {
    cy.visit('/');

    cy.contains(translationEN.home.settingsButton).click();

    cy.get('select').select(translationEN.language.it);

    cy.contains(translationIT.settings.title);
  });
});
