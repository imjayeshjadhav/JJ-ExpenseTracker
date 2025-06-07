Expense Tracker App

A full-stack expense tracking application built with React Native and Node.js, featuring real-time transaction management, user authentication, and financial analytics.

Features

User Authentication: Secure login and registration using Clerk
Transaction Management: 
  Add new expenses and income
  View transaction history
  Delete transactions
  Real-time balance updates
Financial Analytics:
  Balance overview
  Income tracking
  Expense tracking
  Transaction summaries
Modern UI/UX:
  Clean and intuitive interface
  Responsive design
  Pull-to-refresh functionality
  Confirmation dialogs for important actions

Tech Stack

Frontend (Mobile)
React Native with Expo
Expo Router for navigation
Clerk for authentication
React Native Vector Icons
Expo Blur for UI effects
React Native Gesture Handler
TypeScript support

Backend
Node.js with Express
Neon Database (PostgreSQL)
Upstash Redis for rate limiting
CORS enabled
Environment variable support

Mobile App Structure

mobile/
  app/                 # Main application screens
  assets/             # Static assets (images, styles)
  components/         # Reusable UI components
  constants/          # Application constants
  hooks/             # Custom React hooks
  lib/               # Utility functions

Backend Structure

backend/
  config/            # Database and app configuration
  controllers/       # Route controllers
  middleware/        # Custom middleware
  routes/           # API routes
  server.js         # Main entry point

Getting Started

Prerequisites
Node.js (v14 or higher)
npm or yarn
Expo CLI
PostgreSQL database

Installation

1. Clone the repository:
git clone https://github.com/imjayeshjadhav/JJ-ExpenseTracker
cd expenses

2. Install mobile dependencies:
cd mobile
npm install

3. Install backend dependencies:
cd ../backend
npm install

4. Set up environment variables:
   Create .env file in backend directory
   Add necessary environment variables (database URL, API keys, etc.)

5. Start the backend server:
cd backend
npm run dev

6. Start the mobile app:
cd mobile
npm start

Environment Variables

Backend (.env)
DATABASE_URL=your_database_url
CLERK_SECRET_KEY=your_clerk_secret

Mobile (app.config.js)
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
EXPO_PUBLIC_API_URL=your_api_url

Available Scripts

Mobile
npm start - Start the Expo development server
npm run android - Run on Android
npm run ios - Run on iOS
npm run web - Run on web browser

Backend
npm run dev - Start development server with nodemon
npm start - Start production server

Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

License

This project is licensed under the ISC License.

Authors

Jayesh Jadhav - Initial work

Acknowledgments

Clerk for authentication
Expo team for the amazing framework
Neon Database for PostgreSQL hosting
