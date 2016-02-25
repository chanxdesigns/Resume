/**
 * Created by Chanx on 2/23/2016.
 */

/**
const TAX_RATE = 14.5;
const PHONE_PRICE = 1000;
const ACCESSORIES_PRICE = 300;
const MAX_SPENDING = 2000;
var bank_balance = 100000;
var amount = 0;

function calculateTax (amount) {
    var tax_dec = TAX_RATE / 100;
    return amount * tax_dec;
}

function formatCurrency (amount) {
    return "Rs. " + amount.toFixed(2);
}

while (amount < bank_balance) {
    amount += PHONE_PRICE;
    if (amount < MAX_SPENDING) {
        amount += ACCESSORIES_PRICE;
    }
    amount = amount + calculateTax(amount);
    console.log(formatCurrency(amount));

    if (amount < bank_balance) {
        console.log("You can afford this purchase of " + formatCurrency(amount));
    } else {
        console.log("Sorry you don't have enough balance to purchase the items.");
    }
}
**/
//LHS and RHS Reference
'use strict'
function foo (a) {
    var b = a;
    return a + b;
}

console.log(foo(2));