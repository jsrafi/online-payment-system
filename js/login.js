document.getElementById('btn-login').addEventListener('click', function(event)
{
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin-number').value;
    if(phoneNumber === '01859282108' && pin === '1234')
    {
        window.location.assign("http://127.0.0.1:5500/home.html")
    }
    else
    {
        alert('wrong number or pin')
    }
})