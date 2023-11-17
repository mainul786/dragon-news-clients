import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        setError('');
        userProfileUpdate(name, photoURL);
        toast.success('Please check your email for verifacation!');
        handleEmailVerification();
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  }

  const userProfileUpdate = (name, photoURL) =>{
    const profile =  {displayName: name, photoURL: photoURL}
    updateUserProfile(profile)
    .then(()=>{

    }).catch(error => console.error(error));
  }

  const handleTermsAndConditions = event =>{
      setAccepted(event.target.checked)
  }

  const handleEmailVerification = () =>{
    emailVerification()
    .then(()=>{})
    .catch(error=>console.error());
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name='photo' type="text" placeholder="Enter PhototURL" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        onClick={handleTermsAndConditions}
        label={<>Accept <Link to='/terms'>terms and conditon</Link></> } />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
       Register
      </Button>

      <Form.Text className="text-danger">
        {error}
      </Form.Text>
    </Form>
  );
};
export default Register;