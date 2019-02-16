// Below we will define an n-interesting polygon. 
// Your task is to find the area of a polygon for a given n.

function shapeArea(n) {
    let temp = 1;
    let count = 1;
    if (n === 1) {
        return count;
    } else {
        for (let i = 0; i < n - 1; i++) {
            temp += 2;
            count += temp;
        }
        for (let i = n; i > 1; i--) {
            temp -= 2;
            count += temp;
        }
    }
    return count
}

shapeArea(5)