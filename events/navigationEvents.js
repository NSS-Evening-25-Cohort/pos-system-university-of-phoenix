import { getAllOrders } from '../api/orderData';
import { signOut } from '../utils/auth';
import showOrders from '../pages/Orders';
import homeScreen from '../pages/homeScreen';

const navigationEvents = () => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  document.querySelector('#allOrders').addEventListener('click', () => {
    getAllOrders().then(showOrders);
  });
  document.querySelector('#logo_btn').addEventListener('click', homeScreen);

  // document.querySelector('#edit-item-btn').addEventListener('click', () => {
  //   // TODO: Will need PATCH.
  // });
  // TODO: Will revisit this
  // if (e.target.id.includes('Delete Item')) {
  //   // eslint-disable-next-line no-alert
  //   if (window.confirm('Want to delete?')) {
  //     const [, firebaseKey] = e.target.id.split('--');
  //     // TODO: Will need itemData to continue with this. deleteItem() doesn't exist yet.
  //     deleteItem(firebaseKey).then(() => {
  //       getAllOrders().then(showOrders);
  //     });
  //   }
  // }
};

export default navigationEvents;
