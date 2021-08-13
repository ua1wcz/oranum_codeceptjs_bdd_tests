const { I, HomePage, SearchPage } = inject();

Given('I open Oranum web site', () => {
    HomePage.goto();
});

Given('I scroll until the View All Live Psychics', () => {
    HomePage.scrollToViewAllLivePsychicsButton();
});

When('I click the View All Live Psychics button', () => {
    HomePage.clickViewAllLivePsychicsButton();
});