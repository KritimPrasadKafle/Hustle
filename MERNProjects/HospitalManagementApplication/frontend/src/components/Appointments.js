import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Appointment.css';


const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '', date: ''
  });

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/appointments')
      .then(response => {
        setAppointments(response.data)

      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);

      })
  }, []);
  const handleAppAppointment = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/appointments/add', newAppointment)
      .then(response => {
        setAppointments[...appointments, response.data]
    });
}
}