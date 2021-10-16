import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {
    const { handleGoogle, error, handleGithub, handleSingIn, handleEmail, handlePassword } = useAuth();

    return (
        <div>
            <div style={{ height: '100vh' }}>
                <h2>Please Login</h2>
                <form action="">
                    <label htmlFor="">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="" id="" /><br />
                    <label htmlFor="">Password</label><br />
                    <input onBlur={handlePassword} type="password" name="" id="" /><br /><br />
                    <input onClick={handleSingIn} type="submit" value="Login" />

                </form>
                <br /><br />
                <p>   New to this Website? <Link to='/signup'>Register Now </Link></p>
                <p>Or SignIn with</p>
                <FontAwesomeIcon onClick={handleGoogle} cursor='' icon={faGoogle} className='text-danger pe-auto fs-4 me-3' />
                <FontAwesomeIcon onClick={handleGoogle} cursor='' icon={faFacebook} className='text-primary pe-auto fs-4 me-3' />
                <FontAwesomeIcon onClick={handleGithub} cursor='' icon={faGithub} className='text-secondary pe-auto fs-4 me-3' />

                {/* <button onClick={handleGoogle}>Google</button> */}
                <p className='text-danger'>{error}</p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;