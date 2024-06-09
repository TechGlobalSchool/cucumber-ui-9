@Regression @Northwestern
Feature: Northwestern Test

  Scenario: Northwestern Navbar
    Given user navigates to "https://www.northwestern.edu/"
    # Then user should see NavBar items  "About" "Academics" "Admissions" "Campus Experience" "Research" and "Giving"
    Then user should see below NavBar items
      | About | Academics | Admissions | Campus Experience | Research | Giving |

    Then user should fill the form as key-value pairs
      | First Name | TechGlobal |
      | Last Name  | School     |
      | From       | U.S.       |
      | Live       | Chicago    |

    Then user should validate the each row in the table
      | 1 | Amazon    | 1,523,000 | USA      |
      | 2 | Alibaba   | 245,700   | China    |
      | 3 | Microsoft | 221,000   | USA      |
      | 4 | Apple     | 154,000   | USA      |
      | 5 | Samsung   | 116,915   | S. Korea |

    Then user should handle input form with object
      | label      | input      | error            |
      | First Name | TechGlobal | false characters |
      | Last Name  | School     | wrong lastname   |
      | From       | U.S.       | Short Characters |
      | Live       | Chicago    | Wrong Address    |



    # Then user should update the form in "site" section on site "1"
    #   | label      | input      | error            |
    #   | First Name | TechGlobal | false characters |
    #   | Last Name  | School     | wrong lastname   |
    #   | From       | U.S.       | Short Characters |
    #   | Live       | Chicago    | Wrong Address    |