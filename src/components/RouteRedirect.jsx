import { useEffect, useState } from 'react';
import { Navigate, useSearchParams, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { LoginPage } from '../pages';
import { Overlay } from './material';
import { useSignOut } from '../hooks/authHooks';

function RouteRedirect() {
  const { user, status, refreshSession } = useAuth(); // Usa Firebase para obtener el estado de usuario y sesión
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const session = searchParams.get('session'); // `session` para identificar el tipo de acción (p.ej., 'logout')
  const [isProcessing, setIsProcessing] = useState(false);
  const [unauthorizedHandled, setUnauthorizedHandled] = useState(false);
  const { signOut, signOutStatus } = useSignOut();

  useEffect(() => {
    const handleUnauthorizedAccess = () => {
      if (session === 'unauthorized_access' && !unauthorizedHandled) {
        setUnauthorizedHandled(true);
      }
    };

    const handleLogout = async () => {
      if (session === 'logout') {
        setIsProcessing(true);
        try {
          await signOut(); // Llamada para cerrar sesión en Firebase
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        }
        setIsProcessing(false);
        navigate('/', { replace: true });
      }
    };

    handleUnauthorizedAccess();
    handleLogout();
  }, [session, signOut, navigate, unauthorizedHandled]);

  useEffect(() => {
    // Redirige al usuario si ya está autenticado
    if (status === 'authenticated' && !isProcessing && session !== 'logout') {
      const userRole = user?.role; // Suponiendo que `user.role` contiene el rol del usuario desde Firebase
      const defaultRoute = `/${userRole || ''}`;
      return <Navigate to={defaultRoute} replace />;
    }
  }, [status, user, isProcessing, session]);

  // Verifica el estado de cierre de sesión y redirige a la página de inicio si es exitoso
  useEffect(() => {
    if (signOutStatus === 'success' || signOutStatus === 'error') {
      navigate('/', { replace: true });
    }
  }, [signOutStatus, navigate]);

  useEffect(() => {
    // Refresca la sesión cuando el estado está inactivo y no está en proceso
    if (status === 'idle' && !isProcessing && session !== 'unauthorized_access' && session !== 'logout') {
      refreshSession(); // Llama a la función para refrescar la sesión en Firebase
    }
  }, [status, refreshSession, isProcessing, session]);

  if (isProcessing || status === 'loading' || signOutStatus === 'sending') {
    return <Overlay />; // Muestra un overlay mientras se procesa el estado de la sesión
  }

  if (session === 'unauthorized_access' && unauthorizedHandled) {
    return <LoginPage errorMessage="Unauthorized access. Please log in." />;
  }

  return <LoginPage />;
}

export default RouteRedirect;
