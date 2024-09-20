

// add money to the accunt

/**
 s1 : add event handler 
 prevent page reload after form submit
 s2 : get money to be added to the account balance
 */

// 1--- add an event handler  to the money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step - 2 : get money to be added to the account 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)

    // get the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber)
    
})