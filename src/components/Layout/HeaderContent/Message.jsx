import Box from "@mui/material/Box";
import { NotificationStatus } from "iconsax-react";
import { IconButton, Tooltip } from "@mui/material";

export default function Message() {
  return (
    <Box sx={{ flexShrink: 0, ml: 0.5 }}>
      <Tooltip title="Message">
        <IconButton
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
          <NotificationStatus size="32" color="#5b6b79" variant="Bulk" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
