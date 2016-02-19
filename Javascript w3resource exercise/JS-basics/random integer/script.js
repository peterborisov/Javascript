function main(){
    var input=parseInt(prompt("Enter your number from 1 to 10"));
    var random=Math.floor((Math.random() * 10) + 1);
    if(input==random){
        document.getElementById("demo").innerHTML="Good Job";
        document.getElementById("result").innerHTML="Random number is same like yours : "+random;

    }else
    {
        document.getElementById("demo").innerHTML="Try again";
        document.getElementById("result").innerHTML="Random number is : "+random;
    }
}
