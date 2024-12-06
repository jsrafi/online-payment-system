document.getElementById('add-money-btn').addEventListener('click', function(event){
     
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;
    if(inputPin=== '1234')
    {
      const currentAmount = document.getElementById('curent-amount').innerText;
      const addedAmount = parseFloat(inputAmount);
      const newCurrentAmount = parseFloat(currentAmount);
      const newAmount = addedAmount + newCurrentAmount;
      document.getElementById('curent-amount').innerText = newAmount;
    }
    else
    {
        alert('money did not added! please try again')
    }

})

document.getElementById('cashout-money-btn').addEventListener('click', function(event){
     
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount-cashout').value;
    const inputPin = document.getElementById('input-pin-cashout').value;
    if(inputPin=== '1234')
    {
      const currentAmount = document.getElementById('curent-amount').innerText;
      const addedAmount = parseFloat(inputAmount);
      const newCurrentAmount = parseFloat(currentAmount);
      const newAmount = newCurrentAmount - addedAmount;
      document.getElementById('curent-amount').innerText = newAmount;
    }
    else
    {
        alert('money did not added! please try again')
    }

})

// add money btn

document.getElementById('add-money').addEventListener('click', function()
{
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})

// cash out btn
document.getElementById('cash-out').addEventListener('click', function()
{
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden');
})

// back button
document.getElementById('back-btn').addEventListener('click', function()
{
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})

// log out btn

document.getElementById('log-out-btn').addEventListener('click', function()
{
   window.location.assign("https://jsrafi.github.io/online-payment-system/")
})


