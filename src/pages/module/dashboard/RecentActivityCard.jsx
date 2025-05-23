import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";

const RecentActivityCard = () => {
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
          <WorkOutlineIcon fontSize="small" />
          <Typography variant="subtitle2">Recent Activity</Typography>
        </Box>
        <IconButton size="small" sx={{ color: "#fff" }}>
          <AddCircleOutlineIcon fontSize="small" />
        </IconButton>
      </Box>

      <CardContent sx={{ py: 1.5 }}>
        <Typography variant="body2" color="text.secondary">
          Follow Up
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
