class Student{
    setStudent(name,course,degree){
        this.name=name;
        this.course=course;
        this.degree=degree;

 
    }
    printStudent(){
        console.log(this.name,this.course,this.degree);
    }
}
var obj=new Student();
obj.setStudent("fathima","farz","bca")
obj.printStudent()


// attributes,instance variables n=