export class MessageView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    /**
     * Create the template for the message
     * @param model
     * @returns HTMLElement
     */
    template(model) {
        return `
      <p class="alert alert-info alert-dismissible fade show">${model}</p>
    `;
    }
    /**
     * Update the message to the view
     * @param model
     */
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
