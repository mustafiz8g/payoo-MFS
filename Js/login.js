
// search :  ______form submit reloading the page

/**
 
//    1 ---- set event handler 
document.getElementById('button-login').addEventListener('click', function (event){
    // 2 -- prevent default behavior (reloading browser)
    event.preventDefault(); // vejal to beginners


    // 3------- get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber)
    
    // 4 ---------- validate phone and pin
   // this is temporary . you should not do like this
   if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in')
    // 5---- 
    // allow user to use the website 
   }
   else{
    alert('wrong phone number or pin')
   }
} )
 */



document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber =  document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '1111' && pinNumber ==='0000'){
        console.log('you are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or pin number')
    }
})