import ping from './ping.js';

export default async (fastify) => {
  fastify.get('/ping', (request, reply) => ping(fastify, request, reply));
};
