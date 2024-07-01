var weightInKg=75;

var heightInCm=165;

var heightInMeter=heightInCm/100;
var BMI=Math.round(weightInKg/(heightInMeter**2))


if (BMI<19){
    console.log("underweight")
}
else if(BMI<=25){
    console.log("normal")
}
else if(BMI<=30){
    console.log("overweight")

}
else {
    console.log("obese")
}