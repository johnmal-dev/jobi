import app, { auth } from '../database/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { getDatabase, ref, update, push, set } from 'firebase/database'

const registerService = (email, password, name, accountType) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // user successfully registered
      const user = userCredential.user
      console.log('registration successful', user)

      // update display name in firebase authentication
      updateProfile(user, {
        displayName: name,
      })

      // save name and account type to realtime db
      const db = getDatabase(app)
      const userRef = ref(db, `users/${user.uid}`)
      set(userRef, {
        name: name,
        email: email,
        accountType: accountType,
      })
    })
    .catch((err) => {
      // Handle errors
      console.log(err)
    })
}

const loginService = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up user
      const user = userCredential.user
      console.log('login successful', user)
    })
    .catch((err) => {
      // Handle errors
      console.log(err)
    })
}

const logoutService = async () => {
  try {
    await auth.signOut()
  } catch (err) {
    console.log(err)
  }
}

const addJobService = (job) => {
  const db = getDatabase(app)
  const jobsRef = ref(db, '/jobs')
  const newJobKey = push(jobsRef).key
  update(jobsRef, { [newJobKey]: job })
    .then(() => {
      console.log('added to collection')
    })
    .catch((err) => {
      console.log(err)
    })
}

const addBookmark = (job, user) => {
  if (user) {
    // save job to key to users/${userId}/bookmarks
    const db = getDatabase(app)
    const userRef = ref(db, `users/${user.uid}`)
    set(userRef, {
      name: name,
      email: email,
      accountType: accountType,
    })
  }
}

export { registerService, addJobService, loginService, logoutService }
