'use client';
import React, { useEffect, useState } from 'react';
import { Link } from '@navigation';
import { BackButton, ButtonMaker, CardMaker, ImageMaker } from '@components';
import { Col, Row } from 'reactstrap';
import { getServicesPackages } from '../../../../services/application/packages';
import { ICategories, IPackage } from './type';

const PackagesList = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getAllPackages = async () => {
      try {
        const data = await getServicesPackages();
        setPackages(data);
      } catch (error) {}
    };

    getAllPackages();
  }, []);

  return (
    <div>
      <Row className="paddingt-130 pb-4">
        {packages.length ? (
          packages.map((item: IPackage) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href={`package/${item.id}`}>
                <CardMaker img="/images/services/services.jpg" href="" className="rounded overflow-hidden flex-col">
                  <div className="p-4">
                    <h6 className="text-secondary">{item.packageName}</h6>
                    <p className="text-gray fw-medium">{item.packageDescription}</p>
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

export default PackagesList;
