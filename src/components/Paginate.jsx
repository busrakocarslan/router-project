import React from 'react';
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function Paginate({ perPage, totalpost, paginate, currentPage,setCurrentPage }) {
  const pageNumber = [];
  
  for (let i = 1; i <= Math.ceil(totalpost / perPage); i++) {
    pageNumber.push(i);
    console.log(perPage);
  }

  return (
    <Container>
      <Pagination>
        {pageNumber.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}//active sayfayı ayarlayabilmek için
            onClick={() => paginate(number)}
           type="button">
           {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
}

export default Paginate;
