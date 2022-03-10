import React, { Fragment } from "react";
import useVisualMode from "hooks/useVisualMode";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

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

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }

  return (
    <>
      <article className="appointment">
        <Header time={showAppointments()} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer.name} />}
        {mode === CREATE && <Form id={props.id} time={props.time} interviewers={props.interviewers} onCancel={back} onSave={save} />}
      </article>
    </>
  )
}