export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    /**
     * Update the HTML element
     * @param model
     */
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
