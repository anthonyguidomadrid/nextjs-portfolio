# Server (Strapi)

This folder contains the Strapi backend for the portfolio project.

- Admin UI: `http://localhost:1337/admin`
- REST API base: `http://localhost:1337/api`
- GraphQL endpoint: `http://localhost:1337/api/graphql`

## Prerequisites

- Node.js: `>=20 <=24` (see `engines` in `package.json`)
- npm (recommended; the repo scripts use npm)

## Quickstart

```bash
cd server
npm install
cp .env.example .env
npm run develop
```

## Environment variables

Create a `.env` file (you can start from `.env.example`). At minimum, you should set the secrets and Cloudinary values.

### Required secrets

Strapi will fail to boot (or features like admin/API tokens will break) if these are missing:

- `APP_KEYS` (comma-separated list; typically 4 random strings)
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`
- `ENCRYPTION_KEY`

Generate values with one of these:

```bash
openssl rand -base64 32
```

or:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Database

Database config lives in `config/database.ts`.

- Default: if `DATABASE_CLIENT` is not set, it falls back to `sqlite` and stores data in `.tmp/data.db`.
- Postgres: set `DATABASE_CLIENT=postgres` and configure either `DATABASE_URL` or the individual `DATABASE_*` fields.

Common Postgres env vars:

- `DATABASE_CLIENT=postgres`
- `DATABASE_URL=postgres://USER:PASSWORD@HOST:5432/DBNAME` (optional but supported)
- `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`
- `DATABASE_SSL` / `DATABASE_SSL_REJECT_UNAUTHORIZED` (for managed DBs)

### Uploads (Cloudinary)

Uploads are configured to use Cloudinary in `config/plugins.ts`. These must be set:

- `CLOUDINARY_NAME`
- `CLOUDINARY_KEY`
- `CLOUDINARY_SECRET`

If you want local disk uploads in development, switch the upload provider config in `config/plugins.ts`.

## Scripts

- `npm run develop` / `npm run dev`: start Strapi in dev mode (auto reload)
- `npm run build`: build the admin panel
- `npm run start`: start Strapi (no auto reload)
- `npm run console`: open Strapi console
- `npm run upgrade`: run Strapi upgrade helper

## GraphQL

GraphQL is enabled and mounted at `/api/graphql` (see `config/plugins.ts`). In development, the GraphQL Playground is enabled.

## Deployment notes

- Ensure all required secrets and Cloudinary vars are set in the hosting environment.
- Use a persistent database (Postgres recommended) for production.
- Typical production flow:

```bash
npm ci
npm run build
npm run start
```

## Troubleshooting

- Boot errors about missing keys/secrets: verify the required secrets in `.env`.
- Upload failures: verify `CLOUDINARY_*` values and that the Cloudinary account allows uploads.
- Frontend can’t reach the API: review CORS/security middleware (`config/middlewares.ts`) and hosting URLs.

## References

- Strapi docs: https://docs.strapi.io
- CLI commands: https://docs.strapi.io/dev-docs/cli
