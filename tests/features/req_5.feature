@topics
Feature: Select a Topic

	@results
	Scenario Outline: Select a topic with its matching psychics
		Given I open Oranum web site
		When I choose a "<topic>"
		When I scroll to the end of search
		Then the "<profileMatch>" match the current topic

		Examples:
			| topic              | profileMatch     |
			| Love               | Lov              |
			| Clairvoyant        | Starlight22      |
			| Tarot              | Leelahel         |
			| Dreams             | Angel            |
			| Astrology          | lejlakristal     |
			| Guides             | Light            |
			| Family             | Advisor          |
			| Career             | Gisela27         |
			| Fortune Teller     | PsychicDaniel    |
			| Numerology         | Predict          |
			| Sound Baths        | lejlakristal     |
			| Pet Psychic        | Herhighnessvibes |
