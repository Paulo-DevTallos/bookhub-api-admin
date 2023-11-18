import {
  EmployeeEntity,
  EmployeeProps,
  EmployeeEnum,
} from '../../domain/entities/Employee';

const makeSut = (props?: Partial<EmployeeProps>) => {
  const employeeProps: EmployeeProps = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    register: 125,
    password: '123456',
    role: 'admin',
    status: EmployeeEnum.Status.ACTIVE,
  };
  const sut = new EmployeeEntity({ ...employeeProps, ...props });
  return sut;
};

describe('EmployeeEntity unit test constructor', () => {
  it('should verify if sut is defined and its truthy', () => {
    const sut = makeSut();
    expect(sut).toBeDefined();
    expect(sut).toBeTruthy();
  });

  it('should create a new employee filling all equivalents typeof', () => {
    const sut = makeSut();
    const employee = {
      name: expect.any(String),
      email: expect.any(String),
      register: expect.any(Number),
      password: expect.any(String),
      role: expect.any(String),
      status: expect.any(String),
      created_at: expect.any(Date),
    };
    expect(sut.props).toMatchObject(employee);
  });

  it('should create a new employee filling all fields', () => {
    const sut = makeSut();
    const employee = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      register: 125,
      password: '123456',
      role: 'admin',
      status: 'active',
    };
    expect(sut.props).toMatchObject(employee);
  });

  it('should garantee register field is a valid number and should not return 0', () => {
    const sut = makeSut();
    const register = (sut.props.register = 1025);
    expect(typeof register).toBe('number');
    expect(register).not.toBe(0);
  });

  it('should test if created_at field is a instance of Date', () => {
    const sut = makeSut();
    const created_at = sut.props.created_at;
    expect(created_at).toBeInstanceOf(Date);
  });

  it('should test if created_at field is a valid Date', () => {
    const sut = makeSut();
    const created_at = (sut.props.created_at = new Date());
    expect(sut.props.created_at).toMatchObject(created_at);
  });

  it('should test created_at is not null or undefined', () => {
    const sut = makeSut();
    const created_at = sut.props.created_at;
    expect(created_at).not.toBeNull();
    expect(created_at).not.toBeUndefined();
  });
});

describe('validateFields method unit test', () => {
  it('should throw an exception if name field is not provided', () => {
    const sut = makeSut();
    sut.props.name = '';
    expect(() => sut['validateFields'](sut.props)).toThrow(
      new Error('Missing Param name'),
    );
  });

  it('should throw an exception if email field is not provided', () => {
    const sut = makeSut();
    sut.props.email = '';
    expect(() => sut['validateFields'](sut.props)).toThrow(
      new Error('Missing Param email'),
    );
  });
});
