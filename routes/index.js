import * as Yup from 'yup';
import SDK from '../sdk/sdk.js';
import bookAPI from './book.js';
import characterAPI from './character.js';
import movieAPI from './movie.js';
import quoteAPI from './quote.js';
import chapterAPI from './chapter.js';
import ping from './ping.js';
import root from './root.js';

const { book, bookChapters } = bookAPI;
const { movie, movieQuotes } = movieAPI;
const { character, characterQuotes } = characterAPI;
const { quote } = quoteAPI;
const { chapter } = chapterAPI;

SDK.initialize({ token: process.env.TOKEN });

const schema = {
  params: Yup.object({ id: Yup.string() }),
  querystring: Yup.object({
    limit: Yup.string(),
    page: Yup.string(),
    offset: Yup.string(),
    sort: Yup.string(),
  }),
};

export default async (fastify) => {
  fastify.get('/', (request, reply) => root(fastify, request, reply));
  fastify.get('/ping', (request, reply) => ping(fastify, request, reply));
  // BOOKS API
  fastify.get('/book', (request, reply) => book(fastify, request, reply));
  fastify.get('/book/:id', { schema }, (request, reply) =>
    book(fastify, request, reply)
  );
  fastify.get('/book/:id/chapter', { schema }, (request, reply) =>
    bookChapters(fastify, request, reply)
  );
  // MOVIES API
  fastify.get('/movie', (request, reply) => movie(fastify, request, reply));
  fastify.get('/movie/:id', { schema }, (request, reply) =>
    movie(fastify, request, reply)
  );
  fastify.get('/movie/:id/quote', { schema }, (request, reply) =>
    movieQuotes(fastify, request, reply)
  );
  // CHARACTER API
  fastify.get('/character', (request, reply) =>
    character(fastify, request, reply)
  );
  fastify.get('/character/:id', { schema }, (request, reply) =>
    character(fastify, request, reply)
  );
  fastify.get('/character/:id/quote', { schema }, (request, reply) =>
    characterQuotes(fastify, request, reply)
  );
  // QUOTE API
  fastify.get('/quote', (request, reply) => quote(fastify, request, reply));
  fastify.get('/quote/:id', { schema }, (request, reply) =>
    quote(fastify, request, reply)
  );
  // CHAPTER API
  fastify.get('/chapter', (request, reply) => chapter(fastify, request, reply));
  fastify.get('/chapter/:id', { schema }, (request, reply) =>
    chapter(fastify, request, reply)
  );
};
