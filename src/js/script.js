// jquery ready section
$(document).ready(function () {

    $("#search_detail").on('keyup', function () {
        
        let details = document.getElementById("search_detail").value;
        let strongPassword = new RegExp(/((?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$)/)

        if(strongPassword.test(details))
        {
            $("#error").text("pass").css("background-color","green");
           
        }
        else {
            $("#error").text("fail").css("background-color","red");
        }
        
    })


    
});
