import React, { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = (day) => setState({ ...state, day });

  const updateSpots = (id, appointments) => {
    const newDays = [];
    let spots = 0;
    for (const day of state.days) {
      if (day.appointments.includes(id)) {
        for (const appointmentId of day.appointments) {
          if (!appointments[appointmentId].interview) {
            spots += 1;
          }
        }
        newDays.push({...day, spots});
        continue;
      }
      newDays.push({...day});
    }
    return newDays;
  };
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const updatedDays = updateSpots(id, appointments);

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments,
          days: updatedDays
        }));
      });
  }

  function deleteInterview(id) {
    const nullInterview = {
      ...state.appointments[id],
      interview: null
    };
    const updatedAppointments = {
      ...state.appointments,
      [id]: nullInterview
    };
    const updatedDays = updateSpots(id, updatedAppointments);

    return axios
      .delete(`/api/appointments/${id}`, nullInterview)
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments: updatedAppointments,
          days: updatedDays
        }));
      });
  }

  return {
    state,
    setDay,
    bookInterview,
    deleteInterview
  };
};