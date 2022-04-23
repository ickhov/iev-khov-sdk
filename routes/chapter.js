import SDK from '../sdk/sdk.js';

const chapter = async (fastify, request, reply) => {
  const { id } = request.params;
  const data = await SDK.chapter(request.query, id);
  reply.send(data);
};

export default {
  chapter,
};
