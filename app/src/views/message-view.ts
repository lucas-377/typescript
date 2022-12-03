import { View } from "./view.js";

export class MessageView extends View<string> {
  /**
   * Create the template for the message
   * @param model 
   * @returns HTMLElement
   */
  protected template(model: string): string {
    return `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${model}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
  }
}