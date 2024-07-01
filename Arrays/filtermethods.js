// map method only gets true or false when meeting a particular condition to extrct numbers
// so, we use filter method for that purpose


var arr=[10,11,12,13,14,15,16,17,18]

var odd=arr.filter(num=>num%2!=0)
console.log(odd);

var even=arr.filter(num=>num%2==0)
console.log(even);