import React from 'react';
import UpperNav from '../components/UpperNav';
import ProfileInfo from './../components/ProfileInfo';
import YourProduct from '../components/YourProduct';
import YourOrder from './../components/yourOrder';

const ProfilePage = () => {
    return (
        <>
        <UpperNav/>
        <div className='container'>
            <div className='row'>
           
                <div className='col'>
                   
                    <ProfileInfo btnText="Upload Product"/>
                
                </div>

                <div className='col-9'>
                <YourOrder/>
               <YourProduct/>
           
                </div>


            </div>
        </div>
        </>
      
    );
};

export default ProfilePage;