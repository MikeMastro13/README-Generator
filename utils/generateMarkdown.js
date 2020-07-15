function generateTitle(name, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${name}/${title}`;
}

function generateBadges(license) {
  if (license === "MIT" || license === "mit") {
    return `## License [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)`;
  }
  return ``;
}

function generateMarkdown(data) {
  return `
# ${data.title}
-------------------------------------------------------------
${generateBadges(data.license)}

By ${data.author}

![GitHub Logo](/images/logo.png) : ${data.profile} | ${data.email}

VERSION: ${data.version}

# Table of Contents
* Description
* Instructions
* Usage

${data.description}

## Instructions
${data.instructions}

## Usage
${data.usage}
`;
}

module.exports = generateMarkdown;
