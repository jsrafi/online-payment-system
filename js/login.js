document.getElementById('btn-login').addEventListener('click', function(event)
{
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin-number').value;
    if(phoneNumber === '01859282108' && pin === '1234')
    {
        window.location.href = '/home.html'
    }
    else
    {
        alert('wrong number pr pin')
    }
})