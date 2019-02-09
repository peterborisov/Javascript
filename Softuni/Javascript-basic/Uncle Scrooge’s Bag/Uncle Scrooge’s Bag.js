function main(arr) {
var gold,silver,bronse;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i].split(" ");
        if (obj[0] == "coin") {
            if (!isNaN(obj[1])) {
                var num = parseFloat(obj[1]);
                if(num%1==0){
                    sum+=num;
                }
            }
        }
    }
    gold=sum/100;
    silver=(sum/10)%10;
    bronse=sum%10;
    console.log("gold : "+Math.floor(gold));
    console.log("silver : "+Math.floor(silver));
    console.log("bronze : "+Math.floor(bronse));
}
var input = ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];
main(input);