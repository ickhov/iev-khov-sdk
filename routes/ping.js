// for healthchecks if we use docker or kubernetes
export default async (fastify, request, reply) => {
  reply.send({ success: true });
};
