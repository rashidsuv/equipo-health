import { Box, Typography } from "@mui/material";

const InfoCard = ({ borderColor = "#1976d2", data = {} }) => {
  return (
    <Box
      sx={{
        border: `1px solid ${borderColor}`,
        borderRadius: 2,
        overflow: "hidden",
        width: 300,
        boxShadow: 2,
        bgcolor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          height: 8,
          bgcolor: borderColor,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />

      <Box sx={{ p: 2 }}>
        {Object.entries(data).map(([label, value], index) => (
          <Box key={index} mb={1}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InfoCard;
