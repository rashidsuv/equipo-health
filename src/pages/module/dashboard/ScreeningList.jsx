import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";

const ScreeningList = () => {
  const screeningList = [
    "DM",
    "BP",
    "Fall Risk",
    "Depression",
    "Colorectal",
    "Breast Cancer",
    "Tobacco",
  ];

  const [selectedChips, setSelectedChips] = useState([]);

  const handleToggleChip = (label) => {
    setSelectedChips((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <Typography variant="h6">Screenings</Typography>
      <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
        {screeningList.map((label, index) => (
          <Chip
            key={index}
            label={label}
            size="small"
            variant={selectedChips.includes(label) ? "filled" : "outlined"}
            color={selectedChips.includes(label) ? "primary" : "default"}
            onClick={() => handleToggleChip(label)}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>
    </>
  );
};

export default ScreeningList;
