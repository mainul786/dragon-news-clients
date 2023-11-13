import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaWhatsapp, FaFacebook, FaTwitter, FaTwitch, FaYoutube } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarusel from '../BrandCarusel/BrandCarusel';

const RightSideNav = () => {
    return (
        <div>
           
                <ButtonGroup vertical>
                    <Button variant="outline-primary" className="mb-2"><FaGoogle /> Google SignIn</Button>
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