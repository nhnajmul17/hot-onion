import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { handleGoogle, error, handleGithub, handleSignUp, handleEmail, handlePassword } = useAuth();

    return (
        <div>
            <div style={{ height: '100vh' }}>
                <h2>Create a new Account</h2>
                <form action="">
                    <label htmlFor="">Email</label><br />
                    <input onBlur={handleEmail} type="email" name="" id="" /><br />
                    <label htmlFor="">Password</label><br />
                    <input onBlur={handlePassword} type="password" name="" id="" /><br /><br />
                    <input onClick={handleSignUp} type="submit" value="Register" />

                </form>
                <br /><br />
                <p>   Already have an account? <Link to='/login'>Login Now </Link></p>
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

export default SignUp;