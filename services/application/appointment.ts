import * as infraServices from '../infrastructure/appointment';
import * as appointmentDomain from '../domain/appointment';

export const getAllAppointment = async () => {
  const AppointmentData = await infraServices.getAppointment();
  return AppointmentData.map(appointmentDomain.formatAppointmentsList);
};
export const getAppointmentForPatient = async () => {
  const AppointmentData = await infraServices.getAppointmentForPatient();
  return AppointmentData.map(appointmentDomain.formatAppointmentsList);
};
export const getAppointmentById = async (AppointmentId: number) => {
  const AppointmentData = await infraServices.getAppointmentById(AppointmentId);
  return appointmentDomain.formatAppointmentsList(AppointmentData);
};

export const createAppointment = async (data: appointmentDomain.appointmentsList) => {
  const AppointmentData = await infraServices.createAppointment(data);
  return appointmentDomain.formatAppointmentsList(AppointmentData);
};

export const updateAppointment = async (
  AppointmentId: number,
  AppointmentIdData: appointmentDomain.appointmentsList,
) => {
  const updatedAppointmentData = await infraServices.updateAppointment(AppointmentId, AppointmentIdData);
  return appointmentDomain.formatAppointmentsList(updatedAppointmentData);
};

export const deleteAppointment = async (AppointmentId: number) => {
  await infraServices.deleteAppointment(AppointmentId);
};
