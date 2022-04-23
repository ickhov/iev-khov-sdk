// in case we want to do soemthing at root
export default async (fastify, request, reply) => {
  reply.send({ root: true });
};
