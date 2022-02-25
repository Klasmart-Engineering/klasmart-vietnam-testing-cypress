const report = require("multiple-cucumber-html-reporter");
const options = {
  theme: "bootstrap",
  jsonDir: "cypress/cucumber-json", // ** Path of .json file **//
  reportPath: "./test-reports/cucumber-report",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  displayDuration: true,
  durationInMS: true,
  displayReportTime: true,
  ignoreBadJsonFile: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "98.0.4758.102",
    },
    device: "Local Test Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
};

report.generate(options);