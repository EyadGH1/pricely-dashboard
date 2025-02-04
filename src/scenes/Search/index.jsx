import { Box, Typography, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <Box m="20px">
      <Header title="Search" subtitle="Find the best  bulk prices for any product or service" />
      
      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for a product or service..."
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ backgroundColor: colors.primary[400], mb: 3 }}
      />
      
      {/* AI Recommendations */}
      <Box p={2} bgcolor={colors.blueAccent[700]} borderRadius={2} mb={3}>
        <Typography variant="h6" color={colors.grey[100]}>
          AI Recommendations
        </Typography>
        <Typography variant="body1" color={colors.grey[300]}>
          Our AI will suggest the best bulk purchase deals based on your search.
        </Typography>
      </Box>
      
      {/* Providers List */}
      <Box>
        <Typography variant="h6" color={colors.grey[100]} mb={2}>
          All Providers
        </Typography>
        {/* List of providers (to be populated later) */}
        <Typography variant="body1" color={colors.grey[300]}>
          List of providers will be displayed here...
        </Typography>
      </Box>
    </Box>
  );
};

export default Team;
