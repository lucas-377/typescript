import { View } from "./view.js";
export class TransactionsView extends View {
    template(model) {
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
