# Hostinger Deployment Checklist

## Phase 1: Preparation
- [ ] Test build locally: `npm run build:optimized`
- [ ] Verify the `dist` folder is created successfully
- [ ] Check if backend server starts locally: `npm run server`

## Phase 2: Hostinger Setup
- [ ] Access Hostinger control panel
- [ ] Ensure Node.js is installed on your VPS/Cloud plan
- [ ] Set up SSH access to your server
- [ ] Configure your domain to point to Hostinger

## Phase 3: Deployment
- [ ] Upload project files to server via FTP/SFTP or Git
- [ ] Install dependencies: `npm install`
- [ ] Build production version: `npm run build:optimized`
- [ ] Set up process manager (PM2) for backend
- [ ] Configure Nginx to serve static files and proxy API requests

## Phase 4: Configuration
- [ ] Set up environment variables for production
- [ ] Configure SSL certificate
- [ ] Test the deployed application

## Additional Notes:
- Your email service uses EmailJS (client-side), so no additional backend setup needed for emails
- Backend server runs on port 3001 (health check endpoint)
- Frontend is built with Vite and outputs to `dist/` folder
