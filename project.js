// 1.Deposit some money
// 3.Collect a bet amt
// 2. Det number of lines to bet 
// 4. Spin

const prompt = require('prompt-sync')();

const deposit = () => {
while(true)
{    const depositAmount = prompt("Enter a deposit amount: ");
    const number_depositamt = parseFloat(depositAmount);

    if(isNaN(number_depositamt) || number_depositamt <=0){
        console.log("Please enter a valid deposit amount");
        
    }
    else{
        return number_depositamt;
    }
}
}

deposit();
