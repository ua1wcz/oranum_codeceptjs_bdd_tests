const { I, CommonConstants, SearchConstants } = inject();

class SearchPage {
	async checkVisiblePsychics() {
		let psychicNames = await this.getAllInfluencersNames();
		psychicNames.forEach(name => I.see(name));
	}
	
	async getAllInfluencersNames() {
		I.waitForElement(SearchConstants.influencerTestId);
		return await I.grabTextFromAll(SearchConstants.influencerTestId);
	}
	
	checkPicturesCount(total) {
		I.seeNumberOfVisibleElements(SearchConstants.cardCoverTestId, total);
	}
	
	checkLiveStatus(status) {
		I.see(status.toUpperCase(), SearchConstants.cardBadgeLiveStatusTestId);
	}	
  
	checkOfflineStatus(status) {
		I.seeElement(SearchConstants.cardBadgeOfflineStatusTestId);
	}
  
	async getAllBusyStatus() {
		if (I.grabNumberOfVisibleElements(SearchConstants.cardBadgeBusyStatusTestId) > 0) {
			I.waitForElement(SearchConstants.cardBadgeBusyStatusTestId);
			const allBusyStatuses = await I.grabTextFromAll(SearchConstants.cardBadgeBusyStatusTestId);
			return allBusyStatuses.length;
		}
	}

	async checkBadgeBusyStatus(status) {
		const badgesWithBusy = await this.getAllBusyStatus();
		var busy = "Busy".toUpperCase();
		if (badgesWithBusy > 0) {
			I.see(busy);
		}
	}
	
	clickSpecificTopic(topic) {
		I.forceClick(`a[data-testid="${topic}"] div[data-testid="card-cover"]`);
	}
	
	checkExpectedPsychic(profileName) {
		I.waitForElement(SearchConstants.influencerTestId, CommonConstants.defaultElementWaitingTimeout);
		I.see(profileName, SearchConstants.influencerTestId);
	}
	
	scrollToTheEndOfResults() {
		I.executeScript(() => window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight));
	}
	
	typeSearch(profileName) {
		I.fillField(SearchConstants.textFilterTestId, profileName);
	}

	clickSearchResultDropdown(profileName) {
		I.waitForElement(SearchConstants.searchResultListTestId, CommonConstants.defaultElementWaitingTimeout);
		I.click(profileName, SearchConstants.searchResultListTestId);
	}

	checkDropdownWithSearchResults(profileName) {
		I.waitForElement(SearchConstants.searchResultListTestId, CommonConstants.defaultElementWaitingTimeout);
		I.see(profileName, SearchConstants.searchResultListTestId);
	}

	async getAllPsychicsResultsFromDropdownFilter() {
		I.waitForElement(SearchConstants.searchResultListTestId, CommonConstants.defaultElementWaitingTimeout);
		let psychicsFound = await I.grabTextFromAll(SearchConstants.searchResultListTestId);
		return psychicsFound;
	}
	
    checkAccessedProfileName(psychicName) {
		I.see(psychicName, SearchConstants.profileNameTestId);
	}
}

module.exports = new SearchPage()