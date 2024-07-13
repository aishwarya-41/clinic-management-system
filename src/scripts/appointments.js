// Function to generate token
function generateToken() {
    return Math.floor(1000 + Math.random() * 9000); // Simple token generation
}

// Function to save patient data
async function savePatientData(patientData) {
    const db = firebase.firestore();
    try {
        await db.collection('patients').add(patientData);
        console.log('Patient data saved:', patientData);
    } catch (error) {
        console.error('Error saving patient data:', error);
    }
}
