import axios from 'axios';
import { common } from './common.js';

async function getData() {
  try {
    const response = await axios.get(`${common.BASE_URL}work/contacts/`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

async function dataGetForID(id) {
  try {
    const response = await axios.get(`${common.BASE_URL}work/contacts/${id}`)
    return response;
  } catch (error) {
    console.log(error.message);
  }
}


export {getData, dataGetForID}