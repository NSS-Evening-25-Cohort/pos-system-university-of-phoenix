import { getOrder } from '../api/orderData';
import { viewOrder } from '../pages/viewOrders';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#allOrders').addEventListener('click', () => {
    getOrder().then(viewOrder);
  });
};

export default navigationEvents;
