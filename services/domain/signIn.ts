import * as infraServices from '../infrastructure/signIn';

export interface SignIn {
  userName: string;
  password: string;
}

// export const formatSignIn = (data: any): SignIn => {
//   return {
//     userName: data.userName,
//     password: data.password,
//   };
// };

export const SignIn = async (data: SignIn) => {
  const token = await infraServices.SignIn(data);
  return token;
};

// export interface SignInRes {
//   id: string;
//   firstName: string;
//   lastName: string;
//   userName: string;
//   fullName: string;
//   token: string;
// }

// export const formatSignInRes = (data: any): SignInRes => {
//   return {
//     id: data.id,
//     firstName: data.firstName,
//     lastName: data.lastName,
//     userName: data.userName,
//     fullName: data.fullName,
//     token: data.token,
//   };
// };
