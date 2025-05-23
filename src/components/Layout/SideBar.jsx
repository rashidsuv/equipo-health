import {
  Box,
  List,
  styled,
  Drawer,
  Divider,
  ListItem,
  IconButton,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import {
  People as CustomersIcon,
  BarChart as ReportsIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  LocalHospital as Registration,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 70;

const menuItems = [
  { name: "Dashboard", url: "/", icon: <DashboardIcon /> },
  { name: "Registration", url: "/registration", icon: <Registration /> },
  { name: "Patients", url: "/patients", icon: <CustomersIcon /> },
  { name: "Reports", url: "/reports", icon: <ReportsIcon /> },
  { name: "Settings", url: "/settings", icon: <SettingsIcon /> },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: "#008ED4",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function SideBar({ isCollapsed, toggleCollapse }) {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  return (
    <>
      <Box sx={{ height: "100vh" }}>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: isCollapsed ? collapsedWidth : drawerWidth,
              overflowX: "hidden",
              transition: (theme) =>
                theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
              backgroundColor: "#008ED4",
              color: "white",
            },
          }}
          open
        >
          <DrawerHeader>
            <IconButton
              onClick={toggleCollapse}
              disableRipple
              disableFocusRipple
              sx={{
                border: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              {isCollapsed ? (
                <MenuIcon sx={{ mr: 0.5, color: "white" }} />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ mr: 10, color: "white" }}>
                    Equipo
                  </Typography>
                  <ChevronLeftIcon sx={{ color: "white" }} />
                </Box>
              )}
            </IconButton>
          </DrawerHeader>
          <DrawerContent
            menuItems={menuItems}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            showText={!isCollapsed}
          />
        </Drawer>
      </Box>
    </>
  );
}

function DrawerContent({ menuItems, selectedItem, setSelectedItem, showText }) {
  const navigate = useNavigate();
  return (
    <>
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              selected={selectedItem === item.name}
              onClick={() => {
                setSelectedItem(item.name);
                navigate(item.url);
              }}
              sx={{
                px: showText ? "24px" : 3,
                "&.Mui-selected": {
                  backgroundColor: "white",
                  "& .MuiListItemIcon-root, & .MuiTypography-root": {
                    color: "black",
                  },
                },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "46px", color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
