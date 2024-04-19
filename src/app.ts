import { config } from "dotenv";
config();
import express from "express";
import routesEmployees from "./routes/employees.routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
	return res.json({ data: "Employees service" }).end();
});

// routes

app.use(routesEmployees);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
