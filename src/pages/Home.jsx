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
  const [perPage] = useState(10); // Sayfada toplam kaç kişi tutulacak state
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await axios(
          `https://api.github.com/users/anthonyharold67/followers?per_page=100`
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

  // const indexOfLastPost = currentPage * perPage;
  // const indexOfFirstPost = indexOfLastPost - perPage;
  // const currentData = userData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {// sayfa değiştiğinde yeni bilgilerin gelmesi için change page
    setCurrentPage(pageNumber);
  };

  

  const filterUsers = userData.filter((user) =>
    user.login.toLowerCase().includes(searchUser.toLowerCase())
  );

  // const handleSearch = (e) => {
  //   setUserData(e.target.value)
  //   filterUsers();
  // };

  return (
    <div>
      <SearchUser searchUser={searchUser} setSearchUser={setSearchUser} handleSearch={()=>{}} />
      <Followers userData={filterUsers} loading={loading} perPage={perPage} totalpost={userData.length} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      {/*userdata'yı filter usersa atadım ki diğer tarafta fitreleme işlemini yapması için.handleuser fonk da orada tanımlamak yerine callback olarak yazdım yoksa çalışmadı. */}
        
     
      
      
    </div>
  );
}

export default Home;
