import { EnvConfigService } from '../../infra/shared/config-server/env-config.service';

const makeSut = () => {
  const sut = EnvConfigService.getInstance('test');
  return sut;
};

describe('EnvConfigService', () => {
  it('ensure sut should be defined', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
  });
});
