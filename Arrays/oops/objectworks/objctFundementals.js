

var students={

    name:"fathima",
    course:"mca",
    degree:"bca",
    total:500,
    points:10

}

// console.log(students.name);

// console.log(students.degree);

// students.grade="A+"
// console.log(students);



// if("total" in students){

//     console.log("present");
// }
// else{
//     console.log("not present");
// }



if("points" in students){
    students.points+=10;
    
}
else{
    students.points=15;
   
}
console.log(students);