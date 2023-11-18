import { EnvConfigService } from '../../infra/shared/config-server/env-config.service';

const makeSut = (env?: string) => {
  const sut = EnvConfigService.getInstance(env ?? 'test');
  return sut;
};

describe('EnvConfigService', () => {
  it('ensure sut should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });

  it('should create an instance of EnvConfigService', () => {
    const sut = makeSut();
    expect(sut).toBeInstanceOf(EnvConfigService);
  });

  it('should return the correct APP_PORT when its defined', () => {
    const sut = makeSut();
    const port = sut.getAppPort();
    expect(port).toStrictEqual(3006);
  });

  it('ensure typeof APP_PORT is number', () => {
    const sut = makeSut();
    const port = sut.getAppPort();
    expect(typeof port).toBe('number');
  });

  it('ensure typeof NODE_ENV is string', () => {
    const sut = makeSut();
    const nodeENv = sut.getNodeEnv();
    expect(typeof nodeENv).toBe('string');
  });

  it('ensure environment return a value when NODE_ENV is defined', () => {
    const enviromnent = (process.env.NODE_ENV = 'development');
    const sut = makeSut(enviromnent);
    const nodeEnv = sut.getNodeEnv();
    expect(nodeEnv).toBeDefined();
    expect(enviromnent).toStrictEqual('development');

    process.env.NODE_ENV = 'test';
  });
});
