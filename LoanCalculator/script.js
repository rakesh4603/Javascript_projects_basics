document.getElementById("loancalculator").addEventListener("submit", function(e){
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById("loan-amount").value)

    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12; 
    const loanTerm = parseInt(document.getElementById("loan-term").value);
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount; 

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}<br>Total Payment: $${totalPayment.toFixed(2)}<br>Total Interest: $${totalInterest.toFixed(2)}`;
});