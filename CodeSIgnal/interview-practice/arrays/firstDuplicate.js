// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.
function firstDuplicate(a) {
    var findFirstDup = {}
    for (var i of a) {
        if (findFirstDup[i]) return i
        findFirstDup[i] = i
    }
    return -1
}