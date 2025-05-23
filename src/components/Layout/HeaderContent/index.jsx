import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Search from "./Search";
import Message from "./Message";
import Settings from "./Settings";
import NewPatient from "./NewPatient";
import ProfilePage from "./ProfilePage";
import AdvanceSearch from "./AdvanceSearch";
import NotificationPage from "./NotificationPage";

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Box display="flex" alignItems="center" gap={2}>
        {!downLG && <Search />}
        {!downLG && <AdvanceSearch />}
        {!downLG && <NewPatient />}
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        {<NotificationPage />}
        {!downLG && <Settings />}
        {!downLG && <Message />}
        <ProfilePage />
      </Box>
    </Box>
  );
}
