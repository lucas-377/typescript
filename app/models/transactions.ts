import { Transaction } from './transaction.js';

export class Transactions {
  private _transactions: Array<Transaction> = [];

  /**
   * Add new transaction to list
   * @param transaction 
   */
  add(transaction: Transaction): void {
    this._transactions.push(transaction);
  }

  /**
   * Return the list of transactions
   * @returns Array<Transaction>
   */
  list(): ReadonlyArray<Transaction> {
    return this._transactions;
  }
}