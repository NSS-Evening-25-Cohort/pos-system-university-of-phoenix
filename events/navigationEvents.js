import { getAllOrders } from '../api/orderData';
import { signOut } from '../utils/auth';
import showOrders from '../pages/Orders';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#allOrders').addEventListener('click', () => {
    getAllOrders().then(showOrders);
  });
};

export default navigationEvents;
