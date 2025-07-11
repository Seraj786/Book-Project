import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./Components/Layout.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Secure from "./pages/Secure.jsx";
import Shipping from "./pages/Shipping.jsx";
import Return from "./pages/Return.jsx";
import Terms from "./pages/Terms.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopDetails from "./pages/ShopDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import SignIn from "./pages/SignIn.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/secure",
          element: <Secure />,
        },
        {
          path: "/shipping",
          element: <Shipping />,
        },
        {
          path: "/return",
          element: <Return />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/products/:Id",
          element: <ShopDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/thankyou",
          element: <Thankyou />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
