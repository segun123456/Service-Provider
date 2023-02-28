var num = document.getElementById('num1');
var first3;
var first4;

num.addEventListener('focus', ()=>{
    num.classList.add('num1');
})


  num.addEventListener('keyup', ()=>{
    // var num2 = document.getElementById('num1').value;
    num4=num.value;
   
    num4.toString()
    first3 = num4.slice(0,3);
    first4 = num4.slice(0,4);
   
if (num4.match(/[a-z]/gi)){
    document.getElementById('nam').innerHTML='Phone Number most be digit';
    document.getElementById('nam').style.color='blue' ; 

}
       
else if (num4.length < 11){
    document.getElementById('nam').innerHTML='Phone Number most be eleven digit';   
    document.getElementById('nam').style.color='orange' ;
    }
 
else if (num4.length == 11){
    checkNetwork();
    document.getElementById('image').style.display ='block'
    num.classList.add('num2');
}
else{
    document.getElementById('nam').innerHTML='Phone number  can not be more than eleven';
    document.getElementById('nam').style.color='grey' ;
}
   
})
function checkNetwork(){
    if (first4=='0701' || first4=='0708' || 
        first4=='0802' || first4=='0808' || 
        first4=='0812' || first4=='0902' || 
        first4=='0907' || first4=='0901' ||
        first4=='0904'
    ){
        document.getElementById('nam').innerHTML='Airtel';
        document.getElementById('nam').style.color='red' ;
        document.getElementById('image').setAttribute("src", "image/airtel.jpg")

    }
    else if (first4=='0703' || first4=='0706' || 
            first4=='0704' || first4=='0806' || 
            first4=='0810' || first4=='0813' || 
            first4=='0814' || first4=='0816' ||
            first4=='0803' ||first4=='0903' ||
            first4=='0906' 
 
    ){
        document.getElementById('image').setAttribute("src", "image/mtn.jpg")
        document.getElementById('nam').innerHTML='MTN'; 
     document.getElementById('nam').style.color='Yellow';
    }
    else if (first4=='0805' || first4=='0807' || 
            first4=='0705' || first4=='0815' || 
            first4=='0811' || first4=='0905' || 
            first4=='0915' 
        ){
            document.getElementById('nam').innerHTML='GLO';
            document.getElementById('nam').style.color='green' ;
            document.getElementById('image').setAttribute("src", "image/glo.jpg") 
    }
    else if (first4=='0809' || first4=='0818' || 
            first4=='0817' || first4=='0909' || 
            first4=='0908'
        ){
            document.getElementById('nam').innerHTML='9Mobile';
            document.getElementById('nam').style.color=' rgb(199, 221, 36)';
            document.getElementById('image').setAttribute("src", "image/9mobile.jpg")
    }
    else{
        document.getElementById('nam').innerHTML='Invalid Network';
        '<i class = "fa fa-exclamation-triangle"></i>'
        
    }
}