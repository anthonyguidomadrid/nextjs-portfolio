# Anthony Guido Portfolio

Welcome to the **Anthony Guido Portfolio** project, built using **Next.js** and designed to showcase Anthony's work and achievements. This project follows best practices for code quality, testing, and deployment.

## Project Overview

- **Framework:** Next.js
- **Styling:** MUI (Material-UI)
- **State Management:** Redux Toolkit
- **API Integration:** Apollo Client with GraphQL
- **Internationalization:** next-i18next
- **Analytics:** Google Analytics
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- **Node.js** version 24.x
- **Yarn** package manager (recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anthonyguidomadrid/nextjs-portfolio
   cd nextjs-portfolio/client
   ```
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env.local` (recommended) or `.env` file in `client/` and fill in the following values:

```
NEXT_PUBLIC_BASE_URL=<your_base_url>
NEXT_PUBLIC_SITE_URL=<your_site_url>
NEXT_PUBLIC_SITE_NAME=<your_site_name>
NEXT_PUBLIC_EMAILJS_SERVICE_ID=<your_emailjs_service_id>
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=<your_emailjs_template_id>
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=<your_emailjs_public_key>
NEXT_PUBLIC_GA_MEASUREMENT_ID=<your_google_analytics_id>
```

Notes:

- `NEXT_PUBLIC_BASE_URL` should point to the Strapi server base URL (example: `http://localhost:1337`). The app calls GraphQL at `${NEXT_PUBLIC_BASE_URL}/api/graphql`.
- `NEXT_PUBLIC_SITE_URL` should be the public site origin used for canonical URLs (example: `https://www.anthonyguido.dev`).

### Development

To run the development server:

```bash
yarn dev
```

From the repository root, you can also run:

```bash
yarn client
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Production Build

To build the project for production:

```bash
yarn build
```

To start the production server:

```bash
yarn start
```

### Code Quality

The project follows linting, formatting, and type-checking best practices. Use the following commands:

- **Linting:** `yarn lint`
- **Auto-fix lint issues:** `yarn lint:fix`
- **Prettier format check:** `yarn format`
- **Auto-fix formatting issues:** `yarn format:fix`
- **Type Checking:** `yarn type:check`

### Testing

The project uses **Jest** and **React Testing Library** for unit tests. Run tests with:

```bash
yarn test
```

For watching test changes:

```bash
yarn test:watch
```

### Storybook

For UI component development and documentation, use:

- Start Storybook: `yarn storybook`
- Build Storybook: `yarn build-storybook`

### Code Generation

The project uses GraphQL code generation. Run the following command to generate types and queries:

```bash
yarn codegen
```

Codegen reads `NEXT_PUBLIC_BASE_URL` and fetches the schema from `${NEXT_PUBLIC_BASE_URL}/api/graphql`, so the Strapi server must be running (or reachable) when you run this.

## Deployment

This project is deployed via **Vercel**. Follow these steps to deploy:

1. Connect the repository to Vercel.
2. Add the required environment variables in Vercel's dashboard.
3. Trigger a deployment.

## License

This project is licensed under the **MIT License**.

## Author

**Anthony Guido**

- GitHub: [@anthonyguidomadrid](https://github.com/anthonyguidomadrid/)
- LinkedIn: [@anthony-guido](https://www.linkedin.com/in/anthony-guido/)

### Footnotes

1. [Next.js Documentation](https://nextjs.org/docs/getting-started)

2. [Apollo Client](https://www.apollographql.com/docs/react/)

3. [TypeScript](https://www.typescriptlang.org/)
