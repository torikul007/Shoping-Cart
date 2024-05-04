// phone price and number
document.getElementById('btn-phone-plus').addEventListener('click',function(){
  const newPhoneNumber=updatePhoneNumber(true);
    
})
 function updatePhoneNumber (isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

 let newPhoneNumber;

 if(isIncrease){
     newPhoneNumber = previousPhoneNumber + 1;
 }
 else{
     newPhoneNumber = previousPhoneNumber - 1;
 }
 phoneNumberField.value = newPhoneNumber;
 
 return newPhoneNumber;
}



function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    

});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})


/* 
1. add event listener to the case plus button
2. get the value inside the case number field (input field)
3. convert the number to an integer
4. calculate the new case number
5. set the value to the case number field

*/

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
} 

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})







function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}