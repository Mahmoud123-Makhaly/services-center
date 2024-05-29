export interface appointmentsList {
  id: number;
  customer: {
    id: string;
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhoneNumber: string;
  };
  employee: {
    id: string;
    employeeEmail: string;
    employeeFirstName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    userName: string;
    departmentName: string;
  };
  startTime: {
    hour: number;
    minute: number;
    second: number;
  };
  endTime: {
    hour: number;
    minute: number;
    second: number;
  };
  day: string;
}

// export interface addAppointment {
//   startTime: string;
//   endTime: string;
//   date: string;
//   patientId: string;
//   doctorId: string;
// }

export const formatAppointmentsList = (data: any): appointmentsList => {
  return {
    id: data.id,
    customer: {
      id: data.customer.id,
      customerEmail: data.customer.customerEmail,
      customerFirstName: data.customer.customerFirstName,
      customerLastName: data.customer.customerLastName,
      customerPhoneNumber: data.customer.customerPhoneNumber,
    },
    employee: {
      id: data.employee.id,
      employeeEmail: data.employee.id,
      employeeFirstName: data.employee.employeeEmail,
      employeeLastName: data.employee.employeeLastName,
      employeePhoneNumber: data.employee.employeePhoneNumber,
      userName: data.employee.userName,
      departmentName: data.employee.departmentName,
    },
    startTime: {
      hour: data.startTime.hour,
      minute: data.startTime.minute,
      second: data.startTime.second,
    },
    endTime: {
      hour: data.endTime.hour,
      minute: data.endTime.minute,
      second: data.endTime.second,
    },
    day: data.day,
  };
};
// export const formatAddAppointment = (data: any): addAppointment => {
//   return {
//     startTime: data?.startTime,
//     endTime: data?.endTime,
//     date: data?.date,
//     patientId: data?.patientId,
//     doctorId: data?.doctorId,
//   };
// };
