function processData(input) {
    const rows = input.split('\n');
    const dataLength = +rows.shift();
    const phoneBook = {};
    let filledPhonebook = rows.reduce((arr, el, index) => {
        index < dataLength ? phoneBook[el.split(' ')[0]] = el.split(' ')[1] :
            arr.push(el);
        return arr;
    }, [])
    filledPhonebook.map(el => {
        console.log(phoneBook[el] ? `${el}=${phoneBook[el]}` : 'Not found')
    })
}

processData(
    "3\n\
sam 99912222 \n\
tom 11122222 \n\
harry 12299933 \n\
sam \n\
edward \n\
harry"
)
/**
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
 */