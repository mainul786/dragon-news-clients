import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURL = useRef(user.photoURL);

const handleSubmit = event =>{
    event.preventDefault()
    console.log(name);
    console.log(photoURL.current.value);
}

const handleChange = event =>{
    setName(event.target.value);
}

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control defaultValue={user.email} readOnly type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={user.displayName} type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control ref={photoURL} defaultValue={user.photoURL} type="text" placeholder="Enter photoURL" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Profile;