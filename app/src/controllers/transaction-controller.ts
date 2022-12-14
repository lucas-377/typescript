import { WeekDays } from "../enums/weekdays.js";
import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { MessageView } from "../views/message-view.js";
import { TransactionsView } from "../views/transactions-view.js";

export class TransactionController {
  private inputDate: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;
  private transactions = new Transactions();
  private transactionsView = new TransactionsView('#negociacoes-view');
  private messageView = new MessageView('#mensagem-view');

  constructor() {
    this.inputDate = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantity = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValue = document.querySelector('#valor') as HTMLInputElement;
    this.transactionsView.update(this.transactions);
  }

  /**
   * Add new transaction
   */
  public add(): void {
    const transaction = this.createTransaction();

    if(!this.isLaborDay(transaction.date)){
      this.messageView.update("Somente crie uma negociação em dias úteis!");
    }
    
    this.transactions.add(transaction);
    this.transactionsView.update(this.transactions);
    this.messageView.update('Negociação adicionada!');
    this.clearInputs();
  }

  /**
   * Return week day or weekend
   */
  private isLaborDay(date: Date): boolean {
    return date.getDay() > WeekDays.DOMINGO 
      && date.getDay() < WeekDays.SABADO;
  }

  /**
   * Format values and create a new transaction
   * @returns Transaction
   */
  private createTransaction(): Transaction {
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
  private clearInputs(): void {
    this.inputDate.value = '';
    this.inputQuantity.value = '';
    this.inputValue.value = '';
    this.inputDate.focus();
  }
}