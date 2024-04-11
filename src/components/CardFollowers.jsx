// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import { useNavigate, useParams } from "react-router-dom";
// import Pagination from "react-bootstrap/Pagination";
// import { Link } from "react-router-dom";

// function CardFollowers() {
//   const { pageNumber } = useParams();
//   const [userData, setUserData] = useState([]);
//   const [loading,setLoading]=useState(false)
//   const [currentpage, setCurrentPage] = useState(1);
//   const pageKisi = 10;
//   const [perpages, setPerPages] = useState(10); // Toplam sayfa sayısını tutacak state
//   // const pages = Math.ceil(userData.length / pageKisi); //kaç sayfa olacağını dinamik olarak ayarlıyor.
//   useEffect(()=>{
//     const getUsers = async () => {
//       try {
//         setLoading(true)
//         const res = await axios(
//           "https://api.github.com/users/anthonyharold67/followers?per_page=${pageKisi}&page=${pageNumber}"//sayfa sayfa gelmesi için API in
//         );
//         console.log(res.data);
//         setUserData(res.data);
//         setLoading(false);
//         const totalFollowers = res.data.length;
//         const totalPage = Math.ceil(totalFollowers / pageKisi);
//         setPages(totalPage);
//       } catch (error) {
//         console.log("hata");
//       }
//       getUsers()
//     },[]);


  


















//   useEffect(() => {
//     const sonKisi = page * pageKisi;
//     const ilkKisi = sonKisi - pageKisi;
//     const showKisi = userData.slice(ilkKisi, sonKisi);
//     setUserData(showKisi);
//     console.log(setUserData);
//   }, [page,userData]);

//   console.log(pages);
//   const handleNumber = (number) => {
//     setPage(number);
//   };
//   // useEffect(() => {
//   //   const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
//   //   getUsers(currentPage);
//   // }, [pageNumber,page]);// ğage değiştiğinde useState tetiklensin diye page eklendi çünkü getUsers da page stati kullanılıyor.

//   const getUsers = async (pageNumber) => {
//     try {
//       const res = await axios(
//         "https://api.github.com/users/anthonyharold67/followers?per_page=${pageKisi}&page=${pageNumber}"//sayfa sayfa gelmesi için API in
//       );
//       console.log(res.data);
//       setUserData(res.data);
//       const totalFollowers = res.data.length;
//       const totalPage = Math.ceil(totalFollowers / pageKisi);
//       setPages(totalPage);
//     } catch (error) {
//       console.log("hata");
//     }
//   };
//   useEffect(() => {
//     getUsers(page);
//   }, []);

//   return (
//     <div>
//       <Container className="d-flex flex-wrap g-5 m-auto justify-content-between">
//         {userData.map(({ id, avatar_url, html_url, name, login }) => (
//           <Card key={id} style={{ width: "18rem", margin: "1rem 1rem" }}>
//             <Card.Img variant="top" src={avatar_url} />
//             <Card.Body>
//               <Card.Title>{login}</Card.Title>

//               <Button
//                 variant="warning"
//                 onClick={() => window.open(html_url, "_blank")}
//               >
//                 VİEW
//               </Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </Container>
//       <Container>
//         <Pagination>
//           {/*react bottsrap a ait bir özellik, sayfalama özelliği büyük verileri sayfalarak tutmamıza yarıyor. */}
//           {Array.from({ length: pages }, (_, i) => i + 1).map((number) => (
//             <Pagination.Item
//               key={number}
//               active={parseInt(pageNumber, 10) === number}
//             >
//               {" "}
//               <Link to={`/followers/page/${number}`}>{number}</Link>
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </Container>
//     </div>
//   );
// }

// export default CardFollowers;
import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';


function CardFollowers({ currentData, loading }) {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <Container className="d-flex flex-wrap g-5 m-auto justify-content-between">
      {currentData.map(({ id, avatar_url, html_url, login }) => (
        <Card key={id} style={{ width: '18rem', margin: '1rem 1rem' }}>
          <Card.Img variant="top" src={avatar_url} />
          <Card.Body>
            <Card.Title>{login}</Card.Title>
            <Button variant="warning" onClick={() => window.open(html_url, '_blank')}>
              VIEW
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default CardFollowers;
