export function getAppointmentsForDay(state, day) {
  const appointments = [];
  const result = [];

  for (const item of state.days) {
    if (item.name === day) {
      appointments.push(...item.appointments);
    }
  }

  for (const appointment of appointments) {
    if (state.appointments[appointment]) {
      result.push(state.appointments[appointment]);
    }
  }
  return result;
};

export function getInterview(state, interview) {

  if (state && interview) {
    const result = {};
    result.student = interview.student;
    result.interviewer = state.interviewers[interview.interviewer];
    return result;
  }
  return null;
};

export function getInterviewersForDay(state, day) {
  const interviewers = [];
  const result = [];

  for (const item of state.days) {
    if (item.name === day) {
      interviewers.push(...item.interviewers);
    }
  }

  interviewers.forEach(interviewer => {
    if (state.interviewers[interviewer]) {
      result.push(state.interviewers[interviewer]);
    }
  })
  return result;
};