function gradingStudents(grades) {
    let result = grades.map(el => {
        let diff = 5 - el % 5;
        return diff < 3 && el >= 38 ? el = (el + diff) : el;
    })
    return result
}

console.log(gradingStudents([73, 67, 38, 33]))