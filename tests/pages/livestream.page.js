const { I, CommonConstants, LiveStreamConstants } = inject();

class LiveStreamPage {
	clickQuickBuy() {
		I.forceClick(LiveStreamConstants.quickBuyButtonTestId);
	}
  
	clickSendMessage() {
		I.forceClick(LiveStreamConstants.sendMessageButtonTestId);
	}
  
	clickStartSession() {
		I.forceClick(LiveStreamConstants.startSessionButtonTestId);
	}
	
	clickOranumSuprise(model) {
		const modelId = model.trim();
		const locSurpriseModel = `div[data-testid="reaction-surprise-applet"] button[data-testid*=${modelId}]`;
		I.forceClick(locSurpriseModel);
	}
	
	clickGetCredits() {
		I.waitForElement(LiveStreamConstants.getFreeCoinsButtonTestId, CommonConstants.defaultElementWaitingTimeout);
		I.forceClick(LiveStreamConstants.getFreeCoinsButtonTestId);
	}

	clickAddToFavorites() {
		I.waitForElement(LiveStreamConstants.addToFavoritesButtonTestId, CommonConstants.defaultElementWaitingTimeout);
		I.retry({
		  retries: 5,
		  when: err => err.message === 'Favorite was not loaded'
		}).forceClick(LiveStreamConstants.addToFavoritesButtonTestId);
	}

	checkLiveChatOpen() {
		I.waitForElement(LiveStreamConstants.cardTouchableSectionTestId, CommonConstants.defaultElementWaitingTimeout);
		I.switchTo(LiveStreamConstants.cardTouchableSectionTestId);
		I.seeInCurrentUrl(LiveStreamConstants.chatRelativeUrl)
	}
	
	checkSignUpForFreeDisplayed() {
		I.waitForElement(LiveStreamConstants.signUpForFreeButtonTestId, CommonConstants.defaultElementWaitingTimeout);
		I.seeElement(LiveStreamConstants.signUpForFreeButtonTestId);
	}
}

module.exports = new LiveStreamPage()