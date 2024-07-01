var products=[

    {id:1,title:"samasungs23ultra",price:130000,brand:"samsung"},
    {id:2,title:"m32",price:35000,brand:"samsung"},
    {id:3,title:"opporeno",price:27000,brand:"oppo"},
    {id:4,title:"mi21note",price:23000,brand:"mi"},
    {id:5,title:"moto edge 40",price:23000,brand:"moto"},
    {id:6,title:"moto ede40 neo",price:25000,brand:"moto"},
    {id:7,title:"iphone13",price:140000,brand:"apple"},
    {id:8,title:"iphone13pro",price:150000,brand:"apple"},
  
]

// total no.of products
// console.log(products.length);
// print all mobile title


// we can use map method because its in array

// var productsname=products.map(p=>p.title)

// console.log(productsname);


// print all mobilesname available under rs 35k
// var mobilesprice=products.filter(p=>p.price<35000).map(p=>p.title) 
// //method chaining

// console.log(mobilesprice);


// print all samsung mobiles available under 50k
// var samsungmobilefilter=products.filter(p=>p.brand=="samsung" && p.price<50000).map(p=>p.title)
// console.log(samsungmobilefilter);



// costly product
// var costlyproduct=products.reduce((p1,p2)=>p1.price>p2.price?p1.title:p2.title)
// console.log(costlyproduct);


// sort products with price order by desc
// products.sort((p1,p2)=>p2.price-p1.price)
// console.log(products);
// console.log(products.map(p=>p.title));


// product names available in range of 25k - 35k
var pricefilter=products.filter(p=>p.price>=25000 && p.price<=35000).map(p=>p.title)
console.log(pricefilter);