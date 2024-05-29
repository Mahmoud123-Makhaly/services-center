export interface ICategoryServices {
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

export interface ICategoryServiceItem {
  id: number;
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
  available: string;
  serviceCategoryName: string;
}
