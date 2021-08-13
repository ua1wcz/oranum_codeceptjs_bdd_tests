
## Cover the below requirements with automated tests. - *Done.

## Please use JavaScript, BDD and CodeceptJS to implement the test cases.  - *Done.
## You should also make sure your tests can be executed on a Dockerized environment, a Makefile is also nice to have, but not mandatory. . - *Done. But unfortunately, without Makefile. 
## Upload your code to a git repository and write a README.md file with details of how to execute the test cases.   - *Done.
## Please also use some reporting tool, such as allure.  - *Done.

Website: www.oranum.com

Oranum is the world’s largest spiritual community, and the only live webcam platform that allows users to video chat with psychics and spiritual advisors live and in the comfort of their own home. Though recognized worldwide for its psychics, anyone with a spiritual message or skill (ranging from horoscope, dream interpretation, reiki healing, tarot card reading, meditation, clairvoyance, to even spell casting) can use Oranum. Oranum’s mission is to help connect, inspire and empower the world’s spiritual community by bringing ancient knowledge to the digital age.

Specification

## REQ-1   - *Done. *But unfortunately, without API using. 

"View all live psychics" button is displayed on the home page.
Clicking on the button should redirect the user to the search page and display all live psychics. 
No duplicate psychic should be displayed and all of them should have a profile picture, nickname and the ones that are live should have a 'Live' status badge
Tip: You can use an API request to retrieve all live psychics to validate if they have the live badge.

*API. I've figured out the API, but I haven't quite figured out with the REST api support in the CodeceptJS. 
What I know now:
Link:
POST: https://api-gateway.docleradn.com/v1/guest/home-page/home-pages/open?session={sessionId}&showTestModels=0
It requires fields of the following type:
\'sessionId\':\s\'([\w-]{33})\'
\"configurationId\"\:\"([\w-]{8}-[\w-]{4}-[\w-]{4}-[\w-]{4}-[\w-]{12})\"
\"viewerId\"\:\"([\w-]{8}-[\w-]{4}-[\w-]{4}-[\w-]{4}-[\w-]{12})\"

The data can be taken from the website page. 
In the output we get a Json with complete data. 
For example:
},
                                "inExclusivePrivate": false,
                                "isBirthday": false,
                                "isExclusive": false,
                                "isFavorite": false,
                                "isNew": false,
                                "languages": [
                                    "lng_en",
                                    "lng_es"
                                ],
                                "lastOnlineAt": null,
                                "mainCategory": "oranum_broadcaster",
This is a very interesting task. I think I can add API support to to these autotests. 

## REQ-2 - *Done.

Searching for partial text should display only matching psychics. Example:
·         Search for 'Matt', all results should contain 'matt'
·         Search for 'Myst', all results should contain 'myst'
·         Search for 'Ann', all results should contain 'ann'
·         Search for 'psy', all results should contain 'psy'

## REQ-3 - *Done.

Searching for full text should show a specific psychic profile. Example:
·         Search for 'MattWarren', MattWarren's profile should be displayed
·         Search for 'MysticMilena', MysticMilena's profile should be displayed
·         Search for 'EternalFlame', EternalFlame's profile should be displayed

## REQ-4 - *Done.

Open the livestream of any psychic, make sure the psychic is live (https://oranum.com/en/chat/LovePsychyicAnie this page, for example).

Validate that the following buttons will trigger a 'Sign up' overlay to be displayed:
·         Get Credits button
·         Add to favorites button
·         Surprise buttons
·         Start Session button
·         Get coins button

## REQ-5 - *Done.

On the home page, selecting different topics should display only matching psychics.

Topics to validate:

·         Clicking on Love shows matching content, no duplicate content is displayed
·         Clicking on Clairvoyant shows matching content, no duplicate content is displayed
·         Clicking on Tarot shows matching content, no duplicate content is displayed
·         Clicking on Astrology shows matching content, no duplicate content is displayed
·         Clicking on Dreams shows matching content, no duplicate content is displayed
·         Clicking on Guides shows matching content, no duplicate content is displayed
·         Clicking on Family shows matching content, no duplicate content is displayed
·         Clicking on Career shows matching content, no duplicate content is displayed
·         Clicking on Fortune Teller shows matching content, no duplicate content is displayed
·         Clicking on Numerology shows matching content, no duplicate content is displayed
·         Clicking on Sounds Baths shows matching content, no duplicate content is displayed
·         Clicking on Pet Psychic shows matching content, no duplicate content is displayed

## Additional information. 
Tested the site for browser support. 
Edge - Above 80 version. Below 80 version - Error message (outdate brower)
Firefox - Above 68 version. Below - blank screen without any error message.
Chrome - Above 68  version. Below - blank screen without any error message
Opera - Above 56 version. Below - blank screen without any error message
Yandex brower (14.12 latest) - Not supported. blank screen without any error message