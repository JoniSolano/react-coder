import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from './routes/root'
import ItemRoot from './routes/itemRoot';
import Cart from './routes/cart';
import CheckoutRoot from './routes/checkoutRoot';
import CustomProvider from "./Context";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from "@mui/material";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAGsHJQIOLZEkp8hg5CHJEVOp2tP1ECto",
  authDomain: "ecommerce-solano.firebaseapp.com",
  projectId: "ecommerce-solano",
  storageBucket: "ecommerce-solano.appspot.com",
  messagingSenderId: "306538939189",
  appId: "1:306538939189:web:e7827f58c8dbca43ae427c"
};

const app = initializeApp(firebaseConfig);




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckoutRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>,
)
