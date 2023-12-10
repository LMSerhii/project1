import { getData, dataGetForID } from './js/api_service.js'


// console.log(getData());

async function gedDataID(id){
  try {
    const result = await dataGetForID(id)
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(gedDataID(19))