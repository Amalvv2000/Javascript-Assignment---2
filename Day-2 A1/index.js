// Amal v.v
// amalvv2000cit@gmail.com
//  Day-2,Assignment-1

var num_3=0;
var num_5=0;
for (let i=1;i<=100;i++){
    ans=""
    num_3++;
    num_5++;

   if(num_3==3){
       ans=ans+"Fizz";
       num_3=0;
   }
   if(num_5==5){
       ans=ans+"Buzz";
       num_5=0;
   }
   if(ans==""){
       console.log(i);
   }
   else{
       console.log(ans);
   }
    
}
    