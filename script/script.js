function validation(){
    var b= document.getElementById("email");
    var c= document.getElementById("password");
if (b.value =="" || b.length == 0){
    document.getElementById("text3").innerHTML=" შეიყვანეთ ელ. ფოსტა";
     
 }else if(c.value =="" || c.length == 0) {
     document.getElementById("text3").innerHTML="";
     document.getElementById("text31").innerHTML="სწორია";
     document.getElementById("text31").style.color="green";

     document.getElementById("text5").innerHTML="შეიყვანეთ პაროლი";
 
    
 }else {
     document.getElementById("text5").innerHTML=""
     document.getElementById("text6").innerHTML="სწორია";
     document.getElementById("text6").style.color="green";

     window.alert ("თქვენ წარმატებით გაიარეთ ავტორიზაცია!");
     document.getElementById("myform").reset();
 }
 }

 function validation1(){
    var b= document.getElementById("email1");
    var c= document.getElementById("password1");
if (b.value =="" || b.length == 0){
    document.getElementById("text71").innerHTML=" შეიყვანეთ ელ. ფოსტა";
     
 }else if(c.value =="" || c.length == 0) {
     document.getElementById("text71").innerHTML="";
     document.getElementById("text72").innerHTML="სწორია";
     document.getElementById("text72").style.color="green";

     document.getElementById("text73").innerHTML="შეიყვანეთ პაროლი";
 
    
 }else {
     document.getElementById("text73").innerHTML=""
     document.getElementById("text74").innerHTML="სწორია";
     document.getElementById("text74").style.color="green";

     window.alert ("თქვენ წარმატებით გაიარეთ ავტორიზაცია!");
     document.getElementById("myform1").reset();
 }
 }




 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  document.write('<br>');
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  document.write('<br>');
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




  function dark() {
    document.body.style.backgroundColor="#14162E";
    document.body.style.color="white";
    document.getElementById("cont_1").style.display="none";
        document.getElementById("cont_2").style.display="none";
        document.getElementById("cont_3").style.display="block";
        document.getElementById("cont_4").style.display="block";



 

  

  }
  function dark1() {
    document.body.style.backgroundColor="#14162E";
    document.body.style.color="white";
    document.getElementById("cont_1").style.display="none";
        document.getElementById("cont_2").style.display="none";
        document.getElementById("cont_3").style.display="block";
        document.getElementById("cont_4").style.display="block";



 

  

  }
  function light1() {
    document.getElementById("cont_1").style.display="block";
    document.getElementById("cont_2").style.display="block";
    document.getElementById("cont_3").style.display="none";
    document.getElementById("cont_4").style.display="none";
    document.body.style.backgroundColor="#F6F6F6";
    document.getElementById("h1").style.color="black";
    document.getElementById("text4").style.color="black";
    document.getElementById("div1").style.backgroundColor="white";
    document.getElementById("text99").style.color="black";
    document.getElementById("text12").style.color="black";




   
 
   }


   function light() {
    document.getElementById("cont_1").style.display="block";
    document.getElementById("cont_2").style.display="block";
    document.getElementById("cont_3").style.display="none";
    document.getElementById("cont_4").style.display="none";
    document.body.style.backgroundColor="#F6F6F6";
    document.getElementById("h1").style.color="black";
    document.getElementById("text4").style.color="black";
    document.getElementById("div1").style.backgroundColor="white";
    document.getElementById("text99").style.color="black";



   
 
   }
