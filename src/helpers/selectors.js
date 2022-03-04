export function getAppointmentsForDay(state, day) {
  const appointments = [];
  const result = [];

  for (const obj of state.days) {
    if (obj.name === day) {
      appointments.push(...obj.appointments);
    }
  }

  for (const appointment in state.appointments) {
    if (appointments.includes(state.appointments[appointment].id)) {
      result.push(state.appointments[appointment]);
    }
  }
  return result;
};