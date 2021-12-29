const report = require("multiple-cucumber-html-reporter");
const options = {
  theme: 'bootstrap',
  jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
  reportPath: "./test-reports/cucumber-report/cucumber-htmlreport",
  metadata:{
    browser: {
        name: 'Chrome',
        version: '96.0.4664.110'
    },
    device: 'Local test machine',
    platform: {
        name: 'Windows',
        version: '11'
    }
},
customData: {
    title: 'Run info',
    data: [
        {label: 'Project', value: 'Admin Service'},
        {label: 'Release', value: 'Sprint 5'},
        {label: 'Cycle', value: 'Regression'},
    ]
},
  scenarioTimestamp: true,
  displayDuration: true,
  durationInMS: true,
  reportSuiteAsScenarios: true,
  displayReportTime: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  metadata: false
};

//generate report
report.generate(options);
