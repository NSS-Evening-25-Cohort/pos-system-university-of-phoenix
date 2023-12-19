import { getAllOrders } from '../api/orderData';
import { signOut } from '../utils/auth';
import showOrders from '../pages/Orders';
import homeScreen from '../pages/homeScreen';
import editOrderForm from '../forms.js/creatEditOrder';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#allOrders').addEventListener('click', () => {
    getAllOrders().then(showOrders);
  });
  document.querySelector('#logo_btn').addEventListener('click', homeScreen);
  document.querySelector('#newOrder').addEventListener('click', editOrderForm);
};

export default navigationEvents;
