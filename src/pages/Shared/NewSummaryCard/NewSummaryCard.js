import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import { FaEye, FaRegBookmark, FaShare, FaStar } from "react-icons/fa6";

const NewSummaryCard = ({ news }) => {
  const { author, title, details, total_view, _id, image_url, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className='d-flex mr-3'>
          <Image src={author?.img} style={{ height: '60px', marginRight: '20px' }} roundedCircle />
          <div className=''>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-3" />
          <FaShare />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 200 ?
            <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
            :
            details
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <div >
            <FaStar className="me-2 text-warning" /> 
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className="me-2 "   />
            <span>{total_view}</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewSummaryCard;