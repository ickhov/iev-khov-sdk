import helper from './helper.js';

const baseURL = 'https://the-one-api.dev/v2';

const urls = {
  book: `${baseURL}/book`,
  movie: `${baseURL}/movie`,
  character: `${baseURL}/character`,
  quote: `${baseURL}/quote`,
  chapter: `${baseURL}/chapter`,
};

let token = null;

const constructQueryString = (query) => {
  const queries = [];
  const { limit, page, offset, sort, ...rest } = query;
  if (limit) queries.push(`limit=${limit}`);
  if (page) queries.push(`page=${page}`);
  if (offset) queries.push(`offset=${offset}`);
  if (sort) queries.push(`sort=${sort}`);
  // filters have no key so create a key=value string using the remaining values in query
  const filters = Object.entries(rest).map(([key, value]) => `${key}=${value}`);
  const querystring = [...queries, ...filters].join('&');
  return querystring === '' ? '' : `?${querystring}`;
};

const SDK = {
  initialize: ({ token: accessToken }) => {
    token = accessToken;
  },
  book: async (query, id, isChapter) => {
    let url = urls.book;
    // append the id if any
    if (id) {
      url = `${url}/${id}`;
      // append chapter url if needed
      if (isChapter) url = `${url}/chapter`;
    }
    url = `${url}${constructQueryString(query)}`;
    return helper({ requireToken: false, token, url });
  },
  movie: async (query, id, isQuote) => {
    let url = urls.movie;
    // append the id if any
    if (id) {
      url = `${url}/${id}`;
      // append quote url if needed
      if (isQuote) url = `${url}/quote`;
    }
    url = `${url}${constructQueryString(query)}`;
    return helper({ requireToken: true, token, url });
  },
  character: async (query, id, isQuote) => {
    let url = urls.character;
    // append the id if any
    if (id) {
      url = `${url}/${id}`;
      // append quote url if needed
      if (isQuote) url = `${url}/quote`;
    }
    url = `${url}${constructQueryString(query)}`;
    return helper({ requireToken: true, token, url });
  },
  quote: async (query, id) => {
    let url = urls.quote;
    // append the id if any
    if (id) url = `${url}/${id}`;
    url = `${url}${constructQueryString(query)}`;
    return helper({ requireToken: true, token, url });
  },
  chapter: async (query, id) => {
    let url = urls.chapter;
    // append the id if any
    if (id) url = `${url}/${id}`;
    url = `${url}${constructQueryString(query)}`;
    return helper({ requireToken: true, token, url });
  },
};

export default SDK;
