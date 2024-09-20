

document.getElementById('btn-cash-out').addEventListener('click' , function(event){
 
    event.preventDefault();
    const CashOut = parseFloat(document.getElementById('input-cash-out').value);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    
    if(pinNumber === '1234'){
        const balance = parseFloat(document.getElementById('account-balance').innerText);
       const newBalance = balance - CashOut;
       document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out please try again later')
    }
    
});