import client from '../utils/client';

const endpoint = client.databaseURL;

const getCustomer = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleCustomer = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/customer/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getCustomer, getSingleCustomer };
