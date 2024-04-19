import { Request, Response } from "express";
import { postgresql } from "../db/odbc/postgresql";
import { getEmployeesQuery } from "../queries/employees.queries";

export const getEmployees = async (req: Request, res: Response) => {
	try {
		const { name, email, company, id } = req.query;

		const result = await postgresql(getEmployeesQuery, [
			id,
			name,
			email,
			company,
		]);
		return res.json({ status: 200, msg: "success", data: result });
	} catch (error) {
		console.error(error);
		return res.json({ status: 500, msg: "Server error", data: [] });
	}
};
