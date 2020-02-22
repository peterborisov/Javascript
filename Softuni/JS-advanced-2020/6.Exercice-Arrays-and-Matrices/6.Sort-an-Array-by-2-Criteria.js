function sorting(args) {
    args.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
    args.sort((a, b) => a.length - b.length);
    console.log(args.join('\n'))
}

sorting(['test', 'Deny', 'omen', 'Default']);