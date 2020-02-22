function countWordInText(args) {
    //fix error .split() is not function
    args = args + '';

    let regex = /\W/;
    let words = args.split(regex);
    let result = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!result.hasOwnProperty(word) && word !='') {
            result[word] = 1;
        } else if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    console.log(JSON.stringify(result));
}

countWordInText(['Far too slow, you\'re far too slow.']);
