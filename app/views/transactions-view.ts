import { View } from "./view.js";
import { Transactions } from "../models/transactions.js";

export class TransactionsView extends View<Transactions> {
  /**
   * Create the HTML template for the table
   * @param model 
   * @returns HTMLElement
   */
  template(model: Transactions): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          ${model.list().map(transaction => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(transaction.date)}</td>
                <td>${transaction.quantity}</td>
                <td>${transaction.value}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
}