import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Protected = ({ Component }) => {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    useEffect(() => {
        // This should be your actual authentication check
        if (!currentUser) {
            navigate("/login");
        }
    }, []);

    return (
        
            <Component />
        
    );
};

export default Protected;
