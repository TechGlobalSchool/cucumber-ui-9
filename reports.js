const report = require('multiple-cucumber-html-reporter')

report.generate({
  jsonDir: 'reports/cucumber-json',
  reportPath: 'reports/html-multi-report',
  ignoreBadJsonFile: false,
  displayReportTime: true,
  displayDuration: true,
  metadata: {
    device: 'Local test machine',
    platform: { name: process.env.CI ? 'Windows' : 'MacOS' },
  },
})
