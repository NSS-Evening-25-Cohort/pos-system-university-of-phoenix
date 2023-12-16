import { createItem, getItems, updateItem } from '../components/data/itemData';

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
          getItems().then(); // need a "showBooks" or "showItems" here to show on DOM
        });
      });
    }
  });
};

export default formEvents;
