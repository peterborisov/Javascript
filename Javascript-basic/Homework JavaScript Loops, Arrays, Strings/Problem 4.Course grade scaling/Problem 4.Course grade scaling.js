function main(arr) {
    var myObj = {
            'Пешо': '91',
            'Лилия': '290',
            'Алекс': '343',
            'Габриела': '400',
            'Жичка': '70'
        },
        keys = [],
        k, i, len;

    for (k in arr) {
        if (myObj.hasOwnProperty(k)) {
            keys.push(k);
        }
    }

    keys.sort();

    len = keys.length;

    for (i = 0; i < len; i++) {
        k = keys[i];
        var finalResult= (myObj[k]);
        if(finalResult>100){
            console.log(k + ':' + finalResult);
        }
    }
}

var input = [
    {
        'name': 'Пешо',
        'score': 91
    },
    {
        'name': 'Лилия',
        'score': 290
    },
    {
        'name': 'Алекс',
        'score': 343
    },
    {
        'name': 'Габриела',
        'score': 400
    },
    {
        'name': 'Жичка',
        'score': 70
    }
];
main(input);
