import React from 'react';
import { CategoryServices } from '@components';

const page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <CategoryServices id={Number(params.id)} />;
};

export default page;
