import React, { useState, useEffect } from "react";
import AppointmentForm from "./AppointmentForm";
import { db } from "../services/firebaseConfig"; // Import Firestore
import { collection, getDocs } from "firebase/firestore";

const ReceptionistDashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const querySnapshot = await getDocs(collection(db, "appointments"));
            const appointmentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAppointments(appointmentsData);
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <h1>Receptionist Dashboard</h1>
            <AppointmentForm />
            <h2>Appointment List</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        <strong>Doctor:</strong> {appointment.doctorName} | <strong>User ID:</strong> {appointment.userId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReceptionistDashboard;

