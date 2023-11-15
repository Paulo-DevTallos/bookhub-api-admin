import express, { Application } from 'express';

export class App {
  public app: Application;

  constructor(expressInstance: Application = express()) {
    this.app = expressInstance;
  }

  initServer(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  }
}
