// Display error message
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

// Validate form 
function validateForm() {
    //values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var age = document.contactForm.age.value;
    var msg = document.contactForm.msg.value;
    
	// Error variables
    var nameErr = emailErr = mobileErr = ageErr = genderErr = msgErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "*Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "*Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "*Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "*Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "*Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "*Please enter a valid 9 digit mobile number");
         if(mobile.length < 14 || mobile.length > 14 ){
            printError("mobileErr", "*Please enter a valid 9 digit  mobile number");
        }else{
            printError("mobileErr", "");
            mobileErr = false;
        }}
    }
    

    // Validate Age
    if(age == "") {
        printError("ageErr", "*Please enter your Age");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(age) === false) {
            printError("ageErr", "*Please enter you Age");
         if(age <5 || age > 100 ){
            printError("ageErr", "*Please enter a valid Age");
        }else{
            printError("ageErr", "");
            ageErr = false;
        }}
    }
    //Validate Message
    if(msg == "") {
        printError("msgErr", "*Please Leave a Message");
    } else  if (msg.length > 300 ){
        printError("msgErr", "*The message is more than 300 characters");
    }else{
            printError("msgErr", "");
            msgErr = false;
    }

     
    
   
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || ageErr || msgErr) == true) {
       return false;
    } else {
        // PoPup alert
        var pop = "Your Info has been Sent: \n" + "\n POOR  " +name + "\n We Have a complete access to you account and device ^^"
        alert(pop);
    }
};
