import * as infraServices from '../infrastructure/packages';
import * as packagesDomain from '../domain/packages';

export const getServicesPackages = async () => {
  const data = await infraServices.getServicesPackages();
  return data.map(packagesDomain.formatServicesPackages);
};

export const getServicesPackagesById = async (id: number) => {
  const data = await infraServices.getServicesPackagesById(id);
  return packagesDomain.formatServicesPackages(data);
};

export const createServicesPackages = async (data: packagesDomain.packages) => {
  const packagesData = await infraServices.createServicesPackages(data);
  return packagesDomain.formatServicesPackages(packagesData);
};

export const updateServicesPackages = async (id: string, data: packagesDomain.packages) => {
  const updateData = await infraServices.updateServicesPackages(id, data);
  return packagesDomain.formatServicesPackages(updateData);
};

export const deleteServicesPackages = async (id: string) => {
  await infraServices.deleteServicesPackages(id);
};
