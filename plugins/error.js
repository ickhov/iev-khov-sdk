import fp from 'fastify-plugin';
// register the utils helper functions
export default fp((fastify, opts, done) => {
  const errorHandler = (error, request, reply) => {
    const { validation } = error;
    // check if we have a validation error
    if (validation) {
      const response = {
        error: validation.join(', '),
      };
      reply.status(400).send(response);
    } else reply.status(500).send(error);
  };

  // set the error handler for yup validation
  fastify.setErrorHandler(errorHandler);

  done();
});
