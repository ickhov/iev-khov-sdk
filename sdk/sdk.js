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

const SDK = {
  initialize: ({ token: accessToken }) => {
    token = accessToken;
  },
  book: async (id, isChapter) => {
    let url = urls.book;
    // append the id if any
    if (id) {
      url = `${url}/${id}`;
      // append chapter url if needed
      if (isChapter) url = `${url}/chapter`;
    }
    return helper({ requireToken: false, token, url });
  },
  movie: async (id, isQuote) => {
    let url = urls.movie;
    // append the id if any
    if (id) {
      url = `${url}/${id}`;
      // append quote url if needed
      if (isQuote) url = `${url}/quote`;
    }
    return helper({ token, url });
  },
};

export default SDK;
