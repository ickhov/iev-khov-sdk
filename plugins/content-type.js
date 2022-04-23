import formbody from 'fastify-formbody';
import multipart from 'fastify-multipart';
import fp from 'fastify-plugin';

// register the content types allowed for this API globally
export default fp((fastify, opts, done) => {
  // register support for multipart content-type
  fastify.register(multipart, {
    attachFieldsToBody: true,
    limits: {
      fileSize: 1258291.2, // For multipart forms, the max file size in bytes (or 1.2 MB)
    },
  });
  // register support for formdata content-type
  fastify.register(formbody);
  done();
});
