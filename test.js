var totalCost = 0;
var bankTotal = prompt("How much do you have in your bank account?");
var accessory = 10;
var tax = 0.05;
var phoneCost = 100;
var threshold = 200;

var findTax = function() {
    totalCost += (totalCost * tax);
};

var formatPrice = function(totalCost) {
    return "$" + totalCost;
};

while (phoneCost <= bankTotal) {
    bankTotal -= phoneCost;
    console.log(bankTotal);
    totalCost += phoneCost;
    console.log(totalCost);
    if (bankTotal >= accessory) {
        bankTotal -= accessory;
        totalCost += accessory;
    }
    console.log(formatPrice(totalCost));
};

