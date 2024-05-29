'use client';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Calendar } from 'primereact/calendar';
import { date } from 'yup';
import { ImageMaker } from '@components';
import { getServicesCategoriesById } from '../../../../../services/application/category';
import { ICategory } from './type';

const CategoryDetails = ({ id }: { id: number }) => {
  const [categoryDetails, setCategoryDetails] = useState<ICategory>();
  useEffect(() => {
    const getCategoryDetails = async () => {
      const data = await getServicesCategoriesById(id);
      setCategoryDetails(data);
    };

    getCategoryDetails();
  }, []);
  console.log('categoryDetails', categoryDetails);
  return (
    <div className=" paddingt-150 pb-4">
      <Row className="flex-center">
        <Col md={6}>
          <ImageMaker alt="doctor" src="/images/details/service.avif" className="rounded overflow-hidden" />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold">Our Service Details</h2>
          <h5 className="my-4 text-dark">
            <span className="fw-semibold">serviceCategoryName :</span> {categoryDetails?.serviceCategoryName}
          </h5>
          <h5 className="my-4 text-dark my-4">
            {' '}
            <span className="fw-semibold">Description :</span> {categoryDetails?.serviceCategoryDescription}
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default CategoryDetails;
