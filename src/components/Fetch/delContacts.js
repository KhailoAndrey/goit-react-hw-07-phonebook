import axios from 'axios';

axios.defaults.baseURL = 'https://645bb75199b618d5f323b663.mockapi.io';

export async function delContacts(id) {
  const response = axios.delete(`/contacts/${id}`);
  return response;
}