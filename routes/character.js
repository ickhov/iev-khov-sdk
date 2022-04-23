import SDK from '../sdk/sdk.js';

const character = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.character(request.query, id);
  reply.send(data);
};

const characterQuotes = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.character(request.query, id, true);
  reply.send(data);
};

export default {
  character,
  characterQuotes,
};
