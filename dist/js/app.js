import { TransactionController } from "./controllers/transaction-controller.js";
// Controller
const controller = new TransactionController();
const form = document.querySelector('.form');
// Events
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});
