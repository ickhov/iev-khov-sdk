// import library to exit fastify process, gracefully (if possible)
import closeWithGrace from 'close-with-grace';
import dotenv from 'dotenv';
// import the framework itself
import Fastify from 'fastify';
// register your application as a normal plugin.
import appService from './app.js';

// read the .env file.
dotenv.config();

// instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

app.register(appService);

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace({ delay: 500 }, async ({ err }) => {
  if (err) {
    app.log.error(err);
  }
  await app.close();
});

app.addHook('onClose', async (instance, done) => {
  closeListeners.uninstall();
  done();
});

// start listening.
app.listen(process.env.PORT || 8000, '0.0.0.0', (err) => {
  if (err) {
    console.log('error', err);
    app.log.error(err);
    process.exit(1);
  }
});
