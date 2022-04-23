import autoLoad from 'fastify-autoload';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'fastify-cors';

const filename = fileURLToPath(import.meta.url);
const directoryName = dirname(filename);

export default async (fastify, opts) => {
    // Place extra configuration code here

    // Do not touch the following lines

    // CORS Header
    fastify.register(cors, {
        origin: '*',
    });

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    // define the plugins in the plugins folder
    fastify.register(autoLoad, {
        dir: join(directoryName, 'plugins'),
        options: { ...opts },
    });

    // This loads all routes defined in routes
    // define the routes in the routes folder
    fastify.register(autoLoad, {
        dir: join(directoryName, 'routes'),
        options: { ...opts },
    });
};
