# Google OAuth with Express and Passport

Simple Node.js application demonstrating Google OAuth authentication using Express and Passport.js.

## Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with:

GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
EXPRESS_SECRET_KEY=your_secret
MONGODB_URI=your_mongodb_uri

4. Run `npm start`

## Usage

Navigate to `http://localhost:3000/auth/google` and click "Login with Google".