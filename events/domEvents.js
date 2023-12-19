import { getAllOrders } from '../api/orderData';
import editOrderForm from '../forms.js/creatEditOrder';
import showOrders from '../pages/Orders';
// import closeOrder from '../pages/closeOrder';
// import createEditItem from '../pages/createItems';

const domEvents = () => {
  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('allOrders')) {
      getAllOrders().then(showOrders);
    }
    if (e.target.id.includes('newOrder')) {
      console.warn('clicky');
      editOrderForm();
    }
  });
};
export default domEvents;
