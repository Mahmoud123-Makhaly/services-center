'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { ButtonMaker, CardMaker, ImageMaker } from '../../common/index';
import { Col, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { deleteAppointment, getAllAppointment } from '../../../../services/application/appointment';
import { IAppointment } from './type';
import { Link } from '../../../navigation';
import { useRouter } from '@navigation';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const router = useRouter();
  const getAppointment = async () => {
    try {
      const data = await getAllAppointment();
      setAppointments(data);
    } catch (error) {}
  };
  useEffect(() => {
    getAppointment();
  }, []);
  const handleRemove = async (id: number) => {
    toast.success('Deleted Successfully');
    await deleteAppointment(id);
    getAppointment();
  };
  return (
    <div className="paddingt-140">
      <Row>
        {appointments.length ? (
          appointments.map((item: IAppointment, index) => (
            <Col md={4} key={index}>
              <Link href={`/appointment/${item.id}`}>
                {' '}
                <div className="rounded border flex-between   p-4 bg-white shadow">
                  <div className="gap-3  d-flex align-items-center">
                    <i className="fa-solid fa-calendar-check fs-3 text-dark-blue"></i>
                    <h4 className="m-0 text-primary">{String(item.date)}</h4>
                  </div>
                  <i className="pointer fa-solid fa-xmark" onClick={() => handleRemove(item.id)}></i>
                </div>
              </Link>
            </Col>
          ))
        ) : (
          <div className="my-4 flex-col gap-4">
            <ImageMaker src="/images/appointments/empty.png" width={500} height={400} />
            <h3 className="text-center">No Appointments Found</h3>
            <div className="flex-center w-100">
              <ButtonMaker text="Back To Home" onClick={() => router.push('/')} />
            </div>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Appointments;
