'use client';
import React, { useEffect, useState } from 'react';
import { Link } from '@navigation';
import { BackButton, ButtonMaker, CardMaker, ImageMaker } from '@components';
import { Col, Row } from 'reactstrap';
import { getServicesCategoriesById } from '../../../../../services/application/category';
import { ICategoryServiceItem, ICategoryServices } from './type';

interface IServices {
  id: number;
}

const CategoryServices = (props: IServices) => {
  const { id } = props;

  const [catServices, setCatServices] = useState<ICategoryServices | null>(null);
 
  useEffect(() => {
    const getCategoryServices = async () => {
      const data = await getServicesCategoriesById(id);
      setCatServices(data);
    };

    getCategoryServices();
  }, [id]); // Added 'id' as a dependency

  return (
    <div>
      <Row className="paddingt-130 pb-4">
        {catServices?.services.length ? (
          catServices.services.map((item: ICategoryServiceItem) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href="">
                <CardMaker img="/images/services/services.jpg" href="" className="rounded overflow-hidden">
                  <div className="p-4">
                    <h6 className="text-secondary">{item.serviceDescription}</h6>
                    <p className="text-gray fw-medium">{item.serviceCategoryName}</p>
                  </div>
                </CardMaker>
              </Link>
            </Col>
          ))
        ) : (
          <div className="text-center my-4">
            <ImageMaker src="/images/list/empty.png" width={400} height={300} />
            <h3 className="my-4">No Services Found</h3>
            <div className="flex-center">
              <Link href="/" className="btn btn-primary">
                Back To Home
              </Link>
            </div>
          </div>
        )}
      </Row>
    </div>
  );
};

export default CategoryServices;
