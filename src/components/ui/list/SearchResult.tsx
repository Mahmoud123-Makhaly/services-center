'use client';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from '@navigation';
import { BackButton, CardMaker } from '@components';
import { Col, Row } from 'reactstrap';

import { searchService } from '../../../../services/application/services';
import { IServices } from './type';

interface ISearchResultProps {
  keyword: string;
}
const SearchResult = (props: ISearchResultProps) => {
  const { keyword } = props;

  const [search, setSearch] = useState([]);

  useEffect(() => {
    const getSearchResult = async () => {
      const data = await searchService(keyword);
      setSearch(data);
    };

    getSearchResult();
  }, []);
  const router = useRouter();

  return (
    <div className="paddingt-100">
      <div className="pt-5">
        <BackButton direction="left" onClick={() => router.back()} />
      </div>
      <Row className="py-4">
        {search.length ? (
          search?.map((item: IServices) => (
            <Col md={6} lg={3} key={item.id}>
              <Link href={`/product${item.id}`}>
                <CardMaker img="/images/services/doctor.webp" href="" className="rounded overflow-hidden">
                  <div className="p-4">
                    <h6 className=" text-secondary">{item.serviceCategoryName}</h6>
                    <p className="text-gray fw-medium">{item.serviceCategoryName}</p>
                  </div>
                </CardMaker>
              </Link>
            </Col>
          ))
        ) : (
          <h3 className="text-center">No Services Found</h3>
        )}
      </Row>
    </div>
  );
};

export default SearchResult;
