let commandContainer = document.getElementsByClassName("command-container").item(0);
let lastElement = null;
renderOutputLines([
    `Welcome to my portofolio! Type help to get all possible commands`,
    `&nbsp;`
]);
renderNewCommandLine();


function clickPress(event) {
    if (event.key == "Enter") {
        commandHistory.push(event.target.value);
        parseCommand(event.target.value);
        renderNewCommandLine();
    }
    if (event.key == "ArrowUp") {
        visitCommandHistory();
    }
}

function renderNewCommandLine() {
    let element = document.createElement("div");
    element.className = "command-line";
    element.innerHTML = `<span class="left-text-input">josip-paulik.com &ensp; &gt; &ensp; </span><input type="text" class="command-input" onkeydown="clickPress(event)"/>`;
    commandContainer.appendChild(element);
    lastElement = element;

    let inputElement = element.getElementsByClassName("command-input").item(0);
    inputElement.focus();
}

function renderOutputLines(outputLines) {
    outputLines.forEach(outputLine => {
        let element = document.createElement("div");
        element.className = "output-line";
        element.innerHTML = outputLine;
        commandContainer.appendChild(element);
    });
}

function renderErrorLine() {
    renderOutputLines([`<span class="error-line">Command not recognized.</span>`]);
}

function visitCommandHistory() {
    let inputElement = lastElement.getElementsByClassName("command-input").item(0);
    
    inputElement.value = commandHistory[0];
    const length = inputElement.value.length;
    inputElement.setSelectionRange(length - 1, length);
    inputElement.focus();

}