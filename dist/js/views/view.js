export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        throw Error('Child class must overwrite the template method');
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
