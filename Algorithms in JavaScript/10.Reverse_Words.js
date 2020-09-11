//Solution 1
const reverseWords = string => {
    const wordsReversed = [];

    string.split(" ").forEach(word => {
        let wordReversed = "";
        for (let i = word.length - 1; i >= 0; i--) wordReversed += word[i];
        wordsReversed.push(wordReversed);
    });

    return wordsReversed.join(" ");
};

//Solution 2
const _reverseWords = string =>
    string
        .split(" ")
        .map(word =>
            word
                .split("")
                .reverse()
                .join("")
        )
        .join(" ");
