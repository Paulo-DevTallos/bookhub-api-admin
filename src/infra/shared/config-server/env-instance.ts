import { EnvConfigService } from './env-config.service';

export const environmentInstance = () => {
  return {
    global: EnvConfigService.getInstance(process.env.NODE_ENV ?? 'development'),
  };
};
