import root from './root.js';
import ping from './ping.js';
import bookAPI from './book.js';
import SDK from '../sdk/sdk.js';

const { books, bookChapters, schema: bookSchema } = bookAPI;

SDK.initialize({ token: process.env.TOKEN });

export default async (fastify) => {
  fastify.get('/', (request, reply) => root(fastify, request, reply));
  fastify.get('/ping', (request, reply) => ping(fastify, request, reply));
  // BOOKS API
  fastify.get('/book', { schema: bookSchema }, (request, reply) =>
    books(fastify, request, reply)
  );
  fastify.get('/book/:id', { schema: bookSchema }, (request, reply) =>
    books(fastify, request, reply)
  );
  fastify.get('/book/:id/chapter', { schema: bookSchema }, (request, reply) =>
    bookChapters(fastify, request, reply)
  );
};
