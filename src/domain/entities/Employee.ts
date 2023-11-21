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
    this.props.status = this.props.status || EmployeeEnum.Status.ACTIVE;
    this.props.created_at = this.props.created_at ?? new Date();
    this.validateFields(this.props);
  }

  private validateFields(props: EmployeeProps) {
    const requiredFields = Object.keys(props);
    for (const field of requiredFields) {
      if (!props[field as keyof EmployeeProps]) {
        throw new Error(`Missing Param ${field}`);
      }
    }
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get register(): number {
    return this.props.register;
  }

  get status(): string {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.created_at!;
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
