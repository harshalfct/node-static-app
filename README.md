# Node Static App

This is a modern React application built with [Vite](https://vitejs.dev/). It is configured for simple, fast development and comes with an automated CI/CD pipeline out of the box using Jenkins.

## 🚀 Quick Start (Local Development)

To run the project locally on your own machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

## 🛠️ Build and Production

To create a production-ready build:

```bash
npm run build
```
This command bundles your React code and generates static files inside the `dist/` directory.

## ⚙️ Automated Deployment (Jenkins & PM2)

This project includes a `Jenkinsfile` for continuous integration and deployment. The pipeline is designed to be lightweight, simple, and automated.

### Pipeline Stages
1. **Checkout:** Pulls the latest code from the `main` branch.
2. **Install Node.js:** Automatically provisions Node.js on the hosting server.
3. **Install Dependencies:** Fetches the required `npm` packages.
4. **Build Project:** Compiles the application into static files.
5. **Deploy:** Uses [PM2](https://pm2.keymetrics.io/) to seamlessly serve the built `dist/` folder on **Port 3000**. The PM2 server runs in the background continuously.

### Accessing the Live App
Once Jenkins completes the deployment, the application is publicly accessible via your server's IP address on port 3000 (e.g., `http://<your-server-ip>:3000`).
*(Note: Ensure Port 3000 is open in your server's firewall/security group).*

## 🧹 Project Structure
* `src/` - Contains all React components and logic.
* `public/` - Static assets like images or fonts.
* `vite.config.js` - Vite bundler configuration (configured to run on port 3000).
* `Jenkinsfile` - Declarative pipeline for automated deployments.
