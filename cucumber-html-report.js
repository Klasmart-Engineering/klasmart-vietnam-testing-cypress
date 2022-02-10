const report = require("multiple-cucumber-html-reporter");

report.generate({
  theme: "bootstrap",
  jsonDir: "cypress/cucumber-json", // ** Path of .json file **//
  reportPath: "./test-reports/cucumber-report/cucumber-htmlreport",
  scenarioTimestamp: true,
  displayDuration: true,
  durationInMS: true,
  reportSuiteAsScenarios: true,
  displayReportTime: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "98.0.4758.81",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Admin Service" },
      { label: "Release", value: "Sprint 8" },
      { label: "Cycle", value: "Regression" },
    ],
  },
});
