# Robos AI - UMSV Website

React.js website built with Vite for showcasing Robos AI's Unmanned Maritime Surveillance Vessel (UMSV) and Unified AI platform.

## Features

- Responsive design with Tailwind CSS
- Multi-page navigation with React Router
- Contact form with email integration
- Modern UI with smooth animations
- Professional product showcase

## Tech Stack

- React 17
- Vite
- Tailwind CSS
- React Router DOM
- EmailJS for contact forms
- Express.js backend (optional)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Backend Server (Optional)

Start the Express.js server for email functionality:
```bash
npm run server
```

The server runs on `http://localhost:3001`

## Project Structure

```
src/
  components/     # Reusable components
  pages/         # Page components
  services/      # API and service integrations
  assets/        # Static assets (moved to public/)
public/
  assets/        # Public assets (images, etc.)
server/          # Express.js backend
```

## Environment Variables

For EmailJS integration, set these variables in your `.env` file:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID  
- `VITE_EMAILJS_USER_ID`: Your EmailJS user ID

## Deployment

The built files in the `dist` folder can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

For the backend server, deploy to services like:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
# Full-Stack-Website
