import { Link, Navigate, Outlet } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useEffect, useState } from 'react';

const AuthMiddleware = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      const secretKey = new TextEncoder().encode('minhaChaveSecreta');
      const isAuthenticated = await jwtVerify(token, secretKey);
      if (isAuthenticated) {
        setIsAuthenticated(true);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <Link to="/login">Você está sem acesso!</Link>;
  }
  return isAuthenticated == true ? <Outlet /> : <Navigate to="/login" />;
};
export default AuthMiddleware;