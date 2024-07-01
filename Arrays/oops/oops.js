class Employee{

    constructor(name,department,salary){
        this.name=name;
        this.department=department;
        this.salary=salary;

 
    }
    printEmployee(){
        console.log(this.name,this.department,this.salary);
    }
}
var obj=new Employee("fathima","computer",25000)
obj.printEmployee()



// attributes,instance variables initialize

