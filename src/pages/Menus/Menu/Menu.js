import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Menu = () => {
    const [breakfasts, setBreakfasts] = useState([])
    const [lunches, setLunches] = useState([])
    const [dinners, setDinners] = useState([])

    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data.slice(0, 6)))
    }, [])
    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => setLunches(data.slice(6, 12)))
    }, [])
    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => setDinners(data.slice(12, 19)))
    }, [])

    return (
        <div>
            <div id='breakfast'>
                <h2 className='mb-3 mt-3 fs-1'> <span className='text-success'>Breakfast</span> <span className='text-warning'>Items</span></h2>
                <hr />


                <Row xs={1} md={2} className="g-4">
                    {
                        breakfasts.map(breakfast => <Breakfast
                            key={breakfast._id}
                            item={breakfast}
                        ></Breakfast>)
                    }
                </Row>
            </div>
            <div id='lunch'>
                <h2 className='mb-3 mt-3 fs-1'> <span className='text-danger'>Lunch</span> <span className='text-warning'>Items</span></h2>
                <hr />


                <Row xs={1} md={2} className="g-4">
                    {
                        lunches.map(lunch => <Lunch
                            key={lunch._id}
                            item={lunch}
                        ></Lunch>)
                    }
                </Row>
            </div>
            <div id='dinner'>
                <h2 className='mb-3 mt-3 fs-1'> <span className='text-info'>Dinner</span> <span className='text-warning'>Items</span></h2>
                <hr />


                <Row xs={1} md={2} className="g-4">
                    {
                        dinners.map(dinner => <Dinner
                            key={dinner._id}
                            item={dinner}
                        ></Dinner>)
                    }
                </Row>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Menu;