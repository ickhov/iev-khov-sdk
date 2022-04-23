import SDK from '../sdk/sdk.js';

const character = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.character(id);
  reply.send(data);
};

const characterQuotes = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.character(id, true);
  reply.send(data);
};

export default {
  character,
  characterQuotes,
};
