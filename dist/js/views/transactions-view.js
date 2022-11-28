export class TransactionsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    /**
     * Create the HTML template for the table
     * @param model
     * @returns String
     */
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
    /**
     * Update the table
     */
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
