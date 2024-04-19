export const getEmployeesQuery = `
	SELECT
		he.id,
		he.name,
		he.job_id,
		he.job_title,
		he.department_id,
		hd.complete_name AS department,
		he.parent_id,
		(
			SELECT he2.name AS parent_name FROM hr_employee he2
			WHERE he2.id = he.parent_id
		) AS parent_name,
		he.coach_id,
		he.company_id,
		rc.name AS company,
		he.work_email,
		he.work_phone,
		he.mobile_phone,
		he.pin
	FROM hr_employee he
	LEFT JOIN hr_department hd
		ON hd.id = he.department_id
	LEFT JOIN res_company rc
		ON rc.id = he.company_id
	WHERE he.id = COALESCE($1, he.id)
		AND CASE
			WHEN $2::text IS NOT NULL THEN he.name ILIKE '%' || $2 || '%'
			WHEN $3::text IS NOT NULL THEN he.work_email ILIKE '%' || $3 || '%'
			WHEN $4::text IS NOT NULL THEN rc.name ILIKE '%' || $4 || '%'
			WHEN $1::int IS NOT NULL THEN he.id = $1
			ELSE TRUE
		END
	;
`;
