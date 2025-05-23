import { useMemo } from "react";
import HeaderContent from "./HeaderContent";
import { AppBar, Toolbar } from "@mui/material";

export default function Header({ isCollapsed }) {
  const headerContent = useMemo(() => <HeaderContent />, []);
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: { sm: `calc(100% - ${isCollapsed ? "70px" : "240px"})` },
        ml: { sm: `${isCollapsed ? "70px" : "240px"}` },
        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        background: "white",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "58px !important",
          px: 2,
        }}
      >
        {headerContent}
      </Toolbar>
    </AppBar>
  );
}
