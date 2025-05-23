import Layout from "../components/Layout/Layout";
import Maintanance from "../pages/module/warnings/Maintanance";
import DashboardComponent from "../pages/module/dashboard/DashboardComponent";
import PatientRegistration from "../pages/module/masters/PatientRegistration";

const DashboardRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <DashboardComponent /> },
        { path: "/registration", element: <PatientRegistration /> },
      ],
    },
    {
      path: "*",
      element: <Maintanance />,
    },
  ],
};

export default DashboardRoutes;
