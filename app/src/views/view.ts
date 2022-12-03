export abstract class View<T> {
  protected element: HTMLElement;

  constructor(selector: string) {
    const htmlElement = document.querySelector(selector);
    if(htmlElement) {
      this.element = htmlElement as HTMLElement;
    } else {
      throw new Error(`Seletor ${selector} não existe no DOM`);
    }
  }

  protected abstract template(model: T): string;

  /**
   * Update the HTML element
   * @param model 
   */
  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}