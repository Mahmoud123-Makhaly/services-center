'use server';

import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';

import { Col, Container, Row } from 'reactstrap';
import AuthHeader from '../../../components/common/Molecules/header/AuthHeader';
import { ImageMaker } from '@components';
import { Link } from '@navigation';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <AuthHeader />
      <main className="min-vh-100 bg-muted paddingt-70">
        <Row className="flex w-100 flex-center">
          <Col md={6} className="  flex-col gap-4">
            <div className="h-100 pt-5">{children}</div>
          </Col>
        </Row>
      </main>
    </React.Fragment>
  );
}
