'use server';
import React from 'react';

import { HomeBanner, HomeCategories, HomePackages, HomeServices } from '@components';

const page = async ({
  params,
}: {
  params: {
    locale: 'ar' | 'en';
  };
}) => {
  return (
    <React.Fragment>
      <HomeBanner />
      <HomeCategories />
      <HomePackages />
      <HomeServices />
    </React.Fragment>
  );
};

export default page;
