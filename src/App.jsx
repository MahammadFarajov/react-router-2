import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/home";
import Productspage from "./pages/products";
import SingleProduct from "./pages/single-product";
import AddProduct from "./pages/add-product";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/products", element: <Productspage /> },
        { path: "/products/:productId", element: <SingleProduct /> },
        { path: "/add-product", element: <AddProduct /> },
        { path: "/about", element: <Productspage /> },
        { path: "/contacts", element: <Productspage /> },
      ],
    },
  ]);
  return (
    <>
        <Toaster />
        <RouterProvider router={router} />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/" element={<Homepage />} />
    //       <Route path="/products" element={<Productspage />} />
    //       <Route path="/products/:productId" element={<SingleProduct />} />
    //       <Route path="/about" element={<Productspage />} />
    //       <Route path="/contacts" element={<Productspage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
