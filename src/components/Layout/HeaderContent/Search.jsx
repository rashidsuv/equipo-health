import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

export default function Search() {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue("");
  };

  return (
    <>
      <FormControl sx={{ width: { xs: "100%", md: 250 } }}>
        <OutlinedInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="header-search"
          placeholder="Last Name / First Name"
          aria-describedby="header-search-text"
          inputProps={{ "aria-label": "search" }}
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.1 }}>
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            value && (
              <InputAdornment position="end">
                <IconButton onClick={handleClear} edge="end" size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            )
          }
          sx={{
            borderRadius: "22px",
            "& .MuiOutlinedInput-input": {
              p: 1,
            },
          }}
        />
      </FormControl>
    </>
  );
}
