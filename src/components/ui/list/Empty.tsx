'use client';
import React from 'react';

import { ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
const Empty = () => {
  const t = useTranslate('COMP_ProductsList');
  return (
    <div className="flex-col text-center static-page gap-3 my-5">
      <div className="empty-wishlist-image">
        <ImageMaker src={'/images/list/empty.png'} alt="list is empty" className="img-fluid" />
      </div>
      <div className="mt-1">
        <h2 className="m-0">{t('EMPTY_MSG')}</h2>
      </div>
      <Link href={'/list'} className="border py-2 px-3 rounded bg-primary text-white">
        {t('BACK_TO_LIST')}
      </Link>
    </div>
  );
};

export default Empty;
