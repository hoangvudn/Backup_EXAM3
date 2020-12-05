var isValid = true;
//----------------------CHECK VALID EMAIL-------------------------------------------
function emailIsValid (email) {
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
//----------------------------------------------------------------------------------
//------------------------CHECK VALIDATE-NAME---------------------------------------
if (n == ""){
    $("errorMessengerName").innerHTML = " This field is required ";
    $("errorMessengerName").style.color = "red";
    isValid = false;
} else if ( n.length < 5) {
    $("errorMessengerName").innerHTML = " Must be least 5 character";
    $("errorMessengerName").style.color = "red";
    isValid = false;
} else {
    $("errorMessengerName").innerHTML = "";
}
 //------------------------CHECK VALIDATE-PHONE--------------------------------------
if (ph == ""){
    $("errorMessengerPhone").innerHTML = " This field is required ";
    $("errorMessengerPhone").style.color = "red";
    isValid = false;
}else if (ph.length < 10){
    $("errorMessengerPhone").innerHTML = " Must be least 10 character";
    $("errorMessengerPhone").style.color = "red";
    isValid = false;    
}else if(isNaN(ph)){
    $("errorMessengerPhone").innerHTML = " Must be Number";
    $("errorMessengerPhone").style.color = "red";
    isValid = false;
}else {
    $("errorMessengerPhone").innerHTML = ""; 
}
//-------------------------CHECK VALIDATE MAIL-----------------------------------------
if (m == ""){
    $("errorMessengerMail").innerHTML = " This field is required ";
    $("errorMessengerMail").style.color = "red";
    isValid = false;
}else if (m.length < 15 ){
    $("errorMessengerMail").innerHTML = " Must be least 15 character ";
    $("errorMessengerMail").style.color = "red";
    isValid = false;
}else if (emailIsValid(m)===false) {
    $("errorMessengerMail").innerHTML = " Invalid E-mail ";
    $("errorMessengerMail").style.color = "red";
    isValid = false;
}else {
     $("errorMessengerMail").innerHTML = "";
}
//-------------------------CHECK VALIDATE AGE-----------------------------------------
if (a == "") {
    $("errorMessengerAge").innerHTML = " This field is required ";
    $("errorMessengerAge").style.color = "red";
    isValid = false;
}else if ( (a < 20) || (a > 100) ) {
    $("errorMessengerAge").innerHTML = " Invalid Age ";
    $("errorMessengerAge").style.color = "red";
    isValid = false;
}else if (isNaN(a)) {
    $("errorMessengerAge").innerHTML = " Must be number ";
    $("errorMessengerAge").style.color = "red";
    isValid = false;
}else {
    $("errorMessengerAge").innerHTML = ""; 
}
//-------------------------CHECK VALIDATE ROLE-----------------------------------------
if (r == "") {
   $("errorMessengerRole").innerHTML = " This field is required ";
   $("errorMessengerRole").style.color = "red";
   return false;
   isValid = false;
}else {
    $("errorMessengerRole").innerHTML = ""; 
}