import React from 'react';
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom';

const ProfileToggle = (props) => {
    const { currentUser } = useAuth();



    return (
        <>
            <div className='text-center toggle-avatar p-4 third-bg rounded' >
                <h5 className='font-md font-bolt'>{currentUser.displayName}</h5>
                <h5 className='mt-2 font-sm text-truncate'>{currentUser.email}</h5>
                <div className='mt-4'>
                <Link to="/profile" className=' login-btn w-100'>
                    View Profile
                </Link>
                </div>
                
            </div>
        </>
    );
};

export default ProfileToggle;
