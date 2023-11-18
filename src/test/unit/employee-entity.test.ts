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
});
