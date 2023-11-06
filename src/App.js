import Header, { Con } from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactView from "./Components/ContactView";
import Edit from "./Components/Edit";
import AddNew from "./Components/AddNew";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    element: <Header/>,
    path : "/",
    errorElement: <Error/>,
    children: [
      {
        path: 'add',
        element: <AddNew/>
      },
      {
        path: ':userID',
        element: <ContactView/>
      },
      {
        path: 'edit',
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
