export interface customerList {
  id: string;
  customerEmail: string;
  customerFirstName: string;
  customerLastName: string;
  customerPhoneNumber: string;
}

export const formatCustomer = (data: any): customerList => {
  return {
    id: data.id,
    customerEmail: data.customerEmail,
    customerFirstName: data.customerFirstName,
    customerLastName: data.customerLastName,
    customerPhoneNumber: data.customerPhoneNumber,
  };
};
