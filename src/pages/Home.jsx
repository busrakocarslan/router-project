import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchUser from '../components/SearchUser';
import Followers from '../components/Followers';
import Paginate from '../components/Paginate';
import CardFollowers from '../components/CardFollowers';


function Home() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10); // Sayfada toplam kaç kişi tutulacak state
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await axios(
          `https://api.github.com/users/anthonyharold67/followers?per_page=${perPage}&page=${currentPage}`
        );
        setUserData(res.data);
        setLoading(false);
      } catch (error) {
        console.log("hata", error);
        setLoading(false);
      }
    };

    getUsers();
  }, [currentPage, perPage]);

  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentData = userData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterUsers = userData.filter((user) =>
    user.login.toLowerCase().includes(searchUser.toLowerCase())
  );

  const handleSearch = (e) => {
    setUserData(e.target.value)
    filterUsers();
  };

  return (
    <div>
      <SearchUser setUserData={setUserData} userData={userData} searchUser={searchUser} setSearchUser={setSearchUser} handleSearch={handleSearch} />
      <Followers userData={userData} loading={loading} PerPage={perPage} totalpost={userData.length} paginate={paginate}/>
        
     
      
      
    </div>
  );
}

export default Home;
