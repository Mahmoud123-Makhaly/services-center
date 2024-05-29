export interface ICategory {
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
