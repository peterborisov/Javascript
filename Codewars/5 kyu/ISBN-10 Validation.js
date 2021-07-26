function validISBN10(isbn) {
    const lastOne = isbn.substring(isbn.length, isbn.length - 1);
    const shortIsbn = isbn.substring(0, isbn.length - 1);
    let result = [...shortIsbn].reduce((acc, el, index) => {
        return acc += (+el * (index + 1))
    }, 0)
    lastOne === 'X' ? result += 100 : result += (lastOne * 10);
    return result % 11 === 0;
}

console.log(validISBN10('048665088X'))