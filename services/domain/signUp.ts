export interface signUp {
  customerEmail: string;
  customerFirstName: string;
  customerLastName: string;
  customerPhoneNumber: string;
  userName: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  address: Address;
  branchId: number;
}

export interface Address {
  city: string;
  country: string;
  postalCode: string;
}

export const formatSignUp = (data: any): signUp => {
  return {
    customerEmail: data.customerEmail,
    customerFirstName: data.customerFirstName,
    customerLastName: data.customerLastName,
    customerPhoneNumber: data.customerPhoneNumber,
    userName: data.userName,
    password: data.password,
    dateOfBirth: data.dateOfBirth,
    gender: data.gender,
    branchId: data.branchId,
    address: {
      city: data.address.city,
      country: data.address.country,
      postalCode: data.address.postalCode,
    },
  };
};
