'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { useRouter } from '@navigation';
import { getCustomerById } from '../../../../services/application/customer';
import { ICustomer } from './type';

const Profile = () => {
  const t = useTranslate('COMP_Profile');
  const router = useRouter();
  const [customer, setCustomer] = useState<ICustomer>();
  const id = JSON.stringify(localStorage.getItem('userId'));
  // useEffect(() => {
  //   const getCustomerDetail = async () => {
  //     const data = await getCustomerById("1");
  //     console.log(data);
  //     setCustomer(data);
  //   };

  //   getCustomerDetail();
  // }, [id]);
 
  return (
    <div className="  profile">
      <div className="text-center">
        <div className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <Image
              src="/images/profile/avatar.png"
              alt="profile "
              width={150}
              height={150}
              className="img-fluid rounded-circle profileImage"
            />
          </div>
          <h2 className="mb-3 heading">ammar hamada</h2>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <div className="textSection">
            <h3 className="text-warning  sectionTitle">My Values</h3>
            <p>
              Click here to add your own text and edit me. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="textSection">
            <h3 className="text-warning sectionTitle">My Mission</h3>
            <p>
              Click here to add your own text and edit me. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>{' '}
      <div className="my-5 flex-center">
        <ButtonMaker onClick={() => router.push('/')} text={t('BACK_TO_HOME')} className="btn btn-warning mb-3" />
      </div>
    </div>
  );
};

export default Profile;
