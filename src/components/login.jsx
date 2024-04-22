import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-start flex-col justify-center">
            <div className="p-5">
                Your mom logs in....
            </div>

            <div className="shadow-2xl">
                <GoogleLogin />
            </div>
        </div>
    )
}

export default Login
