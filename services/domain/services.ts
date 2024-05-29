export interface services {
  id: number;
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
  avaliable: string;
  serviceCategoryName: string;

  employeeName: string;
}

export const formatServices = (data: any): services => {
  return {
    id: data.id,
    serviceName: data.serviceName,
    serviceDescription: data.serviceDescription,
    servicePrice: data.servicePrice,
    avaliable: data.avaliable,
    serviceCategoryName: data.serviceCategoryName,
    employeeName: data.employeeName,
  };
};
