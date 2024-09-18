import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Appointment.css';


const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: ''
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
        setAppointments([...appointments, response.data]);
        setNewAppointment({
          patientName: '',
          doctorName: '',
          date: ''
        });

      }).catch((error) => {
        console.error('Error adding appointment:', error);

      });
    const handleUpdateAppointment = (id, e) => {
      e.preventDefault();
      axios.post(`http://localhost:5000/appointments/update/${id}`,
        selectedAppointment)
        .then((response) => {
          console.log(response.data);

          const updateApp = {
            ...selectedAppointment, _id: id
          };
          setAppointments(
            appointments.map((appointment) => {
              (appointment._id === id ? updateApp : appointment)
            }
            ));

          setSelectedAppointment(null);
          setIsEditMode(false); //Switch back to Add mode
        })
        .catch((error) => {
          console.error('Error updating appointment:', error);

        });

      const handleDeleteAppointment = (id) => {
        axios.delete(`http://localhost:5000/appointments/delete/${id}`)
          .then((response) => {
            console.log(response.data);
            setAppointments(appointments.filter((appointment) => {
              appointment._id !== id
            })
            )
              .catch((error) => {
                console.error('Error deleting appointment: ', error);


              }
              );

          })

        const handleEditAppointment = (appointment) => {
          setSelectedAppointment(appointment);
          setIsEditMode(true); // Switch to Edit Mode
        };

        return (
          <div className='flex-row' style={{ width: & quot; 100%& quot; }}& gt;
            >

            </div >
          )

      }
    }
  }
}