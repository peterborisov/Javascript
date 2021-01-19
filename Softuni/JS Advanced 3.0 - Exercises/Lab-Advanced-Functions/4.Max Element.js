function maxElement(arr){
    let newArray = arr.sort((a, b) => {
       return b - a;
    })
    return newArray[0]
}

console.log(maxElement([10, 20, 5]))