
// search :  ______form submit reloading the page


//    1 ---- set event handler 
document.getElementById('button-login').addEventListener('click', function (event){
    // 2 -- prevent default behavior (reloading browser)
    event.preventDefault(); // vejal to beginners
    console.log('login button click')

    // 3------- get the phone number
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value)
} )