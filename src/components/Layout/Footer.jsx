import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: "24px 16px 5px", mt: "auto" }}
    >
      <Typography variant="caption">
        {new Date().getFullYear()} &copy; Equipo | Build V
      </Typography>
    </Stack>
  );
}
