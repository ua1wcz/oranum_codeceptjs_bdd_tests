const Assert = require('assert');

const { I, CommonConstants, SearchConstants } = inject();

class SearchPage {
	async checkVisiblePsychics() {
		let profileNames = await this.getAllProfilesNames();
		profileNames.forEach(name => I.see(name));
	}
	
	async getAllProfilesNames() {
		I.waitForElement(SearchConstants.profileTestId);
		return await I.grabTextFromAll(SearchConstants.profileTestId);
	}
	
	checkPicturesCount(total) {
		I.seeNumberOfVisibleElements(SearchConstants.cardCoverTestId, total);
	}
	
	async checkStatus(status) {
		// Note: The testcase is not for production! 
		// Potentially unstable, because on high-loaded systems between two requests it is possible to change statuses.
		let livePages = await this.getProfilesByStatusViaApi(status);
		I.say(`Psychics received from API: ${livePages}`);
		let pageLiveResults = await this.getAllProfilesByStatus(status);
		I.say(`Psychics on the page of the site: ${pageLiveResults}`);
		if (livePages.length > 0)
		{
			let compareResult = pageLiveResults.filter(nick => !livePages.includes(nick));
			Assert(compareResult.length == 0, `Not all Psychics are displayed: ${compareResult}`)
		}
	}

	async getProfilesByStatusViaApi(status) {
		let profilesOffsets = [ '0', '50' ];
		let url = '/guest/magazine?';
		let profiles = [];

		let pageStatus = this.getProfileApiStatus(status);
		let sessionId = await this.getCurrentSessionId();

		for (let offset of profilesOffsets) {
			let parameters = `session=${sessionId}&limit=50&influencerStatus=${pageStatus}&authorProduct=oranum&offset=${offset}&orderByFromUS=desc&enableRegistrationAgeDebug=0&showTestModels=0`;
			let response = await I.sendGetRequest(url + parameters);
			Assert.equal(response.status, '200', 'API psychics request error');

			let authors = response.data.data.authors;
			let displayNames = Array.from(authors, ids => ids.displayName);
			if (displayNames.length > 0)
			{
				profiles = profiles.concat(displayNames);	
			}			
		}
		
		return profiles;			
	}

	async getCurrentSessionId() {
		let pageSource = await I.grabSource();
		let sessionIdRegex = new RegExp("\\'sessionId\\':\\s\\'([\\w-]{33})(?!.\\')");
		let matchResult = pageSource.match(sessionIdRegex);
		return matchResult[1];
	}
  
	async getAllProfilesByStatus(status) {
		return await I.grabTextFromAll(this.getBadgeStatusLocator(status));
	}
	
	clickSpecificTopic(topic) {
		I.forceClick(`a[data-testid="${topic}"] div[data-testid="card-cover"]`);
	}
	
	checkExpectedPsychic(profileName) {
		I.waitForElement(SearchConstants.profileTestId, CommonConstants.defaultElementWaitingTimeout);
		I.see(profileName, SearchConstants.profileTestId);
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

	getProfileApiStatus(status) {
		switch (status) {
			case "Live":
				return "free_chat";
			case "Offline":
				return "call_me";
			case "Busy":
				return "private_chat";
			default:
				Assert(true, `Unsupported status type: ${status}`)
				break;
		}
	}

	getBadgeStatusLocator(status) {
		switch (status) {
			case "Live":
				return SearchConstants.cardBadgeLiveNickTestId;
			case "Offline":
				return SearchConstants.cardBadgeOfflineNickTestId;
			case "Busy":
				return SearchConstants.cardBadgeBusyNickTestId;
			default:
				Assert(true, `Unsupported status type: ${status}`)
				break;
		}
	}
}

module.exports = new SearchPage()