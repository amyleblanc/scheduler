import React, { Fragment } from "react";
import useVisualMode from "hooks/useVisualMode";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

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
    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(() => transition(SHOW));
  }

  function confirm() {
    transition(CONFIRM);
  }

  function remove(id) {
    transition(DELETE);
    props.deleteInterview(id)
    .then(() => transition(EMPTY));
  }

  return (
    <>
      <article className="appointment">
        <Header time={showAppointments()} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && props.interview && <Show id={props.id} student={props.interview.student} interviewer={props.interview.interviewer.name} onDelete={confirm} />}
        {mode === CREATE && <Form id={props.id} time={props.time} interviewers={props.interviewers} onCancel={back} onSave={save} />}
        {mode === SAVING && <Status message={"Saving"} />}
        {mode === DELETE && <Status message={"Deleting"} />}
        {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete?"} id={props.id} onCancel={back} onConfirm={remove} />}
        {mode === EDIT && <Form id={props.id} student={props.interview.student} interviewer={props.interview.interviewer.name} onCancel={back} onSave={save} />}
      </article>
    </>
  )
}