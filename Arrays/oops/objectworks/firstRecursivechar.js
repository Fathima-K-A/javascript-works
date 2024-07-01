 var text="ABCBDDE"
//  Find first recursive character


var wc={}

for (let ch of text){

    if (ch in wc ){

        console.log(ch,"is first recursive character");
        break
    
    }
    else{
        wc[ch]=1
    }
}
