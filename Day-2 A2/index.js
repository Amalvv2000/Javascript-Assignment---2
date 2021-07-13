// Amal V.V
// amalvv2000cit@gmail.com
// Assignment-2 Day-3

sentence="madam is walking with her dad and mom in the noon"
sentence= sentence + " "
word =""
for(t of sentence){
    if(t != " "){
        word=word+t
    }
    else{
        reverse=word.split("").reverse().join("")
        if(reverse == word){
            console.log(word)
        }
        word =""
    }     

}