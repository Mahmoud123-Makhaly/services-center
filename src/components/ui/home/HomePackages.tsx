'use client';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useTranslate } from '@app/hooks';
import { ImageMaker } from '@components';
import Link from 'next/link';
import { getServicesPackages } from '../../../../services/application/packages';
import { IPackage } from './type';

const HomePackages = () => {
  const t = useTranslate('COMP_Home_Packages');
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
    <div className="py-5 our-team">
      <Container>
        <Row>
          <div className="mb-5">
            <h3>{t('PACKAGES')}</h3>
          </div>
        </Row>
        <Row>
          {packages.slice(0, 4).map((item: IPackage) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href={`/package/${item.id}`}>
                <div className="position-relative team-card rounded overflow-hidden">
                  <ImageMaker src="/images/services/packages.jpg" />
                  <div className="position-absolute  dark_overlay">
                    <div className="py-4 text-center dark-content  position-absolute bottom-0 start-50 translate-middle-x">
                      <h5 className="mb-2 text-white">{item.packageName}</h5>
                      <p className="mb-2 text-white">{item.packageDescription}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePackages;
