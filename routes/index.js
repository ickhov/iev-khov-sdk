import root from './root.js';
import ping from './ping.js';
import bookAPI from './book.js';
import movieAPI from './book.js';
import SDK from '../sdk/sdk.js';
import * as Yup from 'yup';

const { book, bookChapters, schema: bookSchema } = bookAPI;
const { movie, movieQuotes, schema: movieSchema } = movieAPI;

SDK.initialize({ token: process.env.TOKEN });

const schema = {
  params: Yup.object({ id: Yup.string() }),
};

export default async (fastify) => {
  fastify.get('/', (request, reply) => root(fastify, request, reply));
  fastify.get('/ping', (request, reply) => ping(fastify, request, reply));
  // BOOKS API
  fastify.get('/book', (request, reply) =>
    book(fastify, request, reply)
  );
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
};
