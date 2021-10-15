import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCategory from '../SingleCaterogry/SingleCategory';

const Category = () => {
    const [items, setItems] = useState([])
    const [disItems, setDisItems] = useState([])

    useEffect(() => {
        fetch('./food.json')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setDisItems(data)
            })
    }, [])

    const handleCategory = (categoryitem) => {
        const newItem = items.filter(item => item.category === categoryitem)
        setDisItems(newItem)
    }
    return (
        <div>

            <h2 className=' mt-3 text-danger'>Category</h2>
            <hr />

            <div className=' mt-5 d-flex justify-content-center'>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('breakfast')}>Breakfast</button>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('lunch')}>Lunch</button>
                <button className='btn btn-warning me-3' onClick={() => handleCategory('dinner')}>Dinner</button>
            </div>

            <div className='ms-5 mt-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        disItems.map(item => <SingleCategory
                            key={item._id}
                            item={item}
                        ></SingleCategory>)
                    }
                </Row>
            </div>


        </div>
    );
};

export default Category;