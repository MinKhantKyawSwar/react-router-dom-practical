import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import {ProductDetailPage, ProductsPage, Home, Error, AboutPage} from "./pages"

const router = createBrowserRouter([
  {
    path: "",
    element : <Main />,
    errorElement :<Error/>,
    children : [
      {path : "/", element : <Home/>},
      {path : "/ProductsPage", element : <ProductsPage />},
      {path : "/ProductsPage/:title", element : <ProductDetailPage/>},
      {path : "/AboutPage", element : <AboutPage />},
    ]
    
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  );
}

export default App;
