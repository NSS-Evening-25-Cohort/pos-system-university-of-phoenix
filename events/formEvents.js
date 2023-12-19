import { createItem, getItems, updateItem } from '../api/itemData';
import { showItems } from '../pages/orderDetails';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.dispatchEvent.includes('submit-item')) {
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload).then(() => {
          getItems().then(showItems);
        });
      });
    }
  });
};

export default formEvents;
