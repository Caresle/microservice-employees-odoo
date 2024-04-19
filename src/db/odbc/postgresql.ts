import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	password: process.env.PGPASSWORD,
	database: process.env.PGDATABASE,
	port: parseInt(process.env.PGPORT ?? "0"),
});

export const postgresql = async (query: string, params: Array<any> = []) => {
	try {
		const res = await pool.query(query, params);
		return res.rows;
	} catch (error) {
		console.log(error);
	} finally {
		// await pool.end();
	}
};
