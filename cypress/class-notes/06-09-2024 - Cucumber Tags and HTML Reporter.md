


		Feature: High level explanation of test case

		Scenario: Name of the test case.

		Background: Steps to use before each test scenario in the feature file.

		Scenario Outline: It's indicating that you will use data parameterization. Which means running the sets of data against the same scenario.

		Examples: Actual sets of test data that is provided inside the table, and it must be used with SCENARIO OUTLINE. Each column must be separeted with pipes (|). You will have table header, and each row after your table header will be amount of times your test will execute. It must be defined for each scenario at the end of the scenario.


		Data Tables: Data Tables allow for the specification of complex or multiple pieces of data for a step. They are particularly useful when a step requires more data than is practical to include in the step text itself.

		- This data can be fetched, as an array.

		  dataTable.rawTable.flat() 

	      | About | Academics | Admissions | Campus Experience | Research | Giving |

		- Or key value pairs

		  dataTable.rowsHash()

		  | First Name | TechGlobal |
	      | Last Name  | School     |
	      | From       | U.S.       |
	      | Live       | Chicago    |


	    - Or, list of rows

	      dataTable.rawTable

	      | 1 | Amazon    | 1,523,000 | USA      |
	      | 2 | Alibaba   | 245,700   | China    |
	      | 3 | Microsoft | 221,000   | USA      |
	      | 4 | Apple     | 154,000   | USA      |
	      | 5 | Samsung   | 116,915   | S. Korea |



	      Step to generate reports:

	      1. Go to documentation, and create the report type you want inside the package.json

	      	- html
	      	- ndjson
	      	- json

	      	NOTE: Explicitly define their paths to better organizing

	      2. If you want a better html report with a better dashboard, get multiple-cucumber-html-reporter

	      	- This dependency requires you to create extra JS file. 

	      		Example: reports.js

	      		- from the multiple-cucumber-html-reporter documentation find and create the report.generate{( )}

	      		- tell where it will find .json file to generate html report.

	      		After your tests run, execute this reports.js file to generate HTML report.