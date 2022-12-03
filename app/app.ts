import { TransactionController } from "./src/controllers/transaction-controller.js";

// Controller
const controller = new TransactionController();
const form = document.querySelector('.form');

// Events
if(form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
  });
} else {
  throw new Error("Não foi possível iniciar o app, verifique se existe o formulário");
}