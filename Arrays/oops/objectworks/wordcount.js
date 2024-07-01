var text="hello hai hello hai hello hello"

// print word count

// var words=text.split(" ")

var wc={}

// for(let w of words){

//     if (w in wc){
//         wc[w]+=1
//     }
//     else{
//         wc[w]=1
//     }
// }
// console.log(wc);


// =============================OR==============

var words=text.split(" ").map(w=>w in wc ? wc[w]+=1 : wc[w]=1)
console.log(wc);