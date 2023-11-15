import * as dotenv from 'dotenv';
import { EnvConfig } from './env-config.interface';
import { join } from 'node:path';

export class EnvConfigService implements EnvConfig {
  constructor(
    private readonly enviromnent: string,
    private readonly env?: string,
  ) {
    this.env =
      this.enviromnent === 'production' ? 'env' : `env.${this.enviromnent}`;
    dotenv.config({
      path: join(__dirname, `../../../../.${this.env}`),
    });
  }

  private static instance: EnvConfigService;
  public static getInstance(enviromnent: string) {
    if (!this.instance) this.instance = new EnvConfigService(enviromnent);
    return this.instance;
  }

  getAppPort(): number {
    return Number(process.env.APP_PORT);
  }
  getNodeEnv(): string {
    return process.env.NODE_ENV ?? this.enviromnent;
  }
  getDatabaseURL(url: string): string {
    return process.env.DATABASE_URL ?? url;
  }
}
