
# Next.js Portfolio API

This is a **Strapi** application designed to provide a powerful and flexible API for managing content in the **Next.js Portfolio** project. The project leverages **PostgreSQL** for database management and integrates **Cloudinary** for media storage.

## Features

- **Strapi v4** as the CMS  
- **PostgreSQL** as the database (deployed via **Railway**)  
- **Cloudinary** for media asset management  
- **GraphQL** support for flexible querying  
- Multilingual support with **i18n**  
- Comprehensive user permissions with **Users & Permissions** plugin  

---

## Getting Started

### Prerequisites
- **Node.js** version 18.x - 20.x  
- **Yarn** or **npm** package manager  

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anthonyguidomadrid/nextjs-portfolio
   cd server
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file in the project root and configure the required environment variables:

```
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

## 🚀 Development

Start your Strapi application with **autoReload** enabled for efficient development.

```bash
yarn develop
```

Visit [http://localhost:1337](http://localhost:1337) to access the admin panel.

---

## 🌐 Production

Start your Strapi application with **autoReload** disabled for production use.

```bash
yarn start
```

---

## 🔨 Building the Admin Panel

To build the admin panel:

```bash
yarn build
```

---

## ⚙️ Deployment

This project is deployed via **Railway** with a **PostgreSQL** database.

### Deployment Steps
1. Connect the repository to Railway.  
2. Add the required environment variables in the Railway dashboard.  
3. Run the following command for the initial build and database setup:

```bash
yarn build
yarn start
```

---

## 📚 Learn More

- [Strapi Documentation](https://docs.strapi.io) - Comprehensive documentation for building with Strapi.  
- [Strapi Cloud](https://cloud.strapi.io) - A dedicated platform for deploying Strapi applications.  
- [Strapi Tutorials](https://strapi.io/tutorials) - Guides for working with Strapi.  
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - Curated list of resources for Strapi development.  

---

## ✨ Community & Support

- [Discord](https://discord.strapi.io) - Engage with the Strapi community.  
- [Forum](https://forum.strapi.io) - Discuss, ask questions, and find answers.  

---

## 📝 License

This project is licensed under the **MIT License**.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
