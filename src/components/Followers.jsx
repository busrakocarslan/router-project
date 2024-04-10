import React from 'react';
import Paginate from './Paginate';
import CardFollowers from './CardFollowers';

function Followers({ userData, loading,paginate,perPage,totalpost,currentData }) {
  return (
    <div>
      <Paginate paginate={paginate} perPage={perPage} totalpost={totalpost} />
      <CardFollowers userData={userData} loading={loading} currentData={currentData} />
    </div>
  );
}

export default Followers;
