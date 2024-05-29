import React from 'react';
import { PackageDetails } from '@components';

const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <PackageDetails id={Number(params.id)} />;
};

export default Page;
