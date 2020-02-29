function sortArray(arr, order){
    let asc, desc
    if(order === 'desc'){
        asc = arr.sort((a, b) => b - a);
        console.log(desc)
    }
    asc = arr.sort((a, b) => a - b);
    console.log(asc);
}

// let sortArray = (arr, order) => order === 'asc' 
//? arr.sort((a, b) => a - b ) : arr.sort((a, b) => b - a );   
// console.log(sortArray())
sortArray(
    [14, 7, 17, 6, 8], 'des'
);