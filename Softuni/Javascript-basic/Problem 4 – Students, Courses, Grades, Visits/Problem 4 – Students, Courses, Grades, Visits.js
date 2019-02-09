function main(arr) {
    var data = {};
    for (var i = 0; i < arr.length; i++) {
        var tokens = arr[i].split('|');
        var student = tokens[0].trim();
        var course = tokens[1].trim();
        var grade = Number(tokens[2].trim());
        var visits = Number(tokens[3].trim());

        if (!data[course]) {
            data[course] = {grades: [], visits: [], students: []};
        }
        data[course].grades.push(grade);
        data[course].visits.push(visits);

        if (data[course].students.indexOf(student) == -1) {
            data[course].students.push(student);
        }
    }

    var output = {};
    var courses = Object.keys(data).sort();
    for (var c in courses) {
        var courseName = courses[c];
        var courseInfo = {
            avgGrade: average(data[courseName].grades),
            avgVisits: average(data[courseName].visits),
            students: data[courseName].students.sort()
        };
        output[courseName] = courseInfo;
    }

    console.log(JSON.stringify(output));

    function average(arr) {
        var sum = 0;
        for (var i in arr) {
            sum += arr[i];
        }
        var avg = sum / arr.length;
        avg = Number(avg.toFixed(2));
        return avg;
    }
}

var input = [
    'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'
];
main(input);

