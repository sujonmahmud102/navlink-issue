import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FaEye, FaRegBookmark, FaShareAlt, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';


const NewsCard = ({ news }) => {
    const { title, _id, details, image_url, author, total_view, rating } = news;
    return (
        <div>
            <Card className=" mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ps-2 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('yyyy-mm-d')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />

                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} ... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex align-items-center">
                    <div className='flex-grow-1'>
                        <Rating placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            readonly
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}>
                        </Rating> {rating?.number}
                    </div>
                    <div>
                        <FaEye></FaEye>  <span className='ps-2'>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsCard;