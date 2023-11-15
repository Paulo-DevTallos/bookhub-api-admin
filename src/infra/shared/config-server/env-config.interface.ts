export interface EnvConfig {
  getAppPort(): number;
  getNodeEnv(): string;
  getDatabaseURL(url: string): string;
}
