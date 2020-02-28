function filterEmployee(...args) {
    let json = JSON.parse(args[0]);
    let filterCriteria = args[1].split('-');
    let counter = 0;
    for (el of json) {
        if (el.hasOwnProperty(filterCriteria[0]) && (Object.values(el).indexOf(filterCriteria[1]) > -1)) {
            console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`);
            counter++;
        }
    }
}

filterEmployee(
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`,
    'gender-Female'
);
