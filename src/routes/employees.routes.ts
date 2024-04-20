import { Router } from "express";
import { getEmployees } from "../controller/employees.controller";

const routes: Router = Router();

routes.get("/employees", getEmployees);

export default routes;
