import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Dinner = (props) => {
    const { name, price, picture } = props.item
    const history = useHistory()
    const handleOrderNow = () => {
        history.push('/details')
    }

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
                        <button className='btn btn-danger rounded-pill' onClick={handleOrderNow}> <FontAwesomeIcon icon={faShoppingCart} className='text-warning fs-4 me-2' /> Order Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Dinner;