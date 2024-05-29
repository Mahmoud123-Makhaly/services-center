import * as infraServices from '../infrastructure/category';
import * as categoryDomain from '../domain/category';

export const getServicesCategories = async () => {
  const data = await infraServices.getServicesCategory();
  return data.map(categoryDomain.formatCategory);
};

export const getServicesCategoriesById = async (id: number) => {
  const data = await infraServices.getServicesCategoryById(id);
  return categoryDomain.formatCategory(data);
};

export const createServicesCategories = async (data: categoryDomain.Category) => {
  const categoryData = await infraServices.createServicesCategory(data);
  return categoryDomain.formatCategory(categoryData);
};

export const updateServicesCategories = async (id: string, data: categoryDomain.Category) => {
  const updateData = await infraServices.updateServicesCategory(id, data);
  return categoryDomain.formatCategory(updateData);
};

export const deleteServicesCategories = async (id: string) => {
  await infraServices.deleteServicesCategory(id);
};
