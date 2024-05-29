'use client';
import React, { useEffect, useState } from 'react';
import { Link } from '@navigation';
import { BackButton, ButtonMaker, CardMaker, ImageMaker } from '@components';
import { Col, Row } from 'reactstrap';
import { getServicesCategories } from '../../../../services/application/category';
import { ICategories } from './type';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await getServicesCategories();
      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <div>
      <Row className="paddingt-130 pb-4">
        {categories.length ? (
          categories.map((item: ICategories) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href={`/category/${item.id}`}>
                <CardMaker img="/images/services/services.jpg" href="" className="rounded overflow-hidden flex-col">
                  <div className="p-4">
                    <h6 className="text-secondary">{item.serviceCategoryName}</h6>
                    <p className="text-gray fw-medium">{item.serviceCategoryDescription}</p>
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

export default CategoriesList;
