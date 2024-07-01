// synchronous=>it keeps an order


// asynchronous=>it doesnt keeps an order


// console.log("starter");

// setTimeout(()=>{
//     console.log("main course");
// },2000)

// console.log("dessert");


// javascript is asynchronous by default.
// but it shows both synchronous and asynchronous behaviour.





setTimeout(()=>{
    console.log("line1");
},2000)

console.log("line2");

setTimeout(()=>{
    console.log("line3");
},0)

console.log("line4");

setTimeout(()=>{
    console.log("line5");
},1000)