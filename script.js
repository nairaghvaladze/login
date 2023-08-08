
var b=document.querySelector(".toggle");
var text=document.querySelector(".text");
function onoff(){
    b.classList.toggle('active');
    if (b.classList.contains('active')){
        document.body.style.backgroundColor="black";
        document.getElementById("light_img").style.display="none";
        document.getElementById("dark_img").style.display="block";
        document.getElementById("dark_div").style.display="block";
        document.getElementById("text2").style.color="white";
        document.getElementById("text1").style.color="white";
        document.getElementById("light_div").style.display="none";

      
      
     
        
    }
    else {
       
        document.getElementById("light_img").style.display="block";
        document.getElementById("dark_img").style.display="none";
        document.getElementById("dark_div").style.display="none";
        document.getElementById("light_div").style.display="block";
        document.body.style.backgroundColor="white";

       
    }
}
function offonn1(){
    document.body.style.backgroundColor="black";
    document.getElementById("light_img").style.display="none";
    document.getElementById("dark_img").style.display="none";
    document.getElementById("dark_div").style.display="block";
    document.getElementById("light_div").style.display="none";
    document.getElementById("text2").style.color="white";
    document.getElementById("text1").style.color="white";
    document.getElementById("dark_div").style.boxShadow="inset -30px -2px 30px rgba(255, 255, 255, 0.05), inset 30px 2px 30px rgba(9, 9, 9, 0.5)";
    document.getElementById("dark_div").style.borderRadius="50px";
    document.getElementById("dark_div1").style.boxShadow="-3px -4px 28px rgba(103, 103, 103, 0.25), 6px 6px 25px rgba(103, 103, 103, 0.25);";
    document.getElementById("dark_div1").style.borderRadius="26px";
    document.getElementById("dark_div").style.padding="28px 19px 40px 29px";
}
function onnoff1(){
    document.getElementById("light_img").style.display="none";
    document.getElementById("dark_img").style.display="none";
    document.getElementById("dark_div").style.display="none";
    document.getElementById("light_div").style.display="block";
    document.body.style.backgroundColor="white";
    document.getElementById("light_div").style.boxShadow="80px 60px 60px rgba(107, 127, 153, 0.2), inset -30px -2px 30px #C6C3C3, inset 30px 2px 30px rgba(226, 219, 219, 0.8)";
    document.getElementById("light_div").style.borderRadius="50px";
    document.getElementById("light_div1").style.boxShadow="-6px 4px 19px rgba(208, 208, 208, 0.25)";
    document.getElementById("light_div1").style.borderRadius="26px";
}