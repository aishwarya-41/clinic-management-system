// Function to register user
async function registerUser(email, password) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User registered:', userCredential.user);
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

// Function to log in user
async function loginUser(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in:', error);
    }
}
