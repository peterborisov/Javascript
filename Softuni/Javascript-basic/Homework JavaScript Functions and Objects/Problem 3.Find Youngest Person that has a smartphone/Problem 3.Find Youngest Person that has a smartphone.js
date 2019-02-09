var people = [
    {firstname: 'George', lastname: 'Kolev', age: 32, hasSmartphone: false},
    {firstname: 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true},
    {firstname: 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true},
    {firstname: 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false}];

function findYoungestPerson(array) {
    array = array.filter(function (x) {
        return x.hasSmartphone
    });
    var youngestPerson = array[0].firstname + " " + array[0].lastname;
    var min = array[0].age;

    array.forEach(function (x) {
        if (x.age < min) {
            min = x.age;
            youngestPerson = x.firstname + " " + x.lastname;
        }
    });
    console.log("The youngest person is " + youngestPerson);
}
findYoungestPerson(people);
