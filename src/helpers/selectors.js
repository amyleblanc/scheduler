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