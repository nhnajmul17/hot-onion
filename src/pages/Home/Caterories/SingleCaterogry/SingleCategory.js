import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleCategory = (props) => {
    const { name, price, picture } = props.item
    const history = useHistory();
    const handleSeeMore = () => {
        history.push('/menu')
    }
    return (

        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='p-4' src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>
                    <Button variant="primary" onClick={handleSeeMore} >See More</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default SingleCategory;