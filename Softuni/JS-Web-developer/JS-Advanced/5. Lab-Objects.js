//@ts-check
/*1. Towns to JSON
You re tasked to create and print a JSON from a text table. You will receive input as an array of strings, where
each string represents a row of a table, with values on the row encompassed by pipes &quot;|&quot; and optionally spaces. The
table will consist of exactly 3 columns &quot;Town&quot;, &quot;Latitude&quot; and &quot;Longitude&quot;. The latitude and longitude
columns will always contain valid numbers. Check the examples to get a better understanding of your task.
*/

// function towns(args) {
//     args.shift();
//     let json = [];
//     let reg = /\s*\|\s*/;
//     args.map(el => {
//         el = el.split(reg);
//         let schema = {
//             Town: el[1],
//             Latitude: +parseFloat(el[2]).toFixed(2),
//             Longitude: +parseFloat(el[3]).toFixed(2)
//         };
//         json.push(schema);
//     })
//     console.log(JSON.stringify(json))
// }

// towns(['| Town | Latitude | Longitude | ',
//     ' | Sofia | 42.696552 | 23.32601 | ',
//     ' | Beijing | 39.913818 | 116.363625 |'])

/*2. Sum by Town
You’re tasked with calculating the total sum of income for a number of Towns. You will receive an array of strings
representing towns and their incomes, every even index will be a town and every odd index will be an income
belonging to that town. Create an object that will hold all the towns as keys and their total income (the sum of their
incomes) as values to those keys and print it as a JSON.
*/
function sumByTown(args) {

    let result = {};
      
    for (let i = 0; i < args.length; i++) {
        let el = args[i];
        let elValue = +(args[i + 1]);
         i % 2 === 0 ? !result.hasOwnProperty(el) ? 
         result[el] = +elValue : result[el] += elValue: ''  
    }

    console.log(JSON.stringify(result));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])