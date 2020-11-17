const { type } = require("os");
const { errorMonitor } = require("stream");

function binary(n) {
    n = n.toString(2).split('0').sort((a, b) => {
        return b.localeCompare(a)
    });
    console.log(n[0].length);
}

binary(439)