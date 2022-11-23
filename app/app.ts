import { Transaction } from './models/transaction.js';

const transaction = new Transaction(new Date(), 10, 100);
console.log(transaction);