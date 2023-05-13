// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown( { title, motivation, problem, installation, contribution, tests, /*license,*/ username, email}) {
  // how to start new line on markdown? \ breaks template literals
  return `# ${title}  ##  Description  ${motivation} ${problem}  ## Installation  ${installation}  ## Contribution  ${contribution}  ## Tests  ${tests}  ## Questions For any questions, please reference my Github profile at ${username} or email me at ${email}.

  ## License
  ${renderLicenseSection(data.license)};`;
}

module.exports = generateMarkdown;
