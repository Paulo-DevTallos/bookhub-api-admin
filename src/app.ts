import express, { Application } from 'express';

export class App {
  public app: Application;

  constructor(expressInstance: Application = express()) {
    this.app = expressInstance;
  }

  initServer() {
    this.app.listen(3006, () => {
      console.log('Server is running on port http://localhost:3006');
    });
  }
}

new App().initServer();
