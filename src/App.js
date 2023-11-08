import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactView from "./Components/ContactView";
import Edit from "./Components/Edit";
import AddNew from "./Components/AddNew";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    element: <Header/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        index:true,
        element: <AddNew/>
      },
      {
        path: ':userID',
        element: <ContactView/>,
      },
      {
        path: '/:userID/edit',
        element: <Edit/>
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
