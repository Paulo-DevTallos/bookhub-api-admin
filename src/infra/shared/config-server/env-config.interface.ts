export interface EnvConfig {
  getEnvPort(): number;
  getNodeEnv(): string;
  getEnvDatabaseURL(url: string): string;
}
