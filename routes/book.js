import SDK from '../sdk/sdk.js';

const book = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.book(request.query, id);
  reply.send(data);
};

const bookChapters = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.book(request.query, id, true);
  reply.send(data);
};

export default {
  book,
  bookChapters,
};
