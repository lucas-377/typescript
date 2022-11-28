export class MessageView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  /**
   * Create the template for the message
   * @param model 
   * @returns HTMLElement
   */
  template(model: string): string {
    return `
      <p class="alert alert-info alert-dismissible fade show">${model}</p>
    `;
  }

  /**
   * Update the message to the view
   * @param model 
   */
  update(model: string): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}