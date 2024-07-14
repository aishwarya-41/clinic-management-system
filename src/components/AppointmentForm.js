// src/components/AppointmentForm.js
import React, { useState } from "react";
import { db } from "../services/firebaseConfig"; // Ensure you import db
import { collection, addDoc } from "firebase/firestore";

const AppointmentForm = () => {
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "appointments"), {
        doctorName,
        patientName,
        appointmentDate,
      });
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment: ", error);
    }
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Doctor's Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Patient's Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
