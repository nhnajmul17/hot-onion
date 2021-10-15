import React from 'react';
import background from '../../../images/backgrnd.png'
import './Banner.css'
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            height: '350px',
        }}
        >
            <h2 className='pt-5'>Best <span className="text-warning">Food</span> waiting for your <span className='text-danger'>Tummy</span></h2>

            <div className='container'>
                <form className="col-md-6 m-auto py-5">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search your food here" />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-danger">Search</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Banner;