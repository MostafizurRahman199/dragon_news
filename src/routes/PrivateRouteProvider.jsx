import React from 'react'
import { useFirebaseAuth } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRouteProvider = ({children}) => {
  const {user, loading} = useFirebaseAuth();
  const location = useLocation();

  if(loading) {
    return <LoadingSpinner />;
  }

  if(!user){
    return <Navigate to="/auth/login" state={{ from: location }} />
  }

  return children;
};

export default PrivateRouteProvider