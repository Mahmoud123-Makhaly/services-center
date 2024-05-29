'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';

import { CardMaker, CarouselMaker } from '@components';
import { useTranslate } from '@app/hooks';
import Link from 'next/link';
import { ICategory } from './type';
import { getServicesCategories } from '../../../../services/application/category';

const HomeCategories = () => {
  const t = useTranslate('COMP_Categories');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesData = async () => {
      try {
        const data = await getServicesCategories();
        setCategories(data);
      } catch (error) {}
    };

    categoriesData();
  }, []);

  const items = categories.slice(0, 4).map((item: ICategory) => (
    <CardMaker key={item.id} img="/images/services/img1.jpg" href="" className="rounded overflow-hidden">
      <div className="text-center my-3">
        <h5 className="text-secondary ">{item.serviceCategoryName}</h5>

        <div className="px-3 my-3">
          <Link href={`/category/${item.id}`} className=" text-white d-block  btn btn-primary py-2   pointer">
            view Details
          </Link>
        </div>
      </div>
    </CardMaker>
  ));

  return (
    <div className="bg-muted py-5">
      <Container>
        <Row>
          <div className="mb-4">
            <h3> {t('CATEGORIES')}</h3>
          </div>
        </Row>
        <CarouselMaker
          outNav={false}
          numVisible={4}
          items={items}
          autoplay
          navigation={false}
          className="product-details-slider"
          pagination
          paginationStyle="dashes"
        />
      </Container>
    </div>
  );
};

export default HomeCategories;
