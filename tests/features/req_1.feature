@view_all
Feature: View All Psychics 

	Background: Open Oranum website
		Given I open Oranum web site

	@live
	Scenario: View all the psychics
		Given I scroll until the View All Live Psychics
		When I click the View All Live Psychics button
		Then all the psychics are displayed
	
	@status
	Scenario Outline: Psychic status displayed
		Given I scroll until the View All Live Psychics
		When I click the View All Live Psychics button
		Then psychics are showed with different "<status>"

		Examples:
			| status  |
			| Live    |
			| Offline |
			| Busy    |
	
	@pictures		
	Scenario: Check pictures
		Given I scroll until the View All Live Psychics
		When I click the View All Live Psychics button
		Then all pictures are displayed
		
	@duplicates
	Scenario: Check duplicates
		Given I scroll until the View All Live Psychics
		When I click the View All Live Psychics button
		Then each profile is displayed without duplicates