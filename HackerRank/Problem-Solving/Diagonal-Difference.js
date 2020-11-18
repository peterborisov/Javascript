function diagonalDifference(arr) {
    arr = arr.split('\n');
    let len = +arr.shift();
    let diagonalOne = 0,
        diagonalTwo = 0;
    arr.reduce((ar, el, index) => {
        el.split(' ').reduce((subArr, subEl, subIndex) => {
            if (index < len && subIndex < len) {
                if (index === subIndex) {
                    diagonalOne += +subEl;
                }
                if (index + subIndex === len - 1) {
                    diagonalTwo += +subEl;
                }
            }
        }, [])
    }, [])

    console.log(Math.abs(diagonalOne - diagonalTwo));
}

diagonalDifference(
    '3\n\
11 2 4\n\
4 5 6\n\
10 8 -12') //15