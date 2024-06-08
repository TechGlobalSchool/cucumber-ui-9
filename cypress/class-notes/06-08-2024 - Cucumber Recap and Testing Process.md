


		
		Cucumber consist of 3 parts

			1. Feature				=> Where we document our test cases in Gherkin format
			2. Step-definition		=> Code representation of each step in the feture file
			3. Runner				=> The file triggers the test, and the test options

    Environments example:

			1. Dev Env
			2. QA/Staging Env
			3. UAT
			4. Production

    Interview Question:

			- How do you manage your time to complete the automation in a sprint ?
			- What if your developer pushes the code last 2 days of the sprint ?

      SPRINT TYPES

			1. 2 Weeks of Sprint

				- You start test with devs in the Dev env

					E.g.

						Sprint 1:

						 DEVS: Started, devs finished and pushed the code at the end of the sprint

						 QA: Creates the documentation from the requirements, and start testing as soon as devs push the code.

						 How you can manage this ?

								- Define the priority of tests
								- Push to next sprint
								- Having an access to dev repo on your local
								- Shift-left testing
								- Code-freeze

				- You follow dev env one week behind

					E.g.

						Sprint 1:

						 DEVS: Started, devs finished and pushed the code at the end of the sprint.
						 QA: Waits, creates the documentation from the requirements while devs code.

						Sprint 2:

						 DEVS: Start work on Sprint 2, devs finished and pushed the code at the end of the sprint
						 QA: Starts working automation on Sprint 1 tickets



			2. 3 Weeks of Sprint

					Sprint 1:
						DEVS: Work on development at first 2 weeks of the sprint
						QA: QA's works on the documentation while devs code, and rest of the week (last week of sprint) is left for testers to complete automation

			TEST CASE REVIEW MEETING

			  Meeting you conduct with PO and Devs

        What is discussed in this meeting?

				- What to automate or manual
				- What will be smoke or regression
				- Deciding the test coverage