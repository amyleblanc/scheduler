import React from "react";

import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewList({interviewers, interviewer, setInterviewer}) {
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
              setInterviewer={setInterviewer}
              selected={interviewer === i.id}
            />
          ))
        }
      </ul>
    </section>
  );
}