function crossword(args) {
    let result = '';
    for (el of args) {
        let command = el[0];
        let secCommand = el[1];
        let index = el[2] - 1;
        let str = el[3];
        switch (command) {
            case 'filter':
                switch (secCommand) {
                    case 'UPPERCASE': result += filterUpperCase(str, index); break;
                    case 'LOWERCASE': result += filterLowerCase(str, index); break;
                    case 'NUMS': result += filterNums(str, index - 1); break;
                }
            case 'sort':
                switch (secCommand) {
                    case 'A': result += sortAcs(str, index); break;
                    case 'Z': result += sortDes(str, index); break;
                }
            case 'rotate': //result += rotate(str, secCommand, index); break;
            case 'get': //result += getChar(str, index); break;
        }
    }

    function filterUpperCase(el, index) {
        let maching = el.match(/[A-Z]+/g);
        return maching[index];
    }

    function filterLowerCase(el, index) {
        let maching = el.match(/[a-z]+/g);
        return maching[index];
    }

    function filterNums(el, index) {
        let maching = el.match(/[0-9]+/g);
        return maching[index];
    }

    function sortAcs(el, index) {
        el = el.split('').sort().join('');
        return el[index];
    }

    function sortDes(el, index) {
        el = el.split('').sort((a, b) => b.localeCompare(a)).join('');
        return el[index];
    }

    function rotate(el, secCommand, index) {
        
    }

    function getChar(el, index) {
        var str = new String(el);
        return str.charAt(index);
    }

    console.log(result);
}

crossword([
    ["filter", "UPPERCASE", 4, "AkIoRpSwOzFdT"], //S
    ["sort", "A", 3, "AOB"],// O
    ["sort", "A", 3, "FAILCL"],// F
    ["sort", "Z", 2, "OUTAGN"],// T
    ["filter", "UPPERCASE", 2, "01S345U7N"], //U
    ["rotate", 2, 2, "DAN"], //N
    ["get", 2, "PING"], //I
    ["get", 3, "?- 654"]
]
)