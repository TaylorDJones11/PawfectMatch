import { Navigate } from 'react-router-dom';

function useAuth() {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if the token exists
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return children;
}

export default ProtectedRoute;
