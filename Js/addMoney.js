/**
 1. add event listener to the add money button ( form submit)
 make sure to preventDefault so that page doesn't reloads 
 2. get the money user wants to add
 also , get the pin number provided
 3. verify the pin number. for., wrong pin number ====> failded to add
 for right pin number , allow to add the numberr to the account balace
 4. get the current balace
 55. add money to be adde4d with the urrent balcece
 6. display update the balacen in the ui  dom
 */

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput)
    const pinNumberInput = document.getElementById('input-pin-number').value;
  

    
    if(pinNumberInput === '1234'){
        
        const currentBalance = document.getElementById('account-balance').innerText;
        const balance = parseFloat(currentBalance);
        
        const newBalance = addMoneyNumber + balance;
       document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('Failed to add money . Please try again later')

    }
})