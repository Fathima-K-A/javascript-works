//print leap year if year is leap year els print not leap year

//if year is a century yr then it is divisible by 400
//if year is not a century yr then it is divisible by 4
//if both condition is true then yr is a leap year


var year=2024

if((year % 100 ==0 && year % 400 ==0)||(year % 100!=0 && year % 4==0)){
    console.log(year,"is a leap year");

}
else{
    console.log(year,"is not a leap year");
}