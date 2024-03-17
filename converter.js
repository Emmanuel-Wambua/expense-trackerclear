document.getElementById("convert").onclick = function convertCurrency(){
    let Kshs = 137.54; 
    let amountofproduct = parseFloat(document.getElementById("amount-of-product").value);

    let converted = amountofproduct / Kshs;

    document.getElementById("converted-amount").textContent = converted + " Dollars";
}
