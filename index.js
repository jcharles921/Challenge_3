
function ValidateEmail() 
{
    var doc = document.getElementById("input");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(doc);
    
    if (doc.value.match(validRegex)) {
      
      console.log("Valid email address!");
      document.getElementById("input").style.borderColor = "hsl(116, 100%, 67%)";
    }
    else if(doc.value == null || doc.value ==""){ 
      document.getElementById("output").innerHTML = "Whoops! It looks like you forgot to add your email ";
      document.getElementById("input").style.borderColor = "hsl(355, 100%, 49%)";

    }
     else { 
     document.getElementById("output").innerHTML = "Please provide a valid email!";
     console.log("You have entered an invalid email address!");
     document.getElementById("input").style.borderColor = "hsl(355, 100%, 49%)";
     return false;
    }    
}
