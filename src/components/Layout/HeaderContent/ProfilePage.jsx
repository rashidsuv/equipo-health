import Box from "@mui/material/Box";
import { Avatar, Tooltip } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

import avatar1 from "../../../assets/images/avatar-1.png";

export default function ProfilePage() {
  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <Tooltip title="Profile">
        <ButtonBase
          sx={{
            p: 0.25,
            borderRadius: 1,
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          aria-label="open profile"
          aria-haspopup="true"
        >
          <Avatar alt="profile user" src={avatar1} />
        </ButtonBase>
      </Tooltip>
    </Box>
  );
}
