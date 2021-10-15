import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Dinner = (props) => {
    const { name, price, picture } = props.item

    return (
        <div>
            <Col>
                <Card className='h-75 m-5'>
                    <Card.Img variant="top" className='mt-3 ms-5 ps-5 w-50 ' src={picture} />
                    <Card.Body>
                        <Card.Title className='text-warning fs-3'>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <h3>Price: ${price}</h3>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Dinner;