import { useState } from "react";
import NoteIcon from "@mui/icons-material/Note";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Card, Typography, IconButton, CardContent } from "@mui/material";

const contentItems = [
  "1 : Hart Failure Hypertension, Ischemic,Heart Disease",
  "2 : Remote Monitoring  Disease management program, CCM",
  "3 : High Acuity,Strghit medicare Ambultary Health Services",
];

const LatestNoteCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? contentItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === contentItems.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        height: 150,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#008ED4",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1.5,
          py: 0.8,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <NoteIcon fontSize="small" />
          <Typography variant="subtitle2">Latest Note</Typography>
        </Box>
        <IconButton size="small" sx={{ color: "#fff" }}>
          <AddCircleOutlineIcon fontSize="small" />
        </IconButton>
      </Box>

      <CardContent sx={{ py: 1.5 }}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton onClick={handlePrev} sx={{ mt: 2.5 }}>
            <ArrowBackIos fontSize="small" />
          </IconButton>

          <Box flex={1} textAlign="center" mt={3}>
            <Typography variant="caption">
              {contentItems[currentIndex]}
            </Typography>
          </Box>

          <IconButton onClick={handleNext} sx={{ mt: 2.5 }}>
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LatestNoteCard;
