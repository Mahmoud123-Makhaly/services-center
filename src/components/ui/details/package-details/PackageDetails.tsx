'use client';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Calendar } from 'primereact/calendar';
import { date } from 'yup';
import { ImageMaker } from '@components';
import { IPackage } from './type';
import { getServicesPackagesById } from '../../../../../services/application/packages';

const PackageDetails = ({ id }: { id: number }) => {
  const [packageDetails, setPackageDetails] = useState<IPackage>();
  useEffect(() => {
    const getPackageDetails = async () => {
      const data = await getServicesPackagesById(id);
      setPackageDetails(data);
    };

    getPackageDetails();
  }, []);
  return (
    <div className=" paddingt-150 pb-4">
      <Row className="flex-center">
        <Col md={6}>
          <ImageMaker alt="doctor" src="/images/details/pakages.webp" className="rounded overflow-hidden" />
        </Col>
        <Col md={6} className="ps-lg-5">
          <h2 className="fw-bold">Our Package Details</h2>
          <h5 className="my-4 text-dark">
            <span className="fw-semibold">packageName :</span> {packageDetails?.packageName}
          </h5>
          <h5 className="my-4 text-dark">
            <span className="fw-semibold">packageName :</span> {packageDetails?.packageDescription}
          </h5>
          <h5 className="my-4 text-dark">
            <span className="fw-semibold">packageName :</span> {packageDetails?.packagePrice}
          </h5>
        </Col>
      </Row>
    </div>
  );
};

export default PackageDetails;
