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