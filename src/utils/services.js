import { auth } from '../database/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, update, push } from 'firebase/database'
import app from '../database/firebase'

const registerService = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up user
      const user = userCredential.user
      console.log(user)
    })
    .catch((error) => {
      // Handle errors
      console.log(error)
    })
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

export { registerService, addJobService }
