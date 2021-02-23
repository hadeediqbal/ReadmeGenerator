//node modules
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'instructions to be follow?',
            name: 'instructions',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Any credits?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            //list of license
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: ['The MIT License','The GPL License','Appache License','GNU License','N/A'],
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github username',
            name: 'git',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'E-Mail',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        }
]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
//template to be used
const template = `# ${title}

*[Installation](#installation)
*[Usage](#usage)
*[Contribution](#contribution)
*[Credits](#credits)
*[License](#license)
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### Instructions
${instructions}
## Credits
${credit}
## License
${license}

# Contact
*Github: ${git}
*Linkedin: ${linkedin}
*E-mail: ${email}`;
//function to create our readme using fs
createNewFile(title,template);
}
);
//creating our createNewFile function
function createNewFile(fileName,data){
//fs
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.nd`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated');
})
}
