export interface ICategories {
  id: number;
  serviceCategoryName: string;
  serviceCategoryDescription: string;
  services: {
    id: number;
    serviceName: string;
    serviceDescription: string;
    servicePrice: number;
    available: string;
    serviceCategoryName: string;
  }[];
}
export interface IAppointment {
  id: number;
  startTime: string;
  endTime: string;
  date: Date;
  patientName: string;
  patientId: string;
  doctorName: string;
  doctorId: string;
}
export interface ICity {
  id: string;
  name: string;
  image: string;
}
export interface specializationDoctors {
  id: string;
  doctorEmail: string;
  doctorFirstName: string;
  doctorLastName: string;
  doctorPhoneNumber: string;
  userName: string;
}
export interface IUnit {
  id: number;
  unitNumber: number;
  floor: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  status: string;
  image: string;
}
 
export interface IServices {
  id: number;
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
  avaliable: string;
  serviceCategoryName: string;

  employeeName: string;
}
export interface IPackage {
  id: number;
  packageName: string;
  packageDescription: string;
  packagePrice: number;
}
