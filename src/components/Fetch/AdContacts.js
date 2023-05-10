import axios from 'axios';

axios.defaults.baseURL = 'https://645bb75199b618d5f323b663.mockapi.io';

export async function AdContacts({ name, number }) {
  const response = axios.post(`/contacts`, { name, number });
  return response;
}