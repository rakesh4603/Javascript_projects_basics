function loveCalculator(){
    const name1 = document.getElementById("input1").value.trim();
    const name2 = document.getElementById("input2").value.trim();

    if (name1 ==="" || name2 ===""){
        alert("Please enter the name of both people.");
        return;
    }
    if (name1 === name2){
        alert("Please enter different names.");
        return;
    }
    const lovescore = Math.floor(Math.random() * 100);
    
    const result = document.getElementById("result");
    result.innerHTML = `The love score between ${name1} and ${name2} is ${lovescore}%.`;

    if (lovescore > 70){
        result.innerHTML += "<br> You go together like coke and mentos.";
    }
    else if (lovescore > 30 && lovescore <= 70){
        result.innerHTML += "<br> You are alright together.";
    }
    else {
        result.innerHTML += "<br> You go together like oil and water.";
    }

}