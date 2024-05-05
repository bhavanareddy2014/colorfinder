import React, { useEffect, useState } from "react";
import colorsData from "./JSONData/Data";
import {
  TextField,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  AppBar,
  Toolbar,
} from "@mui/material";

function ColorFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchedColors, setMatchedColors] = useState([]);
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value.toLowerCase());
    const matchingColors = colorsData.words
      .filter((wordData) => wordData.word.toLowerCase() === value.toLowerCase())
      .flatMap((wordData) => wordData.colors);

    setMatchedColors(matchingColors.length > 0 ? matchingColors : []);
  };

  useEffect(() => {
    if (searchTerm.length < 0) {
      setMatchedColors([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <Grid
        p={2}
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid item xs={12}>
        <TextField
  label="Search Color"
  value={searchTerm}
  onChange={handleSearch}
  fullWidth
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFAEBC',
        backgroundColor:"transparent"
      },
      '&:hover fieldset': {
        borderColor: '#FFAEBC',
        backgroundColor:"transparent"
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFAEBC',
        backgroundColor:"transparent"
      },
    },
    '& .MuiInputLabel-root': {
      color: '#FFAEBC',
      backgroundColor:"transparent"
    },
  }}
/>

        </Grid>
        {matchedColors.length > 0 &&
          matchedColors.map((color, index) => (
            <Grid key={index} item xs={12} md={3}>
              <Card
                sx={{ minWidth: 300, minHeight: 300, background: color.hex , borderRadius:"20px",textAlign:"center"}}
              >
                <CardHeader title={color.name} />
                <CardContent>
                  <Typography textAlign="center">{color.hex}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {searchTerm.length > 0 && matchedColors.length <= 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "black",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            fontSize: "24px",
            fontWeight: 400,
            fontStyle:"italic"
          }}
        >
          No Colors Associated with the word Entered
        </Box>
      )}
    </div>
  );
}

export default ColorFinder;
