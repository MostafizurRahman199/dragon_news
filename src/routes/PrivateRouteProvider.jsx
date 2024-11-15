import React from 'react'
import { useFirebaseAuth } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouteProvider = ({children}) => {
  const {user} = useFirebaseAuth();

  if(!user){
    return <Navigate to="/auth/login" />
  }


  return children;
};

export default PrivateRouteProvider