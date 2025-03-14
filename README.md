
# Anthony Guido Portfolio

![Portfolio Screenshot](client/public/images/anthony-guido-senior-software-developer-portfolio.jpg)

Welcome to the **Anthony Guido Portfolio** project! This repository contains both the client (frontend) and server (backend) applications. The project is designed to showcase Anthony's work and achievements, using **Next.js** for the frontend and **Strapi** for the backend API.

---

## Project Structure

- **Client:** A **Next.js** application showcasing the portfolio.
- **Server:** A **Strapi** backend providing the API and content management for the portfolio.

---

## Prerequisites

### Global Requirements

- **Node.js** version 18.x or higher (for both client and server)
- **Yarn** package manager (recommended)

---

## Installation

To set up both the client and server applications, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/anthonyguidomadrid/nextjs-portfolio
   cd nextjs-portfolio
   ```

2. Install dependencies for both client and server:

   ```bash
   yarn install
   ```

3. Setup the client and server environments:

   ```bash
   yarn setup:client
   yarn setup:server
   ```

4. Configure environment variables for both the client and server by creating `.env` files in their respective directories.

   ### Client `.env`:
   ```env
   NEXT_PUBLIC_BASE_URL=<your_base_url>
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=<your_emailjs_service_id>
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<your_emailjs_template_id>
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<your_emailjs_public_key>
   SITE_URL=<your_site_url>
   NEXT_PUBLIC_GA_MEASUREMENT_ID=<your_google_analytics_id>
   ```

   ### Server `.env`:
   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=<your_app_keys>
   API_TOKEN_SALT=<your_api_token_salt>
   ADMIN_JWT_SECRET=<your_admin_jwt_secret>
   TRANSFER_TOKEN_SALT=<your_transfer_token_salt>
   JWT_SECRET=<your_jwt_secret>

   # Database Configuration
   DATABASE_CLIENT=postgres
   DATABASE_HOST=<your_database_host>
   DATABASE_PORT=<your_database_port>
   DATABASE_NAME=<your_database_name>
   DATABASE_USERNAME=<your_database_username>
   DATABASE_PASSWORD=<your_database_password>
   DATABASE_SSL=true
   DATABASE_SSL_REJECT_UNAUTHORIZED=false

   # Cloudinary Configuration
   CLOUDINARY_NAME=<your_cloudinary_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

---

## Running the Development Environment

To run both the client and server applications in parallel, use the following command:

```bash
yarn dev
```

This will:

- Start the **client** application in development mode.
- Start the **server** application in development mode.

Once running, the **client** will be available at [http://localhost:3000](http://localhost:3000), and the **server** (Strapi admin panel) will be available at [http://localhost:1337](http://localhost:1337).

---

## Available Scripts

The following npm scripts are available for various tasks:

- **`client`**: Run the client application in development mode.

  ```bash
  yarn client
  ```

- **`server`**: Run the server application (Strapi) in development mode.

  ```bash
  yarn server
  ```

- **`clear`**: Remove the `.next` and `cache` directories from the client project.

  ```bash
  yarn clear
  ```

- **`setup:client`**: Install dependencies for the client project.

  ```bash
  yarn setup:client
  ```

- **`setup:server`**: Install dependencies for the server project.

  ```bash
  yarn setup:server
  ```

- **`setup`**: Install all dependencies for the project (both client and server).

  ```bash
  yarn setup
  ```

- **`dev`**: Start both the client and server applications in development mode concurrently.

  ```bash
  yarn dev
  ```

- **`repo:upstream`**: Fetch and merge changes from the upstream repository.

  ```bash
  yarn repo:upstream
  ```

---

## Deployment

### Client Deployment

The client is deployed on **Vercel**. Follow these steps for deployment:

1. Connect the repository to **Vercel**.
2. Add the required environment variables in **Vercel’s dashboard**.
3. Trigger a deployment.

### Server Deployment

The server is deployed on **Railway** with a **PostgreSQL** database. To deploy:

1. Connect the repository to **Railway**.
2. Add the required environment variables in **Railway’s dashboard**.
3. Run the following commands to set up and start the server:

   ```bash
   yarn build
   yarn start
   ```

---

## Code Quality & Testing

- **Linting:** `yarn lint`
- **Auto-fix lint issues:** `yarn lint:fix`
- **Prettier format check:** `yarn format`
- **Auto-fix formatting issues:** `yarn format:fix`
- **Type Checking:** `yarn type:check`

For testing, use:

```bash
yarn test
```

To run tests in watch mode:

```bash
yarn test:watch
```

---

## Live Demo

The application is live and deployed at [https://www.anthonyguido.dev/](https://www.anthonyguido.dev/). Feel free to visit and explore the portfolio.

Full Example in the README:

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Anthony Guido**

- GitHub: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

---

