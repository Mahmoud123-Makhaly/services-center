export interface Category {
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

export const formatCategory = (data: any): Category => {
  return {
    id: data.id,
    serviceCategoryName: data.serviceCategoryName,
    serviceCategoryDescription: data.serviceCategoryDescription,
    services: data.services.map((service: any) => ({
      id: service.id,
      serviceName: service.serviceName,
      serviceDescription: service.serviceDescription,
      servicePrice: service.servicePrice,
      available: service.available, // Corrected the spelling here
      serviceCategoryName: service.serviceCategoryName,
    })),
  };
};
