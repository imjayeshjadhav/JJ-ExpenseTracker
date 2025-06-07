📲 Expense Tracker App (JJ-ExpenseTracker)

A full-stack 💼 expense tracking application built with React Native and Node.js, featuring real-time ⚡ transaction management, secure 🔐 user authentication, and insightful 📊 financial analytics.

✨ Features

🔐 User Authentication
• Secure login and registration using Clerk

💰 Transaction Management
• Add new expenses and income
• View transaction history
• Delete transactions
• Real-time balance updates

📈 Financial Analytics
• Balance overview
• Income tracking
• Expense tracking
• Transaction summaries

🎨 Modern UI/UX
• Clean and intuitive interface
• Responsive design
• Pull-to-refresh functionality
• Confirmation dialogs for important actions

🛠️ Tech Stack

📱 Frontend (Mobile)
• React Native with Expo
• Expo Router for navigation
• Clerk for authentication
• React Native Vector Icons
• Expo Blur for UI effects
• React Native Gesture Handler
• TypeScript support

🧠 Backend
• Node.js with Express
• Neon Database (PostgreSQL)
• Upstash Redis for rate limiting
• CORS enabled
• Environment variable support

🚀 Getting Started

🔧 Prerequisites
• Node.js (v14 or higher)
• npm or yarn
• Expo CLI
• PostgreSQL database

💻 Installation

1️⃣ Clone the repository:
git clone https://github.com/imjayeshjadhav/JJ-ExpenseTracker
cd expenses

2️⃣ Install mobile dependencies:
cd mobile
npm install

3️⃣ Install backend dependencies:
cd ../backend
npm install

4️⃣ Set up environment variables:
• Create a .env file in the backend directory
• Add necessary environment variables (database URL, API keys, etc.)

5️⃣ Start the backend server:
cd backend
npm run dev

6️⃣ Start the mobile app:
cd mobile
npm start

🔐 Environment Variables

Backend (.env)

DATABASE_URL=your_database_url  
CLERK_SECRET_KEY=your_clerk_secret

Mobile (app.config.js)

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key  
EXPO_PUBLIC_API_URL=your_api_url

Mobile
• npm start – Start the Expo development server
• npm run android – Run on Android
• npm run ios – Run on iOS
• npm run web – Run on web browser

Backend
• npm run dev – Start development server with nodemon
• npm start – Start production server

🤝 Contributing

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License

This project is licensed under the ISC License.

👨‍💻 Author

Jayesh Jadhav – Initial work

🙏 Acknowledgments

• Clerk – for authentication
• Expo team – for the amazing framework
• Neon – for PostgreSQL hosting

