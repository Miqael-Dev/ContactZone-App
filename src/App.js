import About from "./Components/About";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    element: <Header/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
