export interface ICategory {
  id: number;
  serviceCategoryName: string;
  serviceCategoryDescription: string;
  services: [
    {
      id: number;
      serviceName: string;
      serviceDescription: string;
      servicePrice: number;
      avaliable: string;
      serviceCategoryName: string;
    },
  ];
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

export interface IProject {
  name: string;
  description: string;
  image: string;
  id: string;
}
