// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// router Imports
import {createHashRouter, RouterProvider} from "react-router-dom"
import Home from "./routes/Home.jsx"
import About from './routes/About.jsx'
import Services from './routes/Services.jsx'
import Countact from './routes/Countact.jsx'
import Products from './routes/Products.jsx'
import Feature from './routes/Feature.jsx'
import ProductDeteil from './routes/ProductDeteil.jsx'

const route = createHashRouter([
  {
    path: "/*",
    element: <App/>,
    children: [
      {
      index: true,
      element: <Home />
      },
      {
      path: "about",
      element: <About />
      },
      {
      path: "services",
      element: <Services />
      },
      {
      path: "contact",
      element: <Countact />
      },
      {
        path: "product",
        element: <Products />        
      },
      {
        path: "feature",
        element: <Feature />
      },
      {
        path: "product/:id",
        element: <ProductDeteil />,
      }
  ]
}
],
{
baseName:"/react-route-app/"
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
