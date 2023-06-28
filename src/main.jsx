import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import Contect from './Components/Pages/Contact/Contect.jsx';
import AboutMe from './Components/Pages/About/AboutMe.jsx';
import Work from './Components/Pages/Work/Work.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'work',
        element: <Work />
      },
      {
        path:'contact',
        element: <Contect />
      },
      {
        path:'aboutme',
        element: <AboutMe />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
