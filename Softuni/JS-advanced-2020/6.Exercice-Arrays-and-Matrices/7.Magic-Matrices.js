function magicMatrices(args) {
    let temp = 'true';
    
    for (let i = 0; i < args.length - 1; i++) {
        const arr = args[i];
        const secondArr = args[i + 1];
        let firstSum = arr.reduce((sum, x) => sum + x);
        let secondSum = secondArr.reduce((sum, x) => sum + x);

        if (firstSum != secondSum) {
            temp = 'false';
        }
    }
    console.log(temp)
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);