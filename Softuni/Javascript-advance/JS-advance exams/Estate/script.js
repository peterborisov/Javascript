'use strict';
import EstatesEngine from './helpers/EstatesEngine.js'
export function processEstatesAgencyCommands(commands) {
    var results = '';
    // EstatesEngine.initialize();
    commands.forEach(function (cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();
}