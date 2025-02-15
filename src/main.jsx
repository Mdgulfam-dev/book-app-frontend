// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index.css'; // Ensure it's correctly imported
import { Provider } from 'react-redux'
import 'sweetalert2/src/sweetalert2.scss'



// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>,
)
