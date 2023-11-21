import express, { Application } from 'express';
import { EmployeesRouter } from './presentation/routers/employees.router';

export class App {
  public app: Application;
  private employeesRouter = new EmployeesRouter();

  constructor(expressInstance: Application = express()) {
    this.app = expressInstance;
    this.middlewareInitializer();
    this.initRouter();
  }

  middlewareInitializer() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initRouter() {
    this.app.use(this.employeesRouter.router);
  }

  initServer(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  }
}
