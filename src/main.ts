import { App } from './app';
import { environmentInstance } from './infra/shared/config-server/env-instance';

const server = new App();

const envConfigService = environmentInstance();
const port = envConfigService.global.getAppPort();
server.initServer(port);

server.app.on('error', onError);
function onError(error: any): string | number | undefined {
  if (error.syscall !== 'listen') return error ?? 500;
  return undefined;
}
