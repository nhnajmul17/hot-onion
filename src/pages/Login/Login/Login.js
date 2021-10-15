import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { handleGoogle, error } = useAuth();

    return (
        <div>
            <h2>This is Login</h2>

            <button onClick={handleGoogle}>Google</button>
            <p>{error}</p>
        </div>
    );
};

export default Login;