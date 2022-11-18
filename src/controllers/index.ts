import { Router } from "express";

export abstract class ControllerCore {
  public path: string;
  public router: Router;

  public abstract intializeRoutes(): void;
}
