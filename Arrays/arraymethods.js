//Array methods
// map()=if w want to apply functionalities in any objects in an array w use this method
// filter()=if we need to filter any objects with particular conditions we use it
// reduce()=it will result in one array by processing an entire array
// sort()-for asc order-(a-b) and for desc order-(b-a)

// var colors=["red","green","blue"]
// console.log(colors);

// console.log(colors.includes("red"))

//class Array{
//push(object){}
// unshift(obj)--it will add the obj to the beginning
// pop()
// shift()--removes obj from the starting
// includes(obj)
// }

// colors.shift("")
// console.log(colors);


// colors.push("yellow")
// console.log(colors);

// var popped_obj=colors.pop()
// console.log(colors);

// colors.unshift("black")
// console.log(colors);



// var arr=[10,11,12,13,14,15,16]


// var result=arr.map((num)=>num+2)
// console.log(result);


// var cubes=arr.map((num)=>num**3)
// console.log(cubes);

// var squares=arr.map((num)=>num**2)
// console.log(squares);


// if num<12 num-1
// if num>12 num+1

// var result=arr.map((num)=>num>12 ? num+1 : num-1)
// console.log(result);

// OR============

// var result=arr.map((num)=>num>12 ? num+1 : num<12 ? num-1 : num)
// console.log(result);



var arr=[10,11,12,13,14,15,16]
// total
// max
// min
// product

// var total=arr.reduce((n1,n2)=>n1+n2)
// console.log(total);


// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);


// var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
// console.log(min);


var arr=[20,10,11,12,13,14,15,16,100,1000]

// arr.sort()
// console.log(arr);

arr.sort((o1,o2)=>o1-o2) //sort array in asc
console.log(arr);

arr.sort((o1,o2)=>o2-o1)
console.log(arr);