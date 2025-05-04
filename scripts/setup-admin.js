const { initializeApp } = require('firebase/app')
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const email = process.env.NEXT_PUBLIC_ADMIN_EMAIL
const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

if (!email || !password) {
  console.error('Please set NEXT_PUBLIC_ADMIN_EMAIL and NEXT_PUBLIC_ADMIN_PASSWORD environment variables')
  process.exit(1)
}

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('Admin user created successfully:', userCredential.user.email)
    process.exit(0)
  })
  .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists')
      process.exit(0)
    } else {
      console.error('Error creating admin user:', error.message)
      process.exit(1)
    }
  }) 