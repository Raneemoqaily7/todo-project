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

