import React, { Fragment } from "react";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  function showAppointments() {
    if (!props.time) {
      return "No Appointments";
    }
    if (props.time) {
      return `Appointment at ${props.time}`;
    }
  }

  return (
    <article className="appointment">{showAppointments()}</article>
  )
}