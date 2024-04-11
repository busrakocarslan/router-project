import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function SearchUser({ searchUser,setSearchUser, handleSearch }) {
  return (
    <div>
      <InputGroup>
        <Button variant="outline-secondary" id="button-addon1" onClick={handleSearch} className='text-warning me-1 rounded-1'>
          Kullanıcı Ara
        </Button>
        <input className='w-75 border-1 rounded-1'
          type='text'
          name='search'
          id='search'
          autoFocus
          value={searchUser}
          onChange={(e)=>setSearchUser(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}

export default SearchUser;
