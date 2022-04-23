import axios from 'axios';
import urls from './urls.js';

const book = async (token, id, isChapter = false) => {
  // make sure initalize was called first
  if (token == null)
    throw new Error('Please initialize the SDK before calling this function.');
  // init the headers
  const headers = { Authorization: `Bearer ${token}` };
  let url = urls.book;
  // append the id if any
  if (id) {
    url = `${url}/${id}`;
    // append chapter url if needed
    if (isChapter) url = `${url}/chapter`;
  }
  const response = await axios.get(url, { headers });
  const data = response.data;
  return data;
};

export default book;
