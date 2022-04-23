import SDK from '../sdk/sdk.js';
import * as Yup from 'yup';

const schema = {
  params: Yup.object({ id: Yup.string() }),
};

const book = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.book(id);
  reply.send(data);
};

const bookChapters = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.book(id, true);
  reply.send(data);
};

export default {
  schema,
  book,
  bookChapters,
};
