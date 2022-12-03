export class View {
    constructor(selector) {
        const htmlElement = document.querySelector(selector);
        if (htmlElement) {
            this.element = htmlElement;
        }
        else {
            throw new Error(`Seletor ${selector} não existe no DOM`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
