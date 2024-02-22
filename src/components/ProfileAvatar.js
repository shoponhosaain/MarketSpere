import React from 'react';
import img from "../assets/images/profile-avatar.png"

const ProfileAvatar = () => {
    return (
        <>
        <div className='avatar mx-auto rounded-pill' >
        <img className='w-100 rounded-pill'src={img} alt='avatar' />
        </div>
        </>
    );
};

export default ProfileAvatar;