"use strict";
var $ = function(id) { return document.getElementById(id); };
var staffList = [];

var showEmplooy = function() {
    var list = "";
    var display = ""; 
    var notesElement = $("notes");
        notesElement.innerHTML = "";
    //--------------------Check data storage staffList------------------------
    if (staffList.length === 0 ) {
      var stList = localStorage.getItem("staffList") || "[]";
          staffList = JSON.parse(stList);
    };
          if (staffList.length > 0) {
             staffList.sort();
             //list = staffList.join("\n");  
          };
          //---------Add only one row into the Table----------------------------------------
          var x = $("table").rows.length;
          while (--x){
              $("table").deleteRow(x);
          };
          //-------------------------------------------------
          for (var i = 0; i < staffList.length; i++) {
              //var note = notes[i];
              var x =  `${staffList[i].salary}`;
              var li = document.createElement("li");
                  li.appendChild(document.createTextNode(x));
                  notesElement.appendChild(li);
             //--------------------------------------------
              //$("item").innerHTML = `${staffList[i].name}` + " " + `${staffList[i].phone}`;
             /* display += `${staffList[i].name}` + "    "  + `${staffList[i].phone}` + "   "  + `${staffList[i].mail}` +
              + "    " + `${staffList[i].age}` + "    " + `${staffList[i].salary}` + "<br>";*/
              var row = $("table").insertRow(1);
              var cell1 = row.insertCell(0);
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              var cell4 = row.insertCell(3);
              var cell5 = row.insertCell(4);
              var cell6 = row.insertCell(5);
              var cell7 = row.insertCell(6);
                  cell1.innerHTML = `${staffList[i].name}`;
                  cell2.innerHTML =`${staffList[i].phone}`;
                  cell3.innerHTML = `${staffList[i].mail}`;
                  cell4.innerHTML =`${staffList[i].age}`;
                  cell5.innerHTML = `${staffList[i].role}`;
                  cell6.innerHTML =`${staffList[i].salary}`;
                  if (`${staffList[i].role}`==="fe") {
                      cell7.innerHTML = `${staffList[i].salary}` * 20; 
                  }else if (`${staffList[i].role}`==="be") {
                      cell7.innerHTML = `${staffList[i].salary}` * 10; 
                  }else if (`${staffList[i].role}`==="qa") {
                      cell7.innerHTML = `${staffList[i].salary}` * 15; 
                  }else {
                      cell7.innerHTML = `${staffList[i].salary}` * 12;
                  }
                 
                  //$("itemName").innerHTML = `${staffList[i].incomeStaff(20)}`;
                           
          }
          //$("itemName").innerHTML = `${staffList[i].salary}` * 20;
};
//------------------CREATE STAFF OBJECT----------------------------------
var addStaff = function(){
  var staffName = $("name");
  var staffPhone = $("phone");
  var staffMail = $("mail");
  var staffAge = $("age");
  var staffRole = $("role");
  var staffSalary = $("salary");
  var n = staffName.value;
  var ph = staffPhone.value;
  var m = staffMail.value;
  var a = parseInt(staffAge.value);
  var r = staffRole.value;
  var s = parseInt(staffSalary.value);
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
  //----------------------PUSH DATA INTO STORAGE----------------------------------------------
  if (isValid == true){
  var staff = {
              "name": n,
              "phone": ph,
              "mail": m,
              "age": a,
              "role": r,
              salary: s,
              incomeStaff : function(percent){
                 return ((this.salary*12) + ((this.salary*percent)/100));
              }
       }
   staffList.push(staff); 
   //var income = Object.create(staff);
     $("itemName").innerHTML =  staff.incomeStaff(20);
   localStorage.setItem("staffList", JSON.stringify(staffList));
     
     staffName.value = "";
     staffPhone.value = "";
     staffMail.value = "";
     staffAge.value = "";
     staffRole.value = "";
     staffSalary.value = "";
     staffName.focus();
     showEmplooy();   
    }
}
//------------------CLEAR STORAGE------------------------
var clearTaskList = function() {
    staffList.length = 0;
    localStorage.staffList = "";
    showEmplooy();
};
//-------------------------------------------------------
window.onload = function(){
    $("addStaff").onclick = addStaff;
    $("clear").onclick = clearTaskList;
    showEmplooy();
}           
            
