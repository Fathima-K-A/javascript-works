var colors=["red","green","blue","yellow"]

var colorsCopy=[...colors]//...spread operator(it will create a shallow copy)

colorsCopy.pop()

console.log(colors);

console.log(colorsCopy);


var user={name:"fathima",email:"fathi@gmail.com",password:"fathi123",isActive:true}

var userCopy={...user}

userCopy.isActive=false

console.log(user);

console.table(userCopy)