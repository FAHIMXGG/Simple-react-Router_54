import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/routes";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import ErrorPage from './error-page';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import First from './Components/First/First';
import Friends from './Components/Friends/Friends';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     //element: <Root />,
//     element: <App />,

//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   },
  
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
