import SDK from '../sdk/sdk.js';

const movie = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.movie(id);
  reply.send(data);
};

const movieQuotes = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.movie(id, true);
  reply.send(data);
};

export default {
  movie,
  movieQuotes,
};
