import SDK from '../sdk/sdk.js';

const quote = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.quote(request.query, id);
  reply.send(data);
};

export default {
  quote,
};
