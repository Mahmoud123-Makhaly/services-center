'use client';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';

import { CardMaker, CarouselMaker } from '@components';
import { useTranslate } from '@app/hooks';
import Link from 'next/link';
import { IServices } from './type';
import { getAllServices } from '../../../../services/application/services';

const HomeServices = () => {
  const t = useTranslate('COMP_Home_Services');
  const [services, setServices] = useState([]);
 
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAllServices();
        setServices(data);
      } catch (error) {}
    };

    fetchServices();
  }, []);

  const items = services.slice(0, 4).map((item: IServices) => (
    <CardMaker key={item.id} img="/images/services/serv1.jpg" href="" className="rounded overflow-hidden">
      <div className="text-center my-3">
        <h5 className="text-secondary ">{item.employeeName}</h5>

        <div className="px-3 my-3">
          <Link href={`/doctors-list/${item.id}`} className=" text-white d-block  btn btn-primary py-2   pointer">
            view services
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
            <h3> {t('SERVICES')}</h3>
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

export default HomeServices;
