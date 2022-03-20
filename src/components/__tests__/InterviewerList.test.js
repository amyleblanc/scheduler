import React from "react";

import { render, cleanup } from "@testing-library/react";

import InterviewerList from "components/InterviewerList";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<InterviewerList interviewers={[2, 3, 4, 7, 9]}  />);
});
