const allowedCommands = ['source', 'contact', 'help'];
const commandsDescriptions = [
    {
        commandName: 'source',
        description: 'See source code for this web app.'
    },
    {
        commandName: 'contact',
        description: 'Ways to contact me.'
    }
]

function parseCommand(inputText) {
    let inputTextSeparated = inputText.trim().split(' ');
    let command = inputTextSeparated[0];
    
    if (allowedCommands.includes(command)) {
        commandExecutions[command](inputTextSeparated);
    }
    else {
        renderErrorLine();
    }
}


commandExecutions = {
    contact: (inputTextSeparated) => {
        renderContact();
    },
    source: () => {
        renderSource();
    },
    help: () => {
        renderHelp();
    }
}

function renderHelp() {
    renderOutputLines(commandsDescriptions.map(cmd => {
        return `${cmd.commandName} ${'&nbsp'.repeat(15 - cmd.commandName.length)} - ${cmd.description}`;
    }));
}

function renderContact() {
    renderOutputLines([
        `<a href="https://www.facebook.com/josip.paulik1" target="_blank" rel="noreferrer noopener">Facebook</a>`,
        `<a href="https://www.linkedin.com/in/josip-paulik-551143a9/" target="_blank" rel="noreferrer noopener">LinkedIn</a>`,
        `<a href="https://github.com/josip-paulik" target="_blank" rel="noreferrer noopener">GitHub</a>`
    ]);
}

function renderSource() {
    renderOutputLines([`<a href="https://github.com/josip-paulik/portofolio" target="_blank" rel="noreferrer noopener">View source code</a>`]);
}