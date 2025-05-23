import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function NewPatient() {
  const handleClick = () => {
    navigate("/registration");
  };
  const navigate = useNavigate();
  return (
    <Box>
      <FormControl sx={{ width: { xs: "100%", md: 120 } }}>
        <OutlinedInput
          placeholder="Patient"
          onClick={handleClick}
          readOnly
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.1 }}>
              <AddIcon sx={{ color: "white" }} />
            </InputAdornment>
          }
          sx={{
            background: "#008ED4",
            borderRadius: "22px",
            cursor: "pointer",
            color: "white",
            "& .MuiOutlinedInput-input": {
              p: 1,
              color: "white",
            },
            "& .MuiOutlinedInput-input::placeholder": {
              color: "white",
              opacity: 1,
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
