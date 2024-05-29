import * as infraServices from '../infrastructure/services';
import * as servicesDomain from '../domain/services';

export const getAllServices = async () => {
  const data = await infraServices.getServices();
  return data.map(servicesDomain.formatServices);
};

export const getServicesById = async (id: string) => {
  const data = await infraServices.getServicesById(id);
  return servicesDomain.formatServices(data);
};

export const createService = async (data: servicesDomain.services) => {
  const servicesData = await infraServices.createServices(data);
  return servicesDomain.formatServices(servicesData);
};
export const searchService = async (keyword: string) => {
  const data = await infraServices.searchServices(keyword);
  return data.map(servicesDomain.formatServices);
};
export const updateService = async (id: string, data: servicesDomain.services) => {
  const updateData = await infraServices.updateServices(id, data);
  return servicesDomain.formatServices(updateData);
};

export const deleteServices = async (id: string) => {
  await infraServices.deleteServices(id);
};
