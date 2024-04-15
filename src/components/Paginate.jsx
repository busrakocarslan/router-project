import React from 'react';
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Paginate({ perPage, totalpost,paginate, currentPage,setCurrentPage }) {
  const pageNumber = [];
  
  for (let i = 1; i <= Math.ceil(totalpost / perPage); i++) {
    pageNumber.push(i);
    console.log(totalpost);
  }
 

  return (
    <nav className='m-5'>
    <ul className="pagination">
      {pageNumber.map((number) => (
        <li key={number} className="page-item">
          <button className="page-link" onClick={()=>paginate(number)}>{/* a etiketi ile olmadı button ile değiştirdim e.prevent defaoult yapmaya gerek kalmadı. Link ile olmadı */}{number}</button>
        </li>
      ))}
    </ul>
    
  </nav>
  );
}

export default Paginate;
