import axios from 'axios';

const helper = async ({ requireToken, token, url }) => {
  const headers = {};
  // make sure initalize was called first
  if (requireToken) {
    if (token == null)
      throw new Error(
        'Please initialize the SDK before calling this function.'
      );
    // init the headers
    headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await axios.get(url, { headers });
  const data = response.data;
  return data;
};

export default helper;
