import { WeekDays } from "../enums/weekdays.js";
import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { MessageView } from "../views/message-view.js";
import { TransactionsView } from "../views/transactions-view.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.transactionsView = new TransactionsView('#negociacoes-view');
        this.messageView = new MessageView('#mensagem-view');
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.transactionsView.update(this.transactions);
    }
    add() {
        const transaction = this.createTransaction();
        if (!this.isLaborDay(transaction.date)) {
            this.messageView.update("Somente crie uma negociação em dias úteis!");
        }
        this.transactions.add(transaction);
        this.transactionsView.update(this.transactions);
        this.messageView.update('Negociação adicionada!');
        this.clearInputs();
    }
    isLaborDay(date) {
        return date.getDay() > WeekDays.DOMINGO
            && date.getDay() < WeekDays.SABADO;
    }
    createTransaction() {
        const regexp = /-/g;
        const date = new Date(this.inputDate.value.replace(regexp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Transaction(date, quantity, value);
    }
    clearInputs() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
