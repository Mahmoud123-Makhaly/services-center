export interface packages {
  id: number;
  packageName: string;
  packageDescription: string;
  packagePrice: number;
}

export const formatServicesPackages = (data: any): packages => {
  return {
    id: data.id,
    packageName: data.packageName,
    packageDescription: data.packageDescription,
    packagePrice: data.packagePrice,
  };
};
