import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactView from "./Components/ContactView";
import Edit from "./Components/Edit";
import AddNew from "./Components/AddNew";

const router = createBrowserRouter([
  {
    element: <Header/>,
    path : "/",
    children: [
      {
        path: 'add',
        element: <AddNew/>
      },
      {
        path: 'contact',
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
