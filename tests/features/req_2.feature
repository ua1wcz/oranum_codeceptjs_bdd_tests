@search-partialtext
Feature: Psychics Searching Results

	Scenario Outline: Searching results match
		Given I open Oranum web site
		When I type "<name>" on search
		Then only names matching the "<partialResult>" are displayed

		Examples:
			| name | partialResult |
			| Matt | matt          |
			| Myst | myst          |
			| Ann  | ann           |
			| psy  | psy           |

