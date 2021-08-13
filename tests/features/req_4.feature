@livestream
Feature: Open a Psychic's Livestream

	Background: Open Oranum website
		Given I open Oranum web site
		
	@buy-credits
	Scenario: Sign up first to Buy credits
		Given that a live profile is open
		When I click to buy credits
		Then a sign up modal is showed

	@messenger
	Scenario: Sign up first to Send Messages
		Given that a live profile is open
		When I click send a message
		Then a sign up modal is showed
	
	@get-credits
	Scenario: Sign up first to Get Free Credits
		Given that a live profile is open
		When I click to get free coins
		Then a sign up modal is showed

	@add-favorites
	Scenario: Sign up first to Add Favorites
		Given that a live profile is open
		When I click add to favorites
		Then a sign up modal is showed
	
	@suprise-model
	Scenario Outline: Sign up first to have a Surprise Model
		Given that a live profile is open
		When I click to get a surprise "<modelId>"
		Then a sign up modal is showed

		Examples:
			| modelId                     |
			| OranumSurprisesBird         |
			| OranumSurprisesCards        |
			| OranumSurprisesMoon         |
			| OranumSurprisesGlobe        |
			| OranumSurprisesDiamond      |
			| OranumSurprisesDreamcatcher |
			| OranumSurprisesFox          |
			| OranumSurprisesHeart        |
			| OranumSurprisesSun          |
			| OranumSurprisesPhoenix      |
			| OranumSurprisesYinYang      |
			| OranumSurprisesFlower       |	
			| OranumSurprisesEye          |
			| OranumSurprisesHand         |
			| OranumSurprisesTree         |
			| OranumSurprisesHuman        |
			| OranumSurprisesPattern      |
			| OranumSurprisesAngel        |
			| OranumSurprisesElephant     |
			| OranumSurprisesSymbol       |
			| OranumSurprisesBuda         |