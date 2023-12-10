import axios from 'axios';
import { common } from './common';

async function getData() {
  try {
    const response = await axios.get(`${common.BASE_URL}work/contacts/`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

getData();
