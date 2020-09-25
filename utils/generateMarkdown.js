// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Github 


${data.github}
 
# Email


${data.email}

# Description


${data.description}

# Installation 


${data.installation}

# Test 


${data.test} 

# Usage 


${data.usage}

# Contributing 


${data.contributing}

# License- ${data.license}
## Badges

![](https://img.shields.io/badge/Language-NodeJs-green)

`;
}

module.exports = generateMarkdown;
