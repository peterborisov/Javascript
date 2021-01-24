function scoreToHTML(args) {
    let objArr = JSON.parse(args);
    console.log(objArr)
    console.log('<table>');
    console.log('   <tr><th>name</th><th>score</th></tr>');
    for (let obj of objArr) {
        console.log(`   <tr><td>${obj.name}</td><td>${obj.score}</td></tr>`);
    }

    console.log('</table>');
    console.log(args)
}

scoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);