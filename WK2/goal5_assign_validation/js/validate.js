/*
 Developed by the JavaScript team at Fullsail
 Date: 1306
 Douglas Sweeting

 */

(function(){

    myform.onsubmit = function(e){

        var userName = document.getElementById('f_username'); //This is the user name
        var email = document.getElementById('f_email'); //This is the user's e-mail address
        var phone = document.getElementById('f_phone'); // This is the user's phone number
        var ssn = document.getElementById('f_ssn'); // This is the user's SSN
        var password = document.getElementById('f_password'); //This is the user's passwor

        validateField(userName);
        validateField(email);
        validateField(phone);
        validateField(ssn);
        validateField(password);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){ // validate function

        if (inputName.name === "f_username"){ // username input validation
            var pattern = /^[A-Z\s^A-Z$]/;
        }else if(inputName.name === "f_email"){ // email input validation
            var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        }else if(inputName.name === "f_phone"){ // phone input validation
            var pattern = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
        }else if (inputName.name === "f_ssn"){ // ssn input validation
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }else if(inputName.name === "f_password"){ // password input validation
            var pattern = /^[a-zA-Z]\w{4,15}$/;
        }

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})(); // end wrapper