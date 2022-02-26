import React from "react";

import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {

  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item-image": props.avatar,
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewersClass} onClick={() => props.setInterviewer(props.id)} >
      <img
        className={interviewersClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}