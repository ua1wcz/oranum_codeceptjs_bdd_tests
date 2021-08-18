const { I, CommonConstants, HomeConstants, SearchConstants } = inject();

class HomePage {
	async goto() {
		I.amOnPage(CommonConstants.oranumUrl);
		I.waitForVisible(HomeConstants.oranumHomePageMarker);
	}
	
	async clickViewAllLivePsychicsButton() {
		I.click(HomeConstants.viewAllliveSearchButton);
		I.waitForVisible(SearchConstants.searchHomePageMarker);
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