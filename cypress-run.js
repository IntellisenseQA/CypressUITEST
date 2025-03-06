const { execSync } = require("child_process");

const featureFiles = [
  "features/example.feature",
  "features/scenario-outline.feature",
  "features/api.feature",
];

featureFiles.forEach((file) => {
  execSync(`npx cypress run --spec "${file}"`, { stdio: "inherit" });
});
