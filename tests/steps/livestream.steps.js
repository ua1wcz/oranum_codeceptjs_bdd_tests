const { I, HomePage, LiveStreamPage } = inject();

Given('that a live profile is open', () => {
	HomePage.clickFirstOfLivePsychicCards();
	LiveStreamPage.checkLiveChatOpen();
});

When('I click to get free coins', () => {
	LiveStreamPage.clickGetCredits();
});

When('I click add to favorites', () => {
	LiveStreamPage.clickAddToFavorites();
});

When('I click to get a surprise {word}', (model) => {
	LiveStreamPage.clickOranumSuprise(model);
});

When('I click to buy credits', () => {
	LiveStreamPage.clickQuickBuy();
});

When('I click send a message', () => {
	LiveStreamPage.clickSendMessage();
});

When('I click to start session', () => {
	LiveStreamPage.clickSendMessage();
});

Then('a sign up modal is showed', () => {
	LiveStreamPage.checkSignUpForFreeDisplayed();
});