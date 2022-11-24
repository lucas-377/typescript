import { Transaction } from "../models/transaction.js";

export class TransactionController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
  }

  add() {
    const regexp = /-/g;
    const date = new Date(this.inputDate.value.replace(regexp, ','));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);

    const transaction = new Transaction(date, quantity, value);

    console.log(transaction);
  }
}