document.getElementById('usrname').addEventListener('click',function(){
    let usrname=document.getElementById('usrname').value;
    let invalidMessage=document.getElementById('invalidMessage');
    for(let i=0;i<usrname.length;i++){
       if(usrname.charAt(i)=="" || usrname.toLowerCase()!="citiustech"){
           invalidMessage.innerHTML="invalid credentials";
       }
       else{
           invalidMessage.innerHTML="";
       }
    }
   })
   document.getElementById('password').addEventListener('click',function(){
       let password=document.getElementById('password').value;
       let invalidMessage1=document.getElementById('invalidMessage1');
       for(let i=0;i<password.length;i++){
          if(password.charAt(i)==""|| password.toLowerCase()!="citiustech"){
              invalidMessage1.innerHTML="invalid credentials";
          }
          else{
              invalidMessage1.innerHTML="";
          }
       }
      
      })