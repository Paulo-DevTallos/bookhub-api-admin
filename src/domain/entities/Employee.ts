export interface EmployeeProps {
  name: string;
  email: string;
  register: number;
  password: string;
  role: string;
  status: EmployeeEnum.Status;
  created_at?: Date;
}

export class EmployeeEntity {
  constructor(public readonly props: EmployeeProps) {
    this.props.created_at = this.props.created_at ?? new Date();
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EmployeeEnum {
  export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    ON_VACATION = 'on_vacation',
  }
}

const employee = new EmployeeEntity({
  name: 'John Doe',
  email: 'employee@teste.com.br',
  register: 325,
  password: '123456',
  role: 'admin',
  status: EmployeeEnum.Status.ACTIVE,
});

console.log(employee);
