# Microservice Employees Odoo

A simple microservice for getting information about employees from the
ERP odoo.

## Table of contents

- [List of endpoints](#list-of-endpoints)
  - [Employees](#employees)
- [Deploy](#deploy)
  - [Requirements](#requirements)
  - [Steps to install the project](#steps-to-install-the-project)
  - [Docker](#docker)

## List of endpoints

The current available endpoint for the api are the next one:

### Employees

`/employees` : GET

```bash
# Request params
id - numeric (optional)
name - string (optional)
email - string (optional)
company - string (optional)
```

### JSON Response

```json
{
  "status": 200,
  "msg": "success",
  "data": [
    {
      "id": 1,
      "name": "Administrator",
      "job_id": null,
      "job_title": null,
      "department_id": 1,
      "department": "Administration",
      "parent_id": null,
      "parent_name": null,
      "coach_id": null,
      "company_id": 1,
      "company": "Caresle Company",
      "work_email": "carabesle@gmail.com",
      "work_phone": null,
      "mobile_phone": null,
      "pin": null
    }
  ]
}
```

## Deploy

### Requirements

You need to have a odoo database for the project to work, also see [Docker](#docker) if you want to deploy the project using docker.

### Steps to install the project

1. Clone the repository
2. Install the dependencies with:

```bash
npm i
```

3. Copy `.env.example` and rename for `.env`
4. Set up the `.env` variables
5. Build the project with:

```bash
npm run build
```

6. Start the project with:

```bash
npm run start
```

### Docker

If you want to use docker follow the previous step, just run these additional commands.

1. For building the docker image

```bash
docker build -t odoo_microservice ./
```

2. For start the container (remember that the odoo db need to be running)

```bash
docker run --name employees_microservice -p 3005:3005 -d odoo_microservice
```

> Replace the -p with <PORT_HOST>:<PORT_IN_THE_ENV_FILE> for the app to run
