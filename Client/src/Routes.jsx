import Eventpage from "./Pages/Eventpage";
import Homepage from "./Pages/Homepage";
import App from "./App";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";
import Ticketspage from "./Pages/Ticketspage";
import Buyingpage from "./Pages/Buyingpage";
import OrganizerPage from "./Pages/Organizerpage";
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
      { path: "/organizer",
        element: <OrganizerPage />

      },
      {
        path: "/buy",
        element: <Buyingpage />,
      },
    ],
  },
];

export default PageRoutes;
