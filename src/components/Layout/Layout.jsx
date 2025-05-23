import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <SideBar isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: {
            sm: `calc(100% - ${isCollapsed ? "60px" : "240px"})`,
          },
          ml: {
            sm: isCollapsed ? "70px" : "240px",
          },
          transition: "margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        }}
      >
        <Header isCollapsed={isCollapsed} />

        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Toolbar />
          <Outlet />
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
