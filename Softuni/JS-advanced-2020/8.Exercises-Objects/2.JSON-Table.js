function jsonTable(args) {
    console.log('<table>');
    for (user of args) {
        let toJsonParce = JSON.parse(user);
        console.log('<tr>')
        console.log(`   <td>${toJsonParce.name}</td>`)
        console.log(`   <td>${toJsonParce.position}</td>`)
        console.log(`   <td>${toJsonParce.salary}</td>`)
        console.log('<tr>')
    }
    console.log('</table>');
}

jsonTable(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']

);