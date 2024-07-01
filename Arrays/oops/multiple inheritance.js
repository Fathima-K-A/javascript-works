class GrandParent{

    m0(){
        console.log("inside grandparent m0 methods");
    }
}

class Parent extends GrandParent{ 
    m1(){

        console.log("inside parent m1 method");

    }
}
class Child extends Parent{
    m2(){
        console.log("inside parent m2 method");

    }
}

const ch=new Child();
ch.m0();
ch.m1();
ch.m2();