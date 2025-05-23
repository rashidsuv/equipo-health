import Box from "@mui/material/Box";
import { Setting2 } from "iconsax-react";
import { IconButton, Tooltip } from "@mui/material";

export default function Settings() {
  return (
    <Box sx={{ flexShrink: 0, ml: 0.5 }}>
      <Tooltip title="Settings">
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
          <Setting2 size="32" color="#5b6b79" variant="Bulk" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
