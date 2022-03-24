const allowedCommands = ['bio', 'contact'];

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
    bio: (inputTextSeparated) => {
        renderContact();
    }

}

function renderContact() {
    let element = document.createElement("div");
    element.className = "output-line";
    element.innerHTML = `Facebook: <a href="https://www.facebook.com/josip.paulik1">Josip Paulik</a>`;
    commandContainer.appendChild(element);
}