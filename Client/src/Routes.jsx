import Eventpage from "./Pages/Eventpage";
import Homepage from "./Pages/Homepage";
import App from "./App";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";
import Ticketspage from "./Pages/Ticketspage";

const PageRoutes = [
  {
    path: "/",
    element: <App />,
    errorElement: "Error page",
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { path: "/events", element: <Eventpage /> },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/register",
        element: <Registerpage />,
      },
      {
        path: "/ticket",
        element: <Ticketspage />,
      },
    ],
  },
];

export default PageRoutes;
