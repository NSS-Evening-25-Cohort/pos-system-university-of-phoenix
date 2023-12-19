import { getAllOrders } from '../api/orderData';
import { deleteItem, getItems } from '../api/itemData';
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
    if (e.target.id.includes('delete-item-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          getItems().then();// TODO: pass in correct func that renders item. Should be something like showItems();
        });
      }
    }
  });
};
export default domEvents;
