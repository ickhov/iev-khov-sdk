import fp from 'fastify-plugin';

// register the utils helper functions
export default fp((fastify, opts, done) => {
  const yupOptions = {
    strict: false,
    abortEarly: false, // return all errors
    stripUnknown: false,
    recursive: true,
  };

  const yupValidatorCompiler =
    ({ schema }) =>
    (data) => {
      // validate the data if a schema is passed in
      if (schema) {
        // with option strict = false, yup `validateSync` function returns the coerced value if validation was successful, or throws if validation failed
        try {
          const result = schema.validateSync(data, {
            ...yupOptions,
            ...opts,
          });
          return { value: result };
        } catch (e) {
          return { error: e.errors };
        }
      } else return { value: data }; // no schema so just return data as is
    };

  // set the yup schema validator as default
  fastify.setValidatorCompiler(yupValidatorCompiler);

  done();
});
