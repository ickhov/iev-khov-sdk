// This file contains code that we reuse
// between our tests.
import dotenv from 'dotenv';
// import the framework itself
import Fastify from 'fastify';
import fp from 'fastify-plugin';
// register your application as a normal plugin.
import App from '../app.js';

// read the .env file.
dotenv.config();

let app;
export const build = () => app;

export const mochaGlobalSetup = async () => {
  console.log('Starting test scripts...');
  app = Fastify();
  app.register(fp(App));
  console.log("Loading server's plugins...");
  await app.ready();
  console.log(`Server is running...`);
};

export const mochaGlobalTeardown = async () => {
  console.log(`Server is closing...`);
  app.close();
  console.log('Server has stopped!');
  console.log('Ending test scripts.');
  process.exit(0);
};
