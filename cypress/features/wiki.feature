@Regression @Wiki
Feature: Wiki search functionality

  Background:
    Given user navigates to "https://www.wikipedia.org/"


  Scenario Outline: Validate wiki search
    When user search for "<input>" on Wikipedia
    Then user should see "<input>" in the title
    And user should see "<input>" in the URL
    And user should see "<input>" in the first heading

    Examples:
      | input        |
      | Jeff Bezos   |
      | Elon Musk    |
      | Barack Obama |



  Scenario: Validate Wikipedia main languages
    Then user should see below languages around the logo
      | English | 日本語 | Русский | Español | Deutsch | Français | Italiano | 中文 | فارسی | Português |