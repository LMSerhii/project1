import { getData, dataGetForID, createNewContact } from './js/api_service.js'


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

async function addContact(dataUser){
try{
  await createNewContact(dataUser)
} 
catch(error){console.log(error)}
}

// addContact({name: "Kateryna", phone: "1234567"});
