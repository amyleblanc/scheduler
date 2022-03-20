import React from "react";
import PropTypes from "prop-types";

import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList({interviewers, value, onChange}) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {
          interviewers.map(i => (
            <InterviewerListItem 
              key={i.id}
              name={i.name}
              avatar={i.avatar}
              selected={value === i.id}
              setInterviewer={() => onChange(i.id)}
            />
          ))
        }
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};