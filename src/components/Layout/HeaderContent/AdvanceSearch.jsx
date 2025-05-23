import { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function AdvanceSearch() {
  const [value, setValue] = useState("");
  return (
    <Box sx={{ ml: { xs: 0, md: 1 } }}>
      <FormControl sx={{ width: { xs: "100%", md: 200 } }}>
        <OutlinedInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="header-search"
          placeholder="Advanced Search"
          aria-describedby="header-search-text"
          inputProps={{ "aria-label": "search" }}
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.1 }}>
              <SearchIcon sx={{ color: "white" }} />
            </InputAdornment>
          }
          sx={{
            background: "#008ED4",
            borderRadius: "22px",
            color: "white",
            "& .MuiOutlinedInput-input::placeholder": {
              color: "white",
              opacity: 1,
            },
            "& .MuiOutlinedInput-input": {
              p: 1,
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
