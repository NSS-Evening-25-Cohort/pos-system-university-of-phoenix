import { getItems } from '../api/itemData';
import { deleteOrderItemRelationship } from '../api/mergedData';
import { getAllOrders } from '../api/orderData';
import editOrderForm from '../forms.js/creatEditOrder';
import itemForm from '../forms.js/createItemform';
import showOrders from '../pages/Orders';
import showItems from '../pages/orderDetails';

// import closeOrder from '../pages/closeOrder';
// import createEditItem from '../pages/createItems';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('allOrders')) {
      getAllOrders().then(showOrders);
    }
    if (e.target.id.includes('newOrder')) {
      editOrderForm();
    }
    if (e.target.id.includes('details-item')) {
      getItems().then(showItems);
    }
    if (e.target.id.includes('delete-order')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemRelationship(firebaseKey).then(() => {
          getItems().then(showItems);
        });
      }
    }
    if (e.target.id.includes('edit-order')) {
      itemForm();
    }
  });
};
// working
export default domEvents;
