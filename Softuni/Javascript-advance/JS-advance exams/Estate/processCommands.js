import { processEstatesAgencyCommands } from './script.js';

export function processCommands() {
    let commands = document.getElementById('input').value;
    let commandsArr = commands.split('\n');
    let output = processEstatesAgencyCommands(commandsArr);
    document.getElementById('output').value = output;
}

window.processCommands = processCommands;