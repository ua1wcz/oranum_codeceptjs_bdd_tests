const SearchConstants = {
	profileNameTestId: 'span[data-testid="influencer-name-text"]',
	cardBadgeOfflineStatusTestId: 'section div[data-testid="card-cover"] > div *:not(div[data-testid="live-status-box"])',
    cardBadgeLiveStatusTestId: 'section div[data-testid="card-cover"] div[data-testid="live-status-box"]',
    cardBadgeBusyStatusTestId: 'section div[data-testid="card-cover"] div[data-testid="busy-status-box"]',
	influencerTestId: 'span[data-testid="influencer-name"]',
    cardCoverTestId: 'div[data-testid="card-cover"] picture img[src*=".jpg"]', 
	searchResultsEndTestId: 'div[data-testid="search-result-end"]',
	textFilterTestId: 'input[data-testid="filter-text"]',
    searchResultListTestId: 'div[data-testid="search-result-list"] div[id*="downshift-"] a > div div:nth-child(2) div'
}

module.exports = SearchConstants;
