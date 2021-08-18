const { I, HomePage, SearchPage } = inject();
const Assert = require('assert');

Then('each profile is displayed without duplicates', async () => {
	let allInfluencers = await SearchPage.getAllProfilesNames();
	let uniqueNames = allInfluencers.filter((thatValue, iterIndex) => allInfluencers.indexOf(thatValue) === iterIndex)
	Assert(allInfluencers.length === uniqueNames.length, "Found duplicate of the View Live page");
});

Then('all pictures are displayed', async () => {
	let allInfluencers = await SearchPage.getAllProfilesNames();
	SearchPage.checkPicturesCount(allInfluencers.length)
});

Then(/^psychics are showed with different "(.*)"$/, async (status) => {
	await SearchPage.checkStatus(status);
});

When(/^I choose a "(.*)"$/, (topic) => {
    SearchPage.clickSpecificTopic(topic);
});

Then('all the psychics are displayed', () => {
    SearchPage.checkVisiblePsychics();
});

When('I scroll to the end of search', () => {
	SearchPage.scrollToTheEndOfResults();
});

Then(/^the "(.*)" match the current topic$/, async (profileMatch) => {
	var psychicsResult = await SearchPage.getAllProfilesNames();
	var partialText = new RegExp(profileMatch, 'i');
	var matchersOnly = [];

	for (let i = 0; i < psychicsResult.length; i++) {
			var found = psychicsResult[i].trim()
			if (psychicsResult[i].match(partialText)){
			matchersOnly.push(found);
			SearchPage.checkExpectedPsychic(found);
		}
	}
  
	Assert(matchersOnly.length != 0, "No profiles matching the partial name: " + profileMatch);
});

When('I type "{word}" on search', (name) => {
	HomePage.clickSearchButton();
	SearchPage.typeSearch(name);
});

Then('only names matching the "{word}" are displayed', async (partialResult) => {
	var psychicsFound = await SearchPage.getAllPsychicsResultsFromDropdownFilter();
	psychicsFound.forEach(psychic => {
		var partialText = new RegExp(`${partialResult}`, 'i');
		var matchResult = psychic.match(partialText);
		Assert(matchResult.length != null, `Profile name: ${psychic} is not matching with partialResult result ${partialResult}`);
		SearchPage.checkDropdownWithSearchResults(psychic);
	});
});

Then('only one result is displayed for "{word}"', async (profile) => {
	let psychicsFound = await SearchPage.getAllPsychicsResultsFromDropdownFilter();
	const oneResultExpected = 1;
	Assert.strictEqual(psychicsFound.length, oneResultExpected);
	SearchPage.checkDropdownWithSearchResults(profile);
});

Then('the "{word}" found can be accessed', async (profile) => {
  	await SearchPage.clickSearchResultDropdown(profile);
  	await SearchPage.checkAccessedProfileName(profile);
});