import axios from 'axios';
import { common } from './common.js';

async function getData() {
  try {
    const response = await axios.get(`${common.BASE_URL}work/contacts/`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function dataGetForID(id) {
  try {
    const response = await axios.get(`${common.BASE_URL}work/contacts/${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function createNewContact(data) {
  try {
    const response = await axios.post(`${common.BASE_URL}work/contacts/`, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

async function deleteContacts(id) {
  try {
    const response = await axios.delete(
      `${common.BASE_URL}work/contacts/${id}`
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function updateContacts(id, data) {
  try {
    const respons = await axios.put(
      `${common.BASE_URL}work/contacts/${id}`,
      data
    );
    console.log(respons);
  } catch (error) {
    console.log(error.message);
  }
}
export {
  getData,
  dataGetForID,
  createNewContact,
  deleteContacts,
  updateContacts,
};
