import React from 'react';
import { CategoryDetails } from '@components';

const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <CategoryDetails id={Number(params.id)} />;
};

export default Page;
