import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/NavLinks/Home';
import Login from './Components/NavLinks/Login';
import Register from './Components/NavLinks/Register';
import MyCart from './Components/NavLinks/MyCart';
import AddProduct from './Components/NavLinks/AddProduct';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './private/PrivateRoute';
import Apple from './Components/BrandLinks/Apple';
import Samsung from './Components/BrandLinks/Samsung';
import Sony from './Components/BrandLinks/Sony';
import Google from './Components/BrandLinks/Google';
import Intel from './Components/BrandLinks/Intel';
import Amd from './Components/BrandLinks/Amd';
import Details from './Components/BrandLinks/Crud/Details';
import UpdateProduct from './Components/BrandLinks/Crud/UpdateProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://nano-nest-server.vercel.app/carts')
        
      },
      {
        path: '/addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/apple',
        element: <Apple></Apple>,
        loader: () => fetch('https://nano-nest-server.vercel.app/products')
      },
      {
        path: '/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch('https://nano-nest-server.vercel.app/products')
      },
      {
        path: '/sony',
        element: <Sony></Sony>,
        loader: () => fetch('https://nano-nest-server.vercel.app/products')
      },
      {
        path: '/google',
        element: <Google></Google>,
        loader: () => fetch('https://nano-nest-server.vercel.app/products')
      },
      {
        path: '/intel',
        element: <Intel></Intel>,
        loader: () => fetch('https://nano-nest-server.vercel.app/products')
      },
      {
        path: '/amd',
        element: <Amd></Amd>,
        loader: () => fetch('https://nano-nest-server.vercel.app/products')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://nano-nest-server.vercel.app/products/${params.id}`)
      },
      {
        path:'/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://nano-nest-server.vercel.app/products/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
