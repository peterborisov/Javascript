function countWordInText(args) {
    let regex = /\W/;
    let words = args.toString().split(regex);
    let result = {};

    words
    .filter(el => el !='')
    .map(el => {
        !result.hasOwnProperty(el) ?  result[el] = 1 : result[el]++;
    })

    console.log(JSON.stringify(result));
}

countWordInText(['Far too slow, you\'re far too slow.']);
