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
});
