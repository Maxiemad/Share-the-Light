# Firebase Setup Guide

## Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Enter project name: "share-the-light-donations"
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Setup Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

## Step 3: Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web app (</> icon)
4. Enter app nickname: "share-the-light-web"
5. Copy the config object

## Step 4: Update Firebase Config
Replace the config in `src/firebase.js` with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

## Step 5: Test the Setup
1. Run your React app: `npm start`
2. Fill out the donation form
3. Check Firebase Console → Firestore Database
4. You should see a new "donors" collection with your data

## Security Rules (Optional)
For production, update Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /donors/{document} {
      allow read, write: if true; // Allow all for now
    }
  }
}
```

## Features Implemented:
✅ **Data Storage**: All donor information saved to Firebase
✅ **Real-time Updates**: Donor slider updates automatically
✅ **Infinite Scroll**: Horizontal scrolling donor cards
✅ **Form Reset**: Form clears after successful submission
✅ **Error Handling**: Shows error if save fails

## Data Structure:
Each donor document contains:
- fullName: string
- whatsapp: string (optional)
- email: string (optional)
- currency: string
- kit: string
- amount: number
- pincode: string
- date: timestamp
