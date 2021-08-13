const { I, CommonConstants, HomeConstants } = inject();

class HomePage {
	goto() {
		I.amOnPage(CommonConstants.oranumUrl);
		I.waitForVisible(HomeConstants.oranumHomePageMarker);
	}
	
	clickViewAllLivePsychicsButton() {
		I.click(HomeConstants.viewAllliveSearchButton);
	}
	
	clickFirstOfLivePsychicCards() {
		I.click(HomeConstants.liveStatusBox);
	}
	
	clickSearchButton() {
		I.click(HomeConstants.headerSearchButton);
	}
	
	scrollToViewAllLivePsychicsButton() {
		I.scrollTo(HomeConstants.viewAllliveSearchButton);
 		I.seeElement(HomeConstants.viewAllliveSearchButton);
	}
}

module.exports = new HomePage()