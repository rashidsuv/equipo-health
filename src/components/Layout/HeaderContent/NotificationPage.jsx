import { useState } from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { Notification } from "iconsax-react";
import { IconButton, Tooltip } from "@mui/material";

export default function NotificationPage() {
  const [read] = useState(2);

  return (
    <Box sx={{ flexShrink: 0, ml: 0.5 }}>
      <Tooltip title="Notifications">
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
          <Badge
            badgeContent={read}
            color="success"
            sx={{ "& .MuiBadge-badge": { top: 2, right: 4 } }}
          >
            <Notification size="32" color="#5b6b79" variant="Bold" />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
