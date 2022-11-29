export abstract class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  abstract template(model: T): string;

  /**
   * Update the HTML element
   * @param model 
   */
  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}