import React from 'react';
import Paginate from './Paginate';
import CardFollowers from './CardFollowers';

function Followers({ userData, loading, paginate, perPage, totalpost, currentPage, setCurrentPage}) {
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentData = userData.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <CardFollowers currentData={currentData} loading={loading} />
      <Paginate paginate={paginate} perPage={perPage} totalpost={userData.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Followers;
