import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const transaction = this.createTransaction();
        this.transactions.add(transaction);
        console.log(this.transactions.list());
        this.clearInputs();
    }
    /**
     * Format values and create a new transaction
     * @returns Transaction
     */
    createTransaction() {
        // Format values
        const regexp = /-/g;
        const date = new Date(this.inputDate.value.replace(regexp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Transaction(date, quantity, value);
    }
    /**
     * Clear input fields after submitting form
     * @returns void
     */
    clearInputs() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
