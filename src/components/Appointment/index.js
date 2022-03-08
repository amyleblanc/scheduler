import React, { Fragment } from "react";
import useVisualMode from "hooks/useVisualMode";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {
  function showAppointments() {
    if (!props.time) {
      return "No Appointments";
    }
    if (props.time) {
      return `${props.time}`;
    }
  }

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <>
      <article className="appointment">
        <Header time={showAppointments()} />
        {mode === EMPTY && <Empty />}
        {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer.name} />}
      </article>
    </>
  )
}