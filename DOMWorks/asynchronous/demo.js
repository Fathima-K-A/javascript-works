

function one(){

    console.log("inside 1st function");

}

function two(){

    one()
    console.log("inside 2nd function");
}

function three(){

    two()
    console.log("inside 3rd function");

}

three()