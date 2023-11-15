import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaWhatsapp, FaFacebook, FaTwitter, FaTwitch, FaYoutube } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarusel/BrandCarusel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {googleLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        }).catch(error => console.error(error))
    }

    return (
        <div>
           
                <ButtonGroup vertical>
                    <Button variant="outline-primary" className="mb-2" onClick={handleGoogleSignIn}><FaGoogle /> Google SignIn</Button>
                    <Button variant="outline-primary" className="mb-2"><FaGithub /> GitHub Login</Button>
                </ButtonGroup>

                <div>
                    <h3>Find us On</h3>
                    <ListGroup>
                        <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaYoutube /> YouTube</ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <BrandCarusel></BrandCarusel>
                </div>


            </div>
            );
};

            export default RightSideNav;