import book from './book.js';

let token = null;

const SDK = {
  initialize: ({ token: accessToken }) => {
    token = accessToken;
  },
  book: async (id, isChapter) => book(token, id, isChapter),
};

export default SDK;
