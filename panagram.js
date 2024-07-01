var text="hellopython"

//check panagram(if it contains a-z alphabets)

var alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()

var ispanagram=true;

for(let ch of alphabets){

    if(!text.includes(ch)){
        
        ispanagram=false
        break
    }
}
console.log(ispanagram)