import { Application, Router } from 'express';

export interface ApiInterface {
  start(PORT: string | number): void,
  addRouter(router: Router, route: string): void,
  handleErrors(): void,
  getApi(): Application,
}
