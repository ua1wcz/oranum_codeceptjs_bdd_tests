const SearchConstants = {
	searchHomePageMarker: 'html[data-page="is-search"]',
	profileNameTestId: 'span[data-testid="influencer-name-text"]',
	cardBadgeOfflineStatusTestId: 'section div[data-testid="card-cover"] > div *:not(div[data-testid="live-status-box"])',
	cardBadgeOfflineNickTestId: '//a[contains(@href,"/profile/")]//div[@data-testid="card-cover"]//child::span[@data-testid="influencer-name"]',
    cardBadgeLiveStatusTestId: 'section div[data-testid="card-cover"] div[data-testid="live-status-box"]',
	cardBadgeLiveNickTestId: '//div[@data-testid="live-status-box"]//ancestor::div[@data-testid="card-cover"]//child::span[@data-testid="influencer-name"]',
    cardBadgeBusyStatusTestId: 'section div[data-testid="card-cover"] div[data-testid="busy-status-box"]',
	cardBadgeBusyNickTestId: '//div[@data-testid="busy-status-box"]//ancestor::div[@data-testid="card-cover"]//child::span[@data-testid="influencer-name"]',
	profileTestId: 'span[data-testid="influencer-name"]',
    cardCoverTestId: 'div[data-testid="card-cover"] picture img[src*=".jpg"]', 
	searchResultsEndTestId: 'div[data-testid="search-result-end"]',
	textFilterTestId: 'input[data-testid="filter-text"]',
    searchResultListTestId: 'div[data-testid="search-result-list"] div[id*="downshift-"] a > div div:nth-child(2) div',
}

module.exports = SearchConstants;
