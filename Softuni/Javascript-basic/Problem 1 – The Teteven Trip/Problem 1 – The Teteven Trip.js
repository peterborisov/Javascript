function main(arr) {
    for (var i = 0; i < arr.length; i++) {
        var obj = arr[i].split(' ');
        var car = obj[0];
        var fuel = obj[1];
        var route = obj[2];
        var luggage = obj[3];
        var consumption = 10;
        var totalConsumption = 0;
        var extraConsumption = 0;
        var addConsumption=0;
        var total=0;
        switch (fuel) {
            case "gas":
                consumption = (consumption * 1.2) + (luggage * 0.01);
                break;
            case "petrol":
                consumption = consumption + (luggage * 0.01);
                break;
            case "diesel":
                consumption = (consumption * 0.8) + (luggage * 0.01);
                break;
            default:
                break;
        }
        switch (route) {
            case '1':
                totalConsumption = 110 * (consumption / 100);
                extraConsumption=0.3*consumption;
                addConsumption=10*(extraConsumption/100);
                total=totalConsumption+addConsumption;
                break;
            case '2':
                totalConsumption = 95 * (consumption / 100);
                extraConsumption=0.3*consumption;
                addConsumption=30*(extraConsumption/100);
                total=totalConsumption+addConsumption;
                break;
        }
        console.log(car+" "+fuel+" "+route+" "+Math.round(total));
    }
}
var input = ['BMW petrol 1 320.5', 'Golf petrol 2 150.75', 'Lada gas 1 202', 'Mercedes diesel 2 312.54'];
main(input);
