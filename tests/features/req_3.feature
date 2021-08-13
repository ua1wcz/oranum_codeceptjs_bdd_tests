@search-fulltext
Feature: Searching for a Specific Psychic

	Scenario Outline: Specific profile search
		Given I open Oranum web site
		When I type "<name>" on search
		Then only one result is displayed for "<profile>"
		And the "<profile>" found can be accessed

		Examples:
			| name         | profile      |
			| MattWarren   | MattWarren   |
			| MysticMilena | MysticMilena |
			| EternalFlame | EternalFlame |

