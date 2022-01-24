 var name =prompt("Please Enter Your Name");

 var gender =prompt("Whats Your Gender?");
  while (gender!=="male" || gender!=="female" || gender!=="Male" ||gender!=="Female") {
  if (gender=="male" || gender=="female" || gender=="Male" ||gender=="Female"){
 break
 }else{
 gender =prompt("Enter Either Female Or Male ?");
 }}

 var age =prompt("Whats Your age?");

  if (age <=0){
        alert("Whaattttttt is your age "+age +"!!!!!")
   }

 var confirmation=confirm("Are You Sure You Want To Skip The Welcoming Message?")
 if(!confirmation){
     if(gender=="male"||gender=="Male"){
        alert("Hello Mr "+ name)
   }else if (gender=="female"||gender=="Female"){
        alert("Hello Mrs "+ name)}
       else {
           alert("Hello "+ name)}
        }




var learn=prompt("Do you intrested learnning java script")
while (learn!=="yes" || learn!=="no" || learn!=="Yes" ||learn!=="No") {
     if (learn=="yes" || learn=="no" || learn=="Yes" ||learn=="No"){
   break
  } else if(learn=="") 
  {learn =prompt("invalid!!! Do you intrested learnning java script (Yes Or No)") }

  else{
   learn =prompt("Enter Either Yes or No !");}
   
}

var student=prompt("Are You Student At LTUC")
while (student!=="yes" || student!=="no" || student!=="Yes" ||student!=="No") {
     if (student=="yes" || student=="no" || student=="Yes" ||student=="No"){
   break
  }
else if(student=="") 
{student =prompt("invalid!!! Are You Student At LTUC (Yes Or No)") }
  else{
   student =prompt("Enter Either Yes or No !");}
   
}
var ready=prompt("Are you ready to join ASAC")
while (ready!=="yes" || ready!=="no" || ready!=="Yes" ||ready!=="No") {
     if (ready=="yes" || ready=="no" || ready=="Yes" ||ready=="No"){
   break
  }
  else if(ready=="") 
{ready =prompt("invalid!!! Are you ready to join ASAC (Yes Or No)") }
  else{
   ready =prompt("Enter Either Yes or No !");}
   
}
var inputs = [learn, student, ready];
console.log(inputs)

//Two Ways To print the items on the console:
// This is the first way:
//  var firstIndex =inputs[0];
//  console.log(firstIndex)

//  var secondIndex =inputs[1];
//   console.log(secondIndex)

// var thirdIndex =inputs[2];
//  console.log(thirdIndex)
//This is the other way (I prefer this way so i activate it)
for (i=0 ; i<inputs.length;i++){
     console.log(inputs[i])

}



