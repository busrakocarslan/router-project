import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

function CardFollowers() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const pageKisi = 10;
  const pages = Math.ceil(userData.length / pageKisi); //kaç sayfa olacağını dinamik olarak ayarlıyor.
  console.log(pages);
  const handleNumber=(number)=>{
    setPage(number)
  }
  useEffect(() => {
    const sonKisi = page * pageKisi;
    const ilkKisi = sonKisi - pageKisi;
    const showKisi = userData.slice(ilkKisi, sonKisi);
    getUsers(setPage);
   
  }, [page]);

  const getUsers = async () => {
    try {
      const res = await axios(
        "https://api.github.com/users/anthonyharold67/followers?per_page=100"
      );
      console.log(res.data);
      setUserData(res.data);
    } catch (error) {
      console.log("hata");
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Container className="d-flex flex-wrap g-5 m-auto">
        {userData.map(({ id, avatar_url, html_url, name, login }) => (
          <Card key={id} style={{ width: "18rem", margin: "1rem 1rem" }}>
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body>
              <Card.Title>{login}</Card.Title>

              <Button
                variant="warning"
                onClick={() => window.open(html_url, "_blank")}
              >
                VİEW
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Container>
        <Pagination>
          {/*react bottsrap a ait bir özellik, sayfalama özelliği büyük verileri sayfalarak tutmamıza yarıyor. */}
          {Array.from({ length: pages }, (_, i) => i + 1).map((number) => (
            <Pagination.Item key={number} onClick={()=>handleNumber(number)}>{number}</Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
}

export default CardFollowers;
