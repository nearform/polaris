import translationEN from '../../src/lang/en.json'
import translationIT from '../../src/lang/it.json'

describe('Internationalisation support', () => {
  it('changes the app language', () => {
    // Visit the home page. The base URL is set in cypress.json
    cy.visit('/')

    // Find and click the "go to Settings" button
    cy.contains(translationEN.home.settingsButton).click()

    // Find the language drop-down and select the Italian language
    cy.get('[data-testid=language-selector]').select('it')

    // Check if the Italian title for the Settings page is displayed
    cy.contains(translationIT.settings.title)
  })
})
