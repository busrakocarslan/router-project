import React from 'react';
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

 


function Paginate({ perPage, totalpost, paginate }) {
  const pageNumber = [];
  
  for (let i = 1; i<= Math.ceil(totalpost / perPage); i++) {
    pageNumber.push(i);
  }

  return (
   
    <Container>
      <Pagination>
        {pageNumber.map((number) => (
          <Pagination.Item
            key={number}
            active={number === 1}  // İlk sayfa başlangıçta aktif olacak
            onClick={() => paginate(number)}  // Sayfa numarasına tıklandığında paginate fonksiyonunu çağır
          >
            <Link to={`/followers/page/${number}`}>{number}</Link>
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
}

export default Paginate;
