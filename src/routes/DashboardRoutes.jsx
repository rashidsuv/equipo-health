import Layout from "../components/Layout/Layout";
import Maintanance from "../pages/module/warnings/Maintanance";
import DashboardComponent from "../pages/module/dashboard/DashboardComponent";

const DashboardRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <DashboardComponent /> }],
    },
    {
      path: "*",
      element: <Maintanance />,
    },
  ],
};

export default DashboardRoutes;
