import React from "react";

import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewList({interviewers, value, onChange}) {
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