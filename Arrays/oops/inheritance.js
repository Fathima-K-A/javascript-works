class Parent{

    m1(){
        console.log("inside parent m1 methods");
    }
}

class Child extends Parent{
    m2(){

        console.log("inside child m2 method");

    }
}

const ch=new Child()
ch.m1()
ch.m2()