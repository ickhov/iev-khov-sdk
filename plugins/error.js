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
    } else {
      if (error.response)
        // Request made and server responded
        reply.status(error.response.status).send({
          error: error.response.statusText,
        });
      else if (error.request)
        // The request was made but no response was received
        reply.status(400).send({
          error: error.request,
        });
      // Something happened in setting up the request that triggered an Error
      else
        reply.status(400).send({
          error: error.message,
        });
    }
  };

  // set the error handler for yup validation
  fastify.setErrorHandler(errorHandler);

  done();
});
