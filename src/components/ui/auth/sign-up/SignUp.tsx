'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
import { Col, FormGroup, Row } from 'reactstrap';
import { ErrorMessage, Field, FormikHelpers } from 'formik';

import { Link, useRouter } from '@navigation';

import { useTranslate } from '@app/hooks';

import { FormFieldType, AppForm, SubmitButton } from '@components';

import { Divider } from 'primereact/divider';
import { createCustomerAccount } from '../../../../../services/application/signUp';

const SignUp = () => {
  const t = useTranslate('COMP_SignUpForm');
  const router = useRouter();
  const FormFields: Array<FormFieldType> = [
    {
      name: 'firstName',
      label: t('FIRST_NAME'),
      type: 'text',
      design: 'mb-0',
      col: 6,
    },
    {
      name: 'lastName',
      label: t('LAST_NAME'),
      type: 'text',
      col: 6,
    },
    {
      name: 'userName',
      label: t('USER_NAME'),
      type: 'text',
      col: 6,
    },
    {
      name: 'email',
      label: t('EMAIL'),
      type: 'email',
      design: 'mb-0',
      col: 6,
    },
    {
      name: 'password',
      label: t('PASSWORD'),
      type: 'password',
      col: 6,
    },
    {
      name: 'phoneNumber',
      label: t('PHONE_NUMBER'),
      type: 'tel',
      col: 6,
    },
    {
      name: 'dateOfBirth',
      label: t('DATE_OF_BIRTH'),
      type: 'date',
      col: 6,
    },
    {
      name: 'gender',
      label: t('GENDER'),
      type: 'text',
      col: 6,
    },
    {
      name: 'branchId',
      label: t('BRANCH_NUMBER'),
      type: 'number',
      col: 6,
    },

    {
      name: 'city',
      label: t('CITY'),
      type: 'text',
      col: 6,
    },
    {
      name: 'country',
      label: t('COUNTRY'),
      type: 'text',
      col: 6,
    },
    {
      name: 'postalCode',
      label: t('POSTAL_CODE'),
      type: 'text',
      col: 6,
    },
  ];

  const onSubmit = async (values: any, formikHelpers: FormikHelpers<any>) => {
    // router.push('/auth/login');
    const signUp = await createCustomerAccount({
      customerEmail: values.email,
      customerFirstName: values.firstName,
      customerLastName: values.lastName,
      customerPhoneNumber: values.phoneNumber,
      userName: values.userName,
      password: values.password,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
      address: {
        city: values.city,
        country: values.country,
        postalCode: values.postalCode,
      },
      branchId: values.branchId,
    });
   };

  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('REQUIRED_FIRST_NAME')),
    lastName: Yup.string().required(t('REQUIRED_LAST_NAME')),
    userName: Yup.string().required(t('REQUIRED_USERNAME')),
    branchId: Yup.string().required(t('REQUIRED_BRANCH_NUMBER')),

    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
    password: Yup.string().required(t('REQUIRED_PASSWORD')),
    phoneNumber: Yup.string().required(t('REQUIRED_PHONE_NUMBER')),
    dateOfBirth: Yup.string().required(t('REQUIRED_DATE_OF_BIRTH')),
    gender: Yup.string().required(t('REQUIRED_GENDER')),
    city: Yup.string().required(t('REQUIRED_CITY')),
    country: Yup.string().required(t('REQUIRED_COUNTRY')),
    postalCode: Yup.string().required(t('REQUIRED_POSTAL_CODE')),
  });

  const ActionComponent = ({
    isValid,
    dirty,
    isSubmitting,
  }: {
    isValid: boolean;
    dirty: boolean;
    isSubmitting: boolean;
  }) => (
    <div className="align-items-center">
      <SubmitButton
        design="text-white border-0 py-0 flex-center"
        disabled={!isValid || !dirty || isSubmitting}
        isLoading={isSubmitting}
        block={true}
      >
        {t('SIGNUP')}
      </SubmitButton>
    </div>
  );
  return (
    <div className="flex-col border p-4 rounded bg-white shadow mb-4">
      <div className="auth-form ">
        <Row>
          <Col>
            <h4 className="text-center">{t('SIGNUP')}</h4>
            <Divider />
          </Col>
        </Row>
        <AppForm
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            dateOfBirth: '',
            userName: '',
            gender: '',
            branchId: '',
            city: '',
            country: '',
            postalCode: '',
          }}
          validationSchema={ValidationSchema}
          fields={FormFields}
          ActionComponent={ActionComponent}
          onSubmit={onSubmit}
        ></AppForm>
        <p className="mt-4 text-center">
          {t('HAVE_AN_ACCOUNT')}
          <Link className="fw-bold font-14 ms-1" href={'/auth/login'}>
            {t('LOGIN')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
