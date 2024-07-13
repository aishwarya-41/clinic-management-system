async function generateBill(patientId) {
    const db = firebase.firestore();
    try {
        const patientDoc = await db.collection('patients').doc(patientId).get();
        if (patientDoc.exists) {
            const patientData = patientDoc.data();
            // Logic to calculate bill
            console.log('Bill generated for:', patientData);
        }
    } catch (error) {
        console.error('Error generating bill:', error);
    }
}
