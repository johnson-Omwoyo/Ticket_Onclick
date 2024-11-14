import Homepage from "./Pages/Homepage";
import App from "./App";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";

import UserProfilePage from "./Pages/Userpage";
import EventsPage from "./Pages/EventsPage";
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
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/register",
        element: <Registerpage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      { path: "/organizer",
        element: <OrganizerPage />

      },
      {
        path: "/profile",
        element: <UserProfilePage />,
      },
      {
        path: "/buying",
        element: <Buyingpage />,
      },
    ],
  },
];

export default PageRoutes;
