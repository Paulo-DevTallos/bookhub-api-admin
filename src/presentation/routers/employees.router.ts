import { Router, Request, Response } from 'express';

export class EmployeesRouter {
  public router: Router;

  constructor(public employeeRouter: Router = Router()) {
    this.router = employeeRouter;
    this.employeesRouter();
  }

  employeesRouter() {
    this.employeeRouter.get('/', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Hello World' });
    });
  }
}
