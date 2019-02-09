function main(arr) {
    var money = arr[0];
    var sum = 0;
    var count=0;
    for (var i = 2; i < arr.length - 1; i++) {
        var obj = arr[i];

        if (obj != '%' && obj != '*') {
            var charCode = obj.charCodeAt(0);
            if (obj == obj.toUpperCase()) {
                sum += parseFloat((charCode * 50) / 100);
                count++;
            }
            if (obj == obj.toLowerCase()) {
                charCode -= parseFloat((charCode * 70) / 100);
                money -= charCode;
                count++;
            }
        }
        if (obj == '%') {
            money = money / 2;
            count++;
        }
        if(count==0){
            console.log('No purchases. Money left: '+money.toFixed(2)+' lv.');
        }else{
            console.log(count+' purchases. Money left: '+money.toFixed(2)+' lv.')
        }

    }
}
var input = [
    '110',
    'mall.Enter',
    '%',
    'mall.Exit'
];
main(input);
