const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendNotification = functions.firestore.document('appointments/{appointmentId}')
    .onCreate((snapshot, context) => {
        const appointmentData = snapshot.data();
        const message = {
            notification: {
                title: 'New Appointment',
                body: `You have a new appointment scheduled with ${appointmentData.doctorName}.`
            },
            topic: appointmentData.userId,
        };
        return admin.messaging().send(message);
    });
