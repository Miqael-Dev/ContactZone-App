import About from "./Components/About";
import Header, { loaderData } from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    element: <Header/>,
    loader: loaderData,
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
