function extractWord(args) {
    let set = new Set();
    for (row of args) {
        let rowText = row.toLowerCase().split(/\W+/).filter(nonEmpty => nonEmpty != "");
        for (word of rowText) {
            set.add(word);
        }
    }
    console.log(Array.from(set.keys()).join(", "));
}


extractWord(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);