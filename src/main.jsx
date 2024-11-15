import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
