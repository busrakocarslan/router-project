import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchUser() {
  return (
    <div>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          SearchUser
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  )
}

export default SearchUser