import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function SearchUser({ searchUser,setSearchUser, handleSearch }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={handleSearch}>
          Kullanıcı Ara
        </Button>
        <input
          type='search'
          name='search'
          id='search'
          autoFocus
          placeholder='kullanıcı ara'
          value={searchUser}
          onChange={handleSearch}
        />
      </InputGroup>
    </div>
  );
}

export default SearchUser;
