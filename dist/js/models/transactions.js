export class Transactions {
    constructor() {
        this._transactions = [];
    }
    /**
     * Add new transaction to list
     * @param transaction
     */
    add(transaction) {
        this._transactions.push(transaction);
    }
    /**
     * Return the list of transactions
     * @returns Array<Transaction>
     */
    list() {
        return this._transactions;
    }
}
