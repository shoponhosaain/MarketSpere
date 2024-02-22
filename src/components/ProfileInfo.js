import React from 'react';
import { useAuth } from "../context/AuthContext";
import ProfileAvatar from './ProfileAvatar';
import { Link } from 'react-router-dom';
const ProfileInfo = (props) => {
    const { currentUser } = useAuth();
    return (
        <div className='p-5 third-bg text-center mb-3' >
            <div className=' text-center ms-5 ps-4'>
                <div className='my-3'>
                <ProfileAvatar/>
                </div>
            
            </div>
            <div className='content mx-auto'>
            <h5 className='font-md font-bolt'>{currentUser && currentUser.displayName}</h5>
                <h5 className='mt-2 font-sm text-truncate'>{currentUser && currentUser.email}</h5>
                <button className='mt-3 login-btn w-100'>
                    <Link to="/uploadProduct" className='text-decoration-none white'>
                    {props.btnText}
                    </Link>
                   
                </button>
            </div>
           
             
            </div>
    );
};

export default ProfileInfo;