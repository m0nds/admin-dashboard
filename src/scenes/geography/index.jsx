import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Geography Chart" />
      <Box m="0.5rem 0" height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
