function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    apples.map(el => {
        a + el >= s && a + el <= t ? appleCount++ : '';
    })

    oranges.map(el => {
        b + el <= t && b + el >= s ? orangeCount++ : ''
    })

    console.log(appleCount);
    console.log(orangeCount);
}

