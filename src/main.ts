import { App } from './app';
const server = new App();

const port = 3006;
server.initServer(port);

server.app.on('error', onError);
function onError(error: any): string | number | undefined {
  if (error.syscall !== 'listen') return error ?? 500;
  return undefined;
}
