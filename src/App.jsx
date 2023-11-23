// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { RootLayer } from "./pages/RootLayer";
// import Nav from "./components/Nav";

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <RootLayer/>,
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
        path: "/contact",
        element: <Contact />,
      },
    ]
   }
  ]);
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <div>
    //           <h1>Dashboard page</h1>
    //         </div>
    //       }
    //     />
    //     <Route
    //       path="/pricing"
    //       element={
    //         <div>
    //           <h1>Pricing page</h1>
    //         </div>
    //       }
    //     />
    //   </Routes>
    // </Router>
  );
}

export default App;
