function palindromeChecker(){
    let name=document.getElementById("inputword").value.trim().toLowerCase();
    let reversed_name= name.split('').reverse().join('');
    
    let result=document.getElementById("result");
    
    if(reversed_name===name){
        result.innerHTML=`${name} is a palindrome`;
    }else{
        result.innerHTML=`${name} is not a palindrome`;
    }
}