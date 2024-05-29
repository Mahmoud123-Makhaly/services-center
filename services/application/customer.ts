import * as infraServices from '../infrastructure/customer';
import * as customerDomain from '../domain/customer';

export const getCustomerById = async (id: string) => {
  const data = await infraServices.getCustomerById(id);
  return customerDomain.formatCustomer(data);
};
