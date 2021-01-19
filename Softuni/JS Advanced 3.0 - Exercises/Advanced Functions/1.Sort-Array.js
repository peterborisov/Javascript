function sortArray(arr, order){
    let command = {
        asc: () => {
            return arr.sort((a, b) => {
                return a - b;
            })
        }, 

        desc: () => {
            return  arr.sort((a, b) => {
                return b - a;
            }) 
        }
    }
    return command[order]()
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))